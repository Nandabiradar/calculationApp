exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['test/*spec.js'],
 
  // The location of the selenium standalone server .jar file, relative
  // to the location of this config. If no other method of starting selenium
  // is found, this will default to
  // node_modules/protractor/selenium/selenium-server...
  seleniumServerJar: './selenium-server-standalone-2.53.0.jar',
  specs: ['example/*/test/functional/calculationTest.spec.js'],

  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  seleniumPort: 4444,
  
  capablities:{
  	browserName: ['chrom']
  },

  baseUrl: 'http://192.168.0.16:4444/',

  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 360000
  },
   onPrepare: function() {
   browser.manage().timeouts().setScriptTimeout(600000);
   // jasmine.getEnv().addReporter(new ScreenShotReporter({
   //       baseDirectory: '/Users/dpatil/mywork/tmpscreenshots'
   //    }));
    }
};