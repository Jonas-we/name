//https://www.eclipse.org/paho/clients/js/
/*
function Historial_1() {
	console.log("SENSOR 1 PRENDIDO");
	message = new Paho.MQTT.Message("Historial_1");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);
	
}


function Historial_2(){	
	console.log("SENSOR 2 APAGAD");
	message = new Paho.MQTT.Message("Historial_2");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);

}
function Historial_12() {
	console.log("SENSOR 2 PRENDIDO");
	message = new Paho.MQTT.Message("Historial_12");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);
	
}


function Historial_22(){	
	console.log("SENSOR 2 APAGADOO");
	message = new Paho.MQTT.Message("Historial_22");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);

}
*/
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var contador = 1;
  var options = {
   useSSL: false,
    userName: "jhsabel@gmail.com",
    password: "12345wow",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect(){
	
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
    client.subscribe("jhsabel@gmail.com/prueba1");
   message = new Paho.MQTT.Message("Conexion Establecida");
    message.destinationName = "jhsabel@gmail.com/prueba1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }



  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
	   	    
    }
  }

  // called when a message arrives
  function onMessageArrived(message,contador) {
	//var  num1,num2 ;
	var boton_numero1 = document.getElementById("Historial_1"); //Declarar boton
	//var boton_numero2 = document.getElementById("Historial_2");
	boton_numero1.addEventListener("click", cambio_valor);
	//boton_numero2.addEventListener("click", cambio_valor2);
	
    	console.log("onMessageArrived:"+message.payloadString);
	//document.getElementById("sens1").innerHTML=message.payloadString;
function cambio_valor() {
	document.getElementById("sens1").innerHTML=message.payloadString;
    }
	  /*
	variable=message.payloadString;
	if(contador % 2 == 0){
		num1 = variable ;	
	   }
  	else
  	{
   		num2 = variable ;
 	 }
	  function cambio_valor() {
	  document.getElementById("sens1").innerHTML=1;
    }
	  function cambio_valor2() {
	  document.getElementById("sens2").innerHTML=num2;
    }*/
  }


  
