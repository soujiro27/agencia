
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
	console.log(precio);
}





