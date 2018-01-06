var subscribeServiceUrl = "";
var msgServiceUrl = "";

$(document).ready(function(){
	$('#contact-msg').hide();
	registerEventListener();
});

function registerEventListener(){
	$('#contact-subscribe-submit').click(function(){
		subscribeByMail();
	});
	$('#contact-msg-form-show').click(function(){
		$('#contact-subscribe').hide();
		$('#contact-msg-form-show').hide();
		$('#contact-msg').show();
	});
	$('#contact-msg-close').click(function(){
		$('#contact-subscribe').show();
		$('#contact-msg-form-show').show();
		$('#contact-msg').hide();
		resetForm();
	});
	$('#contact-msg-submit').click(function(){
		submitMsg();
	});
	$('#contact-msg-cancel').click(function(){
		$('#contact-subscribe').show();
		$('#contact-msg-form-show').show();
		$('#contact-msg').hide();
	});
}

function resetForm(){
	$('#contact-msg-name').val("");
	$('#contact-msg-email').val("");
	$('#contact-msg-text').val("");
}

function subscribeByMail(){
	var formData = {
		email : $('#contact-subscribe-email').val()
	};
	console.log(formData);
	doPost(formData, subscribeServiceUrl, showResult);
}

function submitMsg(){
	var formData = {
		name : $('#contact-msg-name').val(),
		email : $('#contact-msg-email').val(),
		text : $('#contact-msg-text').val()
	};
	console.log(formData);
	doPost(formData, msgServiceUrl, showResult);
}

function doPost(formData, serviceUrl, callback){
	setTimeout( function(){
		$.ajax({
			type : "POST",
			url : serviceUrl,
			data : formData,
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			success : function(data){
				callback(JSON.parse(data));
			},
			error : function(){
				console.log("Post failed!");
			}
		});
	}, 500);
}

function showResult(ajaxData){
	console.log(ajaxData);
}