(function (QUnit, SimpleMath) {
    "use strict";

    var sum,
        isPrimeNumber;

    module("Factorial", {
        setup: function () {
            this.simpleMath = new SimpleMath();
        },
        teardown: function () {
            delete this.simpleMath;
        }
    });

    test("calculating factorial for a positive number", function () {
        equal(this.simpleMath.getFactorial(3), 6, "Factorial of three is six");
    });

    test("calculating factorial for zero", function() {
        equal(this.simpleMath.getFactorial(0), 1, "Factorial of zero must equal one");
    });

    test("throwing an error when calculating the factorial for a negative number", function() {
        raises(function() {
            this.simpleMath.getFactorial(-10);
        }, "There is no factorial for negative numbers");
    });

    module("Signum", {
        setup: function () {
            this.simpleMath = new SimpleMath();
        },
        teardown: function () {
            delete this.simpleMath;
        }
    });

    test("calculating signum for a positive number", function() {
        equal(this.simpleMath.signum(3), 1, "Signum of three must equal one");
    });

    test("calculating signum for zero", function() {
        equal(this.simpleMath.signum(0), 0, "Signum of zero must equal zero");
    });

    test("calculating signum for a negative number", function() {
        equal(this.simpleMath.signum(-1000), -1, "Signum of -1000 must equal -1");
    });

    module("Average", {
        setup: function() {
            this.simpleMath = new SimpleMath();
        },
        teardown: function() {
            delete this.simpleMath;
        }
    });

    test("calculating the average of two numbers", function() {
        equal(this.simpleMath.average(3, 6), 4.5, "Average of 3 and 6 must equal 4.5");
    });

    test("test function1", function() {
        expect(3);
        ok(true);
        equal(1, 1);
        deepEqual("1", "1");
    });


    module("custom asserts module", {
        setup: function () {
            this.simpleMath = new SimpleMath();
        },
        teardown: function () {
            delete this.simpleMath;
        }
    });


    sum = function (number1, number2, result, message) {
        var expected    = number1 + " + " + number2 + " = " + result,
            actual      = expected;

        if ((number1 + number2) !== result) {
            actual = number1 + " + " + number2 + " !== " + result;
        }
        QUnit.push((number1 + number2) === result, actual, expected, message);
    };

    isPrimeNumber = function (number, message) {
        var i,
            n = Math.sqrt(number);

        if (number < 2) {
            QUnit.push(false, false, true, message);
            return;
        }

        for (i = 2; i <= n; i += 1) {
            if (number % i === 0) {
                QUnit.push(false, false, true, message);
                return;
            }
        }

        QUnit.push(true, true, true, message);
        return;
    };

    test("custome tests", function() {
        sum(1, 2, 3, "1 + 2 === 3");
        isPrimeNumber(23, "23 is prime");
    });

    module("Ajax", {
        setup: function () {
            this.simpleMath = new SimpleMath();
        },
        teardown: function () {
            delete this.simpleMath;
        }
    });

    QUnit.config.testTimeout = 10000;
    test("test function1", function () {
        stop();

        window.setTimeout(function () {
            ok(true);
            start();
        }, 3000);
    });

    asyncTest("test function1", function () {
        window.setTimeout(function () {
            ok(true);
            start();
        }, 3000);
    });

    // QUnit.config.testTimeout = 10000;
    // asyncTest("Making a REAL Ajax testing", function() {
    //     var successCallback = function(response) {
    //             var resultMessage = response.xmlhttp.responseText;
    //             start();
    //         },
    //         failureCallback = function() {
    //             ok(false, "MUST fail");
    //             start();
    //         };

    //     asyncSystem.doAjaxOperation(inputData, successCallback, failureCallback);
    // });

}(QUnit, SimpleMath));