let selectedAmount = null; // จำนวนเงินที่เลือก
let animalAmounts = {
  bird: 0,
  horse: 0,
  tiger: 0,
  rabbit: 0,
  elephant: 0,
  fish: 0,
  Bird_Horse: 0,
  Horse_Tiger: 0,
  Elephant_Fish: 0,
  Rabbit_Elephant: 0,
  Bird_Rabbit: 0,
  Horse_Elephant: 0,
  Tiger_Fish: 0,
  Horse_Rabbit: 0,
  Bird_Elephant: 0,
  Tiger_Elephant: 0,
  Horse_Fish: 0,
  Bird_Tiger: 0,
  Birds_Fish: 0,
  Rabbits_tigers: 0,
  Rabbits_fish: 0
};
let bets = {
  single: {
    // เดิมพันเดี่ยว
    bird: 0,
    horse: 0,
    tiger: 0,
    rabbit: 0,
    elephant: 0,
    fish: 0
  },
  pair: {
    // เดิมพันคู่
    Bird_Horse: 0,
    Horse_Tiger: 0,
    Elephant_Fish: 0,
    Rabbit_Elephant: 0,
    Bird_Rabbit: 0,
    Horse_Elephant: 0,
    Tiger_Fish: 0,
    Horse_Rabbit: 0,
    Bird_Elephant: 0,
    Tiger_Elephant: 0,
    Horse_Fish: 0,
    Bird_Tiger: 0,
    Birds_Fish: 0,
    Rabbits_tigers: 0,
    Rabbits_fish: 0
  }
};

let results = {
  bird: false,
  horse: false,
  tiger: false,
  rabbit: false,
  elephant: false,
  fish: false,
  Bird_Horse: false,
  Horse_Tiger: false,
  Elephant_Fish: false,
  Rabbit_Elephant: false,
  Bird_Rabbit: false,
  Horse_Elephant: false,
  Tiger_Fish: false,
  Horse_Rabbit: false,
  Bird_Elephant: false,
  Tiger_Elephant: false,
  Horse_Fish: false,
  Bird_Tiger: false,
  Birds_Fish: false,
  Rabbits_tigers: false,
  Rabbits_fish: false
};

// เพิ่มฟังก์ชัน ฟังก์ชันสำหรับเลือกจำนวนเงิน updateAnimalIcons
function selectAmount(amount) {
  selectedAmount = amount;
  console.log(`เลือกจำนวนเงิน: ${selectedAmount}`);

  // อัปเดต UI ของปุ่มจำนวนเงิน
  document.querySelectorAll(".amount-button").forEach((button) => {
    const buttonAmount = parseInt(button.dataset.amount, 10);
    const img = button.querySelector("img");
    const text = button.querySelector(".amount-text");

    if (buttonAmount === amount) {
      button.classList.add("selected");
      if (img) img.style.display = "block"; // แสดงไอคอนรูปภาพ
      if (text) text.style.display = "none"; // ซ่อนข้อความ
    } else {
      button.classList.remove("selected");
      if (img) img.style.display = "none"; // ซ่อนไอคอนรูปภาพ
      if (text) text.style.display = "block"; // แสดงข้อความ
    }
  });

  // ตรวจสอบและเรียกฟังก์ชัน updateAnimalIcons
  if (typeof updateAnimalIcons === "function") {
    updateAnimalIcons(selectedAmount);
  } else {
    console.warn("updateAnimalIcons ไม่ได้ถูกกำหนดไว้");
  }

  // ป้องกันการทำให้รูปสัตว์มืด
  document.querySelectorAll(".animal-icon").forEach((icon) => {
    icon.style.filter = ""; // รีเซ็ตฟิลเตอร์ (ถ้ามีการตั้งค่าไว้)
    icon.style.opacity = ""; // รีเซ็ตค่าความโปร่งใส
    icon.classList.remove("dimmed"); // ลบคลาสที่ทำให้รูปมืด (ถ้ามี)
  });

  console.log("อัปเดตจำนวนเงินสำเร็จโดยไม่กระทบรูปสัตว์");
}

// ฟังก์ชันสำหรับยกเลิกการเลือกสัตว์
function cancelSelection(animal) {
  const playerBalanceElement = document.getElementById("player-balance");
  let playerBalance = parseInt(
    playerBalanceElement.textContent.replace(/,/g, ""),
    10
  );

  // คืนยอดเงินกลับ
  playerBalance += animalAmounts[animal];
  playerBalanceElement.textContent = playerBalance.toLocaleString();

  // รีเซ็ตจำนวนเงินของสัตว์
  animalAmounts[animal] = 0;

  // ซ่อนตัวเลขเงิน
  const moneyDisplay = document.getElementById(`money-${animal}`);
  if (moneyDisplay) {
    moneyDisplay.textContent = "0";
    moneyDisplay.style.display = "none";
  }

  // ซ่อนรูปเงินทั้งหมด
  const moneyIcons = document.querySelectorAll(`[id^="money-icon-${animal}-"]`);
  moneyIcons.forEach((icon) => (icon.style.display = "none"));

  // ซ่อนปุ่มยกเลิก
  const stopButton = document.getElementById(`stop-button-${animal}`);
  if (stopButton) stopButton.style.display = "none";

  console.log(`ยกเลิกสัตว์: ${animal}`);
}

// ฟังก์ชันสำหรับแสดงผลเงินรางวัล
function displayReward() {
  const reward = calculateReward();
  alert(`คุณได้รับเงินรางวัลทั้งหมด: ${reward}`);
}
// ฟังก์ชันอัปเดตการเดิมพันจาก UI
function updateBet(animal, amount) {
  if (animal in bets.single) {
    bets.single[animal] += amount;
  } else if (animal in bets.pair) {
    bets.pair[animal] += amount;
  } else {
    console.error(`สัตว์ "${animal}" ไม่รองรับการเดิมพัน`);
  }
}
// ฟังก์ชันยกเลิกการเดิมพัน:
function cancelBet(animal) {
  if (animal in bets.single) {
    bets.single[animal] = 0;
  } else if (animal in bets.pair) {
    bets.pair[animal] = 0;
  } else {
    console.error(`สัตว์ "${animal}" ไม่รองรับการยกเลิก`);
  }

  // ซ่อนองค์ประกอบ UI ที่เกี่ยวข้อง
  const moneyDisplay = document.getElementById(`money-${animal}`);
  const moneyIcons = document.querySelectorAll(`[id^="money-icon-${animal}-"]`);
  const stopButton = document.getElementById(`stop-button-${animal}`);

  if (moneyDisplay) moneyDisplay.style.display = "none";
  if (moneyIcons.length > 0)
    moneyIcons.forEach((icon) => (icon.style.display = "none"));
  if (stopButton) stopButton.style.display = "none";
}

// ฟังก์ชันสำหรับเปิด/ปิด dropdown
function toggleDropdown(dropdownNumber) {
  const dropdown = document.getElementById(
    `dropdown-options-${dropdownNumber}`
  );

  // ตรวจสอบว่ามี dropdown หรือไม่
  if (!dropdown) {
    console.error(`ไม่พบ dropdown สำหรับ dropdown-options-${dropdownNumber}`);
    return;
  }

  // เปลี่ยนสถานะการแสดงผล dropdown
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block"; // แสดง dropdown
  } else {
    dropdown.style.display = "none"; // ซ่อน dropdown
  }

  console.log(`Dropdown ${dropdownNumber} สถานะ: ${dropdown.style.display}`);
}

// ฟังก์ชันสำหรับปุ่มคำนวณ
function onCalculateButtonClick() {
  console.log("Selected Animals: ", selectedAnimals);
  console.log("Selected Amount: ", selectedAmount);

  // เรียกใช้ฟังก์ชันคำนวณผลลัพธ์
  calculateResults();

  // อัปเดตยอดเงินผู้เล่น
  updatePlayerBalance();
}

// ฟังก์ชันอัปเดตยอดเงินผู้เล่น
function updatePlayerBalance() {
  const totalResultElement = document.getElementById("total-result");
  const playerBalanceElement = document.getElementById("player-balance");

  if (!totalResultElement || !playerBalanceElement) {
    console.error("ไม่พบ element ที่ใช้ในการคำนวณยอดเงิน");
    return;
  }

  // ดึงค่าจาก HTML และแปลงเป็นตัวเลข
  const totalResult =
    parseInt(totalResultElement.textContent.replace(/,/g, ""), 10) || 0;
  let playerBalance =
    parseInt(playerBalanceElement.textContent.replace(/,/g, ""), 10) || 0;

  // อัปเดตยอดเงิน
  playerBalance += totalResult;

  // แสดงยอดเงินที่อัปเดตใน HTML
  playerBalanceElement.textContent = playerBalance.toLocaleString();

  // รีเซ็ตผลรวมเงินแพ้ชนะเป็น 0
  totalResultElement.textContent = "0";

  console.log(`อัปเดตยอดเงินผู้เล่น: ${playerBalance}`);
}

// เช็คปุ่ม 21 ปุม ว่าเงินพอไหม เหลือน้องกว่า 5000
function updateButtonStates() {
  const playerBalanceElement = document.getElementById("player-balance");
  const playerBalance = parseInt(
    playerBalanceElement.textContent.replace(/,/g, ""),
    10
  );

  Object.keys(animalAmounts).forEach((animal) => {
    const button = document.getElementById(`button-${animal}`);
    if (playerBalance < 5000) {
      if (button) button.disabled = true; // ปิดใช้งานปุ่ม
    } else {
      if (button) button.disabled = false; // เปิดใช้งานปุ่ม
    }
  });
}

// ฟังก์ชันสำหรับกดปุ่มเลือกสัตว์ เช็คปุ่ม 21 ปุม ว่าเงินพอไหม เหลือน้องกว่า 5000
function animalClickHandler(animal) {
  const playerBalanceElement = document.getElementById("player-balance");
  let playerBalance = parseInt(
    playerBalanceElement.textContent.replace(/,/g, ""),
    10
  );

  if (playerBalance < 5000) {
    alert("ยอดเงินไม่เพียงพอ");
    return;
  }

  // หักยอดเงิน
  playerBalance -= selectedAmount;
  playerBalanceElement.textContent = playerBalance.toLocaleString();

  // อัปเดตจำนวนเงินสำหรับสัตว์ที่เลือก
  animalAmounts[animal] += selectedAmount;

  // แสดงผลเงินที่เลือกใน UI
  const moneyDisplay = document.getElementById(`money-${animal}`);
  if (moneyDisplay) {
    moneyDisplay.textContent = animalAmounts[animal].toLocaleString();
    moneyDisplay.style.display = "block"; // แสดงข้อความเงิน
  }

  // แสดงรูปเงินที่เกี่ยวข้อง
  const moneyIcons = document.querySelectorAll(`[id^="money-icon-${animal}-"]`);
  let iconToShow = null;

  moneyIcons.forEach((icon) => (icon.style.display = "none")); // ซ่อนรูปทั้งหมดก่อน

  if (animalAmounts[animal] === 5000) {
    iconToShow = document.getElementById(`money-icon-${animal}-5000`);
  } else if (animalAmounts[animal] >= 10000 && animalAmounts[animal] < 50000) {
    iconToShow = document.getElementById(`money-icon-${animal}-10000`);
  } else if (animalAmounts[animal] >= 50000 && animalAmounts[animal] < 100000) {
    iconToShow = document.getElementById(`money-icon-${animal}-50000`);
  } else if (animalAmounts[animal] >= 100000) {
    iconToShow = document.getElementById(`money-icon-${animal}-100000`);
  }

  if (iconToShow) {
    iconToShow.style.display = "block"; // แสดงรูปเงินที่ตรงกับจำนวนเงิน
  } else {
    console.warn(`ไม่พบรูปเงินที่ตรงกับจำนวนเงินของ "${animal}"`);
  }

  // แสดงปุ่มยกเลิก
  const stopButton = document.getElementById(`stop-button-${animal}`);
  if (stopButton) {
    stopButton.style.display = "block"; // แสดงปุ่มยกเลิก
  } else {
    console.error(`ไม่พบปุ่มยกเลิกสำหรับ "${animal}"`);
  }

  console.log(`เลือกสัตว์: ${animal}, จำนวนเงิน: ${selectedAmount}`);

  // อัปเดตสถานะปุ่ม
  updateButtonStates();
}

// ทำให้ปุ่ม 21 ปุ่ม กดwfh
function disableAnimalButtons(disable, message = null) {
  const animalKeys = [
    "bird",
    "horse",
    "tiger",
    "rabbit",
    "elephant",
    "fish",
    "Bird_Horse",
    "Horse_Tiger",
    "Elephant_Fish",
    "Rabbit_Elephant",
    "Bird_Rabbit",
    "Horse_Elephant",
    "Tiger_Fish",
    "Horse_Rabbit",
    "Bird_Elephant",
    "Tiger_Elephant",
    "Horse_Fish",
    "Bird_Tiger",
    "Birds_Fish",
    "Rabbits_tigers",
    "Rabbits_fish"
  ];

  if (!disable) {
    // Reset ค่าเงินเดิมพัน
    animalKeys.forEach((animal) => {
      animalAmounts[animal] = 0; // รีเซ็ตค่าเงินเป็น 0
    });
  }

  animalKeys.forEach((animal) => {
    const animalCard = document.querySelector(`[data-animal="${animal}"]`);
    const moneyDisplay = document.getElementById(`money-${animal}`);
    const stopButton = document.getElementById(`stop-button-${animal}`);
    const moneyIcons = document.querySelectorAll(
      `[id^="money-icon-${animal}-"]`
    );

    if (animalCard) {
      animalCard.style.pointerEvents = disable ? "none" : "auto";
    }

    if (!disable) {
      // ซ่อนข้อความเงิน
      if (moneyDisplay) {
        moneyDisplay.textContent = "0"; // รีเซ็ตข้อความเป็น 0
        moneyDisplay.style.display = "none";
      }

      // ซ่อนปุ่มยกเลิก
      if (stopButton) {
        stopButton.style.display = "none";
      }

      // ซ่อนรูปเงินทั้งหมด
      if (moneyIcons.length > 0) {
        moneyIcons.forEach((icon) => (icon.style.display = "none"));
      }
    }
  });

  // แสดงข้อความเตือน (ถ้ามี)
  if (message) {
    alert(message);
  } else {
    if (disable) {
      alert("จะออกผลแล้ววางเงินเดิมพันไม่ได้แล้ว รอรอบต่อไป");
    } else {
      alert("ลงเดิมพันได้แล้วจ้า พร้อมรับเงินกันยัง");
    }
  }
}

let selectedAnimals = []; // เก็บสัตว์ที่เลือก
let bettingAnimals = []; // สัตว์ที่เดิมพัน
function calculateResults() {
  if (!selectedAmount || selectedAmount <= 0) {
    alert("กรุณาเลือกจำนวนเงิน");
    console.error("จำนวนเงินไม่ถูกต้อง");
    return;
  }

  // กรองเฉพาะสัตว์ที่เลือกจริง (ตัดค่าที่ไม่ได้เลือก)
  const filteredAnimals = bettingAnimals.filter((animal) => animal !== null);
  if (filteredAnimals.length === 0) {
    alert("กรุณาเลือกสัตว์อย่างน้อย 1 ช่อง");
    console.error("ไม่มีสัตว์ที่เลือกสำหรับการเดิมพัน");
    return;
  }

  console.log("Filtered Animals (สำหรับคำนวณ):", filteredAnimals);

  // นับจำนวนสัตว์เดี่ยว
  const animalCounts = filteredAnimals.reduce((counts, animal) => {
    counts[animal] = (counts[animal] || 0) + 1;
    return counts;
  }, {});

  console.log("Animal Counts (สำหรับคำนวณ):", animalCounts);

  // คำนวณผลลัพธ์สัตว์เดี่ยว
  const animalResults = {
    bird: 0,
    horse: 0,
    tiger: 0,
    rabbit: 0,
    elephant: 0,
    fish: 0
  };

  Object.keys(animalCounts).forEach((animal) => {
    const count = animalCounts[animal];
    if (count > 0) {
      switch (animal) {
        case "b7":
          animalResults.bird = selectedAmount * count + selectedAmount;
          break;
        case "b8":
          animalResults.horse = selectedAmount * count + selectedAmount;
          break;
        case "b9":
          animalResults.tiger = selectedAmount * count + selectedAmount;
          break;
        case "b10":
          animalResults.rabbit = selectedAmount * count + selectedAmount;
          break;
        case "b11":
          animalResults.elephant = selectedAmount * count + selectedAmount;
          break;
        case "b12":
          animalResults.fish = selectedAmount * count + selectedAmount;
          break;
      }
    }
  });

  console.log("Single Animal Results (ผลลัพธ์สัตว์เดี่ยว):", animalResults);

  // คำนวณผลลัพธ์สัตว์คู่
  const pairs = [
    { pair: ["b7", "b8"], result: "Bird_Horse" },
    { pair: ["b8", "b9"], result: "Horse_Tiger" },
    { pair: ["b7", "b9"], result: "Bird_Tiger" }
  ];

  pairs.forEach(({ pair, result }) => {
    const count1 = animalCounts[pair[0]] || 0;
    const count2 = animalCounts[pair[1]] || 0;

    if (count1 > 0 && count2 > 0) {
      animalResults[result] = Math.min(count1, count2) * selectedAmount * 6;
      console.log(`ผลลัพธ์สำหรับสัตว์คู่ ${result}: ${animalResults[result]}`);
    } else {
      animalResults[result] = 0;
    }
  });

  console.log("Pair Results (ผลลัพธ์สัตว์คู่):", animalResults);

  // แสดงผลลัพธ์
  console.log("Final Results:", animalResults);
}

// ฟังก์ชันเลือกสัตว์จาก dropdown ส่งเงินไปหักลบ
function selectAnimal(dropdownNumber, animalId, mode = "bet") {
  const selectedAnimalImage = document.getElementById(
    `selected-animal-${dropdownNumber}`
  );
  const dropdown = document.getElementById(
    `dropdown-options-${dropdownNumber}`
  );
  const selectedOption = dropdown
    ? dropdown.querySelector(`img[src="assets/${animalId}.png"]`)
    : null;

  if (!selectedAnimalImage || !dropdown) {
    console.error(
      `ไม่พบ element สำหรับ selected-animal-${dropdownNumber} หรือ dropdown-options-${dropdownNumber}`
    );
    return;
  }

  // อัปเดตรูปสัตว์ที่เลือกใน dropdown
  selectedAnimalImage.src = `assets/${animalId}.png`;
  selectedAnimalImage.alt = animalId;

  if (mode === "bet") {
    // เพิ่มสัตว์ใน bettingAnimals
    if (!bettingAnimals.includes(animalId)) {
      bettingAnimals.push(animalId);
      console.log(`Betting Animal Added: ${animalId}`);
    } else {
      console.warn(`Animal ${animalId} is already in bettingAnimals.`);
    }
  } else if (mode === "result") {
    // เพิ่มสัตว์ใน resultAnimals
    if (!resultAnimals.includes(animalId)) {
      resultAnimals.push(animalId);
      console.log(`Result Animal Added: ${animalId}`);
    }
  }

  // ซ่อน dropdown
  dropdown.style.display = "none";

  // ซ่อนตัวเลือกที่เลือกใน dropdown
  if (selectedOption) {
    selectedOption.style.display = "none";
    console.log(`ตัวเลือกสัตว์ ${animalId} ถูกซ่อนแล้วใน dropdown`);
  } else {
    console.warn(`ไม่พบตัวเลือกสำหรับสัตว์ ${animalId}`);
  }
}
