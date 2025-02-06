<?php
if (file_exists('command.txt')) {
    $command = file_get_contents('command.txt');
    unlink('command.txt'); // ลบไฟล์หลังจากอ่าน
    echo json_encode(['action' => $command]);
} else {
    echo json_encode(['action' => '']);
}
?>