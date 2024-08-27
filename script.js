function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var main = document.getElementById("main");

  if (sidebar.style.transform === "translateX(0px)") {
      sidebar.style.transform = "translateX(-250px)";
      main.style.marginLeft = "0";
  } else {
      sidebar.style.transform = "translateX(0px)";
      main.style.marginLeft = "250px";
  }
}

function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-container');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}
