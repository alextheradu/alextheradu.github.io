function checkPassword() {
    var password = prompt("Please enter the password:");
    if (password === "yourPassword") {
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password!");
        window.location.href = "https://www.example.com"; // Redirect to another page
    }
}
window.onload = checkPassword;