(function (TestCase) {
    "use strict";

    var FactorialTestCase = TestCase("Factorial Testcase");

    FactorialTestCase.prototype.setUp = function() {
        this.simpleMath = new SimpleMath();
    };

    FactorialTestCase.prototype.tearDown = function() {
        delete this.simpleMath;
    };

    FactorialTestCase.prototype.testPositiveNumber = function() {
        assertEquals("Factorial(3)", 6, this.simpleMath.getFactorial(3));
    };

    FactorialTestCase.prototype.testZero = function() {
        assertEquals("Factorial(0)", 1, this.simpleMath.getFactorial(0));
    };

    FactorialTestCase.prototype.testNegativeNumber = function() {
        var localThis = this;
        assertException("Factorial(-10)", function() {
            localThis.simpleMath.getFactorial(-10);
        }, "Error");
    };

}(TestCase));