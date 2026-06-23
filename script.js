const categories = [
  { key: 'reserved', label: 'Most Reserved Student' },
  { key: 'vocalist', label: 'Best Vocalist' },
  { key: 'political-icon', label: 'Political Icon of the Year' },
  { key: 'expensive-mf', label: 'Most Expensive Male/Female' },
  { key: 'most-handsome', label: 'Most Handsome' },
  { key: 'active-comrade', label: 'Most Active Comrade' },
  { key: 'active-classrep', label: 'Most Active Class Rep' },
  { key: 'best-ebony', label: 'Best Ebony' },
  { key: 'popular-finalist', label: 'Most Popular Finalist of the Year' },
  { key: 'creative-designer', label: 'Best Creative Designer of the Year' },
  { key: 'most-beautiful', label: 'Most Beautiful' },
  { key: 'most-popular', label: 'Most Popular' },
  { key: 'next-rated', label: 'Next Rated of the Year' },
  { key: 'female-dressed', label: 'Female Best Dressed' },
  { key: 'expensive-student', label: 'The Most Expensive Student' },
  { key: 'most-generous', label: 'Most Generous' },
  { key: 'entrepreneur', label: 'Best Entrepreneur of the Year MF' },
  { key: 'sportsman', label: 'Best Sportsman of the Year' },
  { key: 'best-classrep', label: 'Best Class Rep of the Year' },
  { key: 'stage-artist', label: 'Best Stage Performing Artist of the Year' },
  { key: 'best-handwriter', label: 'Best Handwriter of the Year' },
  { key: 'artist-year', label: 'Artist of the Year' },
  { key: 'best-couple', label: 'Best Couple of the Year' },
  { key: 'most-gorgeous', label: 'Most Gorgeous' },
  { key: 'student-leader', label: 'Outstanding Student Leader of the Year' },
  { key: 'fashion-brand', label: 'Best Fashion Brand of the Year' },
  { key: 'skit-maker', label: 'Best Skit Maker MF' },
  { key: 'event-planner', label: 'Best Event Planner' },
  { key: 'singer-year', label: 'Singer of the Year' },
  { key: 'executive-year', label: 'Executive of the Year' },
  { key: 'baller-year', label: 'Baller of the Year' },
  { key: 'content-creator', label: 'Best Content Creator' },
  { key: 'political-jagaban', label: 'Political Jagaban of the Year' },
  { key: 'male-tiktoker', label: 'Best Male TikToker' },
  { key: 'active-student', label: 'Most Active Student of the Year' },
  { key: 'female-tiktoker', label: 'Best Female TikToker' },
  { key: 'most-intelligent', label: 'Most Intelligent of the Year' },
  { key: 'black-bold', label: 'Black, Bold and Beautiful' },
  { key: 'most-loyal-year', label: 'Most Loyal Student of the Year' },
  { key: 'fresher-year', label: 'Fresher of the Year' },
  { key: 'satisfactory-brand', label: 'Best Satisfactory Brand of the Year' },
  { key: 'social-director', label: 'Outstanding Social Director of the Year' },
  { key: 'rising-star', label: 'Rising Star Award' },
  { key: 'unsung-hero', label: 'Unsung Hero Award' },
  { key: 'reserved-mf', label: 'Most Reserved Male/Female' },
  { key: 'mr-mrs-fresher', label: 'Mr & Mrs Fresher ND1' },
  { key: 'supportive-president', label: 'Most Supportive President' },
  { key: 'outstanding-student', label: 'Most Outstanding Student MF' },
  { key: 'political-ambassador', label: 'Political Ambassador' },
  { key: 'most-supportive', label: 'Most Supportive of the Year' },
  { key: 'most-elegant', label: 'Most Elegant of the Year' },
  { key: 'popular-fresher', label: 'Most Popular Fresher ND1' },
  { key: 'best-baby', label: 'Best Baby of the Year MF' },
  { key: 'most-outspoken', label: 'Most Outspoken' },
  { key: 'best-president', label: 'Best President of the Year' },
  { key: 'beautiful-student', label: 'Best Beautiful Student' },
  { key: 'expensive-lady', label: 'Most Expensive Lady' },
  { key: 'best-brand-mf', label: 'Best Brand Male/Female' },
  { key: 'dressed-mf', label: 'Dressed Male/Female' },
  { key: 'student-year', label: 'Student of the Year' },
  { key: 'alumni-year', label: 'Alumni of the Year' },
  { key: 'influential-ambassador', label: 'Most Influential Student Ambassador' },
  { key: 'indigenous-president', label: 'Indigenous President of the Year' },
  { key: 'active-indigenous', label: 'Most Active Indigenous President' },
  { key: 'innovative-leader', label: 'Innovative Student Leader of the Year' },
  { key: 'vibrant-executive', label: 'Most Vibrant Executive of the Year' },
  { key: 'businessman-woman', label: 'Businessman and Woman of the Year' },
  { key: 'loyal-fresher', label: 'Most Loyal Fresher Male/Female of the Year' },
  { key: 'graduating-couple', label: 'Best Graduating Couple of the Year' },
  { key: 'miss-poly', label: 'Miss Poly' },
  { key: 'handwriter-fm', label: 'Best Handwriter of the Year FM' },
  { key: 'football-striker', label: 'Best Football Striker of the Year' },
  { key: 'lecturer-year', label: 'Lecturer of the Year' },
  { key: 'freestyler', label: 'Best Freestyler Rap/Poetry' },
  { key: 'most-punctual', label: 'Most Punctual' },
  { key: 'most-photogenic', label: 'Most Photogenic' },
  { key: 'stylish-couple', label: 'Most Stylish Couple' },
  { key: 'best-comedian', label: 'Best Comedian of the Year' }
];

let nominees = [
  { id: 1, name: 'Chidera Eze', cat: 'reserved', dept: 'Computer Science 400L', bio: 'Calm, collected, and deeply respected by peers.', votes: 220, img: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 2, name: 'Fatima Bello', cat: 'vocalist', dept: 'Mass Comm 300L', bio: 'Powerful voice and strong stage presence.', votes: 410, img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, name: 'Ibrahim Sule', cat: 'most-popular', dept: 'Physics 200L', bio: 'Known across campus for community engagement.', votes: 180, img: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 4, name: 'Ngozi Chukwu', cat: 'most-beautiful', dept: 'Business Admin 400L', bio: 'Elegant, confident, and admired by many.', votes: 95, img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { id: 5, name: 'Daniel Okafor', cat: 'active-comrade', dept: 'Political Science 300L', bio: 'Always present and active in student matters.', votes: 260, img: 'https://randomuser.me/api/portraits/men/33.jpg' },
  { id: 6, name: 'Sade Ola', cat: 'most-elegant', dept: 'Theatre Arts 200L', bio: 'A stylish and graceful campus personality.', votes: 305, img: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { id: 7, name: 'Tunde Babs', cat: 'best-classrep', dept: 'Microbiology 400L', bio: 'Responsible and always available for the class.', votes: 190, img: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { id: 8, name: 'Kemi Ade', cat: 'content-creator', dept: 'Mass Comm 200L', bio: 'Creates engaging and creative student content.', votes: 145, img: 'https://randomuser.me/api/portraits/women/54.jpg' },
  { id: 9, name: 'Emeka Nwosu', cat: 'sportsman', dept: 'Law 300L', bio: 'Fast, disciplined, and a great team player.', votes: 280, img: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { id: 10, name: 'Amaka Obi', cat: 'female-dressed', dept: 'Architecture 400L', bio: 'Consistently impressive fashion sense.', votes: 175, img: 'https://randomuser.me/api/portraits/women/72.jpg' }
];

let activeCat = 'all';
let activeLbCat = 'all';
let activeAdminTab = 'nominees';
let selectedNominee = null;
let isAdmin = false;

function $(s) { return document.querySelector(s); }
function $$(s) { return Array.from(document.querySelectorAll(s)); }

function catLabel(key) {
  const c = categories.find(x => x.key === key);
  return c ? c.label : key;
}

function setActivePage(page) {
  $$('.tab').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href.includes(page + '.html') || (page === 'home' && href.includes('index.html')));
  });
}

function updateHomeStats() {
  const totalVotes = nominees.reduce((sum, n) => sum + n.votes, 0);
  const v = $('#homeVotes');
  const n = $('#homeNominees');
  const c = $('#homeCats');
  if (v) v.textContent = totalVotes.toLocaleString();
  if (n) n.textContent = nominees.length;
  if (c) c.textContent = categories.length;
}

function tabs(container, active, handler, allText) {
  if (!container) return;
  container.innerHTML =
    `<button class="pill ${active === 'all' ? 'active' : ''}" data-key="all">${allText}</button>` +
    categories.map(c => `<button class="pill ${active === c.key ? 'active' : ''}" data-key="${c.key}">${c.label}</button>`).join('');
  container.querySelectorAll('button').forEach(btn => btn.onclick = () => handler(btn.dataset.key));
}

function renderVotePage() {
  const tabsEl = $('#voteTabs');
  const grid = $('#voteGrid');
  if (!tabsEl || !grid) return;

  tabs(tabsEl, activeCat, k => { activeCat = k; renderVotePage(); }, 'All Categories');

  const list = activeCat === 'all' ? nominees : nominees.filter(n => n.cat === activeCat);
  grid.innerHTML = list
    .sort((a, b) => b.votes - a.votes)
    .map(n => {
      const pct = Math.min(100, Math.round(n.votes / 300 * 100));
      return `
        <div class="card nominee">
          <img src="${n.img}" onerror="this.src='https://randomuser.me/api/portraits/lego/1.jpg'">
          <div class="body">
            <div class="name">${n.name}</div>
            <div class="meta">${catLabel(n.cat)} • ${n.dept}</div>
            <div class="meta">${n.bio || ''}</div>
            <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
            <button class="vote-btn" onclick="openVote(${n.id})">Vote for ${n.name.split(' ')[0]}</button>
          </div>
        </div>
      `;
    }).join('') || '<p class="muted">No nominees in this category.</p>';

  const closeBtn = $('#closeVoteModal');
  const submitBtn = $('#submitVote');

  if (closeBtn && !closeBtn.dataset.bound) {
    closeBtn.dataset.bound = '1';
    closeBtn.onclick = () => $('#voteModalBg').classList.remove('open');
  }

  if (submitBtn && !submitBtn.dataset.bound) {
    submitBtn.dataset.bound = '1';
    submitBtn.onclick = () => {
      const qty = +$('#voteQty').value || 1;
      const total = qty * 50;
      $('#voteInfo').textContent = `${qty} votes selected. Total: ₦${total.toLocaleString()}. Payment method: ${$('#payMethod').value}.`;
    };
  }
}

function renderLeaderboardPage() {
  const tabsEl = $('#lbTabs');
  const body = $('#lbBody');
  if (!tabsEl || !body) return;

  tabs(tabsEl, activeLbCat, k => { activeLbCat = k; renderLeaderboardPage(); }, 'All Categories');

  const list = activeLbCat === 'all' ? nominees : nominees.filter(n => n.cat === activeLbCat);
  body.innerHTML = list
    .sort((a, b) => b.votes - a.votes)
    .map((n, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${n.name}</td>
        <td>${catLabel(n.cat)}</td>
        <td>${n.votes.toLocaleString()}</td>
        <td>${n.votes >= 300 ? '<span style="color:var(--success)">Qualified</span>' : '<span style="color:var(--gold)">Pending</span>'}</td>
      </tr>
    `).join('') || '<tr><td colspan="5" class="muted">No nominees yet.</td></tr>';
}

function openVote(id) {
  selectedNominee = nominees.find(n => n.id === id);
  $('#modalTitle').textContent = 'Vote for ' + selectedNominee.name;
  $('#voteInfo').textContent = 'Price per vote: ₦50';
  $('#voteModalBg').classList.add('open');
}

function initAdminPage() {
  const loginBtn = $('#loginBtn');
  const logoutBtn = $('#logoutBtn');
  const loginMsg = $('#loginMsg');

  function renderAdmin() {
    const totalVotes = nominees.reduce((sum, n) => sum + n.votes, 0);
    $('#admVotes').textContent = totalVotes.toLocaleString();
    $('#admNominees').textContent = nominees.length;
    $('#admCats').textContent = categories.length;

    const nomineesBody = $('#adminNominees');
    if (nomineesBody) {
      nomineesBody.innerHTML = nominees.map(n => `
        <tr>
          <td>${n.name}</td>
          <td>${catLabel(n.cat)}</td>
          <td>${n.votes.toLocaleString()}</td>
        </tr>
      `).join('');
    }

    renderAdminTabs();
  }

  function renderAdminTabs() {
    const tabsWrap = $('#adminTabs');
    const section = $('#adminTabContent');
    if (!tabsWrap || !section) return;

    const tabButtons = [
      { key: 'nominees', label: 'Nominees' },
      { key: 'categories', label: 'Categories' },
      { key: 'transactions', label: 'Transactions' },
      { key: 'settings', label: 'Settings' }
    ];

    tabsWrap.innerHTML = tabButtons.map(t => `
      <button class="pill ${activeAdminTab === t.key ? 'active' : ''}" data-key="${t.key}">${t.label}</button>
    `).join('');

    tabsWrap.querySelectorAll('button').forEach(btn => {
      btn.onclick = () => {
        activeAdminTab = btn.dataset.key;
        renderAdmin();
      };
    });

    if (activeAdminTab === 'nominees') {
      section.innerHTML = `
        <section class="section card content">
          <h2>Nominees</h2>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Name</th><th>Category</th><th>Votes</th></tr></thead>
              <tbody id="adminNominees">${nominees.map(n => `
                <tr>
                  <td>${n.name}</td>
                  <td>${catLabel(n.cat)}</td>
                  <td>${n.votes.toLocaleString()}</td>
                </tr>
              `).join('')}</tbody>
            </table>
          </div>
        </section>
      `;
    } else if (activeAdminTab === 'categories') {
      section.innerHTML = `
        <section class="section card content">
          <h2>Categories</h2>
          <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">
            ${categories.map(c => `
              <div class="card" style="padding:16px">
                <div style="font-weight:800">${c.label}</div>
                <div class="muted">${c.key}</div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    } else if (activeAdminTab === 'transactions') {
      section.innerHTML = `
        <section class="section card content">
          <h2>Transactions</h2>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Ref</th><th>Voter</th><th>Nominee</th><th>Votes</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>TXN-001</td><td>Amaka Obi</td><td>Chidera Eze</td><td>50</td><td>₦2,500</td><td>Success</td></tr>
                <tr><td>TXN-002</td><td>Emeka Nwosu</td><td>Fatima Bello</td><td>100</td><td>₦5,000</td><td>Success</td></tr>
                <tr><td>TXN-003</td><td>Kemi Ade</td><td>Ibrahim Sule</td><td>20</td><td>₦1,000</td><td>Pending</td></tr>
                <tr><td>TXN-004</td><td>Tunde Babs</td><td>Ngozi Chukwu</td><td>200</td><td>₦10,000</td><td>Success</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      `;
    } else if (activeAdminTab === 'settings') {
      section.innerHTML = `
        <section class="section card content">
          <h2>Settings</h2>
          <div class="form-group"><label class="label">Price Per Vote</label><input class="input" type="number" value="50"></div>
          <div class="form-group"><label class="label">Qualification Threshold</label><input class="input" type="number" value="300"></div>
          <div class="form-group"><label class="label">Voting Closes At</label><input class="input" type="datetime-local"></div>
          <div class="form-group"><label class="label">Public Leaderboard</label><select class="input"><option>Visible to everyone</option><option>Hidden until voting ends</option><option>Admins only</option></select></div>
          <div class="form-group"><label class="label">Payment Gateway</label><select class="input"><option>Paystack</option><option>Monnify</option><option>Both</option></select></div>
          <button class="primary">Save Settings</button>
        </section>
      `;
    }
  }

  function toggleAdminView() {
    const loginBox = $('#adminLoginBox');
    const panel = $('#adminPanel');
    if (loginBox) loginBox.classList.toggle('hidden', isAdmin);
    if (panel) panel.classList.toggle('hidden', !isAdmin);
    if (isAdmin) renderAdmin();
  }

  if (loginBtn && !loginBtn.dataset.bound) {
    loginBtn.dataset.bound = '1';
    loginBtn.onclick = () => {
      const u = $('#adminUser').value.trim();
      const p = $('#adminPass').value;
      if (u === 'admin' && p === 'admin123') {
        isAdmin = true;
        loginMsg.textContent = 'Login successful.';
        toggleAdminView();
      } else {
        loginMsg.textContent = 'Invalid username or password.';
      }
    };
  }

  if (logoutBtn && !logoutBtn.dataset.bound) {
    logoutBtn.dataset.bound = '1';
    logoutBtn.onclick = () => {
      isAdmin = false;
      toggleAdminView();
      loginMsg.textContent = 'Logged out.';
    };
  }

  toggleAdminView();
}

window.setActivePage = setActivePage;
window.updateHomeStats = updateHomeStats;
window.renderVotePage = renderVotePage;
window.renderLeaderboardPage = renderLeaderboardPage;
window.initAdminPage = initAdminPage;
window.openVote = openVote;
window.catLabel = catLabel;

updateHomeStats();
