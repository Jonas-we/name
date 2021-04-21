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
  function onConnect(){
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
    client.subscribe("jhsabel@gmail.com/prueba1");
    client.subscribe("jhsabel@gmail.com/prueba2");
   message = new Paho.MQTT.Message("Conexion Establecida");
   message = new Paho.MQTT.Message("Conexion Establecida");
	  
    message.destinationName = "jhsabel@gmail.com/prueba1";
    message.destinationName = "jhsabel@gmail.com/prueba2";
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
  function onMessageArrived(message,message) {
	var boton_numero1 = document.getElementById("Historial_1"); //Declarar boton
	//var boton_numero2 = document.getElementById("Historial_2");
	boton_numero1.addEventListener("click", cambio_valor);
	//boton_numero2.addEventListener("click", cambio_valor2);
 	console.log("onMessageArrived:"+message.payloadString);
	console.log("onMessageArrived_2:"+message.payloadString);
	//document.getElementById("sens1").innerHTML=message.payloadString;  

	function cambio_valor() {
	document.getElementById("sens1").innerHTML=message.payloadString;
        document.getElementById("sens2").innerHTML=message.payloadString; 
	  }
  }


  
