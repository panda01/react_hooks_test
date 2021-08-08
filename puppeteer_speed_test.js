const puppeteer = require('puppeteer');

const FOLDERS = ['hooks', 'traditional'];
const COMPONENTS = ['Use_Effect', 'Hello_World', 'Use_State'];
const NUMBER_OF_TIMES_TO_CLICK_THE_BUTTON = 10;

// spins up a page, if it has a button clicks it a bunch of times
async function timePage(url, printPDF) {
	const browser = await puppeteer.launch({ headless: printPDF});
	const page = await browser.newPage();
	await page.goto('http://localhost:3000?page=' + encodeURIComponent(url));
	const pageMetrics = await page.metrics();
	const hasButton = await page.$('button') !== null;
	if(hasButton) {
		for(let idx = 0; idx < NUMBER_OF_TIMES_TO_CLICK_THE_BUTTON; idx++) {
			await page.click('button');
		}
	}
	console.log(url);
	// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagemetrics
	console.info(pageMetrics.ScriptDuration);
	console.log('');

	if (printPDF) {
		await page.pdf({path: './pdfs/' + url + '.pdf', format: 'a4'});
	}

	await browser.close();
}

(async() => {
	for(let idx = 0; idx < COMPONENTS.length; idx++) {
		for(let jdx = 0; jdx < FOLDERS.length; jdx++) {
			await timePage(FOLDERS[jdx] + '/' + COMPONENTS[idx], false);
		}
	}
})();
