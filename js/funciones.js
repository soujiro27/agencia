
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

function cotiza(precio)
{
$("#resultados_cuartos").slideUp(500);
var $html="<section id=form><label>Nombre del Titular de la Reservacion</label><input type=text required id=nombreCliente><label>Direccion</label>";
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


