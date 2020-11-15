async function minibio({ page, browser }) {
    var urls = [];
    urls = await page.evaluate(() => Array.from(document.querySelectorAll("a[href]"), a => a.getAttribute('href')));

    //Removendo as urls repetidas
    urls = urls.filter(function (el, i) {
        return urls.indexOf(el) === i;
    });

    const newPage = await browser.newPage();
    await newPage.setDefaultNavigationTimeout(0);
    await newPage.setDefaultTimeout(0);

    var descricao = "Olá, tudo bem? Percebi seu interesse em freelancers e fiz uma pesquisa. Seguem os resultados: \n";

    for (var i in urls) {
        if (urls[i].includes("freelancer/")) {
            await newPage.goto("https://www.workana.com" + urls[i]);
            //newPage.waitForNavigation();
            descricao = descricao + "Identificação: " + await newPage.evaluate(() => document.querySelector("div.h1").textContent) + "\n";
            descricao = descricao + "Descricao resumida: " + await newPage.evaluate(() => document.querySelector("h4").textContent) + "\n";
            const detalhesButton = await newPage.$$(".more-link", a => a);
            await detalhesButton.click;
            descricao = descricao + "Descricao detalhada: " + await newPage.evaluate(() => document.querySelector("#collapse-about-me > div").textContent) + "\n\n";
        }

    }
    return descricao;

} module.exports = minibio