function translate(info, tab){
  var url = 'http://translate.google.cn/#auto/zh-CN/'+info.selectionText ;
  window.open(url, '_blank');
}
chrome.contextMenus.create({
  type: 'normal',
  title: '使用Google翻译%s',
  id: 'cn',
  contexts: ['selection'],
  onclick: translate
});