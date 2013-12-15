
"use strict";

var socket = io.connect('http://localhost');

socket.on('title', function(data) {
        document.title = data;
    });

socket.on('screen', function (data) {
        document.getElementById('screen').textContent = data;
    });
