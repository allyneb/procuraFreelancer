async function buscaFreelancer ({page, pesquisa}){
  await page.evaluate(() => { document.querySelector("body > header > nav > div > div.navbar-header > button").click(); });
  page.waitForResponse();
  await page.waitForTimeout(3000);
  await page.evaluate(() => { document.querySelector("body > header > nav > div > div.navbar-collapse.navbar-inverse-collapse.navbar-loggedout.js-header-menu.collapse.in > ul.nav.navbar-nav.main-menu > li:nth-child(1) > a").click() });
  await page.waitForTimeout(3000);

  const digita = await page.evaluate((pesquisa) => {
    document.querySelector("#Query").value = pesquisa;
    document.querySelector("#search-form > div > button").click();
  }, pesquisa);
  await page.waitForNavigation();
} module.exports = buscaFreelancer