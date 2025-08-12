function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');
  
  // Show selected page
  document.getElementById(pageId).style.display = 'block';
  
  // Set default filters when showing schedule page
  if (pageId === 'schedule') {
    setDefaultFilters();
  }
}

function setDefaultFilters() {
  // Set location filter to Natick
  const locationFilter = document.getElementById('locationFilter');
  if (locationFilter) {
    locationFilter.value = 'Natick';
  }
  
  // Set class filter to All (empty value)
  const classFilter = document.getElementById('classFilter');
  if (classFilter) {
    classFilter.value = '';
  }
  
  // Apply the filters
  filterSchedule();
}

// Set default filters when page loads
document.addEventListener('DOMContentLoaded', function() {
  setDefaultFilters();
});

// Ensure Schedule shows with defaults when clicking the nav link
const scheduleLink = document.querySelector('a[href="#schedule"]');
if (scheduleLink) {
  scheduleLink.addEventListener('click', () => {
    // showPage already runs; just re-apply defaults after the page is visible
    setTimeout(setDefaultFilters, 0);
  });
}

// normalize text: lowercase, collapse spaces, convert all dash variants to '-'
const norm = s => (s || '')
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\u2043\uFE58\uFE63\uFF0D]/g, '-') // all hyphen/dash types
  .replace(/\s+/g, ' ')
  .trim();

function filterSchedule() {
  const location = norm(document.getElementById('locationFilter').value);
  const classType = norm(document.getElementById('classFilter').value);
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const loc = norm(row.children[3].textContent);
    const cls = norm(row.children[2].textContent);
    const show = (!location || loc.includes(location)) &&
                 (!classType || cls.includes(classType));
    row.style.display = show ? '' : 'none';
  });
}

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill in all fields.');
  }
}
