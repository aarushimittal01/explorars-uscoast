$(document).ready(function(){
	var c = document.getElementById("snapshotcanvas");
	var ctx = c.getContext("2d");
	
	ctx.fillStyle="#5FC0E5";
	ctx.fillRect(0,0,600,420);
	
	ctx.font = "20px Arial";
	ctx.fillStyle = 'blue';
	ctx.fillText("Duration", 10, 50);
	
	ctx.fillText("Best Recommended",300,85);
	
	ctx.fillText("Program fee",10,195);
	
	ctx.fillText("Airline",360,195);
	
	ctx.fillText("Travel Period",10,285);
	
	ctx.fillText("Location",390,285);
	ctx.fillText("Accomodation",190,335);
	
	ctx.font = "bold 40px Arial";
	ctx.fillStyle = 'white';
	ctx.fillText("Snapshot",180,30);
	
	ctx.font = "18px Arial";
	ctx.fillText("10 days brimming",10,70);
	ctx.fillText("with fun filled activities",10,90);
	ctx.fillText("and learning",10,110);
	
	ctx.fillText("TBD",10,215);
	
	ctx.fillText("Etihad or similar",360,215);
	
	ctx.fillText("TBD",10,305);
	
	ctx.fillText("for Grades 6th onwards",285,105);
	
	ctx.fillText("USA West Coast -",390,305);
	ctx.fillText("Seattle, Mt. St. Helens,",390,325);
	ctx.fillText("Turnwater, Winston,",390,345);
	ctx.fillText("San Francisco and",390,365);
	ctx.fillText("Los Angeles",390,385);
	
	ctx.fillText("3 Star",220,355);
	
	ctx.strokeStyle = 'white';
	//Snapshot vertical line
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(260,35);
	ctx.lineTo(260,315);
	ctx.stroke();
	//Duration horizontal line
	ctx.beginPath();
	ctx.moveTo(10,145);
	ctx.lineTo(480,145);
	ctx.stroke();
	//Travel horizontal line
	ctx.beginPath();
	ctx.moveTo(10,240);
	ctx.lineTo(480,240);
	ctx.stroke();
	//Program horizontal line
	ctx.beginPath();
	ctx.moveTo(140,195);
	ctx.lineTo(340,195);
	ctx.stroke();
	//vertical line Duration
	ctx.beginPath();
	ctx.moveTo(10,120);
	ctx.lineTo(10,145);
	ctx.stroke();
	//Best vertical line
	ctx.beginPath();
	ctx.moveTo(480,120);
	ctx.lineTo(480,145);
	ctx.stroke();
	//Travel vertical line
	ctx.beginPath();
	ctx.moveTo(10,240);
	ctx.lineTo(10,260);
	ctx.stroke();
	//Location vertical line
	ctx.beginPath();
	ctx.moveTo(480,240);
	ctx.lineTo(480,260);
	ctx.stroke();
	
	//middlecircle
	ctx.beginPath();
	ctx.arc(260,190, 50, 0, 2*Math.PI, false);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.stroke();
	
	//camera
	var img=document.getElementById("camera");
	ctx.drawImage(img,225,160);
	
	ctx.strokeStyle = 'orange';
	ctx.beginPath();
	ctx.arc(10,120, 3, 0, 2*Math.PI, false);
	ctx.fillStyle = 'orange';
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(480,120, 3, 0, 2*Math.PI, false);
	ctx.fillStyle = 'orange';
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(140,195, 3, 0, 2*Math.PI, false);
	ctx.fillStyle = 'orange';
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(340,195, 3, 0, 2*Math.PI, false);
	ctx.fillStyle = 'orange';
	ctx.fill();
	
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(10,260, 3, 0, 2*Math.PI, false);
	ctx.fillStyle = 'orange';
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(480,260, 3, 0, 2*Math.PI, false);
	ctx.fillStyle = 'orange';
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(260,315, 3, 0, 2*Math.PI, false);
	ctx.fillStyle = 'orange';
	ctx.fill();
	ctx.stroke();
});

