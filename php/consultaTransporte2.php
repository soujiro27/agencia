<?php 
include("mysql.class.php");
$transporte=$_POST['transporte'];
$viaje=$_POST['viaje'];
$destino=$_POST['destino'];
$db = new MySQL();
$db->open();
$queryx = "SELECT * FROM transporte where destino='$destino' and viaje='$transporte' and categoria='$viaje';";
$consulta = $db->consulta($queryx);
$cadena="";
if ($row = $db->fetch_array($consulta))
{
$cadena=$cadena."<table id=tablaTransporte>";
$cadena=$cadena."<th>Origen</th><th>Destino</th><th>Escala</th><th>Hr. Salida</th><th>Hr. LLegada</th><th>Costo</th><th>Compañia</th><th>Status</th>";
   do{
$cadena=$cadena."<tr><td>".$row['origen']."</td><td>".$row['destino']."</td><td>".$row['escala']."</td>";
$cadena=$cadena."<td>".$row['hr_salida']."</td><td>".$row['hr_llegada']."</td>";
$cadena=$cadena."<td>".$row['costo']."</td><td>".$row['id_servicio']."</td>";
$cadena=$cadena."<td><button id=compraViaje onclick=ticketTransporte2('".$row['hr_salida']."',".$row['costo'].");>Comprar</button></tr>";
   	


   }while($row = $db->fetch_array($consulta)); 
 
 $cadena=$cadena."</table>";
}
echo $cadena;
$db->close();
?>