function show() {
  var x = document.getElementById("primary-menu");
  if (x.className === "menu") {
    x.className += " show";
    } else {
    x.className = "menu";
    }

    var y = document.getElementById("minus1");
  if (y.className === "minus") {
    y.className += " click";
    } else {
    y.className = "minus";
    }

    var z = document.getElementById("minus2");
  if (z.className === "minus") {
    z.className += " click";
    } else {
    z.className = "minus";
    }

    var w = document.getElementById("minus3");
  if (w.className === "minus") {
    w.className += " click";
    } else {
    w.className = "minus";
    }





  document.getElementById("sub-menu").className = "sub-menu";

}




function showsub() {
  var x = document.getElementById("sub-menu");
  if (x.className === "sub-menu") {
    x.className += " show";
  } else {
    x.className = "sub-menu";
  }
}



function openNav() {
  document.getElementById("submenu").style.height = "68vw";
  document.getElementByClassName("sub-menu-nav-item").style.height = "6.8vw";
  document.getElementById("under").style.marginTop = "68vw";
}

function showcontent1() {
  var y = document.getElementById("content1");
  if (y.style.height === "0vw") {
    y.style.height = "12vw";
  } else {
    y.style.height = "0vw";
  }
}

function rotate1() {
  var y = document.getElementById("angle1");
  if (y.className === "fas fa-angle-right") {
    y.className += " fa-rotate-90";
  } else {
    y.className = "fas fa-angle-right";
  }
}



function showcontent2() {
  var y = document.getElementById("content2");
  if (y.style.height === "0vw") {
    y.style.height = "15.5vw";
  } else {
    y.style.height = "0vw";
  }
}

function rotate2() {
  var y = document.getElementById("angle2");
  if (y.className === "fas fa-angle-right") {
    y.className += " fa-rotate-90";
  } else {
    y.className = "fas fa-angle-right";
  }
}


function showcontent3() {
  var y = document.getElementById("content3");
  if (y.style.height === "0vw") {
    y.style.height = "10.1vw";
  } else {
    y.style.height = "0vw";
  }
}

function rotate3() {
  var y = document.getElementById("angle3");
  if (y.className === "fas fa-angle-right") {
    y.className += " fa-rotate-90";
  } else {
    y.className = "fas fa-angle-right";
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




