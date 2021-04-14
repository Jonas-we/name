//https://www.eclipse.org/paho/clients/js/

function Historial_1() {
	
	console.log("Historial_1");
	message = new Paho.MQTT.Message("Historial_1");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);
  
}
function Historial_2(){	
	console.log("Historial_2");
	message = new Paho.MQTT.Message("Historial_2");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);
}

  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
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
  function onConnect() {
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
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  mensaje=message.payloadString;
	  if(mensaje[0]=="1"){
	 document.getElementById("sens1").innerHTML=mensaje;  
	  }
	   if(mensaje[0]=="2"){
	 document.getElementById("sens2").innerHTML=mensaje;  
	  }
  }
  
