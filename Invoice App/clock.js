window.onload = function(){


var text = "<tr><th>Date</th><th>Start</th><th>Finish</th><th>Amount</th></tr>";
var total = 0;
var rows = [];
var hours = 0;

$("#hours").html(text);

$("#send").on("click", function(){
	var date = $("#start").val();
	var starttime = $("#starttime").val();
	var finishtime = $("#finishtime").val();

	var wholestart = date + "," + starttime;
	var wholefinish = date + "," + finishtime;


	var start = new Date(wholestart);
	var finish = new Date(wholefinish);

	calculatePay(start, finish, date, starttime, finishtime);
});


$("#remove").on("click", function(){
	var i = rows.length;

	total -= rows[i-1].pay;
	rows.splice(i-1, 1);

	updatetxt();

});

function calculatePay(start, finish, date, s, f){

	var time = finish - start;

	calculateHours(time);

	time = (time / 1000) / 60;
	var pay = 0.50 * time;
	total += pay;

	$("#total").html("£" + total);

	rows.push(new row(date, s, f, pay));
	updatetxt();
};

function calculateHours(time){
	var x = (time / 1000) / 60;

	x = x / 60;

	hours += x;
	console.log(x);
}


function row(date, s, f, pay){

	this.txt = "<tr><td>" + date + "</td>" + "<td>" + s + "</td>" + "<td>" + f + "</td>" + "<td>£" + pay + "</td></tr>";
	this.pay = pay;

}

function updatetxt(){
		text = "<tr><th>Date</th><th>Start</th><th>Finish</th><th>Amount</th></tr>";
		for(i = 0; i < rows.length; i++){
		text += rows[i].txt;

		$("#hours").html(text);
		$("#total").html("£" + total);
		$("#totalhours").html(hours);
	}
}


};