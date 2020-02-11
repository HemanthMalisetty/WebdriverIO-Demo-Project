const assert = require("assert");
 
describe("Test demo", function() {
    /*it("Amazon search test", function() {
        browser.url("https://www.amazon.in/");
        $("//*[@id = 'twotabsearchtextbox']").setValue("mac book pro");
        $("//*[@type = 'submit' and @value = 'Go']").click();    
        assert.strictEqual(browser.getTitle(), "Amazon.in: macbook pro");
    });*/
    it("Flipkart test", function() {
        browser.setTimeout({ 'pageLoad': 10000 })
        browser.setTimeout({ 'implicit': 5000 })

        browser.url("https://www.flipkart.com/");

        ele = $("//*[@class = '_2AkmmA _29YdH8']")
        browser.waitUntil(() => ele.isClickable())
        ele.click();

        eleTwo = $("//*[@class = '_1QZ6fC _3Lgyp8' and text() = 'Electronics']")
        browser.waitUntil(() => eleTwo.isDisplayed())
        eleTwo.moveTo();
        
        eleThree = $("//*[@title = 'Mobiles']")
        browser.waitUntil(() => eleThree.isClickable())
        eleThree.click();

        browser.waitUntil(() => $("//*[@class = '_1GEhLw' and text() ='6 GB & Above']").isDisplayed())
        assert.strictEqual(browser.getTitle(), "Mobile Phones: Buy Mobiles Online at Best Prices in India");
        $("//*[@class = '_1GEhLw' and text() ='6 GB & Above']").click();
        const filter = $("//*[@class = '_3UZZGt']").getText();
        assert.strictEqual(filter, "6 GB & Above");
    });
});