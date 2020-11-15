const puppeteer = require('puppeteer');
const registrosEncontrados = require('./registrosEncontrados');
const minibio = require('./minibio');
const buscaFreelancer = require('./buscaFreelancer');


const pesquisa = "site wordpress";
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = (await browser.pages())[0];
  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);
  // Configure the timeout
  await page.setDefaultTimeout(0);
  await page.goto('https://www.workana.com/');

  await buscaFreelancer ({page, pesquisa});
  console.log("Quantidade: " + await registrosEncontrados({ page }));
  console.log(await minibio({ page, browser }));


})();