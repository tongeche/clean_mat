document.addEventListener('DOMContentLoaded', function () {
    // Select all accordion header elements
    const accordionHeaders = document.querySelectorAll('[data-accordion-header]');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Get the parent accordion item
            const accordionItem = this.closest('[data-accordion-item]');
            // Get the content and icon within this item
            const accordionContent = accordionItem.querySelector('[data-accordion-content]');
            const accordionIcon = this.querySelector('i');

            // Toggle the 'hidden' class on the content
            accordionContent.classList.toggle('hidden');

            // Toggle the icon: fa-plus to fa-minus, and rotate for visual effect
            if (accordionContent.classList.contains('hidden')) {
                // Content is hidden, show plus icon
                accordionIcon.classList.remove('fa-minus', 'rotate-45');
                accordionIcon.classList.add('fa-plus');
            } else {
                // Content is visible, show minus icon
                accordionIcon.classList.remove('fa-plus');
                accordionIcon.classList.add('fa-minus', 'rotate-45'); // Adding rotate-45 for an 'X' effect
            }

            // Optional: Close other open accordion items
            // This is useful if you only want one item open at a time
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling; // Assuming content is the next sibling
                    const otherIcon = otherHeader.querySelector('i');

                    if (!otherContent.classList.contains('hidden')) {
                        otherContent.classList.add('hidden');
                        otherIcon.classList.remove('fa-minus', 'rotate-45');
                        otherIcon.classList.add('fa-plus');
                    }
                }
            });
        });
    });
});
// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked (added this for better UX)
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});