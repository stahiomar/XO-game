var turn="x";
var square=[];
function end(num1,num2,num3){
		document.getElementById("t").innerHTML=document.getElementById("item"+num1).innerHTML+" player won";
		document.getElementById("item"+num1).style.backgroundColor= "black";
		document.getElementById("item"+num2).style.backgroundColor= "black";
		document.getElementById("item"+num3).style.backgroundColor= "black";
		setInterval(function(){document.getElementById("t").innerHTML+="."},1000)
		setTimeout(function(){location.reload()},3000)	
	}
function winner(){
	for (var i=1;i<10;i++)
		square[i]=document.getElementById("item"+i).innerHTML;
		if(square[1]==square[2] && square[2]==square[3] && square[1]!=''){
			end(1,2,3);
		}
		if(square[4]==square[5] && square[5]==square[6] && square[4]!=''){
			end(4,5,6);
		}
		if(square[7]==square[8] && square[8]==square[9] && square[7]!=''){
			end(7,8,9);
		}
		if(square[1]==square[4] && square[4]==square[7] && square[1]!=''){
			end(1,4,7);
		}
		if(square[2]==square[5] && square[5]==square[8] && square[2]!=''){
			end(2,5,8);
		}
		if(square[3]==square[6] && square[6]==square[9] && square[3]!=''){
			end(3,6,9);
		}
		if(square[1]==square[5] && square[5]==square[9] && square[1]!=''){
			end(1,5,9);
		}
		if(square[3]==square[5] && square[5]==square[7] && square[3]!=''){
			test=1;
			end(3,5,7);
		}
}
function game(id){
	elem=document.getElementById(id);
	if(turn=="x" && elem.innerHTML==''){
	elem.innerHTML='x';
	turn="o";
	document.getElementById("t").innerHTML="O";
	}
	if(turn=="o" && elem.innerHTML==''){
	elem.innerHTML='o';
	turn="x";
	document.getElementById("t").innerHTML="X";
	}
	winner();
}