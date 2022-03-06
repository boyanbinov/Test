
var input = document.getElementById("num_value");
input.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("start").click();
    }
});