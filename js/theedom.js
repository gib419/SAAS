document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqContainer = document.querySelector('.faq-content');
  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    groupBody.classList.toggle('open');

    faqContainer.querySelectorAll('.faq-group').forEach((otherGroup) => {
      if (otherGroup !== group) {
        otherGroup.querySelector('.faq-group-body').classList.remove('open');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });

  // Mobile Menu
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});