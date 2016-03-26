(function(X) {
    new X.slide({
        prefix: 'page',
        cls: 'page',
        arrow: '.arrow',
        style: 'default',
        switcher: '#switcher-left,#switcher-right',
        webSocket: true
    });
    var animElm =  X.DOM.get('#tmall');
    var $ = X.$;
    X.Event.on(animElm,'click',function(e){
        e.preventDefault();
        document.getElementById('civet').style.backgroundColor = '#000';
        animElm.style.backgroundColor = '#000';
        $('.bowl')[0].style.backgroundColor = '#000';
        $('.bowl-right')[0].style.backgroundColor = '#000';
        $('.bowl-left')[0].style.backgroundColor = '#000';
        $('.neck-right')[0].style.backgroundColor = '#000';
        $('.neck-left')[0].style.backgroundColor = '#000';
    });
    var slide2Elm = $('#slide21');
    X.Event.on(slide2Elm,'click',function(){
        document.getElementById('slide22').style.display = 'block';
    })
})(XDF);
