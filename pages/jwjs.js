document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to button
    const button = document.querySelector(".scroll-btn");
    button.addEventListener("click", function() {
      // Get the target section's ID from the data attribute
      const targetId = this.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);
  
      // Scroll to the target section smoothly
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    });
  });



  