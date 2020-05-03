function show() {
  var x = document.getElementById("primary-menu");
  if (x.className === "menu") {
    x.className += " show";
  } else {
    x.className = "menu";
  }
}

//Footer Color Change

//Insta Logo

function instafooter() {

  var x = document.getElementById("footer1");
  if (x.className === "footer-logo") {
    x.className += " insta";
  } else {
    x.className = "footer-logo";
  }

  var x = document.getElementById("footer2");
  if (x.className === "footer-social") {
    x.className += " insta";
  } else {
    x.className = "footer-social";
  }

  var x = document.getElementById("footer3");
  if (x.className === "footer-content") {
    x.className += " insta";
  } else {
    x.className = "footer-content";
  }

}

//Facebook Logo

function facebookfooter() {

  var x = document.getElementById("footer1");
  if (x.className === "footer-logo") {
    x.className += " facebook";
  } else {
    x.className = "footer-logo";
  }

  var x = document.getElementById("footer2");
  if (x.className === "footer-social") {
    x.className += " facebook";
  } else {
    x.className = "footer-social";
  }

  var x = document.getElementById("footer3");
  if (x.className === "footer-content") {
    x.className += " facebook";
  } else {
    x.className = "footer-content";
  }

}

//Twitter Logo

function twitterfooter() {

  var x = document.getElementById("footer1");
  if (x.className === "footer-logo") {
    x.className += " twitter";
  } else {
    x.className = "footer-logo";
  }

  var x = document.getElementById("footer2");
  if (x.className === "footer-social") {
    x.className += " twitter";
  } else {
    x.className = "footer-social";
  }

  var x = document.getElementById("footer3");
  if (x.className === "footer-content") {
    x.className += " twitter";
  } else {
    x.className = "footer-content";
  }

}

//Normal

function normalfooter() {

  var x = document.getElementById("footer1");
  if (x.className === "footer-logo insta") {
    x.className = "footer-logo";
  } else {
    x.className = "footer-logo";
  }

  var x = document.getElementById("footer2");
  if (x.className === "footer-social insta") {
    x.className = "footer-social";
  } else {
    x.className = "footer-social";
  }
   
  var x = document.getElementById("footer3");
  if (x.className === "footer-content insta") {
    x.className = "footer-content";
  } else {
    x.className = "footer-content";
  }

}


//Header Color Change

//Insta Logo

function instaheader() {

  var x = document.getElementById("header");
  if (x.className === "desktop header") {
    x.className += " insta";
  } else {
    x.className = "desktop header";
  }

}

//Facebook Logo

function facebookheader() {

  var x = document.getElementById("header");
  if (x.className === "desktop header") {
    x.className += " facebook";
  } else {
    x.className = "desktop header";
  }

}

//Twitter Logo

function twitterheader() {

  var x = document.getElementById("header");
  if (x.className === "desktop header") {
    x.className += " twitter";
  } else {
    x.className = "desktop header";
  }

}

//Normal

function normalheader() {

  var x = document.getElementById("header");
  if (x.className === "desktop header insta") {
    x.className = "desktop header";
  } else {
    x.className = "desktop header";
  }

}





