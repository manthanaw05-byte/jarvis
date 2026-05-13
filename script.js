/* ── EXPERIMENTS DATA ────────────────────────────────────────────────────── */
const experiments = [
  {
    id: 1, expNum: 1,
    title: "Password Strength Checker",
    assignment: "Experiment 1: Insecurity of Default / Plain-Text Passwords",
    desc: "Demonstrates password insecurity. Checks for lowercase, uppercase, digit, and special characters. Displays strength as a percentage score.",
    lang: "C++",
    code: `#include<iostream>
#include<cctype>
using namespace std;

int main() {
    string p;
    int l=0, u=0, d=0, s=0;

    cout << "Enter Password: ";
    cin >> p;

    for(char c : p) {
        if(islower(c))       l = 1;
        else if(isupper(c))  u = 1;
        else if(isdigit(c))  d = 1;
        else                 s = 1;
    }

    cout << (l + u + d + s) * 25 << "% Strong";

    return 0;
}`
  },
  {
    id: 2, expNum: 2,
    title: "Encryption & Decryption (Shift Cipher)",
    assignment: "Experiment 2: Encryption and Decryption",
    desc: "Basic shift cipher. Encrypts text by adding a key value to each character's ASCII code, then decrypts by subtracting the same key.",
    lang: "C++",
    code: `#include<iostream>
#include<string>
using namespace std;

int main()
{
    string text;
    int key;

    cout << "Enter text: ";
    cin >> text;

    cout << "Enter key: ";
    cin >> key;

    // Encryption
    for(int i = 0; i < text.length(); i++)
    {
        text[i] = text[i] + key;
    }

    cout << "Encrypted Text: " << text << endl;

    // Decryption
    for(int i = 0; i < text.length(); i++)
    {
        text[i] = text[i] - key;
    }

    cout << "Decrypted Text: " << text << endl;

    return 0;
}`
  },
  {
    id: 3, expNum: 3,
    title: "Caesar Cipher",
    assignment: "Experiment 3: Encryption and Decryption — Caesar Cipher",
    desc: "Classic Caesar Cipher. Shifts each uppercase letter by a key value (mod 26) for encryption and prints the cipher text.",
    lang: "C++",
    code: `#include<iostream>
using namespace std;

int main() {

    string t;
    int k;

    cout << "Text: ";
    cin >> t;

    cout << "Key: ";
    cin >> k;

    cout << "Encrypted Text: ";

    for(char c : t)
        cout << char((c - 'A' + k) % 26 + 'A');

    cout << endl;

    return 0;
}`
  },
  {
    id: 4, expNum: 4,
    title: "Wireless Network Components & Mobile Security",
    assignment: "Experiment 4: Wireless Network Components & Mobile Security Apps",
    desc: "Study of different wireless network components (Router, Adapter, Access Point, Repeater, NIC) and features of CM Security mobile app.",
    lang: "C++",
    code: `#include<iostream>
using namespace std;

int main() {

    cout << "Wireless Network Components:" << endl;
    cout << "1. Router" << endl;
    cout << "2. Network Adapter" << endl;
    cout << "3. Access Point" << endl;
    cout << "4. Repeater" << endl;
    cout << "5. NIC (Network Interface Card)" << endl;

    cout << endl;

    cout << "CM Security App Features:" << endl;
    cout << "1. AntiVirus & Malware Scanner" << endl;
    cout << "2. App Lock" << endl;
    cout << "3. Battery Saver" << endl;
    cout << "4. Browsing Protection" << endl;
    cout << "5. Anti-Theft" << endl;

    return 0;
}`
  },
  {
    id: 5, expNum: 5, subLabel: "5A — DES (Symmetric)",
    title: "Symmetric Algorithm — DES (XOR Demo)",
    assignment: "Experiment 5A: Symmetric Algorithm — DES",
    desc: "Symmetric key encryption demo using XOR operation (simulating DES logic). The same key is used for both encryption and decryption.",
    lang: "C++",
    code: `#include<iostream>
using namespace std;

int main() {
    string m = "NETWORK", k = "KEY", e = "";

    // Encryption using XOR
    for(int i = 0; i < m.size(); i++)
        e += m[i] ^ k[i % k.size()];

    cout << "Encrypted: " << e << endl;

    // Decryption using XOR (same key)
    cout << "Decrypted: ";
    for(int i = 0; i < e.size(); i++)
        cout << char(e[i] ^ k[i % k.size()]);

    cout << endl;

    return 0;
}`
  },
  {
    id: 6, expNum: 5, subLabel: "5B — RSA (Asymmetric)",
    title: "Asymmetric Algorithm — RSA",
    assignment: "Experiment 5B: Asymmetric Algorithm — RSA",
    desc: "RSA public-key algorithm demo. Selects primes p=11, q=13, computes n, z, public key e, private key d, then encrypts and decrypts a message.",
    lang: "C++",
    code: `#include<iostream>
#include<cmath>
using namespace std;

int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int main() {
    int p = 11, q = 13, msg = 12;
    int e, d, n, z, i;

    n = p * q;
    z = (p - 1) * (q - 1);

    // Find e: gcd(e, z) == 1
    for(e = 2; e < z; e++)
        if(gcd(e, z) == 1) break;

    // Find d: (d * e) % z == 1
    for(i = 1; ; i++)
        if((i * z + 1) % e == 0) {
            d = (i * z + 1) / e;
            break;
        }

    // Encrypt: c = msg^e mod n
    int c = fmod(pow(msg, e), n);

    // Decrypt: m = c^d mod n
    int m = fmod(pow(c,  d), n);

    cout << "Public Key  (e, n): (" << e << ", " << n << ")" << endl;
    cout << "Private Key (d, n): (" << d << ", " << n << ")" << endl;
    cout << "Original Message  : " << msg << endl;
    cout << "Encrypted         : " << c   << endl;
    cout << "Decrypted         : " << m   << endl;

    return 0;
}`
  },
  {
    id: 7, expNum: 6,
    title: "DES Implementation (XOR)",
    assignment: "Experiment 6: Implementation of DES",
    desc: "DES encryption/decryption implementation using XOR-based key mixing. Encrypts the message 'Learn Java' with key 'DES' and decrypts it back.",
    lang: "C++",
    code: `#include<iostream>
using namespace std;

int main() {
    string m = "Learn Java", k = "DES", e = "";

    // Encryption
    for(int i = 0; i < m.size(); i++)
        e += m[i] ^ k[i % k.size()];

    cout << "Original  : " << m << endl;
    cout << "Encrypted : " << e << endl;

    // Decryption
    cout << "Decrypted : ";
    for(int i = 0; i < e.size(); i++)
        cout << char(e[i] ^ k[i % k.size()]);

    cout << endl;

    return 0;
}`
  },
  {
    id: 8, expNum: 7,
    title: "AES Algorithm (XOR Demo)",
    assignment: "Experiment 7: AES Algorithm",
    desc: "AES encryption/decryption demonstration using XOR logic. Encrypts 'HELLO' with key 'KEY' and decrypts using the same key.",
    lang: "C++",
    code: `#include<iostream>
using namespace std;

int main() {
    string t = "HELLO", k = "KEY", e = "";

    // Encryption (AES demo using XOR)
    for(int i = 0; i < t.size(); i++)
        e += t[i] ^ k[i % k.size()];

    cout << "Original  : " << t << endl;
    cout << "Encrypted : " << e << endl;

    // Decryption
    cout << "Decrypted : ";
    for(int i = 0; i < e.size(); i++)
        cout << char(e[i] ^ k[i % k.size()]);

    cout << endl;

    return 0;
}`
  },
  {
    id: 9, expNum: 8,
    title: "Hash Function (MD5 Demo)",
    assignment: "Experiment 8: Hash Functions",
    desc: "Hash function demonstration (MD5 concept). Computes a simple hash code by summing ASCII values of characters in the input string.",
    lang: "C++",
    code: `#include<iostream>
using namespace std;

int main() {
    string s = "HELLO";
    int h = 0;

    // Simple hash: sum of ASCII values
    for(char c : s)
        h += c;

    cout << "Input     : " << s << endl;
    cout << "Hash Code : " << h << endl;

    return 0;
}`
  }
];

/* ── ESCAPE HELPER ─────────────────────────────────────────────────── */
function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ── SYNTAX HIGHLIGHTER (C/C++) ───────────────────────────────────────── */
const KW  = new Set('alignas,alignof,and,and_eq,asm,auto,bitand,bitor,bool,break,case,catch,char,class,compl,concept,const,consteval,constexpr,constinit,const_cast,continue,decltype,default,delete,do,double,dynamic_cast,else,enum,explicit,export,extern,false,float,for,friend,goto,if,inline,int,long,mutable,namespace,new,noexcept,not,not_eq,nullptr,operator,or,or_eq,private,protected,public,register,reinterpret_cast,requires,return,short,signed,sizeof,static,static_assert,static_cast,struct,switch,template,this,thread_local,throw,true,try,typedef,typeid,typename,union,unsigned,using,virtual,void,volatile,wchar_t,while,xor,xor_eq,string,endl,cout,cin,cerr'.split(','));
const CL  = new Set('std,vector,map,set,unordered_map,unordered_set,pair,tuple,array,list,deque,queue,stack,priority_queue,fstream,ifstream,ofstream,iostream,sstream,bitset,algorithm,numeric,pow,fmod,gcd'.split(','));

function buildHighlighted(raw, pre){
  // We use DOM text nodes + span elements to build highlighted code safely
  // This completely avoids innerHTML on the pre and any double-escaping
  pre.textContent = ''; // clear

  // Tokenise into segments
  const segments = tokenise(raw);
  for(const seg of segments){
    if(seg.type === 'plain'){
      pre.appendChild(document.createTextNode(seg.v));
    } else {
      const span = document.createElement('span');
      span.className = seg.type;
      span.textContent = seg.v;
      pre.appendChild(span);
    }
  }
}

function tokenise(raw){
  // Tokeniser: processes raw code string and returns array of {type, v} segments
  const segs = [];
  let i = 0;
  const n = raw.length;

  while(i < n){
    // Line comment
    if(raw[i]==='/' && raw[i+1]==='/'){
      let j = i;
      while(j < n && raw[j] !== '\n') j++;
      segs.push({ type:'cm', v: raw.slice(i,j) });
      i = j;
      continue;
    }
    // Block comment
    if(raw[i]==='/' && raw[i+1]==='*'){
      let j = i+2;
      while(j < n-1 && !(raw[j]==='*' && raw[j+1]==='/')) j++;
      j += 2; // skip */
      segs.push({ type:'cm', v: raw.slice(i,j) });
      i = j;
      continue;
    }
    // Preprocessor
    if(raw[i]==='#'){
      let j = i+1;
      while(j < n && /[a-zA-Z_]/.test(raw[j])) j++;
      segs.push({ type:'an', v: raw.slice(i,j) });
      i = j;
      continue;
    }
    // String literal
    if(raw[i]==='"'){
      let j = i+1;
      while(j < n && raw[j] !== '"'){
        if(raw[j]==='\\') j++; // skip escape
        j++;
      }
      j++; // closing quote
      segs.push({ type:'str', v: raw.slice(i,j) });
      i = j;
      continue;
    }
    // Char literal
    if(raw[i]==='\'' && i+1 < n){
      let j = i+1;
      if(raw[j]==='\\') j++; // escape
      j += 2; // char + closing quote
      if(j <= n){
        segs.push({ type:'str', v: raw.slice(i,j) });
        i = j;
        continue;
      }
    }
    // Number
    if(/[0-9]/.test(raw[i])){
      let j = i;
      while(j < n && /[0-9a-fA-FxX._eE+\-fFlLuU]/.test(raw[j])) j++;
      segs.push({ type:'num', v: raw.slice(i,j) });
      i = j;
      continue;
    }
    // Identifier / keyword
    if(/[a-zA-Z_]/.test(raw[i])){
      let j = i;
      while(j < n && /[a-zA-Z0-9_]/.test(raw[j])) j++;
      const word = raw.slice(i,j);
      if(KW.has(word))       segs.push({ type:'kw', v: word });
      else if(CL.has(word))  segs.push({ type:'cl', v: word });
      else                   segs.push({ type:'plain', v: word });
      i = j;
      continue;
    }
    // Plain character
    segs.push({ type:'plain', v: raw[i] });
    i++;
  }
  return segs;
}


/* ── CARD FACTORY ────────────────────────────────────────────────────────── */
const grid      = document.getElementById('experimentsGrid');
const noResults = document.getElementById('noResults');
const noQuery   = document.getElementById('noResultsQuery');
const countEl   = document.getElementById('resultCount');

/* Normalise: ensure every exp has a `codes` array internally */
function normaliseCodes(exp){
  if(exp.codes) return exp.codes;
  return [{ label: exp.lang || 'C++', lang: exp.lang || 'C++', code: exp.code }];
}

function createCard(exp, delayMs){
  const card = document.createElement('article');
  card.className = 'exp-card';
  card.style.animationDelay = delayMs + 'ms';

  const codes    = normaliseCodes(exp);
  const isMulti  = codes.length > 1;
  const subBadge = exp.subLabel ? `<span class="sub-label">${exp.subLabel}</span>` : '';

  /* Build tab buttons HTML (only rendered when multi-code) */
  const tabsHtml = isMulti
    ? `<div class="code-tabs" role="tablist">
        ${codes.map((c, i) => `
          <button
            class="code-tab${i === 0 ? ' active' : ''}"
            role="tab"
            data-tab="${i}"
            aria-selected="${i === 0}"
            aria-label="View ${c.label} code"
          >
            <span class="tab-dot tab-dot--${(c.lang||'cpp').toLowerCase()}"></span>
            ${escHtml(c.label)}
          </button>`).join('')}
       </div>`
    : '';

  /* Build code panels HTML — pre elements are empty placeholders */
  const panelsHtml = codes.map((c, i) => {
    const langTag = escHtml(c.lang || c.label);
    return `<div class="code-panel${i === 0 ? ' active' : ''}" data-panel="${i}"><span class="code-lang-tag">${langTag}</span><pre class="code-block" data-idx="${i}"></pre></div>`;
  }).join('');

  card.innerHTML = `
    <div class="card-header">
      <div class="card-meta">
        <div class="exp-badge"><span class="dot"></span>EXP ${String(exp.expNum).padStart(2,'0')}${subBadge}</div>
        <div class="card-assignment">${escHtml(exp.assignment)}</div>
        <div class="card-title">${escHtml(exp.title)}</div>
        <div class="card-desc">${escHtml(exp.desc)}</div>
      </div>
      <button class="copy-btn" aria-label="Copy code">
        <i class="fa-regular fa-copy"></i>
        <span class="btn-label">Copy</span>
      </button>
    </div>
    <div class="code-wrapper">
      ${tabsHtml}
      <div class="code-panels">${panelsHtml}</div>
    </div>`;

  /* Highlight code into each pre element using safe DOM approach */
  card.querySelectorAll('pre[data-idx]').forEach(pre => {
    const idx = parseInt(pre.getAttribute('data-idx'), 10);
    buildHighlighted(codes[idx].code, pre);
  });

  /* ── Tab switching ─────────────────────────────────────────────────────── */
  let activeTab = 0;

  if(isMulti){
    const tabBtns = card.querySelectorAll('.code-tab');
    const panels  = card.querySelectorAll('.code-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.tab, 10);
        if(idx === activeTab) return;

        /* Slide out current panel */
        panels[activeTab].classList.remove('active');
        panels[activeTab].classList.add('exit');
        tabBtns[activeTab].classList.remove('active');
        tabBtns[activeTab].setAttribute('aria-selected','false');

        setTimeout(() => panels[activeTab].classList.remove('exit'), 280);

        activeTab = idx;

        /* Slide in new panel */
        panels[activeTab].classList.add('active');
        tabBtns[activeTab].classList.add('active');
        tabBtns[activeTab].setAttribute('aria-selected','true');

        /* Reset copy button */
        card.querySelector('.btn-label').textContent = 'Copy';
        card.querySelector('.copy-btn i').className = 'fa-regular fa-copy';
        card.querySelector('.copy-btn').classList.remove('copied');
      });
    });
  }

  /* ── Copy button ───────────────────────────────────────────────────────── */
  const btn      = card.querySelector('.copy-btn');
  const btnLabel = card.querySelector('.btn-label');
  const icon     = card.querySelector('.copy-btn i');

  btn.addEventListener('click', e => {
    /* Ripple */
    const r = document.createElement('span');
    r.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const sz = Math.max(rect.width, rect.height);
    r.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX-rect.left-sz/2}px;top:${e.clientY-rect.top-sz/2}px`;
    btn.appendChild(r);
    r.addEventListener('animationend', () => r.remove());

    /* Always copy the currently-active tab */
    const textToCopy  = codes[activeTab].code;
    const activeLabel = codes[activeTab].label;
    const codeEl = card.querySelectorAll('.code-panel')[activeTab].querySelector('.code-block');

    navigator.clipboard.writeText(textToCopy).then(() => {
      btn.classList.add('copied');
      icon.className = 'fa-solid fa-check';
      btnLabel.textContent = 'Copied!';
      codeEl.classList.add('flash');
      setTimeout(() => codeEl.classList.remove('flash'), 600);
      showToast(`${activeLabel} code copied!`, 'success');
      setTimeout(() => {
        btn.classList.remove('copied');
        icon.className = 'fa-regular fa-copy';
        btnLabel.textContent = 'Copy';
      }, 2000);
    }).catch(() => {
      showToast('Copy failed — try again', 'error');
    });
  });

  return card;
}

/* ── RENDER ──────────────────────────────────────────────────────────────── */
function renderAll(list){
  grid.innerHTML = '';
  if(!list.length){
    noResults.hidden = false;
    countEl.textContent = '0 results';
    return;
  }
  noResults.hidden = true;
  countEl.textContent = `${list.length} experiment${list.length!==1?'s':''}`;
  list.forEach((exp, i) => grid.appendChild(createCard(exp, i * 45)));
}

/* ── SEARCH ──────────────────────────────────────────────────────────────── */
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  searchClear.classList.toggle('visible', q.length > 0);
  noQuery.textContent = searchInput.value.trim();
  if(!q){ renderAll(experiments); return; }
  renderAll(experiments.filter(e =>
    `exp${e.expNum} experiment${e.expNum} ${e.title} ${e.assignment} ${e.desc}`.toLowerCase().includes(q)
  ));
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  renderAll(experiments);
  searchInput.focus();
});

/* ── TOAST ───────────────────────────────────────────────────────────────── */
const toastContainer = document.getElementById('toastContainer');
function showToast(msg, type='success'){
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const ic = type==='success' ? 'fa-circle-check' : 'fa-circle-exclamation';
  t.innerHTML = `<i class="fa-solid ${ic} toast-icon"></i><span>${msg}</span>`;
  toastContainer.appendChild(t);
  setTimeout(() => {
    t.classList.add('hide');
    t.addEventListener('animationend', () => t.remove());
  }, 2200);
}

/* ── NAVBAR SCROLL SHADOW ────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ── INIT ────────────────────────────────────────────────────────────────── */
renderAll(experiments);
