'use strict';

describe('Directive: griddy', function () {
  beforeEach(module('griddyApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<griddy></griddy>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the griddy directive');
  }));
});
