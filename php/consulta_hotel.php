<?php 
include("mysql.class.php");
$recibe=$_POST['destino_envia'];
$db = new MySQL();
$db->open();

$queryx = "SELECT * FROM hoteles where ciudad='$recibe';";
$consulta = $db->consulta($queryx);

if ($row = $db->fetch_array($consulta))
{
	$estrellas=$row['categoria'];
   do{
   	$html="<article id=img_hotel><figure id=imagen_hotel><img src=".$row['foto']."></figure><article id=categoria>";
   	
     while($estrellas>0)
     {
     	$html=$html."<figure><img src=img/estrella.png></figure>";
     	$estrellas=$estrellas-1;
     }
     $html=$html."</article>";
     $html=$html."<article id=servicios>";
     if($row['restaurant']>0)
     {
     	$html=$html."<figure><img src=img/resta.png></figure>";
     }

     if($row['alberca']>0)
     {
     	$html=$html."<figure><img src=img/alberca.png></figure>";
     }

     if($row['gym']>0)
     {
     	$html=$html."<figure><img src=img/gym.png></figure>";
     }

     if($row['wifi']>0)
     {
     	$html=$html."<figure><img src=img/wifi.png></figure>";
     }
     $html=$html."</article><article id=direccion><p>".$row['direccion']."</p></article><article id=mapa><figure><img src=img/morelos/mapa.gif></figure></article>";

   } while($row = $db->fetch_array($consulta)); 
 $html=$html."</article>";
}
$db->close();
echo $html;
?>