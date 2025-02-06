<!DOCTYPE html>

<!-- Game Controls -->

<section class="header-bar1">

    <span style="font-size: 14px; color: white; font-weight: bold;">เริ่มใหม่</span><br>

    <button class="button img" id="enable-buttons">
        <img src="assets/ree.png" alt="Enable Buttons">
    </button>

    <span style="font-size: 14px; color: white; font-weight: bold;">หยุดเล่น</span><br>

    <!-- ปุ่มกดเพื่อส่งคำสั่งปิดปุ่มสัตว์ไปยัง `game` -->
    <button id="disable-button" class="button img" onclick="sendDisableCommand()">
        <img src="assets/put.png" alt="Stop">
    </button>

    <span style="font-size: 14px; color: white; font-weight: bold;">ส่งรูป</span><br>

    <!-- ทำให้ dropdown แสดงผล แต่กดได้ปกติ -->

    <!-- ส่งรูป ใน Dropdown ไป game -->
    <button class="button img" onclick="sendSelectedAnimalToGame()">
        <img src="assets/go.png" alt="Send Animal">
    </button>

    <span style="font-size: 14px; color: white; font-weight: bold;">จ่ายเงิน</span><br>

    <!-- ปุ่มส่งคำสั่งให้ `game` คำนวณรางวัล -->
    <button class="button img" id="myButton" onclick="sendCalculateCommand()">
        <img src="assets/stat2.png" alt="Calculate">
    </button>

</section>

<!-- โชว์ผลรวมการทายผล -->
<section class="controls-container1">
    <span style="color: black;
" id="total-bets"></span><br>
    <span style="color: black;" id="total-result"></span>
</section>


<section class="controls-container">

    <!-- ทำให้ dropdown แสดงผล แต่กดไม่ได้ นอกจาก แอดมิน -->

    <!-- ช่องที่ 1 -->
    <div class="animal-dropdown-container">
        <div class="animal-dropdown" id="dropdown-1">
            <img id="selected-animal-1" src="assets/b7.png" alt="Bird" class="selected-animal"
                onclick="toggleDropdown(1)">
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
        <img id="selected-animal-2" src="assets/b8.png" alt="Horse" class="selected-animal" onclick="toggleDropdown(2)">
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
        <img id="selected-animal-3" src="assets/b9.png" alt="Tiger" class="selected-animal" onclick="toggleDropdown(3)">
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


</section>

<span id="player-balance"></span>

<form onsubmit="event.preventDefault(); submitURL();">
    <input type="text" name="youtube" id="youtubeInput" class="form-control" placeholder="Enter YouTube URL" required>
    <button type="submit">Submit</button>
</form>