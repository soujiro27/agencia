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
   	$html="<section id=cuadro_foto><article id=img_hotel><figure id=imagen_hotel><img src=".$row['foto']."></figure><article id=categoria>";
   	
     while($estrellas>0)
     {
     	$html=$html."<figure><img src=img/estrella.png></figure>";
     	$estrellas=$estrellas-1;
     }
     $html=$html."</article></section>";
     $html=$html."<section id=cuadro_servicios><article id=servicios>";
     if($row['restaurant']>0)
     {
     	$html=$html."<figure><img src=img/resta.png><figcaption>Restaurante</figcaption></figure>";
     }

     if($row['alberca']>0)
     {
     	$html=$html."<figure><img src=img/alberca.png><figcaption>Alberca</figcaption></figure>";
     }

     if($row['gym']>0)
     {
     	$html=$html."<figure><img src=img/gym.png><figcaption>Gimnasio</figcaption></figure>";
     }

     if($row['wifi']>0)
     {
     	$html=$html."<figure><img src=img/wifi.png><figcaption>Internet</figcaption></figure>";
     }
     $html=$html."</article><article id=descripcion><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ipsum, iste, optio exercitationem itaque placeat fugit numquam ipsam ullam porro quo temporibus et veniam esse possimus blanditiis veritatis aliquam molestiae.</article><article id=mapa><figure><img src=img/morelos/mapa.gif></figure></article></section><article><p>".$row['direccion']."</p></article>";

   } while($row = $db->fetch_array($consulta)); 
 $html=$html."</article>";
}
$db->close();
echo $html;
?>