const elem = document.getElementById('searchInput')

function Search(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'https://www.google.com/search?q=' + elem.value;
    }
  }
function SearchBtn(){
    if(!elem.value) return;
    window.location = 'https://www.google.com/search?q=' + elem.value;

    
}
elem.addEventListener("keyup", Search); 

function redirectToGoogleSignIn() {
  window.location.href = "https://accounts.google.com/signin";
}

function changeLanguage(langCode) {
  // Google Translate API use karne ke liye
  let googleTranslateURL = `https://translate.google.com/?sl=auto&tl=${langCode}&op=translate`;
  
  // Page ko naye language ke saath reload karne ke liye
  window.location.href = googleTranslateURL;
}

function toggleMenu() {
  let menu = document.getElementById("menuDropdown");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
}

// Menu ko close karne ke liye
document.addEventListener("click", function (event) {
  let menu = document.getElementById("menuDropdown");
  let icon = document.querySelector("img[alt='Menu']");

  if (!menu.contains(event.target) && event.target !== icon) {
      menu.style.display = "none";
  }
});




