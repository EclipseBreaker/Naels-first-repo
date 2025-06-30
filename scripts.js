// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the bio text element by its ID
    const bioText = document.getElementById('bio-text');
    // Get the contact button element by its ID
    const contactButton = document.getElementById('contact-button');
    // Get the contact info section element by its ID
    const contactInfoSection = document.getElementById('contact-info-section');
  
    // Check if the bio text element exists
    if (bioText) {
        // Add a click event listener to the bio text
        bioText.addEventListener('click', () => {
            // Toggle a class to change its appearance on click
            bioText.classList.toggle('font-bold');
            bioText.classList.toggle('text-xl');
            bioText.classList.toggle('text-purple-900'); // Make it darker purple
  
            // Remove the added classes after a short delay to revert the effect
            setTimeout(() => {
                bioText.classList.remove('font-bold');
                bioText.classList.remove('text-xl');
                bioText.classList.remove('text-purple-900');
            }, 500); // Revert after 500 milliseconds (0.5 seconds)
  
            console.log("Bio text clicked!");
        });
    } else {
        console.error("Bio text element not found!");
    }
  
    // Check if the contact button and info section elements exist
    if (contactButton && contactInfoSection) {
        // Add a click event listener to the contact button
        contactButton.addEventListener('click', () => {
            // Check if the contact info section is currently hidden
            if (contactInfoSection.classList.contains('hidden')) {
                // If it's hidden, we want to show it
                // 1. Remove the 'hidden' class immediately so display:block is applied
                contactInfoSection.classList.remove('hidden');
  
                // 2. Force a reflow (browser repaint) to ensure 'display:block' is applied
                //    before we start the transition from opacity-0.
                void contactInfoSection.offsetWidth; // This is a common trick for reflow
  
                // 3. After a very short delay, remove the initial transition classes
                //    and add the classes for the visible state.
                setTimeout(() => {
                    contactInfoSection.classList.remove('opacity-0', 'scale-95');
                    contactInfoSection.classList.add('opacity-100', 'scale-100');
                }, 10); // A small delay (e.g., 10ms) allows the browser to apply display:block
            } else {
                // If it's visible, we want to hide it
                // 1. Start the transition to the hidden state (opacity-0, scale-95)
                contactInfoSection.classList.remove('opacity-100', 'scale-100');
                contactInfoSection.classList.add('opacity-0', 'scale-95');
  
                // 2. After the transition completes (duration-300 = 300ms),
                //    add the 'hidden' class to completely remove it from layout.
                setTimeout(() => {
                    contactInfoSection.classList.add('hidden');
                }, 300); // Match this timeout with the CSS transition duration (duration-300)
            }
  
            console.log("Contact button clicked!");
        });
    } else {
        console.error("Contact button or contact info section element not found!");
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const bio = document.getElementById('bio');
    const button = document.getElementById('toggleButton');
  
    button.addEventListener('click', () => {
      // Toggle background color for fun effect
      bio.classList.toggle('highlight');
      bio.textContent = bio.classList.contains('highlight')
        ? "You're awesome for checking this out! Keep learning and building 🚀"
        : "I'm an aspiring web developer passionate about creating engaging, user-friendly digital experiences. I enjoy learning new technologies, bringing ideas to life through code, reading, hiking, and exploring new places.";
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Select all section headers
    const headers = document.querySelectorAll('.section-header h2');
  
    headers.forEach(header => {
      // Add hover effect using JS (optional enhancement)
      header.addEventListener('mouseenter', () => {
        header.style.color = '#6610f2'; // Change to a vibrant purple
        header.style.transform = 'scale(1.05)';
        header.style.transition = 'all 0.3s ease';
      });
  
      header.addEventListener('mouseleave', () => {
        header.style.color = '#007bff'; // Back to original blue
        header.style.transform = 'scale(1)';
      });
  
      // Optional: Click to log which section was clicked
      header.addEventListener('click', () => {
        console.log(`You clicked the ${header.textContent} section!`);
        alert(`Welcome to the ${header.textContent} section!`);
      });
    });
  });
    