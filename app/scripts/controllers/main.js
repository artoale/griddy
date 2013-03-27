'use strict';

angular.module('griddyApp')
    .controller('MainCtrl', function ($scope) {
    $scope.pippo = 'TEST PARENT SCOPE';
    var items = [{
        content: 'Eurecom',
        target: 'ABCMNOPQRSTUVWXYZ'
    },
    {
        content: 'Aliquam error culpa .',
        target: 'ABCDEFGHILMNYZ'
    },
    {
        content: 'Nemo nostrum usamus odio.',
        target: 'ABCDEFGHILMNOYZ'
    },
    {
        content: 'Iure dignissimos s fuga!',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Laborum omntione.',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Labore sit .',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Nesciunt d quasi.',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Exercitadi nemo.',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Cupiditate quisquam ipsam natus nostrum atque.',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Suscipit c fugit.',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Nobis .',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Iste noempore enim veritatis?, target: ',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Iste noempore enim veritatis?, target: ',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Iste noempore enim veritatis?, target: ',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Iste noempore enim veritatis?, target: ',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    },
    {
        content: 'Iste noempore enim veritatis?, target: ',
        target: 'ABCDEFGHILMNOPQRSTUVWXYZ'
    }];
    $scope.items = items;
    $scope.getContent = function (target) {

        return target;
    };
});
