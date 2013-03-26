'use strict';

angular.module('griddyApp')
    .directive('griddy', function () {
    return {
        template: [
            '<div class="container" >',
            '   <div class="row griddyrow" ng-repeat="row in rows">',
            '       <div ng-click="select(gritem)" class="gritem square{{spanSize}} span{{spanSize}}" ng-repeat="gritem in row">{{gritem.title}}</div>',
            '       <div  class="span12 rowcontent" ng-show="gritem.selected" ng-repeat="gritem in row" bind-dom="gritem.content"></div>',
            '   </div>',
            '<div class="trans" ng-transclude></div>',
            '</div>'
        ].join('\n'),
        restrict: 'E',
        transclude: 'element',
        scope: {},

        controller: function ($scope, $attrs) {
            var ncols = parseInt($attrs.ncols, 10) || 4;
            var rows = [];
            $scope.spanSize = Math.floor(12 / ncols);
            $scope.rows = rows;

            this.addBlock = function (gritem) {
                var newIndex = 1;

                if (rows.length > 0) {
                    if (rows[rows.length - 1].length >= ncols) {
                        rows.push([gritem]);
                    } else {
                        newIndex = rows[rows.length - 1].push(gritem);
                    }
                } else {
                    newIndex = rows.push([gritem]);
                }
                // $scope.$apply();
            };

            $scope.select = function (gritem) {
                var status = gritem.selected;
                rows.forEach(function (row) {
                    row.forEach(function (item) {
                        item.selected = null;
                    });
                });
                gritem.selected = !status;
            };


        },
        replace: true,
    };
}).directive('gritem', function () {
    return {
        require: '^griddy',
        restrict: 'E',
        // terminal: true,
        transclude: true,
        scope: {
            title: '=',
            target: '='
        },
        compile: function (element, attrs, transclude) {
            // transclude;

            return function link(scope, element, attrs, griddyCtrl) {
                // console.log(scope);
                transclude(scope.$parent.$new(), function (clone) {
                    element.append(clone);
                    console.log(clone);
                    // debugger;
                    scope.content = clone;
                });


                // console.log(content[1]);
                scope.target = scope.target || scope.content;
                // console.log(scope);
                scope.getContent = function () {
                    return griddyCtrl.getHandler()(scope.target);
                };
                // debugger;
                griddyCtrl.addBlock(scope);

            };
        },

    };
}).directive('bindDom', function () {
    return function (scope, element, attr) {
        element.addClass('ng-binding').data('$binding', attr.bindDom);
        scope.$watch(attr.bindDom, function ngBindHtmlWatchAction(value) {
            element.append(value);
        });
    };
});
