<!-- Game Controls -->

<section class="controls-container">

    <!--  ทำให้ปุ่ม 21 ปุ่มสัตว์ทั้งหมดกดได้ -->
    <button style='  display: none;
' id="disable-buttons" onclick="disableAnimalButtons(false)">
        <img src="assets/stat2.png" alt="Stop">
    </button>

    <!-- ให้ซ่อนปุ่ม ทำให้ปุ่ม 21 ปุ่มสัตว์ทั้งหมดกดไม่ได้ -->
    <button style=' display: none;
' onclick="disableAnimalButtons(true)">
        <img src="assets/stop1.png" alt="Stop">
    </button>

    <!-- ทำให้ dropdown แสดงผล แต่กดไม่ได้ นอกจาก แอดมิน -->

    <!-- ช่องที่ 1 -->
    <div class="animal-dropdown-container ">
        <div class="animal-dropdown" id="dropdown-1">
            <img id="selected-animal-1" src="assets/b7.png" alt="Bird" class="selected-animal">
            <div class="dropdown-options" id="dropdown-options-1" style="display: none;">
                <img src="assets/b7.png" alt="Bird" class="dropdown-option" onclick="selectAnimal(1, 'b7')">
                <img src="assets/b8.png" alt="Horse" class="dropdown-option" onclick="selectAnimal(1, 'b8')">
                <img src="assets/b9.png" alt="Tiger" class="dropdown-option" onclick="selectAnimal(1, 'b9')">
                <img src="assets/b10.png" alt="Rabbit" class="dropdown-option" onclick="selectAnimal(1, 'b10')">
                <img src="assets/b11.png" alt="Elephant" class="dropdown-option" onclick="selectAnimal(1, 'b11')">
                <img src="assets/b12.png" alt="Fish" class="dropdown-option" onclick="selectAnimal(1, 'b12')">
            </div>
        </div>
    </div>

    <!-- ช่องที่ 2 -->
    <div class="animal-dropdown" id="dropdown-2">
        <img id="selected-animal-2" src="assets/b8.png" alt="Horse" class="selected-animal">
        <div class="dropdown-options" id="dropdown-options-2" style="display: none;">
            <img src="assets/b7.png" alt="Bird" class="dropdown-option" onclick="selectAnimal(2, 'b7')">
            <img src="assets/b8.png" alt="Horse" class="dropdown-option" onclick="selectAnimal(2, 'b8')">
            <img src="assets/b9.png" alt="Tiger" class="dropdown-option" onclick="selectAnimal(2, 'b9')">
            <img src="assets/b10.png" alt="Rabbit" class="dropdown-option" onclick="selectAnimal(2, 'b10')">
            <img src="assets/b11.png" alt="Elephant" class="dropdown-option" onclick="selectAnimal(2, 'b11')">
            <img src="assets/b12.png" alt="Fish" class="dropdown-option" onclick="selectAnimal(2, 'b12')">
        </div>
    </div>

    <!-- ช่องที่ 3 -->
    <div class="animal-dropdown" id="dropdown-3">
        <img id="selected-animal-3" src="assets/b9.png" alt="Tiger" class="selected-animal">
        <div class="dropdown-options" id="dropdown-options-3" style="display: none;">
            <img src="assets/b7.png" alt="Bird" class="dropdown-option" onclick="selectAnimal(3, 'b7')">
            <img src="assets/b8.png" alt="Horse" class="dropdown-option" onclick="selectAnimal(3, 'b8')">
            <img src="assets/b9.png" alt="Tiger" class="dropdown-option" onclick="selectAnimal(3, 'b9')">
            <img src="assets/b10.png" alt="Rabbit" class="dropdown-option" onclick="selectAnimal(3, 'b10')">
            <img src="assets/b11.png" alt="Elephant" class="dropdown-option" onclick="selectAnimal(3, 'b11')">
            <img src="assets/b12.png" alt="Fish" class="dropdown-option" onclick="selectAnimal(3, 'b12')">
        </div>
    </div>
    </div>

    <!-- ให้ซ่อนปุ่ม ปุ่มคำนวณเงินรางวัล -->
    <button style='display: none;
' onclick="onCalculateButtonClick()">
        <img src="assets/stat2.png" alt="Calculate">
    </button>

    <!-- ปุ่มให้อิดมิน เปิด/ปิด 3 ปุ่ม และ dropdown เปิด/ปิด ใช้งาน -->
    <button style='display: none;
' onclick="toggleGameControls()">
        <img src="assets/stop1.png" alt="Stop">
    </button>


</section>