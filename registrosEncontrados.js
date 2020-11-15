async function registrosEncontrados({ page }) {

    page.waitFor("#search-form > div > button");
    const registrosEncontrados = await page.evaluate(() => document.querySelector("#workers > div:nth-child(1) > p > em").textContent);
    await page.waitForTimeout(5000);
    return registrosEncontrados;
}
module.exports = registrosEncontrados 