//docker commands
function list_img() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/docker_api.py?x=docker images", true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
}

function myFunction(){
    var mylist = document.getElementById("myList");
    var img_name = mylist.options[mylist.selectedIndex].text;
    image_os(img_name);
  }


  

//pulling-images using docker-hub
function image_os(x) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/docker_api.py?x=docker pull "+x, true);
    xhr.send();
    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
    
}




// remove-images

function rm_img() {
    document.getElementById("mid").innerHTML =
    '<form onsubmit="rm_image()">'+
    '<b> Enter Your Image Name: </b>'+
    '<input type = "text" id = "in_data" size = "30" </p>'+
    '<input type="submit" value="Delete"></input>'
    '</form>';
}

function rm_image(){
    var mylist1 = document.getElementById("in_data").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/docker_api.py?x=docker rmi -f "+mylist1, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op").innerHTML = output;
    }
  }
