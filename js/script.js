function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');
  
  // Show selected page
  document.getElementById(pageId).style.display = 'block';
}

function filterSchedule() {
  const location = document.getElementById('locationFilter').value.toLowerCase();
  const classType = document.getElementById('classFilter').value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");
  
  rows.forEach(row => {
    const loc = row.children[3].textContent.toLowerCase();
    const cls = row.children[2].textContent.toLowerCase();
    const show = (!location || loc.includes(location)) && (!classType || cls.includes(classType));
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