document.body.onload = setBGColor;

function setBGColor() {
    const form = document.getElementsByClassName("form-wrapper");
    const descendants = form.querySelectorAll("*");
    document.body.style.backgroundColor = "green";
    
}

