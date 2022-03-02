<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PPArchery</title>
  </head>

  <link rel="stylesheet" href="stylesheets/login.css">

  <?php
  $host_name = 'db5006791563.hosting-data.io';
  $database = 'dbs5611857';
  $user_name = 'dbu2887990';
  $password = 'C6?q6f2WNH';

  $link = new mysqli($host_name, $user_name, $password, $database);

  if ($link->connect_error) {
    die('<p>Verbindung zum MySQL Server fehlgeschlagen: '. $link->connect_error .'</p>');
  }
 ?>

  <body>

  </body>
</html>