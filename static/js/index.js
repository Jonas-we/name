  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  client2 = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

 client.onConnectionLost = onConnectionLost;
 client.onMessageArrived = onMessageArrived;
///------------------------------------------
client2.onConnectionLost = onConnectionLost_2;
 client2.onMessageArrived = onMessageArrived_2;
//----------------------------------------------
  var options = {
   useSSL: false,
    userName: "jhsabel@gmail.com",
    password: "12345wow",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
  client2.connect(options);
  // called when the client connects
  function onConnect(){
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
    client.subscribe("jhsabel@gmail.com/prueba1");
    client2.subscribe("jhsabel@gmail.com/prueba2");
   message = new Paho.MQTT.Message("Conexion Establecida");  
   message2 = new Paho.MQTT.Message("Conexion Establecida");  
    message.destinationName = "jhsabel@gmail.com/prueba1";
    message2.destinationName = "jhsabel@gmail.com/prueba2";
    client.send(message);
    client2.send(message2);
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
//-------------------------------------------------
  function onConnectionLost_2(responseObject2) {
    if (responseObject2.errorCode !== 0) {
      console.log("onConnectionLost_2:"+responseObject2.errorMessage); 
    }
  }
//-------------------------------------------------
  // called when a message arrives
  function onMessageArrived(message) {
	var boton_numero1 = document.getElementById("Historial_1"); //Declarar boton
	//var boton_numero2 = document.getElementById("Historial_2");
	boton_numero1.addEventListener("click", cambio_valor);
	//boton_numero2.addEventListener("click", cambio_valor2);
 	console.log("onMessageArrived:"+message.payloadString);
	//document.getElementById("sens1").innerHTML=message.payloadString;  

	function cambio_valor() {
	document.getElementById("sens1").innerHTML=message.payloadString;
	  }
  }
  function onMessageArrived_2(message2) {
	var boton_numero1 = document.getElementById("Historial_1"); //Declarar boton
	//var boton_numero2 = document.getElementById("Historial_2");
	boton_numero1.addEventListener("click", cambio_valor);
	//boton_numero2.addEventListener("click", cambio_valor2);
 	console.log("onMessageArrived_2:"+message2.payloadString);
	//document.getElementById("sens1").innerHTML=message.payloadString;  

	function cambio_valor() {
        document.getElementById("sens2").innerHTML=message2.payloadString; 
	  }
  }


  
