describe('Testing a converter', function() {
  var testValues;

  beforeEach(module('myApp'));
  beforeEach(inject(function(ConvertValues){
    testValues = ConvertValues;
  }));
  
  it('Should return correct converted number', inject(function(ConvertFactory) {
    expect(ConvertFactory.romanNumeralConverter(1)).toEqual('I');
    expect(ConvertFactory.romanNumeralConverter(5)).toEqual('V');
    expect(ConvertFactory.romanNumeralConverter(10)).toEqual('X');
    expect(ConvertFactory.romanNumeralConverter(20)).toEqual('XX');
    expect(ConvertFactory.romanNumeralConverter(3999)).toEqual('MMMCMXCIX');
  }));

  it('Should check if number is in borders', inject(function(ConvertFactory) {
    expect(ConvertFactory.checkBorders(1)).toEqual(true);
    expect(ConvertFactory.checkBorders(3999)).toEqual(true);
    expect(ConvertFactory.checkBorders(4000)).toEqual(false);
  }));
});