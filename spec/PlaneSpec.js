'use strict';

describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new plane();
    airport = jasmine.createSpyObj('airport',['clearforLanding']);
  });

  it('can land at an airport', function(){
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

});