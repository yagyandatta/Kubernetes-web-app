function docker(x) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/kubernetes.py?x=kubectl  "+x, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op_con").innerHTML = output;
    }
}

function docker1(x) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.99.101/cgi-bin/kubernetes.py?x=kubectl  "+x, true);
    xhr.send();

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("op_con").innerHTML = output;
    }
    list_con();
}



function con_name() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="run_con()">'+
    '<b> Type new pod Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p><br>'+
    '<b> Enter Your Image Name: </b>'+
    '<input type = "text" id = "c_image" size = "30" </p> <br>'+
    '<input type="submit" value="Launch"></input>'+
    '</form>';
}

function con_name1() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="run_con1()">'+
    '<b> Type new pod Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p><br>'+
    '<b> Enter Your Image Name: </b>'+
    '<input type = "text" id = "c_image" size = "30" </p> <br>'+
    '<input type="submit" value="Launch"></input>'+
    '</form>';
}
function con_name2() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="run_con2()">'+
    '<b> Enter pod Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p><br>'+
    '<b> Enter Your required replicas: </b>'+
    '<input type = "number" id = "c_image" size = "30" </p> <br>'+
    '<input type="submit" value="Launch"></input>'+
    '</form>';
}
function con_name3() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="run_con3()">'+
    '<b> Enter pod Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p><br>'+
    '<b> Enter Your port No: </b>'+
    '<input type = "number" id = "c_image" size = "30" </p> <br>'+
    '<input type="submit" value="Launch"></input>'+
    '</form>';
}



// list-containers
function list_con() {
    var code = "get pods";
    docker(code);
}
function list_con1() {
    var code = " get service";
    docker(code);
}

function list_con2() {
    var code = " delete --all all";
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
    var code = " run " + nm_con + " --image=" + i_con;
    docker1(code);
}

function run_con1() {
    var i_con = document.getElementById("c_image").value;
    var nm_con = document.getElementById("c_name").value;
    var code = " create deployment " + nm_con + " --image=" + i_con;
    docker1(code);
}

function run_con2() {
    var i_con = document.getElementById("c_image").value;
    var nm_con = document.getElementById("c_name").value;
    var code = " scale deployment  " + nm_con + " --replicas=" + i_con;
    docker1(code);
}
function run_con3() {
    var i_con = document.getElementById("c_image").value;
    var nm_con = document.getElementById("c_name").value;
    var code = " expose deployment  " + nm_con + " --port=" + i_con + " --type=NodePort";
    docker(code);
}



// remove container 
function rm_con_name() {
    document.getElementById("mid_con").innerHTML =
    '<form onsubmit="rm_con()">'+
    '<b> Enter pod Name: </b>'+
    '<input type = "text" id = "c_name" size = "30" </p><br>'+
    '<input type="submit" value="Delete"></input>'+
    '</form>';

}
function rm_con() {
    var rm_name = document.getElementById("c_name").value;

    var code = " delete pod " + rm_name;

    docker1(code);
}

