<?php
session_start();
// เชื่อมต่อฐานข้อมูล
require_once 'AdminLTE/config/conmember.php';

// สร้างเงื่อนไขเข้าระบบ
if (isset($_POST['name']) && isset($_POST['pass']) && isset($_POST['action']) && $_POST['action'] == 'login') {
// ประกาศตัวแปรรับค่าจากฟอร์ม
$username = $_POST['name'];
$password = sha1($_POST['pass']); // เก็บรหัสผ่านในรูปแบบ sha1

// ตรวจสอบ username & password
$stmtlogin = $conmember->prepare("SELECT id, name, money, level FROM member_money WHERE name = :name AND pass = :pass");
$stmtlogin->bindParam(':name', $username, PDO::PARAM_STR);
$stmtlogin->bindParam(':pass', $password, PDO::PARAM_STR);
$stmtlogin->execute();

// กรอก username & password ถูกต้อง
if ($stmtlogin->rowCount() == 1) {
// Fetch ข้อมูลผู้ใช้
$row = $stmtlogin->fetch(PDO::FETCH_ASSOC);

// สร้างตัวแปร session
$_SESSION['user_id'] = $row['id'];
$_SESSION['name'] = $row['name'];
$_SESSION['money'] = $row['money'];
$_SESSION['level'] = $row['level'];

// สร้างเงื่อนไขสิทธิการเข้า
if ($_SESSION['level'] == 'admin') {
header('Location: AdminLTE/admin/');
} elseif ($_SESSION['level'] == 'staff') {
header('Location: /staff/member.php');
} elseif ($_SESSION['level'] == 'member') {
header('Location: game.php'); // เปลี่ยนเส้นทางไปยัง game.php
}elseif ($_SESSION['level'] == 'live') {
header('Location: liveadd.php'); // เปลี่ยนเส้นทางไปยัง game.php
}
exit();
} else { // ถ้า username หรือ password ไม่ถูกต้อง
echo '<script>
setTimeout(function() {
    swal({
        title: "เกิดข้อผิดพลาด",
        text: "Username หรือ Password ไม่ถูกต้อง ลองใหม่อีกครั้ง",
        type: "warning"
    }, function() {
        window.location = "login.php"; // หน้าที่ต้องการให้กระโดดไป
    });
}, 1000);
</script>';
}
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Log in</title>
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="AdminLTE\assets\plugins\fontawesome-free\css/all.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="AdminLTE\assets\dist\css/adminlte.min.css">
    <!-- ข้อความแสดงแจ้งเตือน -->
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">
</head>

<body class="hold-transition login-page">
    <div class="login-box">
        <div class="login-logo">
            <b>เข้าสู่ระบบ</b>makolok
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">ใส่รหัสเพื่อเข้าเกม</p>
                <form action="" method="post">

                    <span class="fas fa-user">ชื่อที่จำได้</span>
                    <div class="input-group mb-3">
                        <input type="text" name="name" class="form-control" placeholder="usename" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>

                    <span class="fas fa-lock">รหัสที่จำได้</span>
                    <div class="input-group mb-3">
                        <input type="text" name="pass" class="form-control" placeholder="Password" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="col-12">
                            <button type="submit" name="action" value="login"
                                class="btn btn-primary btn-block">เข้าสู่ระบบ</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <div class="social-auth-links text-center mb-3">
                    <p>- สมัครสมาชิก -</p>
                </div>
                <div class="col-6">
                    <a href="register.php" class="btn btn-primary btn-block">สมัครสมาชิก</a>
                </div>
                <!-- /.social-auth-links -->
                <p class="mb-1">
                    <a href="forgot-password.html">ลืมรหัส</a>
                </p>
                <p class="mb-0">
                    <a href="login.php" class="text-center">กลับหน้าหลัก</a>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
</body>

</html>