function docker(x) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/docker_api.py?x=docker  "+x, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op_con").innerHTML = output;
    }


}




function con_name() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="run_con()">'+
    '<b> Type new container Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p>'+
    '<b> Enter Your Image Name: </b>'+
    '<input type = "text" id = "c_image" size = "30" </p> <br>'+
    '<input type="submit" value="Launch"></input>'+
    '</form>';
}


// list-containers
function list_con() {
    var code = "ps";
    docker(code);
}


// list-all-containers
function list_con_all() {
    var code = "ps -a";
    docker(code);
}


// launch-containers
function run_con() {
    var i_con = document.getElementById("c_image").value;
    var nm_con = document.getElementById("c_name").value;
    var code = " run --name " + nm_con + " " + i_con;
    docker(code);
}



// remove container 
function rm_con_name() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="rm_con()">'+
    '<b> Enter container Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p><br>'+
    '<input type="submit" value="Delete"></input>'+
    '</form>';

}
function rm_con() {
    var rm_name = document.getElementById("c_name").value;

    var code = "rm -f " + rm_name;

    docker(code);
}

