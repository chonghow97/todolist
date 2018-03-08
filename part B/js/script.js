	//Background Music
	//create music
	var audio = new Audio('Asset/audio/sound.mp3');
	//adding checker
	var audioCheck = true;
	//BGM loop src= https://stackoverflow.com/questions/3273552/html5-audio-looping
	audio.addEventListener('ended', function() {
    this.currentTime = 0; //if audio is 0
    this.play(); //play audio again
}, false); //return false
	audio.play();  //play audio
	//toggle music mute and play
	sound.addEventListener("click",function () {
		if(audioCheck == true){
			sound.setAttribute("src","Asset/images/mute.svg");
			audio.pause();
			audioCheck = false;
		}else{
			sound.setAttribute("src","Asset/images/sound.svg");
			audio.play();
			audioCheck = true;
		}
	});
	function pchange() {
		for(var i=0;i<output.querySelectorAll("select").length;i++){
			var x = document.querySelector("#option"+i);
			switch(x.value){
				case "high":
				high.appendChild(x.parentNode);
				break;
				
				case "medium":
				medium.appendChild(x.parentNode);
				break;
				
				case "low":
				low.appendChild(x.parentNode);
				break;
			}
		}
	}

	title.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			add2.click();
		}
	});

	content.addEventListener('keypress', function(evt) {
		if (evt.which === 13) {
			evt.preventDefault();
		}
	});

	//duplicate id="item"
	var i = 0; //set initial valie
	var templete = item.cloneNode(true); //clone as a templete
	output.removeChild(item); //remove the original div to make it initial no div portion
	function add() {
		if(title.value == ""){
			alert("input cannot be blank");
			return;
		}
	clone = templete.cloneNode(true); //using the templete to clone again
	clone.querySelector("select").setAttribute("id","option"+i);
	//append Element
	switch(priority.value){
		case "high": 
		high.appendChild(clone);  
		break;
		case "low":
		clone.querySelector("select").value = "low"
		low.appendChild(clone);  
		break;
		case "medium":
		clone.querySelector("select").value = "medium"
		medium.appendChild(clone); 
		break;
		default: 
		return alert("please Select the priority thank you");
		 break;
	}

	//apply text 
	clone.querySelector("p").innerHTML = title.value;
	//function (close)
	clone.querySelector("#closebox").addEventListener("click",function () {
		this.parentNode.style.display = "none";  //https://stackoverflow.com/questions/30150347/delete-parent-element-with-javascript
	});
	i++; // initial increment
	title.value = null;
	title.focus();
}

	 //show Happy CNY in console
	 console.log("%cHappy Chinese New Year!", "color: red; font-family: sans-serif; font-size: 1em; font-weight: bolder; text-shadow: #000 1px 1px;");

			//clear button
			clear.addEventListener("click",function () {
				for(var i=0;i<item.length;i++){
					item[i].style.display = "none";
				}
			});