function img_dash() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.16/cgi-bin/docker_api.py?x=docker images", true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("o_img").innerHTML = output;
    }

    setTimeout(img_dash, 5000);
    
}

img_dash();


function con_dash() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.16/cgi-bin/docker_api.py?x=docker ps -a" , true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("o_img").innerHTML = output;
    }

    setTimeout(con_dash, 5000);
    
}

con_dash();

function both() {
    img_dash(); 
}