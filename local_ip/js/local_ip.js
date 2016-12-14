function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest("http://pv.sohu.com/cityjson?ie=utf-8",function(response){
  var reg = /{.*}/g;
  var json = JSON.parse(response.match(reg));
  document.getElementById("ip_div").innerText = json["cip"];
});
