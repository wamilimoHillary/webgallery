"use strict";

/* script to display and hide the navgation links on small devices*/
function toggle_nav() {
  var nav = document.getElementById('nav');
  var navBtn = document.getElementById('nav-btn');

  if (nav.style.display === 'flex') {
    nav.style.display = 'none'; // Hide the navigation

    navBtn.innerHTML = '<i class="fa fa-bars"></i>'; // Change toggle button to bars icon
  } else {
    nav.style.display = 'flex'; // Display the navigation

    nav.style.visibility = 'visible'; // make nav visible

    navBtn.innerHTML = '<i class="fa fa-times"></i>'; // Change toggle button to times (x) icon
  }
}
//# sourceMappingURL=script.dev.js.map
