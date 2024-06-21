document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageBox = document.getElementById('messageBox');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        messageBox.textContent = 'Form submitted successfully!';
        messageBox.style.color = 'green';
        form.reset();
      } catch (error) {
        messageBox.textContent = 'There was a problem with the submission.';
        messageBox.style.color = 'red';
      }
    });
  
    form.addEventListener('input', (event) => {
      if (event.target.validity.valid) {
        event.target.style.borderColor = 'green';
      } else {
        event.target.style.borderColor = 'red';
      }
    });
  });
  