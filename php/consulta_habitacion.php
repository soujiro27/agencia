<?php 
include("mysql.class.php");
$habitacion=$_POST['habitacion'];
$db = new MySQL();
$db->open();
$queryx = "SELECT * FROM precios_temporada where id='$habitacion';";
$consulta = $db->consulta($queryx);

if ($row = $db->fetch_array($consulta))
{
	
   do{
   	


   }while($row = $db->fetch_array($consulta)); 
 
}
echo $html;
$db->close();
?>