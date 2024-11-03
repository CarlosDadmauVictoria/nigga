async function makePurchase() {
    const apiKey = "ccTEp1lwUpIH0tauZIM8KE3JuU7vvXzR6qbTrN2VTORiOknxpBtJ2uuok7G8VAYM"; // Replace with your Sellix API Key
    const productId = "66ae2bde64ba8"; // Replace with your actual product ID
  
    const response = await fetch('https://dev.sellix.io/v1/products/' + productId + '/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        currency: 'USD',
        quantity: 1,
        // You can add more fields here if needed
      })
    });
  
    const data = await response.json();
  
    if (data.status === 'success') {
      // Redirect to the Sellix checkout page
      window.location.href = data.data.url; // URL to redirect for payment
    } else {
      // Handle error
      alert('Error creating payment: ' + data.message);
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
