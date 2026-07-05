import puppeteer from 'puppeteer';
const shots = [
  { name: 'full-desktop', w: 1440, h: 900 },
  { name: 'full-mobile',  w: 390,  h: 844 },
];
const dir = './temporary screenshots';
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
for (const s of shots) {
  const page = await browser.newPage();
  await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto('http://localhost:3244/index.html', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    // trigger every reveal + settle so nothing is hidden in the shot
    document.querySelectorAll('[data-reveal],[data-split]').forEach(e => e.classList.add('in'));
    document.querySelectorAll('[data-count]').forEach(e => { e.textContent = (e.dataset.prefix||'') + e.dataset.count + (e.dataset.suffix||''); });
    document.body.classList.add('settled'); document.documentElement.classList.remove('anim');
    // force lazy images eager and wait for them all
    const imgs = [...document.images];
    imgs.forEach(i => i.loading = 'eager');
    const h = document.body.scrollHeight, step = 400;
    for (let y = 0; y <= h; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); }
    window.scrollTo(0, 0);
    await Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  });
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: `${dir}/${s.name}.jpg`, type: 'jpeg', quality: 80, fullPage: true });
  console.log('saved', s.name);
  await page.close();
}
await browser.close();
