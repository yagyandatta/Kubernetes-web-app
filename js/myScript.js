function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// drop-down
function favTutorial() {
  var mylist = document.getElementById("myList");
  document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
  }


  function pull_img() {
    document.getElementById("mid").innerHTML =
    '<form onsubmit="myFunction()">'+
    '<b> Select your Image using dropdown list </b>'+
    '<select id = "myList" onchange = "favTutorial()" >'+
    '<option> ---Choose image--- </option>'+
    '<option> centos</option>'+
    '<option> ubuntu </option>'+
    '<option> nginx </option>'+
    '<option> jenkins </option>'+
    '<option> vimal13/apache-webserver-php </option>'+
    '</select>'+
    '<p> Your selected Image is:'+ 
    '<input type = "text" id = "favourite" size = "20" </p>'+
    '<input type="submit" value="pull"></input>'
    '</form>';
}



