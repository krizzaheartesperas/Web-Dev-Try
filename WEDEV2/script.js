const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
document.addEventListener("DOMContentLoaded", function() {
  const htmlAttributesButton = document.getElementById("htmlAttributesButton");
  const rectangle = document.querySelector(".rectangle");

  htmlAttributesButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Toggle the visibility of the rectangle
    if (rectangle.style.display === "block") {
      rectangle.style.display = "none";
    } else {
      rectangle.style.display = "block";
    }
  });
});
