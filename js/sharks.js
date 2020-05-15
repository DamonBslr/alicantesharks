function show() {
  var x = document.getElementById("primary-menu");
  if (x.className === "menu") {
    x.className += " show";
  } else {
    x.className = "menu";
  }
}

function showcontent1() {
  var y = document.getElementById("content1");
  if (y.style.height === "0vw") {
    y.style.height = "12vw";
  } else {
    y.style.height = "0vw";
  }
}



function showcontent2() {
  var y = document.getElementById("content2");
  if (y.style.height === "0vw") {
    y.style.height = "17vw";
  } else {
    y.style.height = "0vw";
  }
}

function showcontent3() {
  var y = document.getElementById("content3");
  if (y.style.height === "0vw") {
    y.style.height = "17vw";
  } else {
    y.style.height = "0vw";
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
  if (x.className === "header") {
    x.className += " insta";
  } else {
    x.className = "header";
  }

}

//Facebook Logo

function facebookheader() {

  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " facebook";
  } else {
    x.className = "header";
  }

}

//Twitter Logo

function twitterheader() {

  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " twitter";
  } else {
    x.className = "header";
  }

}

//Normal

function normalheader() {

  var x = document.getElementById("header");
  if (x.className === "header insta") {
    x.className = "header";
  } else {
    x.className = "header";
  }

}
