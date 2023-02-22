function myFunction() {
    var txt;
    if (confirm("Kindly fill the details in home page to contact you!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }