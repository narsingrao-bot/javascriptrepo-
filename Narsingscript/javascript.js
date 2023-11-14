const { Builder, By ,Key ,until} = require('selenium-webdriver');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    let searchBox = await driver.findElement(By.name('q'));
     await searchBox.sendKeys('Selenium', Key.RETURN);
    console.log('Successfully navigated to Google');
    
    // Additional code for interacting with the webpage
    // ...
    
 
    await driver.quit();
  }


example();

