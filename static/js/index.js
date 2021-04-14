//https://www.eclipse.org/paho/clients/js/

function Historial_1(variabl,archivo) {
	variabl=1;
	console.log("Historial_1");
	document.getElementById("sens1").archivo;

	/*message = new Paho.MQTT.Message("Historial_1");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);
	*/
}


function Historial_2(variabl,archivo2){	
	variabl=1;
	console.log("Historial_2");
	document.getElementById("sens2").archivo2;

	/*message = new Paho.MQTT.Message("Historial_2");
    	message.destinationName = "jhsabel@gmail.com/prueba1";
    	client.send(message);*/

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
  function onConnect(cont,i,j,variabl) {
 cont=1;
 i=0;	
	  variabl=0;

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
  function onConnectionLost(responseObject,cont,i,variabl) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
	    cont=0;
	    i=0;
	    variabl=0;
	    
    }
  }

  // called when a message arrives
  function onMessageArrived(cont,message,variabl,archivo,archivo2) {
    console.log("onMessageArrived:"+message.payloadString);
	 
	  if(variabl == "1")
	  {
	archivo=message.payloadString;
	  }
	  if(variabl == "2")
	  {
	archivo2=message.payloadString;
	  }
  }


  
