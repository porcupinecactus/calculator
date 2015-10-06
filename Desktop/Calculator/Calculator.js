

	
window.onload = function(){
	var entry= "",
	display = document.getElementById('screen'),
	buttons = document.getElementsByClassName('btn');
	display.innerHTML = entry;
	display.contentEditable=true;

	

	for(i=0;i<buttons.length;i++){
		var button = buttons[i];
		button.onclick = function(){
			switch(this.value){
				case "=":
					try{
						entry = display.innerHTML;
						console.log("Problem: "+ entry);
						entry = eval(entry);
						display.innerHTML = eval(entry);
						console.log("Solution: "+ entry);
						
					} catch (e) {
						entry="";
						display.innerHTML= "ERROR! Please Try Again.";
						console.log("Solution: Entry Error");
					};
					break;
				case "c":
					entry = " ";
					display.innerHTML = entry;
					break;

				default:
					entry += this.value;
					display.innerHTML = entry;
					break;
			};
			
		};

	};
};
