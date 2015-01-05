<?php

use indexed\Robots;
$robots = new Robots();
$robots->disallow('/admin');

include_once('home.html');

?>