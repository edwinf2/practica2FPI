<?php

  $sUsuario=$_POST["usuario"];
  $sContra=$_POST["contra"];
  $sMensaje="";

  if ($sUsuario=="Edwin" && $sContra=="edwin") {
   $sMensaje="Bienvenido";
  }else {
   $sMensaje="Has introducido datos incorrectos";
  }
  echo json_decode($sMensaje);

?>
