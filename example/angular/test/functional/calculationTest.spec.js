describe('calculation', function(){
	browser.get('http://juliemr.github.io/protractor-demo/');


	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goBtn = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	 function inNum(a,b){
	 	firstNumber.sendKeys(a);
	 	secondNumber.sendKeys(b);
	 	goBtn.click();
	   }

	beforeEach(function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	
	it('This is title verify', function(){
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
	 it('should add one and two', function() {
	    // firstNumber.sendKeys(1);
	    // secondNumber.sendKeys(2);

	    // goBtn.click();
	    inNum(1,2);

	   var addRes = expect(latestResult.getText()).toEqual('3');

	   console.log(addRes);
	  
	  });

	 it('Substraction', function(){
	 	 var select = element(by.model('operator'));
	 	 select.$('[value="SUBTRACTION"]').click();
	 	 inNum(6,5);
	 	
	 	/* firstNumber.sendKeys('6');
	 	 secondNumber.sendKeys('5');

	 	 goBtn.click();*/

	 	 expect(latestResult.getText()).toEqual('1');
	 });
	 it('Multiplication', function(){
	 	var select = element(by.model('operator'));
	 	select.$('[value="MULTIPLICATION"]').click()
	 	inNum(10,2);

	 	expect(latestResult.getText()).toEqual('20');
	 });
	
	 it('Division', function(){
	 	var select = element(by.model('operator'));
	 	select.$('[value="DIVISION"]').click();
	 	inNum(10,2);

	 	expect(latestResult.getText()).toEqual('5');
	 });
	 it('module', function(){
	 	var select = element(by.model('operator'));
	 	select.$('[value="MODULO"]').click();

	 	inNum(15,7);

	 	expect(latestResult.getText()).toEqual('1');
	 });

	 browser.manage().logs().get('browser').then(function(browserLogs) {
   // browserLogs is an array of objects with level and message fields
   // browserLogs.forEach(function(log){
   //    if (log.level.value > 900) { // it's an error log
   //      console.log('Browser console error!');
   //      console.log(log.message);
   //    }
   // });
});
});