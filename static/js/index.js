//https://www.eclipse.org/paho/clients/js/

function Historial_1(message) {
	
	console.log("Historial_1");
	/*message = new Paho.MQTT.Message("Historial_1");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);
	*/
	document.getElementById("sens1").innerHTML=message.payloadString;

	
  
}
function Historial_2(){	
	console.log("Historial_2");
	/*message = new Paho.MQTT.Message("Historial_2");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);*/
 	document.getElementById("sens2").innerHTML=message.payloadString;

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
  function onConnect(cont,i,j) {
int cont=1;
int i=0;

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
  function onConnectionLost(responseObject,cont,i,j) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
	    cont=0;
	    i=0;
	    
    }
  }

  // called when a message arrives
  function onMessageArrived(cont,message) {
    console.log("onMessageArrived:"+message.payloadString);
	  mensaje=message.payloadString;
	 cont=cont+1;
	
  }


  
