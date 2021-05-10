function submit(){
    var x = document.createElement("P");
    var y = document.getElementById('input').value;
    var t = document.createTextNode(y);
    x.appendChild(t);
    document.body.appendChild(x);
}