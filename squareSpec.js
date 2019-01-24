describe('Square class', function(){
  summary('It has dimension', function(){
    it('has a length', function(){
      s = new Square(10);
      expectEquality(s.size, 10);
    });
    it('has an area', function(){
      s = new Square(10);
      expectEquality(s.area(), 1000);
      // this test is deliberately built with a wrong expectation, for the user to see the test failing.
    });
  });

  summary('It can throws errors', function(){
    it('Only works for numbers being input', function(){
      var s = function(){
        new Square('Cheese')
      }
      expectError(s,'argument is not a number');
    });
    it('Only works with positive number', function(){
      var s = function(){
        new Square(-3)
      }
      expectError(s, 'size should be a positive number');
    });
  });
});
