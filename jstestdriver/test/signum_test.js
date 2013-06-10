(function (TestCase) {
    "use strict";

    var SignumTestCase = TestCase("Signum Testcase");

    SignumTestCase.prototype.setUp = function() {
        this.simpleMath = new SimpleMath();
    };

    SignumTestCase.prototype.tearDown = function() {
        delete this.simpleMath;
    };

    SignumTestCase.prototype.testPositiveNumber = function() {
        assertEquals("Signum(3)", 1, this.simpleMath.signum(3));
    };

    SignumTestCase.prototype.testZero = function() {
        assertEquals("Signum(0)", 0, this.simpleMath.signum(0));
    };

    SignumTestCase.prototype.testNegativeNumber = function() {
        assertEquals("Signum(-1000)", -1, this.simpleMath.signum(-1000));
    };
}(TestCase));