(function(X) {
  new X.slide({
    prefix: 'page',
      cls: 'page',
      arrow: '.arrow',
      style: 'default',
      switcher: '#switcher-left,#switcher-right',
      webSocket: true
  });
  var $ = X.$;
  setInterval(function(){
    location.reload()
  }, 30000)
})(XDF);
