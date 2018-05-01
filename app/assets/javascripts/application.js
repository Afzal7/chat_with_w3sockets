// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require w3sockets
//= require rails-ujs
//= require turbolinks
//= require_tree .


public_key = '3635e8c50162ec62ddd539400b635d23fe491c966e35af796f767ca6fd9f8e0f'

w3socket = new W3sockets(public_key);
channel = w3socket.subscribe('chat');

$(document).ready(function(){
	$(document).on('click', '#send', function(){
		$.post('/send_message',{msg: $('#message_input').val()}, function(response){
			console.log(response);
		});
	})
});