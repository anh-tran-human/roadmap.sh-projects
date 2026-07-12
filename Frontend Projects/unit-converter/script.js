const u = {
    length: { mm: ['Millimeter', 0.001], cm: ['Centimeter', 0.01], m: ['Meter', 1], km: ['Kilometer', 1000], in: ['Inch', 0.0254], ft: ['Foot', 0.3048], yd: ['Yard', 0.9144], mi: ['Mile', 1609.344] },
    weight: { mg: ['Milligram', 1e-6], g: ['Gram', 0.001], kg: ['Kilogram', 1], oz: ['Ounce', 0.0283495], lb: ['Pound', 0.453592] },
    temperature: { c: ['Celsius (°C)'], f: ['Fahrenheit (°F)'], k: ['Kelvin (K)'] }
};
let cat = 'length';
const form = document.getElementById('form'), inp = document.getElementById('inp'), out = document.getElementById('out');
const from = document.getElementById('from'), to = document.getElementById('to'), lbl = document.getElementById('lbl');

const render = () => {
    from.innerHTML = to.innerHTML = Object.entries(u[cat]).map(([k, v]) => `<option value="${k}">${v[0]}</option>`).join('');
    from.value = cat === 'length' ? 'm' : cat === 'weight' ? 'kg' : 'c';
    to.value = cat === 'length' ? 'ft' : cat === 'weight' ? 'lb' : 'f';
    lbl.textContent = `Enter ${cat} to convert`; out.textContent = '—';
};

document.getElementById('tabs').addEventListener('click', e => {
    if(e.target.tagName !== 'BUTTON') return;
    document.querySelectorAll('#tabs button').forEach(b => b.className = '');
    e.target.className = 'active'; cat = e.target.dataset.cat; render();
});

document.getElementById('swap').onclick = () => { let t = from.value; from.value = to.value; to.value = t; out.textContent = '—'; };
['input', 'change'].forEach(e => form.addEventListener(e, () => out.textContent = '—'));

form.onsubmit = e => {
    e.preventDefault(); let v = parseFloat(inp.value), f = from.value, t = to.value, res;
    if (cat === 'temperature') {
        let c = f === 'c' ? v : f === 'f' ? (v - 32) * 5/9 : v - 273.15;
        res = t === 'c' ? c : t === 'f' ? (c * 9/5) + 32 : c + 273.15;
    } else res = (v * u[cat][f][1]) / u[cat][t][1];
    out.textContent = `${parseFloat(res.toFixed(6))} ${t}`;
};

document.getElementById('theme').onclick = e => {
    let dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
    e.currentTarget.firstChild.textContent = dark ? 'Dark ' : 'Light ';
};
render(); 
