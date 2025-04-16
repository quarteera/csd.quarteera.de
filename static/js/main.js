const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');
  const body = document.querySelector('.body');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    openIcon.classList.toggle('disable');
    closeIcon.classList.toggle('disable');
    body.classList.toggle('disable-overflow');
  })
}
const selectLanguage = () => {
  const languageSelector = document.querySelector('.desktop-language');
  const popup = document.querySelector('.language-popup');
  const icon = document.querySelector('.language-open');

  languageSelector.addEventListener('click', () => {
    popup.classList.toggle('disable');
    icon.classList.toggle('rotate');
  })
}
// disable animation on page load:
// https://stackoverflow.com/questions/22222810/disable-css-transitions-on-page-load-only
document.body.classList.remove('preload');


const loadAnalytics = () => {
  function gtag(arguments) {
    console.log("gtag", arguments, window.dataLayer)
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', gtag);
  gtag('consent', 'default', {
    'analytics_storage': 'granted'
  });
  gtag('event', 'page_view_consent', { 'page_details' : 'Marzahn Pride Cookie Consent' });
};


const consentCookie = () => {
  const banner = document.getElementById("cookie-consent-banner");
  const acceptBtn = document.getElementById("cookie-consent-accept");
  const declineBtn = document.getElementById("cookie-consent-decline");

  if (!localStorage.getItem("cookieConsent")) {
    banner.style.display = "block";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadAnalytics()
  });

  declineBtn.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";
  });

}

navSlide();
selectLanguage();

document.addEventListener("DOMContentLoaded", consentCookie);
