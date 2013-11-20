$("#enviar").on("click",function(){

	var $destino=$("#destino").val();
	$.post("php/consulta_hotel.php",{destino_envia:$destino},function(data){
	var html=data;
	$("#resultados_busqueda").html(html);
	
});
});



