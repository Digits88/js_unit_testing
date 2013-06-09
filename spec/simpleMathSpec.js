describe("SimpleMath", function () {
    var simpleMath;

    beforeEach(function () {
        simpleMath = new SimpleMath();
    });

    beforeEach(function () {
        this.addMatchers({
            toBeSumOf: function (firstNumber, secondNumber) {
                return this.actual == firstNumber + secondNumber;
            },
            toBePrimeNumber: function () {
                var n,
                    i;
                
                if (this.actual < 2) {
                    return false;
                }

                n = Math.sqrt(this.actual);
                for (i = 2; i <= n; i += 1) {
                    if (this.actual % i === 0) {
                        return false;
                    }
                }

                return true;
            }
        });
    });

    describe("when is used to find factorial", function () {
        it("should be able to find factorial for positive number", function() {
            expect(simpleMath.getFactorial(3)).toEqual(6);
        });

        it("should be able to find factorial for zero", function() {
            expect(simpleMath.getFactorial(0)).toEqual(1);
        });

        it("should be able to throw an exception when the number is negative", function() {
            expect(function() { 
                simpleMath.getFactorial(-10)
            }).toThrow("There is no factorial for negative numbers");
        });
    });

    describe("when SimpleMath is used to find signum", function() {
        it("should be able to find the signum for a positive number", function() {
            expect(simpleMath.signum(3)).toEqual(1);
        }); 

        it("should be able to find the signum for zero", function() {
            expect(simpleMath.signum(0)).toEqual(0);
        }); 

        it("should be able to find the signum for a negative number", function() {
            expect(simpleMath.signum(-1000)).toEqual(-1);
        });
    });

    describe("when SimpleMath is used to find the average of two values", function() {
        it("should be able to find the average of two values", function() {
            expect(simpleMath.average(3, 6)).toEqual(4.5);
        });
    });

    describe("Testing toBeSumOf custom matcher", function() {
        it("should be able to calculate the sum of two numbers", function() {
            expect(10).toBeSumOf(7, 3);
        }); 
    });

    describe("Testing toBePrimeNumber custom matcher", function () {
        it("should be able to know prime number", function () {
            expect(13).toBePrimeNumber();
        });
    });

    describe("Testing runs blocks", function() {
        it("should work correctly", function() {
            runs(function() {
                this.x = 1;
                expect(this.x).toEqual(1);
            });

            runs(function() {
                this.x += 1;
                expect(this.x).toEqual(2);
            });

            runs(function() {
                this.x = this.x * 4;
                expect(this.x).toEqual(8);
            }); 
        });
    });

    describe("Testing waits with runs blocks", function() {
        it("should work correctly", function() {
            runs(function() {
                this.x = 1;
                var localThis = this;
                
                window.setTimeout(function() {
                    localThis.x += 99;
                }, 500);
            });

            runs(function() {
                expect(this.x).toEqual(1);
            });

            waits(1000);
            
            runs(function() {
                expect(this.x).toEqual(100);
            });

        });
    }); 


    describe("Testing waitsFor with runs blocks", function() {
        it("should work correctly", function() {

            runs(function() {
                
                this.x = 1;
                var localThis = this;
                
                var intervalID = window.setInterval(function() {
                    localThis.x += 1;
                    
                    if (localThis.x == 100) {
                        window.clearInterval(intervalID);
                    }
                }, 20);
            });

            waitsFor(function() {
                return this.x == 100;
            },
            "Something wrong happens, it should not wait all of this time", 5000);
            
            runs(function() {
                expect(this.x).toEqual(100);
            }); 
        });
    });

    describe("when waitsFor is used for testing real Ajax requests", function() {
        it("should do this very well with the Jasmine Spy", function() {
            
            var successCallBack = jasmine.createSpy();
            var failureCallBack = jasmine.createSpy(); 
            var inputData       = {};

            asyncSystem.doAjaxOperation(inputData, successCallBack, failureCallBack); 
            
            waitsFor(function() {
                return successCallBack.callCount > 0;
            }, "operation never completed", 10000);
            
            runs(function() {
                expect(successCallBack).toHaveBeenCalled();
                expect(failureCallBack).not.toHaveBeenCalled(); 
            });
        });
    });

    describe("Testing spyOn", function () {
        it("should spy on instance methods", function () {
            var simpleMath = new SimpleMath();

            spyOn(simpleMath, 'getFactorial');
            simpleMath.getFactorial(3);

            expect(simpleMath.getFactorial).toHaveBeenCalledWith(3);
        });
    });

    describe("when making a fake Ajax testing", function () {
        it("should be done the Jamsine Spy and the andCallFake function", function () {
            var successCallBack = jasmine.createSpy();
            var failureCallBack = jasmine.createSpy();
            var successFakeData = "Success Fake Data ...";

            spyOn(asyncSystem, 'doAjaxOperation').andCallFake(function (inputData, successCallBack, failureCallBack) {
                successCallBack(successFakeData);
            });
            asyncSystem.doAjaxOperation(inputData, successCallBack, failureCallBack);

            expect(successCallBack).toHaveBeenCalled();
            expect(failureCallBack).not.toHaveBeenCalled();
        });
    });

});