const opt = require("./settings.json");
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--incognito']
    });

    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto("https://discord.com/login");
    await page.evaluate(async _ => {
        document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = `"ODgxMjU5NjQ3NDM5MzQ3ODQz.YSqPRg.THG-K7M_ffjtI0MXUuVHIUBjTm4"`

    }).then(console.log("[JoinSpammer] Token injected !"));
    await page.waitForTimeout();
    await page.goto(opt.link, {
        waitUntil: 'networkidle0',
      });
    console.log("[JoinSpammer] Redirection to the server. Please wait..");
    
    await page.click('[type="button"]');
    await page.waitForNavigation();
    console.log("[JoinSpammer] Server joined");
    browser.close();


})();

