<?php
// เปิดการแสดงข้อผิดพลาดสำหรับ Debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ตั้งค่า Content-Type ให้เป็น JSON
header("Content-Type: application/json");

// ตรวจสอบคำขอ POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = json_decode(file_get_contents("php://input"), true);

    if (isset($input["disableButtons"]) && $input["disableButtons"] === true) {
        if (file_put_contents("button_status.json", json_encode(["disabled" => true])) === false) {
            echo json_encode(["success" => false, "message" => "ไม่สามารถบันทึกสถานะได้"]);
        } else {
            echo json_encode(["success" => true, "message" => "ปุ่มถูกปิดการใช้งาน"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "คำสั่งไม่ถูกต้อง"]);
    }
    exit;
}

// กรณีเข้าถึงไฟล์ผ่าน GET หรือวิธีอื่น
echo json_encode(["success" => false, "message" => "โปรดใช้คำสั่ง POST เท่านั้น"]);
exit;
?>