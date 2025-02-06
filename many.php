<!-- Money Selection Section -->
<section class="money-selection">
    <button class="amount-button" data-amount="5000" onclick="selectAmount(5000, this)">
        <img src="assets/m5000.png" alt="5000 Coin" style="display: none;">
        <span class="amount-text">5000</span>
    </button>
    <button class="amount-button" data-amount="10000" onclick="selectAmount(10000, this)">
        <img src="assets/m10000.png" alt="10000 Coin" style="display: none;">
        <span class="amount-text">10000</span>
    </button>
    <button class="amount-button" data-amount="50000" onclick="selectAmount(50000, this)">
        <img src="assets/m50000.png" alt="50000 Coin" style="display: none;">
        <span class="amount-text">50000</span>
    </button>
    <button class="amount-button" data-amount="100000" onclick="selectAmount(100000, this)">
        <img src="assets/m100000.png" alt="100000 Coin" style="display: none;">
        <span class="amount-text">100000</span>
    </button>
</section>

<!-- โชว์ผลรวมการทายผล -->
<section class="header-bar1">
    ยอดเล่น: <span id="total-bets">0 </span>
    ผลรวมเงินแพ้ชนะ: <span id="total-result">0</span>
</section>