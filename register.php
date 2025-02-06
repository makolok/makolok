<?php
session_start();
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $pass = $_POST['pass'] ?? '';
    $level = 'member'; // ค่าเริ่มต้นสำหรับระดับสมาชิก
    $money = 0; // ค่าเริ่มต้นสำหรับจำนวนเงิน

    // ตรวจสอบความสมบูรณ์ของข้อมูล
    if (empty($name) || empty($pass)) {
        echo "<script>
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            window.history.back();
        </script>";
        exit;
    }

    // เชื่อมต่อฐานข้อมูล
    $conmember = new mysqli("localhost", "root", "", "member");
    if ($conmember->connect_error) {
        die("<script>
            alert('เชื่อมต่อฐานข้อมูลล้มเหลว');
            window.history.back();
        </script>");
    }

    // ตรวจสอบว่าชื่อซ้ำหรือไม่
    $check_stmt = $conmember->prepare("SELECT id FROM member_money WHERE name = ?");
    $check_stmt->bind_param("s", $name);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
        echo "<script>
            alert('ชื่อผู้ใช้นี้มีอยู่ในระบบแล้ว');
            window.history.back();
        </script>";
        $check_stmt->close();
        $conmember->close();
        exit;
    }
    $check_stmt->close();

    // เข้ารหัสรหัสผ่าน
    $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

    // เพิ่มข้อมูลลงในฐานข้อมูล
    $stmt = $conmember->prepare("INSERT INTO member_money (name, pass, level, money) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("sssi", $name, $hashed_pass, $level, $money);

    if ($stmt->execute()) {
       // แสดงแจ้งเตือนเมื่อการลงทะเบียนสำเร็จ
    echo '<script>
    setTimeout(function() {
        swal({
            title: "ลงทะเบียนสำเร็จ",
            type: "success"
        }, function() {
            window.location = "login.php"; // หน้าที่ต้องการให้กระโดดไป
        });
    }, 1000);
</script>';
} else {
// แสดงแจ้งเตือนเมื่อเกิดข้อผิดพลาด
echo '<script>
    setTimeout(function() {
        swal({
            title: "เกิดข้อผิดพลาด",
            type: "error"
        }, function() {
            window.location = "register.php"; // หน้าที่ต้องการให้กระโดดไป
        });
    }, 1000);
</script>';
    }

    // ปิดการเชื่อมต่อ
    $stmt->close();
    $conmember->close();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>สมัครสมาชิก</title>

    <!-- Google Font -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="AdminLTE/assets/plugins/fontawesome-free/css/all.min.css">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="AdminLTE/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="AdminLTE/assets/dist/css/adminlte.min.css">

    <!-- SweetAlert -->
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">
</head>

<body class="hold-transition register-page">
    <div class="register-box">
        <div class="register-logo">
            <a href="#"><b>สมัครสมาชิก</b> </a>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">กรุณากรอกข้อมูลเพื่อสมัครสมาชิก</p>

                <form action="register.php" method="post">
                    <div class="input-group mb-3">
                        <input type="text" name="name" class="form-control" placeholder="ชื่อผู้ใช้" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <input type="password" name="pass" class="form-control" placeholder="รหัสผ่าน" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">สมัครสมาชิก</button>
                        </div>
                    </div>
                </form>

                <div class="social-auth-links text-center">
                    <a href="login.html" class="text-center">ติดต่อผู้ดูแลระบบหากพบปัญหา</a>
                </div>

                <a href="login.html" class="text-center">ไปหน้าเข้าสู่ระบบ</a>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="AdminLTE/assets/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="AdminLTE/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="AdminLTE/assets/dist/js/adminlte.min.js"></script>
</body>

</html>