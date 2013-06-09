YUI().use('test', 'console', function (Y) {
    var factorialTestcase = new Y.Test.Case({
        name: "Factorial Testcase",

        _should: {
            error: {
                testNegativeNumber: true
            }
        },

        setUp: function () {
            this.simpleMath = new SimpleMath();
        },

        tearDown: function () {
            delete this.simpleMath;
        },

        testPositiveNumber: function () {
            Y.Assert.areEqual(6, this.simpleMath.getFactorial(3), "gaz van babam ... :D :D");
        },
        testZero: function () {
            Y.Assert.areEqual(1, this.simpleMath.getFactorial(0));
        },
        testNegativeNumber: function() {
            this.simpleMath.getFactorial(-10);
        }
    });

    var signumTestcase = new Y.Test.Case({
        name: "Signum Testcase",

        setUp: function() {
            this.simpleMath = new SimpleMath();
        },
        
        tearDown: function() {
            delete this.simpleMath;
        },
        
        testPositiveNumber: function() {
            Y.Assert.areEqual(1, this.simpleMath.signum(3));
        },

        testZero: function() { 
            Y.Assert.areEqual(0, this.simpleMath.signum(0)); 
        },

        testNegativeNumber: function() { 
            Y.Assert.areEqual(-1, this.simpleMath.signum(-1000)); 
        } 
    });


    Y.Assert.isAverage = function (number1, number2, expected, failureMessage) {
        var actual = (number1 + number2) / 2;
        if (actual !== expected) {
            Y.Assert.fail(failureMessage);
        }
    };

    var averageTestcase = new Y.Test.Case({
        name: "Average Testcase", 
        
        setUp: function() {
            this.simpleMath = new SimpleMath();
        },
    
        tearDown: function() {
            delete this.simpleMath;
        },

        testAverage: function() { 
            //Y.Assert.areEqual(4.5, this.simpleMath.average(3, 6)); 
            Y.Assert.isAverage(3, 4, 3.5, "Average: baj van!!!");
        } 
    });


    var ajaxTesting = new Y.Test.Case({
        name: "Test of Ajax",

        setUp: function () {
            this.data = {name:"jancsi", age: 29};
        },

        tearDown: function () {
            delete this.data;
        },

        testThis: function () {
            Y.Assert.areSame("jancsi", this.data.name, "Name should be 'jancsi'");

            this.wait(function () {
                Y.Assert.areEqual(29, this.data.age, "Age should be 29");
            }, 1000);
        }
    });

    var anotherAjaxTesting = new Y.Test.Case({
        name: "Test of Ajax as well",

        testAnimation: function () {
            var test = this;

            test.resume(function () {
                Y.Assert.areEqual(400, 400, "Width should be 400");
            })

            this.wait(3100);
        }
    });

    var suite = new Y.Test.Suite("SimpleMath Test Suite");

    suite.add(factorialTestcase);
    suite.add(signumTestcase);
    suite.add(averageTestcase);
    suite.add(ajaxTesting);
    suite.add(anotherAjaxTesting);

    var console = new Y.Console({
        style: 'block',
        newestOnTop: false
    });
    console.render('#log');

    Y.Test.Runner.add(suite);
    Y.Test.Runner.run();

});