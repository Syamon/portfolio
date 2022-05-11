var myString = "";
$(document).ready(function(){
	
});
function change_label(){
	myString = $("#fasad").val();
	if(myString == "Перевод"){
		$("#per").show();
		$("#cn").hide();
		$("#but_val").hide();
	}
	if(myString == "Снятие денег"){
		$("#cn").show();
		$("#per").hide();
		$("#but_val").hide();
	}
	if(myString == "Покупка валюты"){
		$("#but_val").show();
		$("#cn").hide();
		$("#per").hide();		
	}
}
	
