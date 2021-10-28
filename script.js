function submit(){
    
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("eml").value;
        document.getElementById("msg").innerHTML += userName + ", thank you for your details. We will be in touch via \"" + userEmail + "\" shortly.";
    hide()

}


function hide(){
       document.getElementById("form1").style.display = "none";
}

