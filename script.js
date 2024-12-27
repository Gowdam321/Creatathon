// Example JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
  });
  
  // Handling Portfolio Creation and Preview
  document.getElementById('template').addEventListener('change', function() {
    let selectedTemplate = this.value;
    // Handle template change logic here
  });
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let bio = document.getElementById('bio').value;
    let projects = document.getElementById('projects').value;
    
    localStorage.setItem('bio', bio);
    localStorage.setItem('projects', projects);
    window.location.href = 'preview.html';
  });
  
  if (window.location.href.includes('preview.html')) {
    document.getElementById('bioPreview').textContent = localStorage.getItem('bio');
    document.getElementById('projectsPreview').textContent = localStorage.getItem('projects');
  }
  