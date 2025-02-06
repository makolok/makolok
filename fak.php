<?php
session_start();

// ตรวจสอบการเข้าสู่ระบบ
if (!isset($_SESSION['user_id']) || $_SESSION['level'] !== 'member') {
    header("Location: login.php");
    exit();
}

// ตรวจสอบข้อมูลในเซสชัน หากไม่มีให้กำหนดค่าเริ่มต้น
$name = $_SESSION['name'] ?? 'ไม่ทราบชื่อ';
$money = $_SESSION['money'] ?? 0;
?>


<!-- Header -->
<header class="header-bar1">
    <span>ชื่อ:<?= htmlspecialchars($name); ?></span>

    <button class="button"><img src="assets/in.png" alt="Deposit"></button>

    <button class="button"><img src="assets/out.png" alt="Withdraw"></button>

    <!-- เอาผลรวมเงินแพ้ชนะ มาบวกลบ -->
    <span id="player-balance" data-balance="<?= htmlspecialchars($money, ENT_QUOTES, 'UTF-8'); ?>">
        <?= number_format($money, 0, '.', ','); ?>
    </span>
</header>