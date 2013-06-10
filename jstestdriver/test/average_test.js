(function (TestCase) {
    "use strict";

    var AverageTestCase = TestCase("Average Testcase");

    AverageTestCase.prototype.setUp = function() {
        this.simpleMath = new SimpleMath();
    };

    AverageTestCase.prototype.tearDown = function() {
        delete this.simpleMath;
    };

    AverageTestCase.prototype.testAverage = function() {
        assertEquals("Average(3, 6)", 4.5, this.simpleMath.average(3, 6));
    };
}(TestCase));