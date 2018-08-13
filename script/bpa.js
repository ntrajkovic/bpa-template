// ************************************************************
// Belgrade Philosophical Annual,
// JavaScript functionality, ver. 1.0
// Implemented (I) Nenad Trajkovic (nenad.trajkovic@gmail.com)
// ************************************************************

function openSidebar() {
  document.getElementById("bpa-sidebar").style.display = "block";
  document.getElementById("sidebar-overlay").style.display = "block";
}

function closeSidebar() {
  document.getElementById("bpa-sidebar").style.display = "none";
  document.getElementById("sidebar-overlay").style.display = "none";
}

function toggleAccordion(id) {

  // w3-grey should match w3-hover-grey in html files

  var a = document.getElementById(id);
  if (a.className.indexOf("w3-show") == -1) {
    a.className += " w3-show";
    a.previousElementSibling.className += " w3-grey";
  } else {
    a.className = a.className.replace(" w3-show", "");
    a.previousElementSibling.className =
      a.previousElementSibling.className.replace(" w3-grey", "");
  }
}
