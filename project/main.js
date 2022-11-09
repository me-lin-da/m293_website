function toggleText() {
    
    var points = 
        document.getElementById("points");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("textButton");

    if (points.style.display === "none") {

        showMoreText.style.display = "none";

        points.style.display = "inline";

        buttonText.innerHTML = "Show More";
    }

    else {

        showMoreText.style.display = "inline";

        points.style.display = "none";

        buttonText.innerHTML = "Show Less";
    }
}
function toggleTextHibike() {
          
    var points = 
        document.getElementById("pointsHibike");

    var showMoreText =
        document.getElementById("moreTextHibike");

    var buttonText =
        document.getElementById("textButtonHibike");

    if (points.style.display === "none") {

        showMoreText.style.display = "none";

        points.style.display = "inline";

        buttonText.innerHTML = "Show More";
    }

    else {
        showMoreText.style.display = "inline";

        points.style.display = "none";

        buttonText.innerHTML = "Show Less";
    }
}
function toggleTextYN() {
          
    var points = 
        document.getElementById("pointsYN");

    var showMoreText =
        document.getElementById("moreTextYN");

    var buttonText =
        document.getElementById("textButtonYN");

    if (points.style.display === "none") {

        showMoreText.style.display = "none";

        points.style.display = "inline";

        buttonText.innerHTML = "Show More";
    }

    else {
        showMoreText.style.display = "inline";

        points.style.display = "none";

        buttonText.innerHTML = "Show Less";
    }
}
function toggleTextApril() {
    
    var points = 
        document.getElementById("pointsApril");

    var showMoreText =
        document.getElementById("moreTextApril");

    var buttonText =
        document.getElementById("textButtonApril");

    if (points.style.display === "none") {

        showMoreText.style.display = "none";

        points.style.display = "inline";

        buttonText.innerHTML = "Show More";
    }

    else {

        showMoreText.style.display = "inline";

        points.style.display = "none";

        buttonText.innerHTML = "Show Less";
    }
}
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  