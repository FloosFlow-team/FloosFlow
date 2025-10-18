const links = document.querySelectorAll('.side-bar a');

links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove "active" from all links
    links.forEach(l => l.classList.remove('active'));
    // Add "active" to the clicked one
    link.classList.add('active');
  });
});
