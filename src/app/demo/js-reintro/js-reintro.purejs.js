  export function introFunction() {
      console.log('add() = ', add());
      console.log('add(2, 3) = ', add(2, 3));
      console.log('add(2, 3, 4) = ', add(2, 3, 4));
      console.log('addArgs() = ', addArgs());
      console.log('addArgs(2, 3) = ', addArgs(2, 3));
      console.log('addArgs(2, 3, 4) = ', addArgs(2, 3, 4));
  }

  function add(x, y) {
      const total = x + y;
      return total;
  }

  function addArgs() {
      var sum = 0;
      for (let i = 0, j = arguments.length; i < j; i++) {
          sum += arguments[i];
      }
      return sum;
  }

  export function recursiveFactorial(target) {
      console.log('Call factorial function with: ', target);
      if (target <= 1) {
          return 1;
      }
      return target * recursiveFactorial(target - 1);
  }

  export function makePerson(first, last) {
      return {
          first: first,
          last: last,
          fullName: function() {
              return this.first + ' ' + this.last;
          },
          fullNameReverse: function() {
              return this.last + ' ' + this.first;
          }
      };
  }

  function Person(first, last) {
      this.first = first;
      this.last = last;
  }
  Person.prototype.fullName = function() {
      return this.first + ' ' + this.last;
  }

  export function testPrototype() {
      var p2 = new Person('Koch', 'S.');
      console.log('p2.fullName() = ', p2.fullName());
      Person.prototype.firstNameCaps = function firstNameCaps() {
          return this.first.toUpperCase();
      }
      console.log(' p2.firstNameCaps() = ', p2.firstNameCaps());

      var fullName = p2.fullName;
      console.log('Full name = ', fullName());
  }

  export function makeAdder(a) {
      return function(b) {
          return a + b;
      };
  }