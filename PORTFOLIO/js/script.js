

function tabClick(tabId) {
    
    var i;
    var x = document.getElementsByClassName("tab_wrap");
    console.log(x);
    console.log(tabId);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";
  }

function onGetCvClick(){

  window.location='./resume/cv.docx';
}

function onHireMeClick(){

  var i;

  var x = document.getElementsByClassName("tab_wrap");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }

  document.getElementById("Contact").style.display="block";
 
}
