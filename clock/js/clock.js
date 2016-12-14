function clock(el) {
  var cur = new Date();
  var h = cur.getHours();
  var m = cur.getMinutes();
  var s = cur.getSeconds();
  m = m > 10 ? m : '0' + m;
  s = s > 10 ? s : '0' + s;
  el.innerHTML = h + ':' + m + ':' + s;
  setTimeout(function(){clock(el);}, 1000);
}
var clock_div = document.getElementById("clock_div");
clock(clock_div);