<?php 
include("mysql.class.php");
$habitacion=$_POST['habitacion'];
$db = new MySQL();
$db->open();
$queryx = "SELECT * FROM habitacion where id_hotel='$habitacion';";
$consulta = $db->consulta($queryx);
$cadena="";
if ($row = $db->fetch_array($consulta))
{
    $cadena="<section id=cuartos_hotel>";	
   do{

   	$cadena=$cadena."<figure><img src=".$row['img']."></figure>";
    $cadena=$cadena."<section id=texto_cuartos>";
    $cadena=$cadena."<article id=descripcion_cuarto><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quam, soluta, officiis, fuga neque ut tempore amet labore doloribus commodi porro consequuntur dolorum ab ipsum beatae nobis voluptates repudiandae ea!</p></article>";

    $cadena=$cadena."<article id=precio_cuarto><p>precio</p><p>$".$row['costo']."</p></article>";
    $cadena=$cadena."<article id=cantidad_cuartos><p>Habitaciones</p><p>".$row['cantidad']."</p></article></section>";
    $cadena=$cadena."<article id=tipo_habitacion onclick=cotizados(".$row['costo'].");><p>".$row['tipo']."</p></article>";
    


   }while($row = $db->fetch_array($consulta)); 
 
 $cadena=$cadena."</section>";
}
echo $cadena;
$db->close();
?>