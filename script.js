document.getElementById("purchase-button").addEventListener("click", async function() {
  console.log("Purchase button clicked"); // Debug line
  const payload = {
      title: "zGen Key",
      product_id: "66ae2bde64ba8",
      paypal_apm: "credit",
      white_label: false,
      return_url: "https://carlosdadmauvictoria.github.io/nigga/",
      email: "itsanimecrack@gmail.com",
      value: 1.5,
      cart: {
          products: [
              {
                  uniqid: "66ae2bde64ba8",
                  unit_quantity: 1
              }
          ]
      }
  };

  const headers = {
      "Authorization": "Bearer G50e5eqg4w5QHujvqabyGjbPMH5m5Bmwb7m0MgjFvtQHIwKwk3Vy9K8gZXvoI6qy",
      "X-Sellix-Merchant": "zunknownna",
      "Content-Type": "application/json"
  };

  try {
      const response = await fetch("https://dev.sellix.io/v1/payments", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log("API Response:", data); // Debug line

      if (response.ok && data.status === 'success') {
          console.log("Payment created successfully:", data);
          window.location.href = data.data.url; // Redirect to payment page
      } else {
          console.error("Payment error:", data);
          alert('Error creating payment: ' + (data.message || 'Unknown error'));
      }
  } catch (error) {
      console.error("Error creating payment:", error);
      alert('There was an error processing your payment. Please try again later.');
  }
});
