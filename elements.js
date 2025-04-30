/// SIDEBAR MENU
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById("sidebar");
    var menuButton = document.querySelector(".menu-btn");
    
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});


/// TEXT FIELD
document.querySelectorAll("textarea").forEach(textarea => {
    textarea.addEventListener("click", function() {
        navigator.clipboard.writeText(this.value).then(() => {
            setTimeout(() => this.style.backgroundColor = "#d4edda", 0);
            setTimeout(() => this.style.backgroundColor = "", 150);
            setTimeout(() => this.style.backgroundColor = "#d4edda", 300);
            setTimeout(() => this.style.backgroundColor = "", 450);
        }).catch(err => {
            alert("Failed to copy text: ", err);
        });
    });
});