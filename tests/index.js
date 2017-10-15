module.exports = {

  'main': browser => {
      browser.url('http://puppies.herokuapp.com/').waitForElementVisible('body', 10000);

      browser.click("input[value='View Details']").waitForElementPresent("input[value='Adopt Me!']", 10000);

      browser.click("input[value='Adopt Me!']").waitForElementPresent("input[value='Complete the Adoption']", 10000);

      browser.click("input#collar");
      browser.click("input[value='Complete the Adoption']").waitForElementPresent("input[value='Place Order']", 10000);

      browser.setValue('input#order_name', 'Demo Project');
      browser.setValue('textarea#order_address', 'Demo Details');
      browser.setValue('input#order_email', 'Demo@gmail.com');

      browser.click("#order_pay_type option[value='Check']");

      browser.click("input[value='Place Order']");

      browser.end();
  }
}






/*//Each "export" counts as one test case
 'main': browser => {

 //We direct our browser to the gogle homepage, and wait for it to load
 browser.url('http://google.com')
 .waitForElementVisible('body', 1000);

 // We then test to see that the "Search" button is visible
 browser.assert.elementPresent('input[value="Google Search"]')
 .saveScreenshot('./reports/homepage.png');

 //We then fill the search bar with the word "Nightwatch"
 browser.setValue('#lst-ib', 'Nightwatch');

 //then, we click on "Search", and wait for the search results to appear
 browser.click('input[name="btnK"]')
 .waitForElementVisible('#resultStats', 10000)
 .saveScreenshot('./reports/search-result.png');

 //Once thats done, we close the browser
 browser.end();
 }*/