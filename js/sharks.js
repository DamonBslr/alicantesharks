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

  var x = document.getElementById("footer");
  if (x.className === "row footer") {
    x.className += " insta";
  } else {
    x.className = "row footer";
  }

}

//Facebook Logo

function facebookfooter() {

  var x = document.getElementById("footer");
  if (x.className === "row footer") {
    x.className += " facebook";
  } else {
    x.className = "row footer";
  }

}

//Twitter Logo

function twitterfooter() {

  var x = document.getElementById("footer");
  if (x.className === "row footer") {
    x.className += " twitter";
  } else {
    x.className = "row footer";
  }

}

//Normal

function normalfooter() {

  var x = document.getElementById("footer");
  if (x.className === "footer insta") {
    x.className = "row footer";
  } else {
    x.className = "row footer";
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




