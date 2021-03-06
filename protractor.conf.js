exports.config = {
	// The address of a running selenium server.
	seleniumAddress: 'http://localhost:4444/wd/hub',

	// Spec patterns are relative to the location of this config.
	specs: [
		'spec/*_spec.js'
	],




	capabilities: {
		'browserName': 'firefox',
		'chromeOptions': {'args': ['--disable-extensions']}
	},

	onPrepare: function () {
		browser.ignoreSynchronization = true;
	},


	// A base URL for your application under test. Calls to protractor.get()
	// with relative paths will be prepended with this.
	baseUrl: 'http://www.wehkamp.nl',

	jasmineNodeOpts: {
		onComplete: null,
		isVerbose: false,
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 10000
	}
};
