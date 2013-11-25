
$("#enviar").on("click",function(){

	var $destino=$("#destino").val();
	$("#busqueda").slideUp(500);
	$.post("php/consulta_hotel.php",{destino_envia:$destino},function(data){
	var html=data;
	$("#resultados_busqueda").html(html);
	
});
});


$("#enviar2").on("click",function(){

	var $destino=$("#destino").val();
	$("#busqueda").slideUp(500);
	$.post("php/consulta_hotel2.php",{destino_envia:$destino},function(data){
	var html=data;
	$("#resultados_busqueda").html(html);
	
});
});


$("#enviar").on("click",function(){

	var $destino=$("#destino").val();
	$("#busqueda").slideUp(500);
	$.post("php/consulta_hotel.php",{destino_envia:$destino},function(data){
	var html=data;
	$("#resultados_busqueda").html(html);
	
});
});





function busqueda_habitacion(id_hab)
{
	var twiter="<section id=api_twiter><a class=twitter-timeline width=300 href=https://twitter.com/JvaN_Karl0z data-widget-id=403298917699178496>Tweets por @JvaN_Karl0z</a>";
	twiter=twiter+"</section>";
	var $habitacion=id_hab;
	
	$.post("php/consulta_habitacion.php",{
		habitacion:$habitacion
	},function(data){
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

		var html=data;
		html=html+twiter;
		$("#resultados_busqueda").slideUp(500);
		$("#resultados_cuartos").html(html);
		
	});
}


function busqueda_habitacion2(id_hab)
{
	var twiter="<section id=api_twiter><a class=twitter-timeline width=300 href=https://twitter.com/JvaN_Karl0z data-widget-id=403298917699178496>Tweets por @JvaN_Karl0z</a>";
	twiter=twiter+"</section>";
	var $habitacion=id_hab;
	
	$.post("php/consulta_habitacion2.php",{
		habitacion:$habitacion
	},function(data){
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

		var html=data;
		html=html+twiter;
		$("#resultados_busqueda").slideUp(500);
		$("#resultados_cuartos").html(html);
		
	});
}

function cotiza(precio)
{
$("#resultados_cuartos").slideUp(500);
var $html="<section class=form><label>Nombre del Titular de la Reservacion</label><input type=text required id=nombreCliente><label>Direccion</label>";
$html=$html+"<input type=text required id=DirecccionCliente><label>Telefono</label>";
$html=$html+"<input type=text required id=telefonoCliente><label>E-mail</label>";
$html=$html+"<input type=email  id=correoCliente><label>Ciudad de Origen</label><input type=text value=México, D.f. disabled=True id=ciudadOrigen>";
$html=$html+"<label>Ciudad de Destino</label><input type=text disabled=True id=ciudadDestino><label >Fecha de Salida</label><input type=date id=fechaSalida>";
$html=$html+"<label id=fechaRegreso>Fecha de Regreso</label><input type=date id=fechaVuelta><label>Tipo de Pago</label>";
$html=$html+"<select><option value=1>Efectivo</option><option value=2>Tarjeta</option><option value=3>Cheque</option><option value=3>Cotizacion</option></select><button id=confirmarPago onclick=total("+precio+");>Confirmar</button></section>";
$html=$html+"<p>Hotel</p><p id=costoHotel>$</p><p>Impuestos</p><p id=impuestos>$</p>";
$html=$html+"<p>Total</p><p id=totalFinal>$</p>";
$("#formularioRegistro").html($html);
}


function total(precio)
{

var $salida=new Date($("#fechaSalida").val());
var $regreso=new Date($("#fechaVuelta").val());
$salida=parseInt($salida.getDate());
$regreso=parseInt($regreso.getDate());
var $total=($regreso-$salida)*precio;
$("#costoHotel").text("$"+$total);
$("#impuestos").text("$"+$total*.15);
$("#totalFinal").text("$"+$total+$total*.15);
window.print();
}


$("#busqueda_trans").on("click",function(){

var $transporte=$("#tipoTransporte option:selected").val();
var $viaje=$("#tipoViaje option:selected").val();
var $destino=$("#destinoTransporte").val();

$.post("php/consultaTransporte.php",{transporte:$transporte,viaje:$viaje,destino:$destino},function(data){
var $tabla=data;
$("#tablaResultados").html($tabla);

})
})


$("#tipoViaje").on("change",tipoViaje);

function tipoViaje()
{

	var $viaje=$("#tipoViaje option:selected").val();
	if($viaje=="SENCILLO")
	{
		$("#regresoViaje").prop("disabled",true);
	}
	else
	{
		$("#regresoViaje").prop("disabled",false);
	}

}
	






function ticketTransporte()
{
var $destino=$("#destinoTransporte").val();
var $fechaSalida=$("#salidaTransporte").val();
$(".formTransporte").fadeOut(500);
	
$html="<label>Nombre</label>";
$html=$html+"<input type=text>";
$html=$html+"<label>Domicilio</label>";
$html=$html+"<input type=text>";
$html=$html+"<label>Telefono</label>";
$html=$html+"<input type=text>";
$html=$html+"<label>E-mail</label>";
$html=$html+"<input type=email>";
$html=$html+"<label>Origen</label>";
$html=$html+"<input type=text value=México,D.F. disabled=True>";
$html=$html+"<label>Destino</label>";
$html=$html+"<input type=text disabled=True id=destinoTransporte value="+$destino+">";
$html=$html+"<label>fecha</label>";
$html=$html+"<input type=text disabled=True id=fechaTransporte value="+$fechaSalida+">";
$html=$html+"<button onclick=imprimeTicket();>Listo</button>";

$("#registroTicket").html($html);
}

function ticketTransporte2(salida,costo)
{
var $salida=salida;
var $costo=costo;
var $destino=$("#destinoTransporte").val();
var $fechaSalida=$("#salidaTransporte").val();
$(".formTransporte").fadeOut(500);
	
$("#fechaSalidaAside").text($("#fechaSalidaTicket").val());
$("#horaSalidaAside").text($salida);
$("#costoAvionAside").text($costo);
}





function imprimeTicket()
{
	$("#tablaResultados").slideUp(400);
	window.print();
}


function cotizados(precio)
{
var $destino=$("#destino").val();
var $nombreHotel=$("#nombreHotel").text();
var $precio=parseInt(precio);
var $html=$html="<h2>Paso 2 Escoge Tu modo de Transporte</h2>";
$html=$html+"<select id=tipoTransporte>";
$html=$html+"<option value=0>Tipo de Transporte</option>";
$html=$html+"<option value=AEREO>Aereo</option>";
$html=$html+"<option value=TERRESTRE>Terrestre</option></select>";
$html=$html+"<select id=tipoViaje onchange=tipoViaje();>";
$html=$html+"<option value=0>Tipo de Viaje</option>";
$html=$html+"<option value=REDONDO>Redondo</option></select>";
$html=$html+"<article id=cuadrosFechas>";
$html=$html+"<label>Fecha de Salida</label>";
$html=$html+"<input type=date id=fechaSalidaTicket>";
$html=$html+"<label >Fecha de Regreso</label>";
$html=$html+"<input type=date id=regresoViaje>";
$html=$html+"</article><article id=cuadroOrigen>"
$html=$html+"<label>Origen</label>";
$html=$html+"<input type=text value=México,D.F. disabled=True>";
$html=$html+"<label>Destino</label>";
$html=$html+"<input type=text id=destinoTransporte value="+$destino+" disabled=True></article>";
$html=$html+"<button id=busqueda_trans onclick=tablaPaqueteTrans();>Buscar</button>";
$("#resultados_cuartos").slideUp(500);
$("#formularioAvion").html($html);
$html="<label>Destino</label><p id=destinoAside>"+$destino+"</p>";
$html=$html+"<label>Hotel</label><p id=hotelAside>"+$nombreHotel+"</p>";
$html=$html+"<label>Costo: $</label><p id=costoAside>"+precio+"</p>";
$html=$html+"<label>Origen</label><p id=origenAside>México,D.F.</p>";
$html=$html+"<label>Fecha Salida</label><p id=fechaSalidaAside></p>";
$html=$html+"<label>Hr. Salida</label><p id=horaSalidaAside></p>";
$html=$html+"<label>Costo Avion: $</label><p id=costoAvionAside></p>";
$html=$html+"<label>Nombre</label><input type=text>";
$html=$html+"<label>Direccion</label><input type=text>";
$html=$html+"<label>Correo</label><input type=text>";
$html=$html+"<button id=final onclick=totalFinal();>Confirmar</button>"
$html=$html+"<label>Impuestos</label><p id=impuestoAside></p>";
$html=$html+"<label>total</label><p id=totalAside></p>";
$("#informesViaje").html($html);

}


function tablaPaqueteTrans()
{
var $transporte=$("#tipoTransporte option:selected").val();
var $viaje=$("#tipoViaje option:selected").val();
var $destino=$("#destinoTransporte").val();

$.post("php/consultaTransporte2.php",{transporte:$transporte,viaje:$viaje,destino:$destino},function(data){
var $tabla=data;
$("#formularioAvion").slideUp(500);
$("#tablaResultados").html($tabla);

});
}

function totalFinal()
{
	var $costo=parseInt($("#costoAside").text());
	var $costoAvion=parseInt($("#costoAvionAside").text());
	var $total=($costo+$costoAvion)
	$("#impuestoAside").text($total);
	$total=($total*.16)+$total;
	$("#totalAside").text($total);

}