var playerData;

$(document).ready(function() {
	getData();
});

function getData() { 
	$.getJSON("js/JayBruceStats.json", function(data) {
		playerData = data;
		drawChart();
		});
}


function drawChart (){
	
	$(".player-name".html).html(playerData.name);
	
	$(".chart").html("<h1>"+playerData.name+"</h1>");

	$(".chart").append("<p>"+playerData.club+"</p>");

	$.each(playerData.stats, function(i,item) {
		var width = item.HR * 10;
		$(".chart").append(
			"<div class=col-md-12 bar-container'>"+
			"<p><div class='bar' style='width: "+width+"px'></div>"+
			"<div class='text'>Year: "+item.year+" Home Runs: " +item.HR+ "</div>"+
			"</div>"
		);
	});
}



