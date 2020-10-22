function clrMenu(){
		document.getElementById("colorDrop").classList.toggle("show");
	}
	
function blue(){
	let canvas = document.getElementById("physics");
	if(canvas.getContext){
		canvas.getContext('2d').strokeStyle = '#0000FF';
	}
}

function red(){
	let canvas = document.getElementById("physics");
		if(canvas.getContext){
			canvas.getContext('2d').strokeStyle = '#FF0000';
		}
}

function drawCircle(){
	let canvas = document.getElementById('physics');
	if(canvas.getContext){
		let ctx = canvas.getContext('2d');
		let x = canvas.width / 2;
		let y = canvas.height / 2;
		let r = 45;
		ctx.beginPath();
		ctx.arc(x,y,r,0,(2 * Math.PI), false);
		ctx.stroke();
	}
}

function drawSquare(){
	let canvas = document.getElementById('physics');
	if(canvas.getContext){
		let ctx = canvas.getContext('2d');
		let x = canvas.width / 2;
		let y = canvas.height / 2;
		
		ctx.beginPath();
		ctx.rect(x, y, 50, 50);
		ctx.stroke();
	
	}

}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		  var openDropdown = dropdowns[i];
		  if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		  }
		}
	}
}