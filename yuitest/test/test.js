YUI().use('test', 'console', function (Y) {

	var testcase1 = new Y.Test.Case({
		name: "testcase1",

		testFunction1: function () {
			// ...
		},
		testFunction2: function () {

		}
	});

	var testcase2 = new Y.Test.Case({
		name: "testcase2",

		testAnotherFunction: function () {
			//...
		}
	});

	var testCase = new Y.Test.Case({
		name: "some Testcase",

		"The test should do X": function () {
			//...
		},
		"The test should do Y": function () {
			//...
		}
	});

	var suite = new Y.Test.Suite("Testsuite");

	suite.add(testcase1);
	suite.add(testcase2);

	var console = new Y.Console({
		style: 'block',
		newestOnTop: false
	});
	console.render('#log');
});