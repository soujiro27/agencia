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
	var $habitacion=id_hab;
	$.post("php/consulta_hacitacion.php",{
		habitacion:$habitacion
	},function(data){


	});
}


