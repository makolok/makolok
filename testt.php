<?php 
    include 'hader.php';
    //include 'fak.php';
    //include 'webview.php';
   // include 'dobbox.php';
    //include 'many.php';
    
    ?>
<div class="container">
    <div class="row">
        <!--  นก1 -->
        <div class="image-group" data-animal="bird">
            <img src="assets/a1.png" alt="bird" class="image" onclick="animalClickHandler('bird')">
            <div class="center-group">
                <span class="text" id="money-bird">0</span> <!-- ผลได้หรือเสีย -->
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('bird')"
                    class=" center-group img" id="money-icon-bird-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('bird')"
                    class="center-group img" id="money-icon-bird-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('bird')"
                    class="center-group img" id="money-icon-bird-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('bird')"
                    class="center-group img" id="money-icon-bird-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="overlay-button" id="stop-button-bird"
                    style="display: none;" onclick="cancelSelection('bird')">
            </div>

            <!-- นกกระต่าย -->

            <div class="image-group5" data-animal="Bird_Rabbit">
                <img src="assets/many1.png" alt="Bird_Rabbit" class="animal-icon5"
                    onclick="animalClickHandler('Bird_Rabbit')">
                <div class="money-container5">
                    <span class="text5" id="money-Bird_Rabbit">0</span>
                    <img src="assets/m5000c.png" alt="Money 5000" onclick="animalClickHandler('Bird_Rabbit')"
                        class="money-icon5" id="money-icon-Bird_Rabbit-5000" style="display: none;" data-amount="5000">
                    <img src="assets/m10000c.png" alt="Money 10000" onclick="animalClickHandler('Bird_Rabbit')"
                        class="money-icon5" id="money-icon-Bird_Rabbit-10000" style="display: none;"
                        data-amount="10000">
                    <img src="assets/m50000c.png" alt="Money 50000" onclick="animalClickHandler('Bird_Rabbit')"
                        class="money-icon5" id="money-icon-Bird_Rabbit-50000" style="display: none;"
                        data-amount="50000">
                    <img src="assets/m100000c.png" alt="Money 100000" onclick="animalClickHandler('Bird_Rabbit')"
                        class="money-icon5" id="money-icon-Bird_Rabbit-100000" style="display: none;"
                        data-amount="100000">
                    <img src="assets/stop.png" alt="Stop" class="stop-button5" id="stop-button-Bird_Rabbit"
                        style="display: none;" onclick="cancelSelection('Bird_Rabbit')">
                </div>
            </div>

        </div>

        <!-- ม้า 2 -->
        <div class="image-group" data-animal="horse">
            <img src="assets/a2.png" alt="horse" class="image" onclick="animalClickHandler('horse')">
            <div class="center-group">
                <span class="text" id="money-horse">0</span> <!-- ผลได้หรือเสีย -->
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('horse')"
                    class=" center-group img" id="money-icon-horse-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('horse')"
                    class="center-group img" id="money-icon-horse-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('horse')"
                    class="center-group img" id="money-icon-horse-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('horse')"
                    class="center-group img" id="money-icon-horse-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="overlay-button" id="stop-button-horse"
                    style="display: none;" onclick="cancelSelection('horse')">
            </div>

        </div>

        <!-- เสือ 3 -->
        <div class="image-group" data-animal="tiger">
            <img src="assets/a3.png" alt="tiger" class="image" onclick="animalClickHandler('tiger')">
            <div class="center-group">
                <span class="text" id="money-tiger">0</span> <!-- ผลได้หรือเสีย -->
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('tiger')"
                    class=" center-group img" id="money-icon-tiger-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('tiger')"
                    class="center-group img" id="money-icon-tiger-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('tiger')"
                    class="center-group img" id="money-icon-tiger-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('tiger')"
                    class="center-group img" id="money-icon-tiger-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="overlay-button" id="stop-button-tiger"
                    style="display: none;" onclick="cancelSelection('tiger')">
            </div>

        </div>
    </div>

    <div class="row">
        <!-- กระต่าย 4 -->
        <div class="image-group" data-animal="rabbit">
            <img src="assets/a4.png" alt="rabbit" class="image" onclick="animalClickHandler('rabbit')">
            <div class="center-group">
                <span class="text" id="money-rabbit">0</span> <!-- ผลได้หรือเสีย -->
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('rabbit')"
                    class=" center-group img" id="money-icon-rabbit-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('rabbit')"
                    class="center-group img" id="money-icon-rabbit-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('rabbit')"
                    class="center-group img" id="money-icon-rabbit-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('rabbit')"
                    class="center-group img" id="money-icon-rabbit-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="overlay-button" id="stop-button-rabbit"
                    style="display: none;" onclick="cancelSelection('rabbit')">
            </div>


        </div>
        <!-- ช้าง 5 -->
        <div class="image-group" data-animal="elephant">
            <img src="assets/a5.png" alt="elephant" class="image" onclick="animalClickHandler('elephant')">
            <div class="center-group">
                <span class="text" id="money-elephant">0</span> <!-- ผลได้หรือเสีย -->
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('elephant')"
                    class=" center-group img" id="money-icon-elephant-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('elephant')"
                    class="center-group img" id="money-icon-elephant-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('elephant')"
                    class="center-group img" id="money-icon-elephant-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('elephant')"
                    class="center-group img" id="money-icon-elephant-100000" style="display: none;"
                    data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="overlay-button" id="stop-button-elephant"
                    style="display: none;" onclick="cancelSelection('elephant')">
            </div>


            <!-- ม้าปลา -->
            <div class="image-group17" data-animal="Horse_Fish">
                <img src="assets/many1.png" alt="Horse_Fish" class="animal-icon17"
                    onclick="animalClickHandler('Horse_Fish')">
                <div class="money-container17">
                    <span class="text17" id="money-Horse_Fish">4000</span>
                    <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Horse_Fish')"
                        class="money-icon17" id="money-icon-Horse_Fish-5000" style="display: none;" data-amount="5000">
                    <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Horse_Fish')"
                        class="money-icon17" id="money-icon-Horse_Fish-10000" style="display: none;"
                        data-amount="10000">
                    <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Horse_Fish')"
                        class="money-icon17" id="money-icon-Horse_Fish-50000" style="display: none;"
                        data-amount="50000">
                    <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Horse_Fish')"
                        class="money-icon17" id="money-icon-Horse_Fish-100000" style="display: none;"
                        data-amount="100000">
                    <img src="assets/stop.png" alt="Stop" class="stop-button17" id="stop-button-Horse_Fish"
                        style="display: none;" onclick="cancelSelection('Horse_Fish')">
                </div>
            </div>

        </div>
        <!-- ปลา 6 -->
        <div class="image-group" data-animal="fish">
            <img src="assets/a6.png" alt="fish" class="image" onclick="animalClickHandler('fish')">
            <div class="center-group">
                <span class="text" id="money-fish">0</span> <!-- ผลได้หรือเสีย -->
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('fish')"
                    class=" center-group img" id="money-icon-fish-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('fish')"
                    class="center-group img" id="money-icon-fish-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('fish')"
                    class="center-group img" id="money-icon-fish-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('fish')"
                    class="center-group img" id="money-icon-fish-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="overlay-button" id="stop-button-fish"
                    style="display: none;" onclick="cancelSelection('fish')">
            </div>
        </div>

    </div>
    <div class="row">
        <!-- ม้าเสือ -->
        <div class="image-group18" data-animal="Horse_Tiger">
            <img src="assets/many1.png" alt="Horse_Tiger" class="animal-icon18"
                onclick="animalClickHandler('Horse_Tiger')">
            <div class="money-container18">
                <span class="text18" id="money-Horse_Tiger">0</span>
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Horse_Tiger')"
                    class="money-icon18" id="money-icon-Horse_Tiger-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Horse_Tiger')"
                    class="money-icon18" id="money-icon-Horse_Tiger-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Horse_Tiger')"
                    class="money-icon18" id="money-icon-Horse_Tiger-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Horse_Tiger')"
                    class="money-icon18" id="money-icon-Horse_Tiger-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button18" id="stop-button-Horse_Tiger"
                    style="display: none;" onclick="cancelSelection('Horse_Tiger')">
            </div>
        </div>

        <!-- นกม้า -->
        <div class="image-group19" data-animal="Bird_Horse">
            <img src="assets/many1.png" alt="Bird_Horse" class="animal-icon19"
                onclick="animalClickHandler('Bird_Horse')">
            <div class="money-container19">
                <span class="text19" id="money-Bird_Horse">0</span>
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Bird_Horse')"
                    class="money-icon19" id="money-icon-Bird_Horse-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Bird_Horse')"
                    class="money-icon19" id="money-icon-Bird_Horse-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Bird_Horse')"
                    class="money-icon19" id="money-icon-Bird_Horse-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Bird_Horse')"
                    class="money-icon19" id="money-icon-Bird_Horse-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button19" id="stop-button-Bird_Horse"
                    style="display: none;" onclick="cancelSelection('Bird_Horse')">
            </div>
        </div>

    </div>

    <div class="row">
        <!-- ช้างปลา -->
        <div class="image-group21" data-animal="Elephant_Fish">
            <img src="assets/many1.png" alt="Elephant_Fish" class="animal-icon21"
                onclick="animalClickHandler('Elephant_Fish')">
            <div class="money-container21">
                <span class="text21" id="money-Elephant_Fish">0</span>
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Elephant_Fish')"
                    class="money-icon21" id="money-icon-Elephant_Fish-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Elephant_Fish')"
                    class="money-icon21" id="money-icon-Elephant_Fish-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Elephant_Fish')"
                    class="money-icon21" id="money-icon-Elephant_Fish-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Elephant_Fish')"
                    class="money-icon21" id="money-icon-Elephant_Fish-100000" style="display: none;"
                    data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button21" id="stop-button-Elephant_Fish"
                    style="display: none;" onclick="cancelSelection('Elephant_Fish')">
            </div>
        </div>

        <!-- กระต่ายช้าง -->
        <div class="image-group20" data-animal="Bird_Horse">
            <img src="assets/many1.png" alt="Rabbit_Elephant" class="animal-icon20"
                onclick="animalClickHandler('Rabbit_Elephant')">
            <div class="money-container20">
                <span class="text20" id="money-Rabbit_Elephant">0</span>
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Rabbit_Elephant')"
                    class="money-icon20" id="money-icon-Rabbit_Elephant-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Rabbit_Elephant')"
                    class="money-icon20" id="money-icon-Rabbit_Elephant-10000" style="display: none;"
                    data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Rabbit_Elephant')"
                    class="money-icon20" id="money-icon-Rabbit_Elephant-50000" style="display: none;"
                    data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Rabbit_Elephant')"
                    class="money-icon20" id="money-icon-Rabbit_Elephant-100000" style="display: none;"
                    data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button20" id="stop-button-Rabbit_Elephant"
                    style="display: none;" onclick="cancelSelection('Rabbit_Elephant')">
            </div>
        </div>

    </div>

    <div class="row">

        <!-- ม้ากระต่าย -->
        <div class="image-group13" data-animal="Horse_Rabbit">
            <img src="assets/many1.png" alt="Horse_Rabbit" class="animal-icon13"
                onclick="animalClickHandler('Horse_Rabbit')">
            <div class="money-container13">
                <span class="text13" id="money-Horse_Rabbit">0</span>
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Horse_Rabbit')"
                    class="money-icon13" id="money-icon-Horse_Rabbit-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Horse_Rabbit')"
                    class="money-icon13" id="money-icon-Horse_Rabbit-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Horse_Rabbit')"
                    class="money-icon13" id="money-icon-Horse_Rabbit-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Horse_Rabbit')"
                    class="money-icon13" id="money-icon-Horse_Rabbit-100000" style="display: none;"
                    data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button13" id="stop-button-Horse_Rabbit"
                    style="display: none;" onclick="cancelSelection('Horse_Rabbit')">
            </div>
        </div>

        <!-- นกช้าง -->
        <div class="image-group15" data-animal="Bird_Elephant">
            <img src="assets/many1.png" alt="Bird_Elephant" class="animal-icon15"
                onclick="animalClickHandler('Bird_Elephant')">
            <div class="money-container15">
                <span class="text15" id="money-Bird_Elephant">0</span>
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Bird_Elephant')"
                    class="money-icon15" id="money-icon-Bird_Elephant-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Bird_Elephant')"
                    class="money-icon15" id="money-icon-Bird_Elephant-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Bird_Elephant')"
                    class="money-icon15" id="money-icon-Bird_Elephant-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Bird_Elephant')"
                    class="money-icon15" id="money-icon-Bird_Elephant-100000" style="display: none;"
                    data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button15" id="stop-button-Bird_Elephant"
                    style="display: none;" onclick="cancelSelection('Bird_Elephant')">
            </div>
        </div>

        <!-- ม้าช้าง -->
        <div class="image-group12" data-animal="Horse_Elephant">
            <img src="assets/many1.png" alt="Horse_Elephant" class="animal-icon12"
                onclick="animalClickHandler('Horse_Elephant')">
            <div class="money-container12">
                <span class="text12" id="money-Horse_Elephant">0</span>
                <img src="assets/m5000c.png" alt="Money 5000" onclick="animalClickHandler('Horse_Elephant')"
                    class="money-icon12" id="money-icon-Horse_Elephant-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000c.png" alt="Money 10000" onclick="animalClickHandler('Horse_Elephant')"
                    class="money-icon12" id="money-icon-Horse_Elephant-10000" style="display: none;"
                    data-amount="10000">
                <img src="assets/m50000c.png" alt="Money 50000" onclick="animalClickHandler('Horse_Elephant')"
                    class="money-icon12" id="money-icon-Horse_Elephant-50000" style="display: none;"
                    data-amount="50000">
                <img src="assets/m100000c.png" alt="Money 100000" onclick="animalClickHandler('Horse_Elephant')"
                    class="money-icon12" id="money-icon-Horse_Elephant-100000" style="display: none;"
                    data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button12" id="stop-button-Horse_Elephant"
                    style="display: none;" onclick="cancelSelection('Horse_Elephant')">
            </div>
        </div>

        <!-- เสือช้าง -->
        <div class="image-group16" data-animal="Tiger_Elephant">
            <img src="assets/many1.png" alt="Tiger_Elephant" class="animal-icon16"
                onclick="animalClickHandler('Tiger_Elephant')">
            <div class="money-container16">
                <span class="text16" id="money-Tiger_Elephant">4000</span>
                <img src="assets/m5000.png" alt="Money 5000" onclick="animalClickHandler('Tiger_Elephant')"
                    class="money-icon16" id="money-icon-Tiger_Elephant-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000.png" alt="Money 10000" onclick="animalClickHandler('Tiger_Elephant')"
                    class="money-icon16" id="money-icon-Tiger_Elephant-10000" style="display: none;"
                    data-amount="10000">
                <img src="assets/m50000.png" alt="Money 50000" onclick="animalClickHandler('Tiger_Elephant')"
                    class="money-icon16" id="money-icon-Tiger_Elephant-50000" style="display: none;"
                    data-amount="50000">
                <img src="assets/m100000.png" alt="Money 100000" onclick="animalClickHandler('Tiger_Elephant')"
                    class="money-icon16" id="money-icon-Tiger_Elephant-100000" style="display: none;"
                    data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button16" id="stop-button-Tiger_Elephant"
                    style="display: none;" onclick="cancelSelection('Tiger_Elephant')">
            </div>
        </div>

        <!-- เสือปลา -->
        <div class="image-group11" data-animal="Tiger_Fish">
            <img src="assets/many1.png" alt="Tiger_Fish" class="animal-icon11"
                onclick="animalClickHandler('Tiger_Fish')">
            <div class="money-container11">
                <span class="text11" id="money-Tiger_Fish">0</span>
                <img src="assets/m5000c.png" alt="Money 5000" onclick="animalClickHandler('Tiger_Fish')"
                    class="money-icon11" id="money-icon-Tiger_Fish-5000" style="display: none;" data-amount="5000">
                <img src="assets/m10000c.png" alt="Money 10000" onclick="animalClickHandler('Tiger_Fish')"
                    class="money-icon11" id="money-icon-Tiger_Fish-10000" style="display: none;" data-amount="10000">
                <img src="assets/m50000c.png" alt="Money 50000" onclick="animalClickHandler('Tiger_Fish')"
                    class="money-icon11" id="money-icon-Tiger_Fish-50000" style="display: none;" data-amount="50000">
                <img src="assets/m100000c.png" alt="Money 100000" onclick="animalClickHandler('Tiger_Fish')"
                    class="money-icon11" id="money-icon-Tiger_Fish-100000" style="display: none;" data-amount="100000">
                <img src="assets/stop.png" alt="Stop" class="stop-button11" id="stop-button-Tiger_Fish"
                    style="display: none;" onclick="cancelSelection('Tiger_Fish')">
            </div>
        </div>


    </div>

    <?php 

include 'sad4.php';


?>

</div>