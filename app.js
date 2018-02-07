var numbers = {};

window.onload = function() {
	getTxt();
};

var getTxt = function (){
  $.ajax({
    url:'https://raw.githubusercontent.com/apoorvmathur/phonenumberverify/master/numbers.json',
    success: function (data){
		numbers = JSON.parse(data);
		document.getElementById("submit").disabled = false
    }, error: function (data) {
		document.getElementById('alert-fail').style.display = "block"
	}
  });
}

var check = function(){
    var phone = document.getElementById('phone').value;
	document.getElementById('alert-allow').style.display = "none"
	document.getElementById('alert-deny').style.display = "none"
	document.getElementById('alert-fail').style.display = "none"
	phone = $.sha1(phone)
	if(numbers[phone] == null) {
        document.getElementById('alert-allow').style.display = "block"
    } else {
		document.getElementById('alert-deny').style.display = "block"
	}
}
