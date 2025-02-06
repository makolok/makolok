<?php
session_start();

// ตรวจสอบการเข้าสู่ระบบ (ตรวจสอบว่า $_SESSION['user_id'] มีอยู่หรือไม่)
if (!isset($_SESSION['user_id'])) {
    http_response_code(403);
    echo "ไม่ได้รับอนุญาต: ไม่มี user_id ใน session";
    exit();
}

// ตรวจสอบว่าเป็นคำขอแบบ POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Method Not Allowed";
    exit();
}

// ตรวจสอบว่ามี parameter 'balance' ถูกส่งมาหรือไม่
if (!isset($_POST['balance'])) {
    http_response_code(400);
    echo "ข้อมูลไม่ครบถ้วน";
    exit();
}

$balance = intval($_POST['balance']);
$userId = $_SESSION['user_id'];

// ใช้เส้นทางที่ถูกต้องตามตำแหน่งไฟล์เชื่อมต่อฐานข้อมูลของคุณ
require_once __DIR__ . '../AdminLTE/config/conmember.php';

if (!$conmember) {
    http_response_code(500);
    echo "เชื่อมต่อฐานข้อมูลล้มเหลว";
    exit();
}

try {
    $stmt = $conmember->prepare("UPDATE member_money SET money = ? WHERE id = ?");
} catch (PDOException $e) {
    http_response_code(500);
    echo "เตรียม statement ล้มเหลว: " . $e->getMessage();
    exit();
}

if (!$stmt) {
    http_response_code(500);
    echo "เตรียม statement ล้มเหลว: " . implode(" | ", $conmember->errorInfo());
    exit();
}

$stmt->bindParam(1, $balance, PDO::PARAM_INT);
$stmt->bindParam(2, $userId, PDO::PARAM_INT);

if ($stmt->execute()) {
    $_SESSION['money'] = $balance; // อัปเดต session ด้วยค่าใหม่
    echo "อัปเดตยอดเงินสำเร็จ";
} else {
    http_response_code(500);
    $errorInfo = $stmt->errorInfo();
    echo "อัปเดตยอดเงินล้มเหลว: " . implode(" | ", $errorInfo);
}
?>