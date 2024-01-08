const box=document.getElementById('box');
	const buttons=document.querySelectorAll(".button");
	// const board=document.getElementsByClassName('board');
	// console.log(board.style.color="red");
	let calculation='';
	

	function Display(value){

		calculation=calculation+value;
		
		change(calculation);
			
		
	}

	// change input in box 
	function change(calculation){
		box.value=calculation;
	}

	//print result
	function cal(){
		

		try{
			if(calculation.includes("**")|| calculation.includes("//")){
				 throw new Error('Invalid input. Expected a number.');
			}
			else{
				box.value=eval(calculation);
				calculation=box.value;
			}
			
		}
		catch(err){
			alert("Error input / Maybe repeated sign input");
			
			
			reset();
		}
		 
	}

	//remove one value
	function removeOne(){
		let lastDigit=calculation.length;
		
		calculation=calculation.slice(0,-1);
		console.log(calculation);
		box.value=calculation;
		console.log(calculation);
	}

	//reset


	function reset(){
		box.value='';
		calculation='';
	}

	//change mode etikai
	const mode1=document.getElementById("mode");
	let light=true;

	function calcTheme(){
		if(light){
			buttons.forEach(e=>{
			e.classList.remove('button');
			e.setAttribute("id","dark");
			
			
			})
			
			document.getElementById("box").style.backgroundColor = "rgb(34,37,45)";
			document.getElementById("box").style.color ="white";
			document.getElementById("board").style.backgroundColor = "rgb(34,37,45)";
			document.getElementById("board").style.borderColor= "rgb(34,37,45)";
			
		}
		else{
			buttons.forEach(e=>{
			e.classList.add('button');
			e.removeAttribute("id","dark");
			
			
			})
			document.getElementById("box").style.color ="black";
			document.getElementById("box").style.backgroundColor = "rgb(242,243,248)";
			document.getElementById("board").style.backgroundColor = "rgb(242,243,248)";
			document.getElementById("board").style.borderColor= "rgb(242,243,248)";
		}
		
	}

	function mode(){
		if(light){
			mode1.innerText="Dark Mode";
			calcTheme();
			light=false;
		}
		else{
			mode1.innerText="Light Mode";
			calcTheme();
			light=true;
		}

	}