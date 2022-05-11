<?php
session_start();
include 'php/connect.php';
if (isset($_POST["enter"])) {
	$login = $_POST["login"];
	$user = mysqli_query($connect, "SELECT * FROM user WHERE`login` = '" . $login . "'");
	$user = mysqli_fetch_assoc($user);
	if ($user["login"] == $login && $user["ID_role"] == 2) {
		$_SESSION["user"] = $user;
		header("Location:php/account.php");
	}
	if ($user["login"] == $login && $user["ID_role"] == 1) {
		$_SESSION["user"] = $user;
		header("Location:php/admin.php");
	}
}
?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8" />
	<link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
	<link href="../css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<div class="act">
		<h1> Форма авторизации</h1>
		<form action=" " method="post" class="form-avto">
			<input required type="text" class="form-control" name="login" id="login" placeholder="Введите логин" /><br>
			<input required type="password" class="form-control" name="pass" id="pass" placeholder="Введите пароль" /><br>
			<input name="enter" type="submit" value="Войти" class="log_but" /><br />
		</form>
	</div>
</body>

</html>