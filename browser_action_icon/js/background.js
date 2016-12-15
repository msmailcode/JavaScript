function chIcon(index){
  if(index === undefined) {
    index = 0;
  } else {
    index = index % 20;
  }
  chrome.browserAction.setIcon({path : {'19' : 'images/icon19_' + index + '.png'}});
  chrome.browserAction.setIcon({path : {'38' : 'images/icon38_' + index + '.png'}});
  setTimeout(function(){chIcon(index +1)}, 50);
};
chIcon();