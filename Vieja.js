<!DOCTYPE html>
<html>
<head>
	<title>La Vieja</title>
	<style type="text/css">
		section#principal{
		display: inline-block;
		margin: 0 auto;
		text-align: center;
		width: 100%; 
	}
	article#comandos{
		border: 1px solid lightgray; 
		display: inline-block;
		min-height: 300px;
		vertical-align: top;
		width: 25%%;
	}
	article#tablero{
		border: 1px solid lightgray;
		display: inline-block;
		margin: 0 auto;
		text-align: center;
		width: 50%;
	}
	article#tablero input{
		font-size: 3em;
		height: 80px;
		margin: 10px; 
		width: 10%;
	}
	input[type="button"]#iniciar{
	font-size: 0.8em;
	margin-top: 2em;
	padding: 0.7em;
	}
	input[type="text"]{
	font-size: 1em;
	margin: 0.2em;
	padding: 0.1em;
	}
	label{
		font-size: 1em;
		font-weight: bold;
		text-align: center;
	}
	.botonInicial{
		color: #77d;
		background-color: #77d;
		
	}
	.botonJugador1{
		color: white;
		background-color; #d77;
	}
	.botonJugador2{
		color: white;
		background-color: #7d7; 
	
	}
        </style>
	<script type="text/javascript">
		var bandera = false; //Iniciar juego
		var turno = 0; //Turno de jugadores 
		var tab = new Array(); //Botones
		window.onload = function(){
			var iniciar = document.getElementById("iniciar");
			iniciar.addEventListener("click",comenzar);
		}
		function comenzar(){
		bandera = true;
		var jugador1 = document.getElementById("jugador1");
		var jugador2 = document.getElementById("jugador2");
		if(jugador1.value==""){
			alert("Falta el nombre del jugador 1");
			jugador1.focus();
		}else{
		     if(jugador2.value==""){
		          alert("Falta el nombre del jugador 2");
			  jugador2.focus();
			}else{
			   tab[0] = document.getElementById("b0");
			   tab[1] = document.getElementById("b1");
		           tab[2] = document.getElementById("b2");
			   tab[3] = document.getElementById("b3");
			   tab[4] = document.getElementById("b4");
			   tab[5] = document.getElementById("b5");
			   tab[6] = document.getElementById("b6");
			   tab[7] = document.getElementById("b7");
			   tab[8] = document.getElementById("b8");
			   for(var i=0;i<9;i++){
			      tab[i].className = "botonInicial";
			      tab[i].value = "I"; 
			   }
			turno = 1;
			document.getElementById("turnoJugador").innerHTML = 
                        "Adelante jugador " + jugador1.value; 
		       }
	           }
		}
                function colocar(boton){
		if(bandera==true){
		     if(turno==1 && boton.value=="I"){
	                 turno = 2;
			 document.getElementById("turnoJugador").innerHTML =
			 "Adelante jugador " + jugador2.value; 
			  boton.value = "X";
			  boton.className = "botonJugador1"; 
			  }else{
			      if(turno==2 && boton.value=="I"){
		          	turno = 1;
			  	document.getElementById("turnoJugador").innerHTML =
			 	"Adelante jugador " + jugador1.value; 
			  	boton.value = "O";
			 	boton.className = "botonJugador2"; 
                      	 }
		      } 
		   }
		  revisar();	
                }
	     function revisar(){
	      if((tab[0].value =="X" && tab[1].value=="X" && tab[2].value=="X")
		|| (tab[3].value =="X" && tab[4].value=="X" && tab[5].value=="X")
		|| (tab[6].value =="X" && tab[7].value=="X" && tab[8].value=="X")
                || (tab[0].value =="X" && tab[3].value=="X" && tab[6].value=="X")
                || (tab[1].value =="X" && tab[4].value=="X" && tab[7].value=="X")
                || (tab[2].value =="X" && tab[5].value=="X" && tab[8].value=="X")
		|| (tab[0].value =="X" && tab[4].value=="X" && tab[8].value=="X")
                || (tab[2].value =="X" && tab[4].value=="X" && tab[6].value=="X")	
		){
                alert("Felicidades ganaste jugador " + jugador1.value);
                bandera = false; 
             }
              if((tab[0].value =="O" && tab[1].value=="O" && tab[2].value=="O")
		|| (tab[3].value =="O" && tab[4].value=="O" && tab[5].value=="O")
		|| (tab[6].value =="O" && tab[7].value=="O" && tab[8].value=="O")
                || (tab[0].value =="O" && tab[3].value=="O" && tab[6].value=="O")
                || (tab[1].value =="O" && tab[4].value=="O" && tab[7].value=="O")
                || (tab[2].value =="O" && tab[5].value=="O" && tab[8].value=="O")
		|| (tab[0].value =="O" && tab[4].value=="O" && tab[8].value=="O")
                || (tab[2].value =="O" && tab[4].value=="O" && tab[6].value=="O")	
		){
                alert("Felicidades ganaste jugador " + jugador2.value);
                bandera = false; 
             }
           }
	</script>
</head>
<body>
	<section id="Principal">
		<article id="comandos">
 		Jugador 1: 
			<input type="text" id="jugador1"><br>
		Jugador 2:
			<input type="text" id="jugador2"><br>
			<center><input type="button" id="iniciar" value="Comenzar"></center><br>
			<label id="turnoJugador"></label>
		</article>
		<article id="tablero">
		<input type="button" id="b0" onclick="colocar(this)">
		<input type="button" id="b1" onclick="colocar(this)">
		<input type="button" id="b2" onclick="colocar(this)"><br>

		<input type="button" id="b3" onclick="colocar(this)">
		<input type="button" id="b4" onclick="colocar(this)">
		<input type="button" id="b5" onclick="colocar(this)"><br>

		<input type="button" id="b6" onclick="colocar(this)">
		<input type="button" id="b7" onclick="colocar(this)">
		<input type="button" id="b8" onclick="colocar(this)"><br>
		</article>
	</section>
</body>
</html>
