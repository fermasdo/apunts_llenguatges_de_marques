import { chromium } from "playwright";

const output = "docs/assets/unitat-2";
const base = "";
const variables = `:root { --color-fons:#fffdf8; --color-text:#24303a; --color-principal:#075985; --color-superficie:#e0f2fe; --color-focus:#b45309; --espai-1:.5rem; --espai-2:1rem; --espai-3:1.5rem; }`;

const shell = (content, css = "") => `<!doctype html><html lang="ca"><head><meta charset="utf-8"><style>${base}${css}</style></head><body>${content}</body></html>`;
const header = `<header><p>Taller Riu</p><p>Reparació i manteniment de bicicletes.</p><nav aria-label="Principal"><ul><li><a href="#inici">Inici</a></li><li><a href="#reparacions">Reparacions</a></li><li><a href="#productes">Productes</a></li><li><a href="#contacte">Contacte</a></li></ul></nav></header>`;
const cards = `<section class="productes" id="productes"><h2>Productes destacats</h2><article><h3>Casc urbà</h3><p>Protecció còmoda per als trajectes diaris.</p><p>Disponibilitat: esgotat</p></article><article><h3>Llum LED</h3><p>Visibilitat per a circular de nit.</p></article><article><h3>Candau</h3><p>Seguretat per a deixar la bicicleta al carrer.</p></article></section>`;

const captures = [
  ["01-full-extern.webp", 960, 500, shell(`<main><h1 id="inici">Taller Riu</h1><p>Reparació i manteniment de bicicletes.</p><p>Consulta els nostres serveis i productes.</p><p><a href="#productes">Vegeu els productes destacats</a></p></main>`, `body { font-family:system-ui,sans-serif; line-height:1.5; color:#24303a; }`)],
  ["02-cascada.webp", 960, 500, shell(`${header}<main><h1>Serveis del taller</h1><p><a href="#reparacions">Consulta totes les reparacions</a></p><p><a class="enllac-destacat" href="#oferta">Oferta de revisió esta setmana</a></p></main>`, `body { color:#24303a; } a { color:#075985; } nav a { color:#fff; } nav { background-color:#075985; } .enllac-destacat { color:#7c2d12; }`)],
  ["03-variables.webp", 960, 500, shell(`<main><h1>Producte destacat</h1><article><h2>Casc urbà</h2><p>Protecció còmoda per als trajectes diaris.</p><p>Disponibilitat: esgotat</p></article></main>`, variables)],
  ["04-tipografia.webp", 960, 500, shell(`<main><h1>Cuida la teua bicicleta</h1><h2>Manteniment periòdic</h2><p>Una revisió regular millora la seguretat i allarga la vida útil dels components.</p><p>Demana hora amb antelació.</p><p><a href="#horaris">Consulta els horaris del taller</a></p></main>`, `:root { --color-fons:#fffdf8; --color-text:#24303a; --color-principal:#075985; } body { margin:0; background-color:var(--color-fons); color:var(--color-text); font-family:system-ui,sans-serif; line-height:1.5; } h1,h2,h3 { color:var(--color-principal); line-height:1.2; } a { color:var(--color-principal); }`)],
  ["05-border-box.webp", 320, 600, shell(`<main><p>Taller Riu</p><section><h2>Productes destacats</h2><article class="fitxa-prova"><h3>Casc urbà</h3><p>Protecció còmoda per als trajectes diaris.</p><a href="#mes">Més informació</a></article></section></main>`, `* { box-sizing:border-box; } .fitxa-prova { width:100%; padding:1rem; border:1px solid #94a3b8; }`)],
  ["06-amplaria-segura.webp", 1280, 600, shell(`<main><h1>Consells de manteniment</h1><p>Una bicicleta cuidada és més segura i agradable d'utilitzar cada dia.</p><p>Revisa la pressió de les rodes, la cadena i els frens abans d'eixir.</p><p>Un manteniment periòdic ajuda a detectar desgast abans que es convertisca en una avaria.</p></main>`, `main { width:min(100% - 2rem,70rem); margin-inline:auto; } h1 { color:#075985; }`)],
  ["07-flexbox.webp", 320, 600, shell(header, `${variables} header { width:min(100% - 2rem,70rem); margin-inline:auto; padding-block:var(--espai-2); } nav ul { display:flex; flex-wrap:wrap; gap:var(--espai-1); margin:0; padding:0; list-style:none; } nav a { display:inline-block; padding:.5rem .75rem; background:var(--color-principal); color:#fff; text-decoration:none; }`)],
  ["08-grid.webp", 1280, 620, shell(`<main>${cards}</main>`, `${variables} .productes { display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:var(--espai-2); margin-block:var(--espai-3); } .productes > h2 { grid-column:1 / -1; } .productes article { padding:var(--espai-2); border:1px solid #94a3b8; border-radius:.5rem; background:#fff; } h2,h3 { color:#075985; }`)],
  ["09-estils-complet.webp", 1280, 720, shell(`${header}<main id="inici"><h1>Productes per al teu trajecte</h1><p>Una selecció de productes per moure't amb seguretat.</p>${cards.replace(/<article>[\s\S]*?<\/article><article>[\s\S]*?<\/article><article>[\s\S]*?<\/article>/, `<article><h3>Casc urbà</h3><p>Protecció còmoda per als trajectes diaris.</p></article><article><h3>Llum LED</h3><p>Visibilitat per a circular de nit.</p></article>`)}</main><footer>© Taller Riu · Contacte i horaris</footer>`, `${variables} * { box-sizing:border-box; } body { margin:0; background:var(--color-fons); color:var(--color-text); font-family:system-ui,sans-serif; line-height:1.5; } header,main,footer { width:min(100% - 2rem,70rem); margin-inline:auto; } header,footer { padding-block:var(--espai-2); } h1,h2,h3 { color:var(--color-principal); line-height:1.2; } nav ul { display:flex; flex-wrap:wrap; gap:var(--espai-1); margin:0; padding:0; list-style:none; } nav a { display:inline-block; padding:.5rem .75rem; background:var(--color-principal); color:#fff; text-decoration:none; } .productes { display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:var(--espai-2); margin-block:var(--espai-3); } .productes > h2 { grid-column:1 / -1; } .productes article { padding:var(--espai-2); border:1px solid #94a3b8; border-radius:.5rem; background:#fff; } @media (min-width:48rem) { header { display:flex; align-items:center; justify-content:space-between; gap:var(--espai-2); } }`)],
];

const browser = await chromium.launch({
  ...(process.env.PLAYWRIGHT_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH } : {}),
  headless: true,
});
for (const [file, width, height, html] of captures) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1, colorScheme: "light" });
  await page.setContent(html);
  await page.screenshot({ path: `${output}/${file}`, type: "webp", quality: 90 });
  await page.close();
}
await browser.close();
