const site = window.PITA_SITE;

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"/>',
    mail: '<path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
};

function renderLocations() {
  const today = new Date().getDay();
  const current = site.locations.find((item) => item.dayIndex === today);
  const location = document.querySelector('#today-location');
  const meta = document.querySelector('#today-meta');
  const route = document.querySelector('#route-button');

  if (current) {
    location.textContent = current.location;
    meta.textContent = `${current.day} · ${current.time}${current.address ? ` · ${current.address}` : ''}`;
    if (current.mapsUrl) {
      route.href = current.mapsUrl;
      route.classList.remove('is-hidden');
    }
  } else {
    location.textContent = 'Heute kein regulärer Standort';
    meta.textContent = 'Events und Sondertermine findest du auf Instagram.';
  }

  document.querySelector('#schedule').innerHTML = site.locations.map((item) => `
    <article class="schedule-item${item.dayIndex === today ? ' is-today' : ''}">
      <span class="day">${item.day.slice(0, 2)}</span>
      <div><h3>${item.day}</h3><p>${item.location}<br>${item.address}</p></div>
      <time>${item.time}</time>
      <a class="route-link" href="${item.mapsUrl}" target="_blank" rel="noopener" aria-label="Route zu ${item.location}, ${item.address} in Google Maps öffnen">Route ${icon('arrow')}</a>
    </article>
  `).join('');
}

function renderMenu() {
  document.querySelector('#menu-content').innerHTML = site.menu.map((group) => `
    <section class="menu-group">
      <h3>${group.title}</h3>
      <div class="menu-items">
        ${group.items.map((item) => `
          <article class="menu-item">
            <div>
              <h4>${item.name}${item.vegetarian ? '<span class="veggie">V</span>' : ''}</h4>
              <p>${item.note}</p>
            </div>
            <strong>${item.price || 'offen'}</strong>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function renderContact() {
  const links = [];
  if (site.contact.phone) {
    links.push(`<a href="tel:${site.contact.phoneHref}">${icon('phone')}<span><small>Telefon</small>${site.contact.phone}</span>${icon('arrow')}</a>`);
  }
  if (site.contact.email) {
    links.push(`<a href="mailto:${site.contact.email}">${icon('mail')}<span><small>E-Mail</small>${site.contact.email}</span>${icon('arrow')}</a>`);
  }
  links.push(`<a href="${site.contact.instagram}" target="_blank" rel="noopener">${icon('instagram')}<span><small>Instagram</small>${site.contact.instagramLabel}</span>${icon('arrow')}</a>`);
  if (!site.contact.email) {
    links.push('<div class="contact-missing"><small>E-Mail</small><span>Adresse vor Veröffentlichung ergänzen</span></div>');
  }
  document.querySelector('#contact-links').innerHTML = links.join('');
}

function setupNavigation() {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
}

renderLocations();
renderMenu();
renderContact();
setupNavigation();
document.querySelector('#year').textContent = new Date().getFullYear();
