
var commands = {
    'montre-moi *tag': showFlickr,
    'ok maison bonjour' : function() {
        if(typeof state === 'boolean' && state === true) {
            document.getElementById("text-tchat").innerHTML = '<p>Bonjour</p>';
        }
    },


    'ok maison salut' : function() {
        if(typeof state === 'boolean' && state === true) {
            document.getElementById("text-tchat").innerHTML = '<p>Salut</p>';
        }
    },
    'ok maison comment vas-tu' : function() {
        if(typeof state === 'boolean' && state === true) {
            document.getElementById("text-tchat").innerHTML = '<p>je vais très bien merci</p>';
        }
    },
    'ok maison que veut dire' : function() {
        if(typeof state === 'boolean' && state === true) {
            document.getElementById("text-tchat").innerHTML = '<p></p>';
        }
    },
    'ok maison off' : function() {
        state = false
        document.getElementById("state_text").innerHTML = 'Off';
        document.getElementById("text-tchat-2").innerHTML = '<p>Home Bot off</p>';
        if(typeof state === 'boolean' && state === true) {
        document.getElementById("state").style.backgroundColor = "#8ac926";
        }
        else {
            
        document.getElementById("state").style.backgroundColor = "#ff595e";
        }
    },
    'ok maison on' : function() {
        state = true
        document.getElementById("state_text").innerHTML = 'On';
        document.getElementById("text-tchat-2").innerHTML = '<p>Home Bot on</p>';
        if(typeof state === 'boolean' && state === true) {
        document.getElementById("state").style.backgroundColor = "#8ac926";
        }
        else {
            
        document.getElementById("state").style.backgroundColor = "#ff595e";
        }
    }
}

var showFlickr = function(tag) {
    var url = 'http://api.flickr.com/services/rest/?tags=' + tag;
    $.getJSON(url);
}