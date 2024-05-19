<?php
//conectar la base de datos
$servername="localhost";          //nombre del servidor o host
$username="root";                //usuario de conexion al servidor mysql
$password="";                   //contraseña del usuario mysql
$dbname="videojuegos";      //nombre de la base de datos, la que hicimos


//funcion para conectar a la base de datos
$conn=new mysqli($servername, $username,$password, $dbname);

  //verificar la conexion
  if($conn->connect_error){
    die("conexion fallida: ".$conn->connect_error);
  }
  else{
    echo"conexión exitosa";

    //recibir datos del formulario

    $nombre=$_POST['username'];
    $contrasenia=$_POST['password'];

    echo $nombre;
    echo $contrasenia;

    $sql="INSERT INTO usuario (usu_nombre, usu_contrasena) VALUES ('$nombre', '$contrasenia')";
    echo $sql;

    if($conn->query($sql)==TRUE){
      echo "Registro de usuario exitoso";
    }
    else{
      echo"Error al registrar el usuario: ".$conn->error;
    }
  }

  //cerrar conexion
$conn->close();    

?>
