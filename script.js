(function(){
"use strict";

/* =========================================================
   ICON LIBRARY (feather-style inline SVG, stroke=currentColor)
   ========================================================= */
const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  vault: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.63 22 9.24 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.24 8.91 8.63"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="21" x2="21" y2="21"/><line x1="5" y1="21" x2="5" y2="10"/><line x1="19" y1="21" x2="19" y2="10"/><polygon points="12 3 21 8 3 8"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;',
  alertTriangle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  gridIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>'
};

const ICON_CHOICES = ['vault','key','shield','mail','lock','star','layers','briefcase','globe','cloud','gamepad','code','bank','camera','zap','music','smartphone','hash','gridIcon','fileText'];

function icon(name, cls){ return '<span class="' + (cls||'') + '">' + (ICONS[name]||ICONS.vault) + '</span>'; }

/* =========================================================
   STORAGE LAYER
   ========================================================= */
const DB_KEY = 'vault_compartments_v1';

function loadDB(){
  try{
    const raw = localStorage.getItem(DB_KEY);
    if(!raw) return seedDB();
    const parsed = JSON.parse(raw);
    if(!Array.isArray(parsed.compartments)) return seedDB();
    return parsed;
  }catch(e){
    console.error('Vault: failed to read storage', e);
    return seedDB();
  }
}

function seedDB(){
  return { compartments: [] };
}

function saveDB(){
  try{
    localStorage.setItem(DB_KEY, JSON.stringify(state.db));
    return true;
  }catch(e){
    console.error('Vault: failed to save', e);
    showToast('ذخیره‌سازی ناموفق بود — فضای مرورگر پر است', true);
    return false;
  }
}

function uid(){ return 'id_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2,9); }

function exportBackup(){
  const payload = {
    app: 'GPsaver',
    version: 1,
    exportedAt: new Date().toISOString(),
    compartments: state.db.compartments,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const dateStamp = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `gpsaver-backup-${dateStamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('فایل بک‌آپ دانلود شد');
}

function readImportFile(file){
  if(!file.name.endsWith('.json') && file.type !== 'application/json'){
    showToast('فایل باید از نوع JSON باشه (خروجی خود GPsaver)', true);
    return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    let parsed;
    try{
      parsed = JSON.parse(ev.target.result);
    }catch(e){
      showToast('این فایل قابل خواندن نیست — خراب یا نامعتبره', true);
      return;
    }
    if(!parsed || !Array.isArray(parsed.compartments)){
      showToast('این فایل یه بک‌آپ معتبر GPsaver نیست', true);
      return;
    }
    state.modal = { type:'confirm-import', importedCompartments: parsed.compartments };
    render();
  };
  reader.onerror = () => showToast('خواندن فایل ناموفق بود', true);
  reader.readAsText(file);
}

function applyImport(mode){
  const imported = state.modal.importedCompartments;
  if(mode === 'replace'){
    state.db.compartments = imported;
  } else {
    // merge: append imported compartments, giving them fresh ids to avoid
    // colliding with anything already present locally.
    imported.forEach(c => {
      const clone = JSON.parse(JSON.stringify(c));
      clone.id = uid();
      clone.entries = (clone.entries || []).map(e => ({ ...e, id: uid() }));
      state.db.compartments.push(clone);
    });
  }
  saveDB();
  state.activeCompartmentId = state.db.compartments.length ? state.db.compartments[0].id : null;
  state.modal = null;
  render();
  showToast(mode === 'replace' ? 'بازیابی انجام شد' : 'بک‌آپ اضافه شد');
}


/* =========================================================
   LOCK SCREEN — master password
   ========================================================= */
const LOCK_KEY = 'vault_lock_v1'; // { hash: string, salt: string }
const SESSION_KEY = 'vault_session_unlocked'; // sessionStorage: cleared when tab/browser closes

async function sha256Hex(str){
  const enc = new TextEncoder().encode(str);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

function randomSalt(){
  const arr = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(arr).map(b => b.toString(16).padStart(2,'0')).join('');
}

function loadLock(){
  try{
    const raw = localStorage.getItem(LOCK_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}

function saveLock(hash, salt){
  localStorage.setItem(LOCK_KEY, JSON.stringify({ hash, salt }));
}

function isSessionUnlocked(){
  try{ return sessionStorage.getItem(SESSION_KEY) === '1'; }catch(e){ return false; }
}
function markSessionUnlocked(){
  try{ sessionStorage.setItem(SESSION_KEY, '1'); }catch(e){}
}

const lockState = {
  mode: null,          // 'setup' | 'enter'
  setupStage: 'create', // 'create' | 'confirm' — setup flow only
  digits: '',           // current 4-digit buffer being entered on the keypad
  pendingFirstPin: null,// holds the first-entered PIN during setup, until confirm matches it
  error: '',
  busy: false,
};

const DIAL_TICKS = 12;

function lockIcon(name, cls){ return '<span class="'+(cls||'')+'">'+(ICONS[name]||ICONS.lock)+'</span>'; }

function renderLockDialSvgless(){
  // Ticks + pips are plain divs positioned by inline transform (rotate), not SVG,
  // so they can be lit individually as the person types without re-render jank.
  let ticks = '';
  let pips = '';
  for(let i=0;i<DIAL_TICKS;i++){
    const deg = (360/DIAL_TICKS)*i;
    ticks += `<div class="lock-dial__tick" style="transform:translateX(-50%) rotate(${deg}deg);" data-tick="${i}"></div>`;
  }
  for(let i=0;i<DIAL_TICKS*3;i++){
    const deg = (360/(DIAL_TICKS*3))*i;
    pips += `<div class="lock-dial__pip" style="transform:translateX(-50%) rotate(${deg}deg);"></div>`;
  }
  return `
    <div class="lock-dial-wrap">
      <div class="lock-dial" id="lockDial">
        <div class="lock-dial__ring"></div>
        <div class="lock-dial__ticks" id="lockDialTicks">${ticks}${pips}</div>
        <div class="lock-dial__center" id="lockDialCenter">${lockIcon('lock')}</div>
      </div>
    </div>`;
}

function renderLock(){
  const root = document.getElementById('lockRoot');
  const lock = loadLock();

  if(!lockState.mode){
    lockState.mode = lock ? 'enter' : 'setup';
  }
  if(lockState.setupStage === undefined || lockState.setupStage === null){
    lockState.setupStage = 'create'; // 'create' | 'confirm' — setup only
  }
  if(lockState.digits === undefined){
    lockState.digits = ''; // current 4-digit buffer being entered on the keypad
  }

  const isSetup = lockState.mode === 'setup';
  const isConfirmStage = isSetup && lockState.setupStage === 'confirm';

  let heading;
  if(!isSetup){
    heading = { title:'GPsaver قفله', desc:'برای ورود، رمز ۴ رقمی رو وارد کن.' };
  } else if(isConfirmStage){
    heading = { title:'تکرار رمز', desc:'همون ۴ رقم رو یه‌بار دیگه وارد کن تا مطمئن بشیم.' };
  } else {
    heading = { title:'ساخت رمز عبور اصلی', desc:'یه رمز ۴ رقمی بساز. اگه فراموشش کنی، راهی برای بازیابی وجود نداره — پس جایی یادداشتش کن.' };
  }

  root.innerHTML = `
    <div class="lock-particles" id="lockParticles"></div>
    <div class="lock-stage" id="lockStage">
      <div class="lock-heading">
        <h1>${heading.title}</h1>
        <p>${heading.desc}</p>
      </div>

      ${renderLockDialSvgless()}

      ${renderPinDots()}

      <div class="lock-error" id="lockError">
        ${lockState.error ? lockIcon('alertTriangle') + '<span>' + escLock(lockState.error) + '</span>' : ''}
      </div>

      ${renderKeypad()}

      ${!isSetup ? `<button type="button" class="lock-hint-toggle" id="lockForgot">رمز رو فراموش کردم</button>` : `
      <div class="lock-setup-note"><strong>نکته:</strong> این رمز فقط روی همین مرورگر ذخیره میشه و جایی ارسال نمیشه.</div>`}
    </div>
  `;

  bindLockEvents();
}

function renderPinDots(){
  const filled = lockState.digits.length;
  let dots = '';
  for(let i=0;i<4;i++){
    dots += `<span class="pin-dot ${i < filled ? 'is-filled' : ''}"></span>`;
  }
  return `<div class="pin-dots" id="pinDots">${dots}</div>`;
}

function renderKeypad(){
  // 1-9 in order, then a blank spacer, 0, then delete — matches standard phone keypad layout.
  const keys = ['1','2','3','4','5','6','7','8','9','','0','del'];
  const cells = keys.map(k => {
    if(k === ''){
      return `<span class="keypad__key keypad__key--spacer"></span>`;
    }
    if(k === 'del'){
      return `<button type="button" class="keypad__key keypad__key--del" data-key="del" aria-label="حذف رقم آخر">${lockIcon('x')}</button>`;
    }
    return `<button type="button" class="keypad__key" data-key="${k}">${k}</button>`;
  }).join('');

  return `<div class="keypad" id="lockKeypad">${cells}</div>`;
}

function escLock(str){
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function bindLockEvents(){
  const keypad = document.getElementById('lockKeypad');
  const forgotBtn = document.getElementById('lockForgot');

  if(keypad){
    keypad.addEventListener('click', (e) => {
      const btn = e.target.closest('.keypad__key');
      if(!btn || btn.classList.contains('keypad__key--spacer')) return;
      const key = btn.dataset.key;
      if(key === 'del'){
        handlePinBackspace();
      } else {
        handlePinDigit(key);
      }
    });
  }

  if(forgotBtn){
    forgotBtn.addEventListener('click', () => {
      if(confirm('اگه رمز رو فراموش کردی، تنها راه، پاک کردن کامل قفل و اطلاعات ذخیره‌شده روی این مرورگره. همه‌ی حساب‌های ذخیره‌شده هم پاک میشن. ادامه بدم؟')){
        localStorage.removeItem(LOCK_KEY);
        localStorage.removeItem(DB_KEY);
        try{ sessionStorage.removeItem(SESSION_KEY); }catch(e){}
        lockState.mode = 'setup';
        lockState.setupStage = 'create';
        lockState.digits = '';
        lockState.pendingFirstPin = null;
        lockState.error = '';
        state.db = seedDB();
        renderLock();
      }
    });
  }

  // Physical-keyboard fallback: some people will still have a hardware keyboard
  // (desktop testing, Bluetooth keyboard on tablet, etc.) — accept digit keys
  // and Backspace so the app isn't keypad-only for those users.
  document.addEventListener('keydown', handleLockPhysicalKeydown);
}

function handleLockPhysicalKeydown(e){
  // Only relevant while the lock screen actually exists in the DOM.
  if(!document.getElementById('lockKeypad')) return;
  if(e.key >= '0' && e.key <= '9'){
    handlePinDigit(e.key);
  } else if(e.key === 'Backspace'){
    handlePinBackspace();
  }
}

function handlePinDigit(digit){
  if(lockState.busy) return;
  if(lockState.digits.length >= 4) return;
  lockState.digits += digit;

  updatePinDotsDisplay();
  advanceDial(lockState.digits.length);

  if(lockState.digits.length === 4){
    // Small delay so the 4th dot is visibly filled before we act on it —
    // acting instantly feels like the tap didn't register.
    setTimeout(() => submitCurrentPin(), 180);
  }
}

function handlePinBackspace(){
  if(lockState.busy) return;
  if(lockState.digits.length === 0) return;
  lockState.digits = lockState.digits.slice(0, -1);
  updatePinDotsDisplay();
  advanceDial(lockState.digits.length);
  if(lockState.error){
    lockState.error = '';
    const errEl = document.getElementById('lockError');
    if(errEl) errEl.innerHTML = '';
  }
}

function updatePinDotsDisplay(){
  const wrap = document.getElementById('pinDots');
  if(!wrap) return;
  const dots = wrap.querySelectorAll('.pin-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('is-filled', i < lockState.digits.length);
  });
}

function advanceDial(len){
  const ticksWrap = document.getElementById('lockDialTicks');
  const center = document.getElementById('lockDialCenter');
  if(!ticksWrap) return;
  const stepDeg = (len * 47) % 360; // deterministic-looking but non-trivial rotation per keystroke
  ticksWrap.style.transform = `rotate(${stepDeg}deg)`;

  const tickIdx = len % DIAL_TICKS;
  ticksWrap.querySelectorAll('.lock-dial__tick').forEach((t,i) => {
    t.classList.toggle('is-lit', i === tickIdx);
  });

  if(center) center.classList.toggle('is-filled', len > 0);

  if(len > 0) spawnParticle();
}

function spawnParticle(){
  const wrap = document.getElementById('lockParticles');
  if(!wrap) return;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const el = document.createElement('div');
  el.className = 'lock-particle';
  el.textContent = chars[Math.floor(Math.random()*chars.length)];
  const startX = 10 + Math.random()*80; // vw%
  const size = 11 + Math.random()*8;
  const duration = 2.6 + Math.random()*1.6;
  const drift = (Math.random()*80 - 40);
  el.style.left = startX + 'vw';
  el.style.fontSize = size + 'px';
  wrap.appendChild(el);

  const anim = el.animate([
    { transform:'translate(0,0) rotate(0deg)', opacity:0, offset:0 },
    { opacity:0.85, offset:0.08 },
    { transform:`translate(${drift}px, 70vh) rotate(${(Math.random()*240-120)}deg)`, opacity:0.85, offset:0.75 },
    { transform:`translate(${drift*1.2}px, 100vh) rotate(${(Math.random()*360-180)}deg)`, opacity:0, offset:1 },
  ], { duration: duration*1000, easing:'cubic-bezier(0.45, 0, 0.55, 1)' });

  anim.onfinish = () => el.remove();
}

function shakeLock(msg){
  lockState.error = msg;
  const errEl = document.getElementById('lockError');
  if(errEl) errEl.innerHTML = lockIcon('alertTriangle') + '<span>' + escLock(msg) + '</span>';
  const stage = document.getElementById('lockStage');
  if(stage){
    stage.classList.remove('is-shaking');
    void stage.offsetWidth; // restart animation
    stage.classList.add('is-shaking');
  }
  const dial = document.getElementById('lockDial');
  if(dial){
    dial.style.transform = 'scale(0.97)';
    setTimeout(() => { dial.style.transform = ''; }, 180);
  }
}

async function submitCurrentPin(){
  if(lockState.busy) return;
  const pass = lockState.digits;

  if(!/^[0-9]{4}$/.test(pass)){
    // Shouldn't be reachable through the keypad (it only allows digits and
    // stops at 4), but guarding anyway in case of a stray state bug.
    shakeLock('رمز باید دقیقاً ۴ رقم عددی باشه');
    resetPinBuffer();
    return;
  }

  if(lockState.mode === 'setup'){
    if(lockState.setupStage === 'create'){
      // First entry: remember it, advance to the confirm screen, clear the buffer.
      lockState.pendingFirstPin = pass;
      lockState.setupStage = 'confirm';
      lockState.digits = '';
      lockState.error = '';
      renderLock();
      return;
    }

    // Confirm stage: compare against what was entered first.
    if(pass !== lockState.pendingFirstPin){
      shakeLock('دو رمز باهم یکی نیستن — دوباره امتحان کن');
      // Send them back to the "create" step rather than just clearing the
      // confirm buffer, since we no longer know if the *first* entry was
      // even what they meant to set.
      lockState.setupStage = 'create';
      lockState.pendingFirstPin = null;
      lockState.digits = '';
      setTimeout(() => renderLock(), 520); // let the shake animation finish first
      return;
    }

    lockState.busy = true;
    const salt = randomSalt();
    const hash = await sha256Hex(salt + pass);
    saveLock(hash, salt);
    markSessionUnlocked();
    runUnlockSequence();
    return;
  }

  // enter mode
  lockState.busy = true;
  const lock = loadLock();
  const hash = await sha256Hex(lock.salt + pass);
  lockState.busy = false;
  if(hash === lock.hash){
    markSessionUnlocked();
    runUnlockSequence();
  } else {
    shakeLock('رمز اشتباهه — دوباره امتحان کن');
    resetPinBuffer();
  }
}

function resetPinBuffer(){
  lockState.digits = '';
  updatePinDotsDisplay();
  advanceDial(0);
}

function runUnlockSequence(){
  const lockRootEl = document.getElementById('lockRoot');
  lockRootEl.classList.add('is-unlocking');

  const door = document.createElement('div');
  door.className = 'lock-door';
  door.innerHTML = `
    <div class="lock-door__leaf lock-door__leaf--l">
      <div class="lock-door__bolt" style="top:22%;"></div>
      <div class="lock-door__bolt" style="top:48%;"></div>
      <div class="lock-door__bolt" style="top:74%;"></div>
    </div>
    <div class="lock-door__leaf lock-door__leaf--r">
      <div class="lock-door__bolt" style="top:22%;"></div>
      <div class="lock-door__bolt" style="top:48%;"></div>
      <div class="lock-door__bolt" style="top:74%;"></div>
    </div>`;
  document.body.appendChild(door);

  const appEl = document.getElementById('app');
  appEl.style.visibility = 'visible';
  render();

  requestAnimationFrame(() => {
    door.classList.add('is-opening');
  });

  setTimeout(() => {
    lockRootEl.remove();
    door.remove();
  }, 1250);
}

function initLock(){
  const lock = loadLock();
  if(lock && isSessionUnlocked()){
    // Already unlocked this session (tab still open / not closed) — skip straight in.
    document.getElementById('lockRoot').remove();
    document.getElementById('app').style.visibility = 'visible';
    render();
    return;
  }
  renderLock();
}

/* =========================================================
   STATE
   ========================================================= */
const state = {
  db: loadDB(),
  activeCompartmentId: null,
  modal: null, // { type, ...payload }
  searchQuery: '',
};

if(state.db.compartments.length && !state.activeCompartmentId){
  state.activeCompartmentId = state.db.compartments[0].id;
}

function getActiveCompartment(){
  return state.db.compartments.find(c => c.id === state.activeCompartmentId) || null;
}

/* =========================================================
   RENDER: ROOT
   ========================================================= */
function render(){
  const app = document.getElementById('app');
  app.innerHTML = renderMain() + renderRail();
  renderModal();
  bindGlobalEvents();
}

/* =========================================================
   RAIL
   ========================================================= */
function renderRail(){
  const comps = state.db.compartments;
  let list = '';
  if(comps.length === 0){
    list = '<div style="padding:20px 8px; font-size:11.5px; color:var(--text-faint); line-height:1.7;">هنوز بخشی نساختی. با دکمه‌ی زیر اولین بخش رو اضافه کن.</div>';
  } else {
    list = comps.map(c => {
      const active = c.id === state.activeCompartmentId ? ' is-active' : '';
      return `
        <div class="compartment-tab${active}">
          <button class="compartment-tab__main" data-action="select-compartment" data-id="${escAttr(c.id)}">
            <span class="compartment-tab__icon">${icon(c.icon)}</span>
            <span class="compartment-tab__body">
              <span class="compartment-tab__name">${esc(c.name)}</span>
              <span class="compartment-tab__count">${c.entries.length} مورد</span>
            </span>
          </button>
          <button class="compartment-tab__edit" data-action="edit-compartment" data-id="${escAttr(c.id)}" title="ویرایش بخش">${icon('edit')}</button>
        </div>`;
    }).join('');
  }

  return `
  <aside class="rail">
    <div class="rail__brand">
      <span class="rail__brand-mark"><img src="icons/icon-192.png" alt="GPsaver"></span>
      <span class="rail__brand-text">
        <h1>GPsaver</h1>
        <p>مدیریت آفلاین حساب‌ها</p>
      </span>
    </div>
    <div class="rail__search">
      ${icon('search','rail__search-icon')}
      <input type="text" id="railSearchInput" class="rail__search-input" placeholder="جستجو در اسم، ایمیل یا توضیحات…" value="${escAttr(state.searchQuery)}">
      ${state.searchQuery ? `<button class="rail__search-clear" data-action="clear-search" title="پاک‌کردن جستجو">${icon('x')}</button>` : ''}
    </div>
    <nav class="rail__list">${list}</nav>
    <button class="rail__add" data-action="open-new-compartment">
      ${icon('plus')} بخش جدید
    </button>
    <div class="rail__backup">
      <button class="rail__backup-btn" data-action="export-backup">${icon('download')} دانلود بک‌آپ کامل</button>
      <button class="rail__backup-btn" data-action="trigger-import">${icon('upload')} بازیابی از فایل بک‌آپ</button>
      <input type="file" id="importFileInput" accept="application/json" style="display:none;">
    </div>
    <div class="rail__foot">
      <strong>ذخیره‌سازی محلی:</strong> همه‌چیز فقط توی همین مرورگر می‌مونه، هیچ اطلاعاتی جایی ارسال نمیشه. اگه یه روز حافظه یا اطلاعات مرورگر (Chrome) رو پاک کنی، همه‌ی حساب‌هایی که اینجا ذخیره کردی هم برای همیشه از بین میره — پس هر از گاهی از همین‌جا یه فایل بک‌آپ دانلود کن.
    </div>
  </aside>`;
}

/* =========================================================
   MAIN
   ========================================================= */
function searchAllEntries(query){
  const q = query.trim().toLowerCase();
  if(!q) return [];
  const results = [];
  state.db.compartments.forEach(c => {
    c.entries.forEach(e => {
      const inLabel = (e.label || '').toLowerCase().includes(q);
      const inDesc = (e.description || '').toLowerCase().includes(q);
      const inEmail = (e.email || '').toLowerCase().includes(q);
      if(inLabel || inDesc || inEmail){
        results.push({ entry: e, compartment: c });
      }
    });
  });
  return results;
}

function renderSearchResults(){
  const query = state.searchQuery;
  const results = searchAllEntries(query);

  const body = results.length === 0
    ? `
      <div class="empty-state">
        <div class="empty-state__icon">${icon('key')}</div>
        <div class="empty-state__title">چیزی پیدا نشد</div>
        <div class="empty-state__desc">هیچ موردی با «${esc(query)}» تو اسم، ایمیل یا توضیحات مطابقت نداشت.</div>
      </div>`
    : `<div class="entry-grid">${results.map(r => renderEntryCard(r.entry, r.compartment)).join('')}</div>`;

  return `
  <main class="main">
    <div class="main__header">
      <div class="main__title-group">
        <span class="main__icon-badge">${icon('key')}</span>
        <div>
          <h2 class="main__title">نتیجه جستجو</h2>
          <p class="main__subtitle">${results.length} مورد برای «${esc(query)}»</p>
        </div>
      </div>
    </div>
    <hr class="divider">
    ${body}
  </main>`;
}

function renderMain(){
  if(state.searchQuery.trim()){
    return renderSearchResults();
  }

  const comps = state.db.compartments;

  if(comps.length === 0){
    return `
    <main class="main">
      <div class="empty-state" style="padding-top:120px;">
        <div class="empty-state__icon">${icon('vault')}</div>
        <div class="empty-state__title">هنوز چیزی اینجا نیست</div>
        <div class="empty-state__desc">یک بخش بساز — مثلاً «Activation» یا هر اسم دیگه‌ای — و آیکون دلخواهش رو انتخاب کن تا شروع کنی.</div>
      </div>
    </main>`;
  }

  const active = getActiveCompartment();
  if(!active){
    return `<main class="main"><div class="empty-state"><div class="empty-state__desc">بخشی رو از لیست کنار انتخاب کن.</div></div></main>`;
  }

  const entriesHtml = active.entries.length === 0
    ? `
      <div class="empty-state">
        <div class="empty-state__icon">${icon('key')}</div>
        <div class="empty-state__title">این بخش هنوز موردی نداره</div>
        <div class="empty-state__desc">یک ایمیل و رمز اضافه کن — می‌تونی توضیح، عکس و بک‌آپ کد هم (اختیاری) براش بذاری.</div>
      </div>`
    : `<div class="entry-grid">${active.entries.map(e => renderEntryCard(e)).join('')}</div>`;

  return `
  <main class="main">
    <div class="main__header">
      <div class="main__title-group">
        <span class="main__icon-badge">${icon(active.icon)}</span>
        <div>
          <h2 class="main__title">${esc(active.name)}</h2>
          <p class="main__subtitle">${active.entries.length} مورد ذخیره‌شده</p>
        </div>
      </div>
      <div class="main__actions">
        <button class="btn btn--ghost" data-action="open-export">${icon('download')} خروجی PDF</button>
        ${active.entries.length > 0 ? `<button class="btn btn--danger-ghost" data-action="clear-compartment">${icon('trash')} پاک‌کردن همه</button>` : ''}
        <button class="btn btn--ghost" data-action="delete-compartment">${icon('x')} حذف بخش</button>
        <button class="btn btn--brass" data-action="open-new-entry">${icon('plus')} افزودن مورد</button>
      </div>
    </div>
    <hr class="divider">
    ${entriesHtml}
  </main>`;
}

function renderEntryCard(entry, sourceCompartment){
  const hasPhoto = !!entry.photo;
  const thumb = hasPhoto
    ? `<img src="${entry.photo}" alt="">`
    : icon('image');

  const desc = entry.description
    ? `<p class="entry-card__desc">${esc(entry.description)}</p>`
    : `<p class="entry-card__desc is-empty">بدون توضیح</p>`;

  const sourceBadge = sourceCompartment
    ? `<span class="entry-card__source" data-action="select-compartment" data-id="${escAttr(sourceCompartment.id)}">${icon(sourceCompartment.icon)} ${esc(sourceCompartment.name)}</span>`
    : '';

  const backupBlock = entry.backupCode ? `
    <div class="entry-card__backup">
      <div class="entry-card__backup-label">${icon('hash')} بک‌آپ کد</div>
      <div class="field-row">
        ${icon('lock','field-row__icon')}
        <span class="field-row__value is-masked" data-field="backup-${entry.id}" data-masked="true">••••••••••</span>
        <button class="field-row__btn" data-action="toggle-mask" data-target="backup-${entry.id}" data-real="${escAttr(entry.backupCode)}" title="نمایش/پنهان‌کردن">${icon('eye')}</button>
        <button class="field-row__btn" data-action="copy" data-value="${escAttr(entry.backupCode)}" title="کپی">${icon('copy')}</button>
      </div>
    </div>` : '';

  return `
  <div class="entry-card">
    <div class="entry-card__top">
      <span class="entry-card__thumb" data-action="${hasPhoto ? 'view-photo' : 'noop'}" data-photo="${hasPhoto ? escAttr(entry.photo) : ''}" data-label="${escAttr(entry.label)}">${thumb}</span>
      <span class="entry-card__heading">
        <span class="entry-card__label">${esc(entry.label)}</span>
        ${desc}
        ${sourceBadge}
      </span>
      <span class="entry-card__actions">
        <button class="entry-card__edit" data-action="edit-entry" data-id="${escAttr(entry.id)}" title="ویرایش">${icon('edit')}</button>
        <button class="entry-card__del" data-action="delete-entry" data-id="${escAttr(entry.id)}" title="حذف">${icon('trash')}</button>
      </span>
    </div>

    <div class="field-row">
      ${icon('mail','field-row__icon')}
      <span class="field-row__value">${esc(entry.email)}</span>
      <button class="field-row__btn" data-action="copy" data-value="${escAttr(entry.email)}" title="کپی">${icon('copy')}</button>
    </div>

    <div class="field-row">
      ${icon('key','field-row__icon')}
      <span class="field-row__value is-masked" data-field="pass-${entry.id}" data-masked="true">••••••••••</span>
      <button class="field-row__btn" data-action="toggle-mask" data-target="pass-${entry.id}" data-real="${escAttr(entry.password)}" title="نمایش/پنهان‌کردن">${icon('eye')}</button>
      <button class="field-row__btn" data-action="copy" data-value="${escAttr(entry.password)}" title="کپی">${icon('copy')}</button>
    </div>

    ${backupBlock}
  </div>`;
}

/* =========================================================
   MODALS
   ========================================================= */
function renderModal(){
  const root = document.getElementById('modalRoot');
  if(!state.modal){ root.innerHTML = ''; return; }

  let html = '';
  switch(state.modal.type){
    case 'new-compartment': html = modalNewCompartment(); break;
    case 'new-entry': html = modalNewEntry(); break;
    case 'confirm-delete-entry': html = modalConfirmDeleteEntry(); break;
    case 'confirm-delete-compartment': html = modalConfirmDeleteCompartment(); break;
    case 'confirm-clear-compartment': html = modalConfirmClearCompartment(); break;
    case 'export-pdf': html = modalExportPdf(); break;
    case 'view-photo': html = modalViewPhoto(); break;
    case 'confirm-import': html = modalConfirmImport(); break;
  }
  root.innerHTML = html;

  const overlay = root.querySelector('.modal-overlay');
  if(overlay){
    overlay.addEventListener('mousedown', (e) => {
      if(e.target === overlay) closeModal();
    });
  }
  const firstInput = root.querySelector('input,textarea');
  if(firstInput) setTimeout(() => firstInput.focus(), 30);
}

function modalNewCompartment(){
  const chosen = state.modal.icon || 'vault';
  const isEdit = !!state.modal.editingId;
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="mTitle">
    <div class="modal">
      <div class="modal__head">
        <h3 class="modal__title" id="mTitle">${isEdit ? 'ویرایش بخش' : 'بخش جدید'}</h3>
        <button class="modal__close" data-action="close-modal">${icon('x')}</button>
      </div>
      <div class="modal__body">
        <div class="field">
          <label class="field__label">اسم بخش</label>
          <input type="text" class="field__input" id="compName" placeholder="مثلاً Activation، گیم‌ها، بانکی…" value="${escAttr(state.modal.name||'')}" maxlength="40">
        </div>
        <div class="field">
          <label class="field__label">آیکون</label>
          <div class="icon-picker">
            ${ICON_CHOICES.map(n => `
              <button type="button" class="icon-picker__opt ${n===chosen?'is-selected':''}" data-action="pick-compartment-icon" data-icon="${n}">
                ${icon(n)}
              </button>`).join('')}
          </div>
        </div>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-action="close-modal">انصراف</button>
        <button class="btn btn--brass" data-action="save-compartment">${icon('check')} ${isEdit ? 'ذخیره تغییرات' : 'ساخت بخش'}</button>
      </div>
    </div>
  </div>`;
}

function modalNewEntry(){
  const m = state.modal;
  const isEdit = !!m.editingId;
  const photoBlock = m.photo ? `
    <div class="photo-preview">
      <img src="${m.photo}" alt="">
      <span class="photo-preview__name">${esc(m.photoName || 'عکس انتخاب‌شده')}</span>
      <button class="photo-preview__remove" data-action="remove-entry-photo" title="حذف عکس">${icon('x')}</button>
    </div>` : `
    <div class="photo-drop" data-action="noop">
      ${icon('camera')}
      <div class="photo-drop__text">عکس رو بکش اینجا یا کلیک کن</div>
      <div class="photo-drop__sub">اختیاری — برای شناسایی راحت‌تر</div>
      <input type="file" accept="image/*" id="entryPhotoInput">
    </div>`;

  return `
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="mTitle2">
    <div class="modal modal--wide">
      <div class="modal__head">
        <h3 class="modal__title" id="mTitle2">${isEdit ? 'ویرایش مورد' : 'افزودن مورد جدید'}</h3>
        <button class="modal__close" data-action="close-modal">${icon('x')}</button>
      </div>
      <div class="modal__body">
        <div class="field">
          <label class="field__label">عنوان <span class="field__optional-tag">مثلاً «جیمیل اصلی» یا «اکانت پلی‌استیشن»</span></label>
          <input type="text" class="field__input" id="entryLabel" placeholder="عنوان این حساب" value="${escAttr(m.label||'')}" maxlength="60">
        </div>
        <div class="field">
          <label class="field__label">ایمیل</label>
          <input type="text" class="field__input" id="entryEmail" placeholder="example@gmail.com" value="${escAttr(m.email||'')}" style="direction:ltr; text-align:right;">
        </div>
        <div class="field">
          <label class="field__label">رمز عبور</label>
          <div class="pass-input-wrap">
            <input type="${m.showPass?'text':'password'}" class="field__input" id="entryPassword" placeholder="رمز عبور" value="${escAttr(m.password||'')}" style="direction:ltr; text-align:right;">
            <button type="button" class="pass-toggle" data-action="toggle-form-pass">${icon(m.showPass?'eyeOff':'eye')}</button>
          </div>
        </div>
        <div class="field">
          <label class="field__label">بک‌آپ کد <span class="field__optional-tag">اختیاری</span></label>
          <textarea class="field__textarea" id="entryBackup" placeholder="در صورت داشتن، کدهای پشتیبان رو اینجا بذار…">${esc(m.backupCode||'')}</textarea>
        </div>
        <div class="field">
          <label class="field__label">توضیحات <span class="field__optional-tag">اختیاری</span></label>
          <textarea class="field__textarea" id="entryDesc" placeholder="این حساب برای چیه؟ نکته‌ی خاصی داره؟">${esc(m.description||'')}</textarea>
        </div>
        <div class="field">
          <label class="field__label">عکس <span class="field__optional-tag">اختیاری</span></label>
          ${photoBlock}
        </div>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-action="close-modal">انصراف</button>
        <button class="btn btn--brass" data-action="save-entry">${icon('check')} ذخیره</button>
      </div>
    </div>
  </div>`;
}

function modalConfirmDeleteEntry(){
  const entry = state.modal.entry;
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal" style="max-width:400px;">
      <div class="modal__body" style="padding-top:26px;">
        <div class="confirm-icon">${icon('trash')}</div>
        <p class="confirm-text">مورد «<strong>${esc(entry.label)}</strong>» برای همیشه پاک بشه؟ این کار قابل بازگشت نیست.</p>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-action="close-modal">انصراف</button>
        <button class="btn btn--danger-ghost" data-action="confirm-delete-entry" style="background:var(--rust); color:#fff; border-color:var(--rust);">حذف کن</button>
      </div>
    </div>
  </div>`;
}

function modalConfirmDeleteCompartment(){
  const c = getActiveCompartment();
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal" style="max-width:420px;">
      <div class="modal__body" style="padding-top:26px;">
        <div class="confirm-icon">${icon('alertTriangle')}</div>
        <p class="confirm-text">بخش «<strong>${esc(c.name)}</strong>» به همراه <strong>${c.entries.length} مورد</strong> داخلش برای همیشه حذف بشه؟</p>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-action="close-modal">انصراف</button>
        <button class="btn btn--danger-ghost" data-action="confirm-delete-compartment" style="background:var(--rust); color:#fff; border-color:var(--rust);">حذف بخش</button>
      </div>
    </div>
  </div>`;
}

function modalConfirmImport(){
  const imported = state.modal.importedCompartments;
  const totalEntries = imported.reduce((sum, c) => sum + (c.entries ? c.entries.length : 0), 0);
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal" style="max-width:440px;">
      <div class="modal__head">
        <h3 class="modal__title">بازیابی از بک‌آپ</h3>
        <button class="modal__close" data-action="close-modal">${icon('x')}</button>
      </div>
      <div class="modal__body">
        <p class="confirm-text">این فایل شامل <strong>${imported.length} بخش</strong> و <strong>${totalEntries} مورد</strong> ذخیره‌شده‌ست. چطور بازیابی بشه؟</p>
        <div style="display:flex; flex-direction:column; gap:10px; margin-top:16px;">
          <button class="btn btn--brass" data-action="confirm-import-merge" style="justify-content:center;">${icon('plus')} اضافه‌کردن کنار اطلاعات فعلی</button>
          <button class="btn btn--danger-ghost" data-action="confirm-import-replace" style="justify-content:center; background:var(--rust); color:#fff; border-color:var(--rust);">${icon('trash')} جایگزینی کامل (حذف اطلاعات فعلی)</button>
        </div>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-action="close-modal">انصراف</button>
      </div>
    </div>
  </div>`;
}

function modalConfirmClearCompartment(){
  const c = getActiveCompartment();
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal" style="max-width:420px;">
      <div class="modal__body" style="padding-top:26px;">
        <div class="confirm-icon">${icon('alertTriangle')}</div>
        <p class="confirm-text">همه‌ی <strong>${c.entries.length} مورد</strong> داخل «<strong>${esc(c.name)}</strong>» پاک بشه؟ خود بخش باقی می‌مونه، فقط موردهاش حذف میشن.</p>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-action="close-modal">انصراف</button>
        <button class="btn btn--danger-ghost" data-action="confirm-clear-compartment" style="background:var(--rust); color:#fff; border-color:var(--rust);">پاک کن</button>
      </div>
    </div>
  </div>`;
}

function modalExportPdf(){
  const comps = state.db.compartments;
  const selected = state.modal.selectedIds;
  const rows = comps.map(c => {
    const checked = selected.has(c.id) ? ' is-checked' : '';
    return `
    <div class="export-row${checked}" data-action="toggle-export-select" data-id="${escAttr(c.id)}">
      <span class="export-row__check">${icon('check')}</span>
      <span class="export-row__icon">${icon(c.icon)}</span>
      <span class="export-row__name">${esc(c.name)}</span>
      <span class="export-row__count">${c.entries.length} مورد</span>
    </div>`;
  }).join('');

  return `
  <div class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal">
      <div class="modal__head">
        <h3 class="modal__title">خروجی PDF</h3>
        <button class="modal__close" data-action="close-modal">${icon('x')}</button>
      </div>
      <div class="modal__body">
        <div class="export-toolbar">
          <span class="export-toolbar__selected">${selected.size} از ${comps.length} بخش انتخاب شده</span>
          <span class="export-toolbar__links">
            <button data-action="export-select-all">انتخاب همه</button>
            <button data-action="export-select-none">هیچ‌کدام</button>
          </span>
        </div>
        <div class="export-list">${rows}</div>
      </div>
      <div class="modal__foot">
        <button class="btn btn--ghost" data-action="close-modal">انصراف</button>
        <button class="btn btn--brass" data-action="generate-pdf" ${selected.size===0?'disabled':''}>${icon('download')} دانلود PDF</button>
      </div>
    </div>
  </div>`;
}

function modalViewPhoto(){
  return `
  <div class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal" style="max-width:560px; background:transparent; border:none; box-shadow:none;">
      <div style="display:flex; justify-content:flex-end; margin-bottom:10px;">
        <button class="modal__close" style="background:var(--surface-3);" data-action="close-modal">${icon('x')}</button>
      </div>
      <img src="${state.modal.photo}" alt="${escAttr(state.modal.label)}" style="width:100%; border-radius:10px; box-shadow:var(--shadow-lg); display:block;">
    </div>
  </div>`;
}

/* =========================================================
   HELPERS: escaping
   ========================================================= */
function esc(str){
  if(str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function escAttr(str){
  if(str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

/* =========================================================
   TOAST
   ========================================================= */
let toastTimer = null;
function showToast(msg, isError){
  const root = document.getElementById('toastRoot');
  root.innerHTML = `<div class="toast" style="${isError?'border-color:rgba(180,103,74,0.4);':''}">${icon(isError?'alertTriangle':'check')}<span>${esc(msg)}</span></div>`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { root.innerHTML=''; }, 2600);
}

/* =========================================================
   ACTIONS
   ========================================================= */
function closeModal(){ state.modal = null; render(); }

function openNewCompartment(){
  state.modal = { type:'new-compartment', name:'', icon:'vault', editingId:null };
  render();
}

function openEditCompartment(id){
  const c = state.db.compartments.find(x => x.id === id);
  if(!c) return;
  state.modal = { type:'new-compartment', name:c.name, icon:c.icon, editingId:id };
  render();
}

function openNewEntry(){
  state.modal = { type:'new-entry', label:'', email:'', password:'', backupCode:'', description:'', photo:null, photoName:'', showPass:false, editingId:null };
  render();
}

function findEntryOwner(entryId){
  for(const c of state.db.compartments){
    const e = c.entries.find(x => x.id === entryId);
    if(e) return { compartment: c, entry: e };
  }
  return null;
}

function openEditEntry(id){
  const found = findEntryOwner(id);
  if(!found) return;
  const e = found.entry;
  state.modal = {
    type:'new-entry',
    label:e.label, email:e.email, password:e.password,
    backupCode:e.backupCode || '', description:e.description || '',
    photo:e.photo || null, photoName:e.photo ? 'عکس فعلی' : '',
    showPass:false, editingId:id, editingCompartmentId:found.compartment.id
  };
  render();
}

function bindGlobalEvents(){
  document.body.onclick = handleClick;
  document.body.onchange = handleChange;
  document.body.oninput = handleInput;
  document.body.ondragover = handleDragOverGlobal;
  document.body.ondrop = handleDropGlobal;
  document.onkeydown = handleKeydown;
}

function handleKeydown(e){
  if(e.key === 'Escape' && state.modal){ closeModal(); }
}

function handleDragOverGlobal(e){
  const drop = e.target.closest('.photo-drop');
  if(drop){ e.preventDefault(); drop.classList.add('is-dragover'); }
}
function handleDropGlobal(e){
  const drop = e.target.closest('.photo-drop');
  if(!drop) return;
  e.preventDefault();
  drop.classList.remove('is-dragover');
  const file = e.dataTransfer.files && e.dataTransfer.files[0];
  if(file) readPhotoFile(file);
}

function readPhotoFile(file){
  if(!file.type.startsWith('image/')){ showToast('فقط فایل تصویری قابل قبوله', true); return; }
  if(file.size > 4.5 * 1024 * 1024){ showToast('حجم عکس زیاده — کمتر از ۴ مگابایت انتخاب کن', true); return; }
  const reader = new FileReader();
  reader.onload = function(ev){
    if(state.modal && state.modal.type === 'new-entry'){
      state.modal.photo = ev.target.result;
      state.modal.photoName = file.name;
      render();
    }
  };
  reader.onerror = function(){ showToast('خواندن فایل عکس ناموفق بود', true); };
  reader.readAsDataURL(file);
}

function handleChange(e){
  if(e.target.id === 'entryPhotoInput'){
    const file = e.target.files && e.target.files[0];
    if(file) readPhotoFile(file);
  }
  if(e.target.id === 'importFileInput'){
    const file = e.target.files && e.target.files[0];
    if(file) readImportFile(file);
    e.target.value = ''; // allow re-selecting the same filename later
  }
}

function handleInput(e){
  const id = e.target.id;
  const val = e.target.value;

  if(id === 'railSearchInput'){
    state.searchQuery = val;
    const cursorPos = e.target.selectionStart;
    render();
    const restored = document.getElementById('railSearchInput');
    if(restored){
      restored.focus();
      restored.setSelectionRange(cursorPos, cursorPos);
    }
    return;
  }

  if(!state.modal) return;
  if(id === 'compName') state.modal.name = val;
  else if(id === 'entryLabel') state.modal.label = val;
  else if(id === 'entryEmail') state.modal.email = val;
  else if(id === 'entryPassword') state.modal.password = val;
  else if(id === 'entryBackup') state.modal.backupCode = val;
  else if(id === 'entryDesc') state.modal.description = val;
}

function handleClick(e){
  const t = e.target.closest('[data-action]');
  if(!t) return;
  const action = t.dataset.action;

  switch(action){
    case 'noop': break;

    case 'select-compartment':
      state.activeCompartmentId = t.dataset.id;
      state.searchQuery = '';
      render();
      break;

    case 'export-backup':
      exportBackup();
      break;

    case 'confirm-import-merge':
      applyImport('merge');
      break;

    case 'confirm-import-replace':
      applyImport('replace');
      break;

    case 'trigger-import':
      document.getElementById('importFileInput').click();
      break;

    case 'clear-search':
      state.searchQuery = '';
      render();
      break;

    case 'open-new-compartment':
      openNewCompartment();
      break;

    case 'edit-compartment':
      openEditCompartment(t.dataset.id);
      break;

    case 'pick-compartment-icon':
      state.modal.icon = t.dataset.icon;
      render();
      break;

    case 'save-compartment': {
      const nameInput = document.getElementById('compName');
      const name = (nameInput ? nameInput.value : state.modal.name || '').trim();
      if(!name){ showToast('اسم بخش رو وارد کن', true); return; }

      if(state.modal.editingId){
        const c = state.db.compartments.find(x => x.id === state.modal.editingId);
        if(c){
          c.name = name;
          c.icon = state.modal.icon || 'vault';
        }
        saveDB();
        state.modal = null;
        render();
        showToast('بخش «' + name + '» به‌روزرسانی شد');
        break;
      }

      const newComp = { id: uid(), name, icon: state.modal.icon || 'vault', entries: [] };
      state.db.compartments.push(newComp);
      state.activeCompartmentId = newComp.id;
      saveDB();
      state.modal = null;
      render();
      showToast('بخش «' + name + '» ساخته شد');
      break;
    }

    case 'delete-compartment':
      state.modal = { type:'confirm-delete-compartment' };
      render();
      break;

    case 'confirm-delete-compartment': {
      const c = getActiveCompartment();
      state.db.compartments = state.db.compartments.filter(x => x.id !== c.id);
      state.activeCompartmentId = state.db.compartments.length ? state.db.compartments[0].id : null;
      saveDB();
      state.modal = null;
      render();
      showToast('بخش حذف شد');
      break;
    }

    case 'clear-compartment':
      state.modal = { type:'confirm-clear-compartment' };
      render();
      break;

    case 'confirm-clear-compartment': {
      const c = getActiveCompartment();
      c.entries = [];
      saveDB();
      state.modal = null;
      render();
      showToast('همه‌ی موردهای این بخش پاک شدند');
      break;
    }

    case 'open-new-entry':
      openNewEntry();
      break;

    case 'edit-entry':
      openEditEntry(t.dataset.id);
      break;

    case 'toggle-form-pass':
      state.modal.showPass = !state.modal.showPass;
      render();
      break;

    case 'remove-entry-photo':
      state.modal.photo = null;
      state.modal.photoName = '';
      render();
      break;

    case 'save-entry': {
      const label = (document.getElementById('entryLabel').value || '').trim();
      const email = (document.getElementById('entryEmail').value || '').trim();
      const password = document.getElementById('entryPassword').value || '';
      const backupCode = (document.getElementById('entryBackup').value || '').trim();
      const description = (document.getElementById('entryDesc').value || '').trim();

      if(!label){ showToast('عنوان رو وارد کن', true); return; }
      if(!email){ showToast('ایمیل رو وارد کن', true); return; }
      if(!password){ showToast('رمز عبور رو وارد کن', true); return; }

      const c = getActiveCompartment();

      if(state.modal.editingId){
        const ownerCompartment = state.db.compartments.find(x => x.id === state.modal.editingCompartmentId) || c;
        const existing = ownerCompartment ? ownerCompartment.entries.find(x => x.id === state.modal.editingId) : null;
        if(existing){
          existing.label = label;
          existing.email = email;
          existing.password = password;
          existing.backupCode = backupCode || null;
          existing.description = description || null;
          existing.photo = state.modal.photo || null;
        }
        saveDB();
        state.modal = null;
        render();
        showToast('مورد به‌روزرسانی شد');
        break;
      }

      const entry = {
        id: uid(),
        label, email, password,
        backupCode: backupCode || null,
        description: description || null,
        photo: state.modal.photo || null
      };

      c.entries.push(entry);
      saveDB();
      state.modal = null;
      render();
      showToast('مورد جدید ذخیره شد');
      break;
    }

    case 'delete-entry': {
      const found = findEntryOwner(t.dataset.id);
      if(!found) break;
      state.modal = { type:'confirm-delete-entry', entry: found.entry, entryCompartmentId: found.compartment.id };
      render();
      break;
    }

    case 'confirm-delete-entry': {
      const c = state.db.compartments.find(x => x.id === state.modal.entryCompartmentId) || getActiveCompartment();
      c.entries = c.entries.filter(x => x.id !== state.modal.entry.id);
      saveDB();
      state.modal = null;
      render();
      showToast('مورد حذف شد');
      break;
    }

    case 'toggle-mask': {
      const target = t.dataset.target;
      const span = document.querySelector('[data-field="'+target+'"]');
      const isMasked = span.dataset.masked === 'true';
      if(isMasked){
        span.textContent = t.dataset.real;
        span.dataset.masked = 'false';
        t.innerHTML = icon('eyeOff');
      } else {
        span.textContent = '••••••••••';
        span.dataset.masked = 'true';
        t.innerHTML = icon('eye');
      }
      break;
    }

    case 'copy': {
      const value = t.dataset.value;
      copyToClipboard(value, t);
      break;
    }

    case 'view-photo':
      if(t.dataset.photo){
        state.modal = { type:'view-photo', photo: t.dataset.photo, label: t.dataset.label };
        render();
      }
      break;

    case 'close-modal':
      closeModal();
      break;

    case 'open-export': {
      state.modal = { type:'export-pdf', selectedIds: new Set([state.activeCompartmentId]) };
      render();
      break;
    }

    case 'toggle-export-select': {
      const id = t.dataset.id;
      if(state.modal.selectedIds.has(id)) state.modal.selectedIds.delete(id);
      else state.modal.selectedIds.add(id);
      render();
      break;
    }

    case 'export-select-all':
      state.modal.selectedIds = new Set(state.db.compartments.map(c => c.id));
      render();
      break;

    case 'export-select-none':
      state.modal.selectedIds = new Set();
      render();
      break;

    case 'generate-pdf':
      generatePdf(Array.from(state.modal.selectedIds));
      break;
  }
}

function copyToClipboard(value, btnEl){
  const done = () => {
    const original = btnEl.innerHTML;
    btnEl.innerHTML = icon('check');
    btnEl.classList.add('is-copied');
    setTimeout(() => { btnEl.innerHTML = original; btnEl.classList.remove('is-copied'); }, 1200);
  };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(value).then(done).catch(() => fallbackCopy(value, done));
  } else {
    fallbackCopy(value, done);
  }
}
function fallbackCopy(value, cb){
  const ta = document.createElement('textarea');
  ta.value = value;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try{ document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta);
  if(cb) cb();
}

/* =========================================================
   PDF GENERATION (print-based, no external library — fully offline)
   ========================================================= */
function generatePdf(compartmentIds){
  if(compartmentIds.length === 0) return;
  const comps = state.db.compartments.filter(c => compartmentIds.includes(c.id));

  const win = window.open('', '_blank');
  if(!win){
    showToast('اجازه‌ی باز شدن پنجره داده نشد — پاپ‌آپ رو در مرورگر فعال کن', true);
    return;
  }

  const dateStr = new Date().toLocaleDateString('fa-IR');

  const sections = comps.map(c => {
    const rows = c.entries.map((e, idx) => `
      <div class="p-entry">
        <div class="p-entry__head">
          <span class="p-entry__num">${idx+1}</span>
          <span class="p-entry__label">${escHtml(e.label)}</span>
        </div>
        <table class="p-table">
          <tr><td class="p-k">ایمیل</td><td class="p-v" dir="ltr">${escHtml(e.email)}</td></tr>
          <tr><td class="p-k">رمز عبور</td><td class="p-v" dir="ltr">${escHtml(e.password)}</td></tr>
          ${e.backupCode ? `<tr><td class="p-k">بک‌آپ کد</td><td class="p-v" dir="ltr">${escHtml(e.backupCode)}</td></tr>` : ''}
          ${e.description ? `<tr><td class="p-k">توضیحات</td><td class="p-v">${escHtml(e.description)}</td></tr>` : ''}
        </table>
      </div>`).join('');

    return `
      <section class="p-section">
        <h2 class="p-section-title">${escHtml(c.name)} <span class="p-section-count">(${c.entries.length} مورد)</span></h2>
        ${c.entries.length ? rows : '<p class="p-empty">موردی در این بخش وجود ندارد.</p>'}
      </section>`;
  }).join('');

  const doc = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<title>GPsaver — خروجی</title>
<style>
  @page { margin: 18mm 16mm; }
  *{ box-sizing:border-box; }
  body{
    font-family: Tahoma, 'B Nazanin', Arial, sans-serif;
    color:#1a1a1a;
    line-height:1.6;
    padding:0;
    margin:0;
  }
  .p-head{
    display:flex; justify-content:space-between; align-items:center;
    border-bottom:2px solid #C9A15C;
    padding-bottom:14px;
    margin-bottom:24px;
  }
  .p-head h1{ font-size:20px; color:#16181D; }
  .p-head .p-date{ font-size:11px; color:#777; }
  .p-section{ margin-bottom:26px; page-break-inside:avoid; }
  .p-section-title{
    font-size:15px;
    background:#16181D;
    color:#fff;
    padding:8px 14px;
    border-radius:4px;
    margin-bottom:10px;
  }
  .p-section-count{ font-weight:normal; font-size:11px; color:#C9A15C; }
  .p-entry{ margin-bottom:14px; page-break-inside:avoid; border:1px solid #ddd; border-radius:6px; overflow:hidden; }
  .p-entry__head{
    display:flex; align-items:center; gap:8px;
    background:#f4f2ee; padding:8px 12px;
    font-weight:bold; font-size:13px;
    border-bottom:1px solid #ddd;
  }
  .p-entry__num{
    display:inline-flex; align-items:center; justify-content:center;
    width:20px; height:20px; border-radius:50%;
    background:#C9A15C; color:#fff; font-size:11px;
  }
  .p-table{ width:100%; border-collapse:collapse; font-size:12px; }
  .p-table td{ padding:7px 12px; border-bottom:1px solid #eee; vertical-align:top; }
  .p-table tr:last-child td{ border-bottom:none; }
  .p-k{ width:110px; color:#888; font-size:11px; white-space:nowrap; }
  .p-v{ color:#1a1a1a; word-break:break-all; }
  .p-empty{ font-size:12px; color:#999; font-style:italic; padding:6px 2px; }
  .p-foot{ margin-top:30px; padding-top:12px; border-top:1px solid #ddd; font-size:10px; color:#999; text-align:center; }
  @media print{
    .p-section{ page-break-inside:avoid; }
  }
</style>
</head>
<body>
  <div class="p-head">
    <h1>GPsaver — فایل حساب‌ها</h1>
    <span class="p-date">تاریخ خروجی: ${dateStr}</span>
  </div>
  ${sections}
  <div class="p-foot">این سند حاوی اطلاعات حساس است — پس از استفاده در محل امنی نگه‌داری شود.</div>
</body>
</html>`;

  win.document.open();
  win.document.write(doc);
  win.document.close();

  win.onload = function(){
    setTimeout(() => { win.focus(); win.print(); }, 250);
  };

  closeModal();
  showToast('پنجره‌ی چاپ باز شد — «ذخیره به‌صورت PDF» رو انتخاب کن');
}

function escHtml(str){
  if(str===undefined||str===null) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* =========================================================
   INIT
   ========================================================= */
initLock();

// Service worker registration — enables "Add to Home Screen" and offline
// shell caching. Requires a secure context (https:// or localhost); silently
// does nothing on plain file:// or http://, which is expected and harmless.
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      // Expected to fail under file:// — not a real error, just means
      // this particular load mode doesn't support install/offline-shell.
      console.log('GPsaver: service worker not registered (', err.message, ')');
    });
  });
}

})();
