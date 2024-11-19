function ReloadNavBar(){
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
}
document.addEventListener("DOMContentLoaded", function() {
    ReloadNavBar();
});