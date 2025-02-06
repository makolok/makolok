let totalBets = 0; // ตัวแปรเก็บจำนวนเงินที่เลือก
let selectedAnimal = null; // เก็บสัตว์ที่ถูกเลือก

// ตัวแปรเก็บข้อมูลจำนวนเงินของสัตว์แต่ละตัว
const animalBets = {
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

// ตัวแปรเก็บ "ค่าจำนวนเงินสุดท้าย" สำหรับการคำนวณผลรางวัล
const finalAnimalBets = { ...animalBets }; // คัดลอกโครงสร้างเดียวกับ `animalBets`

/**
 * ฟังก์ชันเลือกจำนวนเงิน
 * @param {number} amount - จำนวนเงินที่เลือก
 * @param {HTMLElement} button - ปุ่มที่ถูกคลิก
 */
function selectAmount(amount, button) {
  resetAllButtons();

  totalBets = amount; // ✅ ค่าตัวเลขที่ใช้คำนวณยังคงเป็นตัวเลขปกติ

  const totalBetsElement = document.getElementById("total-bets");
  if (totalBetsElement) {
    totalBetsElement.setAttribute("data-raw-value", totalBets); // ✅ เก็บค่าตัวเลขเดิม (ป้องกันปัญหาการคำนวณ)
    totalBetsElement.textContent = totalBets.toLocaleString("en-US"); // ✅ แสดงใน UI เป็น "5,000"
  }

  const img = button.querySelector("img");
  const text = button.querySelector(".amount-text");

  if (img) img.style.display = "block";
  if (text) text.style.display = "none";

  button.disabled = true;

  console.log(`Selected amount: ${totalBets.toLocaleString("en-US")}`); // ✅ แสดงค่าเป็น "5,000"
}

//ฟังก์ชันรีเซ็ตสถานะปุ่มทั้งหมด จำนวนเงิน
function resetAllButtons() {
  // ค้นหาปุ่มทั้งหมดใน .money-selection
  const buttons = document.querySelectorAll(".money-selection .amount-button");

  buttons.forEach((button) => {
    const img = button.querySelector("img");
    const text = button.querySelector(".amount-text");

    if (img && text) {
      img.style.display = "none"; // ซ่อนรูปภาพ
      text.style.display = "block"; // แสดงตัวเลข
    }

    button.disabled = false; // เปิดใช้งานปุ่มอีกครั้ง
  });

  // รีเซ็ตยอดรวมใน UI
  totalBets = 0;
  document.getElementById("total-bets").innerText = totalBets;

  //console.log("All buttons reset!");
}
// ประกาศตัวแปร global ก่อน
//var playerBalance; // global variable
// (หากมีตัวแปรอื่นๆ เช่น totalResult, animalAmounts, animalBets, finalAnimalBets ให้ประกาศไว้ด้วย)

/**
 * ฟังก์ชันจัดการเมื่อเลือกสัตว์
 * @param {string} animal - ชื่อสัตว์ที่เลือก
 */
function animalClickHandler(animal) {
  // ตรวจสอบยอดเงินก่อน
  if (playerBalance < totalBets) {
    alert("ยอดเงินไม่เพียงพอ!");
    return;
  }

  // หักจำนวนเงินออกจากยอดเงินผู้เล่น
  playerBalance -= totalBets;

  // เพิ่มจำนวนเงินไปยังสัตว์ที่เลือก (สมมุติว่าตัวแปร animalBets, finalAnimalBets, etc. ถูกประกาศแล้ว)
  animalBets[animal] += totalBets;
  finalAnimalBets[animal] = animalBets[animal];

  // อัปเดต UI (โค้ดเดิมของคุณ)
  const moneyDisplay = document.getElementById(`money-${animal}`);
  const cancelButton = document.getElementById(`stop-button-${animal}`);
  const img5000 = document.getElementById(`money-icon-${animal}-5000`);
  const img10000 = document.getElementById(`money-icon-${animal}-10000`);
  const img50000 = document.getElementById(`money-icon-${animal}-50000`);
  const img100000 = document.getElementById(`money-icon-${animal}-100000`);

  [img5000, img10000, img50000, img100000].forEach((img) => {
    if (img) img.style.display = "none";
  });

  const totalAnimalBet = animalBets[animal];
  if (totalAnimalBet >= 5000 && totalAnimalBet <= 9500 && img5000) {
    img5000.style.display = "block";
  } else if (totalAnimalBet >= 10000 && totalAnimalBet <= 45000 && img10000) {
    img10000.style.display = "block";
  } else if (totalAnimalBet >= 50000 && totalAnimalBet <= 95000 && img50000) {
    img50000.style.display = "block";
  } else if (totalAnimalBet >= 100000 && img100000) {
    img100000.style.display = "block";
  }

  if (moneyDisplay) {
    moneyDisplay.innerText = totalAnimalBet;
    moneyDisplay.style.display = "block";
  } else {
    console.warn(`ไม่พบ element 'money-${animal}'`);
  }

  if (cancelButton) {
    cancelButton.style.display = "block";
  } else {
    console.warn(`ไม่พบปุ่มยกเลิกสำหรับ 'stop-button-${animal}'`);
  }

  updatePlayerBalanceUI();
}

let playerBalance = 0;
// เมื่อ DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const playerBalanceElement = document.getElementById("player-balance");
  if (!playerBalanceElement) {
    console.error("ไม่พบ element ที่มี id 'player-balance'");
    return;
  }
  // อัปเดต playerBalance จากค่าใน element (และไม่ประกาศซ้ำด้วย let)
  playerBalance = parseInt(
    playerBalanceElement.textContent.replace(/,/g, ""),
    10
  );
  console.log("Player balance (เริ่มต้น):", playerBalance);
  updatePlayerBalanceUI();
});

function updatePlayerBalanceUI() {
  const playerBalanceElement = document.getElementById("player-balance");
  if (playerBalanceElement) {
    // แสดงผลบน UI ด้วยค่าจากตัวแปร global
    playerBalanceElement.innerText = playerBalance.toLocaleString();
    // อัปเดต attribute "data-balance" ให้ตรงกับตัวแปร global
    playerBalanceElement.setAttribute("data-balance", playerBalance);
  }
}

function updatePlayerBalanceToDB() {
  const playerBalanceElement = document.getElementById("player-balance");
  // ดึงค่าจาก innerText ซึ่งแสดงยอดเงินที่ถูกต้อง (และลบเครื่องหมาย comma ออก)
  const currentBalance = parseInt(
    playerBalanceElement.innerText.replace(/,/g, ""),
    10
  );

  console.log("ส่งยอดเงินไปฐานข้อมูล:", currentBalance);

  fetch("update_balance.php", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "balance=" + encodeURIComponent(currentBalance)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      return response.text();
    })
    .then((result) => {
      console.log("ผลลัพธ์การอัปเดตยอดเงิน:", result);
    });
  // .catch((error) => {
  //   console.error("เกิดข้อผิดพลาดในการอัปเดตยอดเงิน:", error);
  // });
}

// แนบฟังก์ชันให้ global scope
window.updatePlayerBalanceToDB = updatePlayerBalanceToDB;

function updatePlayerBalance() {
  const totalResultElement = document.getElementById("total-result");

  if (!totalResultElement) {
    console.error("ไม่พบ element 'total-result'");
    return;
  }

  // ดึงค่าผลรวมจากการเดิมพันในรอบนี้
  const totalResult =
    parseInt(totalResultElement.textContent.replace(/,/g, ""), 10) || 0;

  // อัปเดตยอดเงินผู้เล่นโดยใช้ตัวแปร global playerBalance
  playerBalance += totalResult;

  // รีเซ็ตผลรวมเงินแพ้ชนะเป็น 0
  totalResultElement.textContent = "0";

  // อัปเดต UI
  updatePlayerBalanceUI();

  console.log(`อัปเดตยอดเงินผู้เล่น: ${playerBalance}`);
}

/**
 * ฟังก์ชันยกเลิกการเลือกสัตว์
 * @param {string} animal - ชื่อสัตว์ที่ต้องการยกเลิก
 */
function cancelSelection(animal) {
  const moneyDisplay = document.getElementById(`money-${animal}`);
  const cancelButton = document.getElementById(`stop-button-${animal}`);
  const img5000 = document.getElementById(`money-icon-${animal}-5000`);
  const img10000 = document.getElementById(`money-icon-${animal}-10000`);
  const img50000 = document.getElementById(`money-icon-${animal}-50000`);
  const img100000 = document.getElementById(`money-icon-${animal}-100000`);

  // คืนจำนวนเงินที่เลือกให้กับยอดเงินรวมของผู้เล่น
  playerBalance += animalBets[animal];

  // รีเซ็ตจำนวนเงินของสัตว์นั้น
  animalBets[animal] = 0;

  // รีเซ็ตค่าจำนวนเงินสุดท้าย
  finalAnimalBets[animal] = 0;

  // ซ่อนรูปภาพเงินทั้งหมด
  [img5000, img10000, img50000, img100000].forEach((img) => {
    if (img) img.style.display = "none";
  });

  // รีเซ็ตจำนวนเงินที่แสดง
  if (moneyDisplay) {
    moneyDisplay.innerText = "0";
    moneyDisplay.style.display = "none"; // ซ่อนข้อความ
  }

  // ซ่อนปุ่มยกเลิก
  if (cancelButton) {
    cancelButton.style.display = "none";
  }

  // อัปเดตยอดเงินผู้เล่นใน UI
  updatePlayerBalanceUI();

  console.log(`Cancelled Animal: ${animal}, Amount Reset to 0`);
}
// โค้ดภายในนี้จะรันเมื่อ DOM ถูกโหลดครบแล้ว
// document.addEventListener("DOMContentLoaded", function () {
//   // โค้ดภายในนี้จะรันเมื่อ DOM ถูกโหลดครบแล้ว

//   // ตัวอย่างการดึง element ที่มี id "player-balance"
//   const playerBalanceElement = document.getElementById("player-balance");
//   if (!playerBalanceElement) {
//     console.error("ไม่พบ element ที่มี id 'player-balance'");
//     return;
//   }

//   // อ่านข้อมูลจาก element
//   const balanceText = playerBalanceElement.textContent;
//   const balanceNumber = parseInt(balanceText.replace(/,/g, ""), 10);

//   // กำหนดตัวแปร playerBalance
//   let playerBalance = balanceNumber;

//   // ทำงานต่อไปตามโค้ดเดิมของคุณ
//   console.log("Player balance:", playerBalance);

//   // ตัวอย่าง: ใช้งานตัวแปรอื่นๆ ที่ต้องอ้างอิง element ที่โหลดแล้ว
//   // const someElement = document.getElementById("some-element-id");
//   // ... โค้ดเดิมของคุณ ...
// });

// ตัวแปรเก็บค่าที่เลือกในแต่ละช่อง
const selectedAnimals = {
  1: null, // ช่องที่ 1
  2: null, // ช่องที่ 2
  3: null // ช่องที่ 3
};

// ตัวแปรเก็บค่าตัวสุดท้ายสำหรับการคำนวณรางวัล
let finalSelection = { ...selectedAnimals };

/**
 * ฟังก์ชันแสดง/ซ่อนตัวเลือก dropdown
 * @param {number} slot - หมายเลขช่อง (1, 2, 3)
 */
function toggleDropdown(slot) {
  const dropdown = document.getElementById(`dropdown-options-${slot}`);
  if (dropdown) {
    const isVisible = dropdown.style.display === "block";
    dropdown.style.display = isVisible ? "none" : "block";

    //console.log(`Dropdown ${slot} ${isVisible ? "hidden" : "shown"}`);
  } else {
    console.error(`Dropdown with id "dropdown-options-${slot}" not found`);
  }
}

/**
 * ฟังก์ชันเลือกสัตว์จาก dropdown
 * @param {number} slot - หมายเลขช่อง (1, 2, 3)
 * @param {string} animal - ชื่อสัตว์ที่เลือก (เช่น 'b7', 'b8')
 */
function selectAnimal(slot, animal) {
  // ตรวจสอบค่า slot และ animal
  if (!slot || !animal) {
    console.error("Invalid slot or animal value:", { slot, animal });
    return;
  }

  // ตรวจสอบตัวแปร selectedAnimals (ถ้ายังไม่ได้ประกาศ)
  if (typeof selectedAnimals === "undefined") {
    window.selectedAnimals = {};
  }

  // ตรวจสอบตัวแปร finalSelection (ถ้ายังไม่ได้ประกาศ)
  if (typeof finalSelection === "undefined") {
    window.finalSelection = {};
  }

  // เก็บค่าที่เลือกในตัวแปร
  selectedAnimals[slot] = animal;

  // อัปเดตค่าตัวสุดท้ายสำหรับคำนวณรางวัล
  finalSelection = { ...selectedAnimals };

  // อัปเดตภาพในช่องที่เลือก
  const selectedImage = document.getElementById(`selected-animal-${slot}`);
  if (selectedImage) {
    selectedImage.src = `assets/${animal}.png`;
    //console.log(`Updated image for slot ${slot}: ${animal}`);
  } else {
    console.error(`Element with id "selected-animal-${slot}" not found`);
  }

  // ซ่อน dropdown หลังจากเลือก
  const dropdown = document.getElementById(`dropdown-options-${slot}`);
  if (dropdown) {
    dropdown.style.display = "none";
    //console.log(`Dropdown ${slot} hidden after selection`);
  } else {
    console.error(`Dropdown with id "dropdown-options-${slot}" not found`);
  }

  // แสดงผลใน Console
  //console.log(`Slot ${slot} selected: ${animal}`);
  //console.log("Selected Animals:", selectedAnimals);
  console.log("Final Selection for Calculation:", finalSelection);
}
/**
 * ฟังก์ชันสำหรับการอัปเดตยอดเงินของสัตว์ในกลุ่ม
 */
function updateFinalAnimalBets(animal, amount) {
  if (animal && amount > 0) {
    finalAnimalBets[animal] = amount;
    console.log(`Updated Bet: ${animal} = ${amount}`);
  } else {
    console.log(`Invalid bet for ${animal} or amount: ${amount}`);
  }
}

/**
 * อัปเดต UI หลังจากคำนวณผลรางวัล
 * @param {Object} rewards - รางวัลของสัตว์เดี่ยวและสัตว์คู่
 */
function updateBetUI(rewards) {
  const allGroupsAndPairs = [
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

  const amounts = [5000, 10000, 50000, 100000];

  // ลูปผ่านทุกกลุ่มและคู่สัตว์
  allGroupsAndPairs.forEach((key) => {
    const reward = rewards[key] || 0;

    // จัดการจำนวนเงิน (money-display)
    const moneyDisplay = document.getElementById(`money-${key}`);
    if (moneyDisplay) {
      moneyDisplay.textContent = reward > 0 ? reward : ""; // แสดงจำนวนเงินเมื่อมีรางวัล
      moneyDisplay.style.display = reward > 0 ? "block" : "none"; // ซ่อนหรือแสดงจำนวนเงิน
    }

    // จัดการรูปเงิน (money-icon)
    let iconToShow = null;
    amounts.forEach((amount) => {
      const moneyIcon = document.getElementById(`money-icon-${key}-${amount}`);
      if (moneyIcon) {
        if (reward >= amount) {
          iconToShow = moneyIcon; // ระบุรูปที่ควรแสดง
        }
        moneyIcon.style.display = "none"; // ซ่อนรูปทั้งหมดก่อน
      }
    });

    // แสดงรูปเงินที่ตรงกับรางวัล
    if (iconToShow) {
      iconToShow.style.display = "block";
    }

    // จัดการปุ่มยกเลิก (stop-button)
    const cancelButton = document.getElementById(`stop-button-${key}`);
    if (cancelButton) {
      cancelButton.style.display = reward > 0 ? "block" : "none"; // แสดงปุ่มเมื่อมีรางวัล
    }
  });
}

/**
 * ฟังก์ชันหลักสำหรับการคำนวณผลรางวัล
 */
function onCalculateButtonClick() {
  const imageToAnimalMap = {
    b7: "bird",
    b8: "horse",
    b9: "tiger",
    b10: "rabbit",
    b11: "elephant",
    b12: "fish"
  };

  console.log("Final Animal Bets:", finalAnimalBets);

  const animalGroups = {
    bird: ["bird"],
    horse: ["horse"],
    tiger: ["tiger"],
    rabbit: ["rabbit"],
    elephant: ["elephant"],
    fish: ["fish"]
  };

  const selectedAnimals = [
    document
      .getElementById("selected-animal-1")
      .src.split("/")
      .pop()
      .replace(".png", ""),
    document
      .getElementById("selected-animal-2")
      .src.split("/")
      .pop()
      .replace(".png", ""),
    document
      .getElementById("selected-animal-3")
      .src.split("/")
      .pop()
      .replace(".png", "")
  ].map((animal) => imageToAnimalMap[animal]);

  console.log("Selected Animals from Dropdown:", selectedAnimals);

  const countedAnimals = selectedAnimals.reduce((acc, slotAnimal) => {
    if (slotAnimal) {
      acc[slotAnimal] = (acc[slotAnimal] || 0) + 1;
    }
    return acc;
  }, {});

  console.log("Counted Animals:", countedAnimals);

  const groupTotalBets = {};
  for (const [group, animals] of Object.entries(animalGroups)) {
    groupTotalBets[group] = animals.reduce(
      (sum, animal) => sum + (finalAnimalBets[animal] || 0),
      0
    );
  }

  //console.log("Group Total Bets:", groupTotalBets);

  const singleRewards = {};
  for (const [group, groupTotalBet] of Object.entries(groupTotalBets)) {
    if (groupTotalBet > 0) {
      const occurrences = Object.keys(countedAnimals)
        .filter((animal) => animalGroups[group].includes(animal))
        .reduce((sum, animal) => sum + countedAnimals[animal], 0);

      if (occurrences > 0) {
        singleRewards[group] = occurrences * groupTotalBet + groupTotalBet;
        console.log(
          `Reward for group ${group} with ${occurrences} occurrences: ${singleRewards[group]}`
        );
      } else {
        //console.log(`No animals in group ${group} appeared.`);
      }
    }
  }

  console.log("Single Rewards:", singleRewards);

  const pairRewards = calculatePairRewards(selectedAnimals, finalAnimalBets);
  console.log("Pair Rewards:", pairRewards);

  const totalReward =
    Object.values(singleRewards).reduce((a, b) => a + b, 0) +
    Object.values(pairRewards).reduce((a, b) => a + b, 0);

  console.log(`Total Reward: ${totalReward}`);

  updateBetUI({ ...singleRewards, ...pairRewards });

  // คำนวณยอดเงินรวมผู้เล่น

  const balanceText = document.getElementById("player-balance").textContent;
  const balanceNumber = parseInt(balanceText.replace(/,/g, ""), 10);

  const playerBalanceElement = document.getElementById("player-balance");
  if (!playerBalanceElement) {
    console.error("playerBalanceElement is null");
    return; // หยุดการทำงานหากไม่พบ element นี้
  }
  let playerBalance = parseInt(
    playerBalanceElement.textContent.replace(/,/g, ""),
    10
  );
  playerBalance += totalReward;
  playerBalanceElement.textContent = playerBalance.toLocaleString();

  // คำนวณยอดเงินเดิมพันรวม
  const totalBets = Object.values(finalAnimalBets).reduce((a, b) => a + b, 0);
  document.getElementById("total-bets").textContent =
    totalBets.toLocaleString();

  // คำนวณผลรวมรอบนี้ (ได้/เสีย)
  const totalResult = totalReward - totalBets;
  const totalResultElement = document.getElementById("total-result");
  totalResultElement.textContent = totalResult.toLocaleString();
  totalResultElement.style.color = totalResult >= 0 ? "green" : "red";

  const rewardDetails = [
    ...Object.entries(singleRewards).map(
      ([group, reward]) => `${group}: ${reward} บาท`
    ),
    ...Object.entries(pairRewards).map(
      ([pair, reward]) => `${pair}: ${reward} บาท`
    )
  ].join("\n");

  updatePlayerBalanceToDB();
  // if (totalReward > 0) {
  //   alert(
  //     `ผลรวมเงินรางวัล: ${totalReward} บาท\nรายละเอียดรางวัลแต่ละกลุ่ม:\n${rewardDetails}`
  //   );
  // } else {
  //   alert("ไม่มีการเดิมพันที่สามารถคำนวณรางวัลได้");
  // }
}

/**
 * คำนวณรางวัลสัตว์คู่
 * @param {Array<string>} selectedAnimals - รายการสัตว์ที่เลือกใน Dropdown
 * @param {Object} finalAnimalBets - ยอดเงินเดิมพันของสัตว์คู่
 * @returns {Object} - รางวัลสำหรับสัตว์คู่แต่ละคู่
 */
function calculatePairRewards(selectedAnimals, finalAnimalBets) {
  const pairRewards = {};
  const pairAnimals = [
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

  pairAnimals.forEach((pair) => {
    const betAmount = finalAnimalBets[pair] || 0;
    if (betAmount > 0) {
      const [animal1, animal2] = pair.split("_").map((a) => a.toLowerCase());
      const hasAnimal1 = selectedAnimals.includes(animal1);
      const hasAnimal2 = selectedAnimals.includes(animal2);

      if (hasAnimal1 && hasAnimal2) {
        const reward = 6 * betAmount; // รางวัล = 6 เท่าของเดิมพัน
        pairRewards[pair] = reward;
        console.log(`Pair Reward for ${pair}: ${reward}`);
      }
    }
  });

  return pairRewards;
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

// ประกาศตัวแปร ทำให้ปุ่ม 21 ปุ่ม กดได้กดไม่ได้
const animalAmounts = {
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
// ทำให้ปุ่ม 21 ปุ่ม กดได้กดไม่ได้

function disableAnimalButtons(disable, message = null) {
  console.log("เรียกใช้ disableAnimalButtons กับ disable =", disable);

  // เปลี่ยนจาก const เป็น let เพื่อให้เราสามารถกำหนดค่าใหม่ได้
  let playerBalanceElement = document.getElementById("player-balance");
  if (!playerBalanceElement) {
    console.warn(
      "playerBalanceElement is null in disableAnimalButtons, creating dummy element"
    );
    playerBalanceElement = document.createElement("span");
    playerBalanceElement.id = "player-balance";
    playerBalanceElement.setAttribute("data-balance", "0");
    playerBalanceElement.textContent = "0";
    document.body.appendChild(playerBalanceElement);
  }

  let playerBalance = parseInt(
    playerBalanceElement.textContent.replace(/,/g, ""),
    10
  );

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

  animalKeys.forEach((animal) => {
    const animalCard = document.querySelector(`[data-animal="${animal}"]`);
    const moneyDisplay = document.getElementById(`money-${animal}`);
    const stopButton = document.getElementById(`stop-button-${animal}`);
    const moneyIcons = document.querySelectorAll(
      `[id^="money-icon-${animal}-"]`
    );

    if (!disable) {
      // หากมีเงินเดิมพัน คืนเงินและรีเซ็ตค่า
      if (animalAmounts[animal] && animalAmounts[animal] > 0) {
        console.log(
          `รีเซ็ตค่าเงินของ ${animal} ที่มีอยู่: ${animalAmounts[animal]}`
        );
        // คืนเงินให้ผู้เล่น
        playerBalance += animalAmounts[animal];
        // รีเซ็ตค่าเงินของสัตว์
        animalAmounts[animal] = 0;
      }

      // ซ่อน element ต่าง ๆ โดยไม่ขึ้นกับว่าเงินเดิมพันมีหรือไม่
      if (moneyDisplay) {
        moneyDisplay.textContent = "0";
        moneyDisplay.style.display = "none";
      }

      moneyIcons.forEach((icon) => {
        icon.style.display = "none";
      });

      if (stopButton) {
        stopButton.style.display = "none";
      }
    }

    // เปิด/ปิดการกดปุ่มสัตว์
    if (animalCard) {
      animalCard.style.pointerEvents = disable ? "none" : "auto";
    }
  });

  if (!disable) {
    // อัปเดตยอดเงินของผู้เล่น
    // playerBalanceElement.textContent = playerBalance.toLocaleString();
    totalBets = 0;
    totalResult = 0;
    document.getElementById("total-bets").textContent = "0";
    document.getElementById("total-result").textContent = "0";
  }

  // ส่วนแสดงข้อความแจ้งเตือนที่คอมเมนต์ไว้
  // if (message) {
  //   alert(message);
  // } else {
  //   alert(
  //     disable
  //       ? "จะออกผลแล้ว วางเงินเดิมพันไม่ได้แล้ว รอรอบต่อไป"
  //       : "ลงเดิมพันได้แล้วจ้า พร้อมรับเงินกันยัง"
  //   );
  // }
}

/////////////////////////////

// ตรวจสอบและสร้าง WebSocket Connection
if (!window.socket) {
  window.socket = new WebSocket("ws://localhost:8080");
}

socket.onopen = () => {
  console.log("WebSocket connected");
};

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log("Message from server:", message);
  if (message.command === "stop") {
    onCalculateButtonClick();
  }
};

socket.onerror = (error) => {
  console.error("WebSocket Error:", error);
};

let isAdmin = false; // ตั้งค่าเป็น `true` หากเป็นแอดมิน
function toggleGameControls() {
  const controlButtons = document.querySelectorAll(
    ".controls-container button"
  );
  controlButtons.forEach((button) => {
    const isDisabled = button.style.pointerEvents === "none";
    button.style.pointerEvents = isDisabled ? "auto" : "none";
    button.style.opacity = isDisabled ? "1" : "0.5";
  });

  console.log("Game controls toggled");
}

function sendStopCommand() {
  const message = {
    command: "stop",
    finalAnimalBets: {
      bird: 100,
      horse: 200,
      tiger: 300 // ตัวอย่างข้อมูลการเดิมพัน
    }
  };

  socket.send(JSON.stringify(message));
  console.log("Stop command sent:", message);
}
function calculateGroupTotalBets(selectedAnimals, finalAnimalBets) {
  const groupTotalBets = {
    bird: 0,
    horse: 0,
    tiger: 0,
    rabbit: 0,
    elephant: 0,
    fish: 0
  };

  selectedAnimals.forEach((animal) => {
    if (finalAnimalBets[animal]) {
      groupTotalBets[animal] += finalAnimalBets[animal];
    }
  });

  return groupTotalBets;
}

function calculateRewards(groupTotalBets) {
  return Object.values(groupTotalBets).reduce((sum, bet) => sum + bet, 0);
}
document.addEventListener("DOMContentLoaded", () => {
  //console.log("DOM fully loaded");
  // เพิ่ม Event Listener หรือฟังก์ชันที่ต้องการ
});
function ensureSelectedAnimalsExist() {
  for (let i = 1; i <= 3; i++) {
    const element = document.getElementById(`selected-animal-${i}`);
    if (!element) {
      const img = document.createElement("img");
      img.id = `selected-animal-${i}`;
      img.src = `assets/b${i + 6}.png`; // ตัวอย่าง src
      img.alt = `Animal ${i}`;
      document.body.appendChild(img); // เพิ่มลงใน DOM (ควรเลือกตำแหน่งที่เหมาะสม)
      console.log(`Created element with id: selected-animal-${i}`);
    }
  }
}
["selected-animal-1", "selected-animal-2", "selected-animal-3"].forEach(
  (id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with id "${id}" is not found`);
    } else {
      //console.log(`Element found: ${id}, src: ${element.src}`);
    }
  }
);

function ensureSelectedAnimalsExist() {
  for (let i = 1; i <= 3; i++) {
    const element = document.getElementById(`selected-animal-${i}`);
    if (!element) {
      const img = document.createElement("img");
      img.id = `selected-animal-${i}`;
      img.src = `assets/b${i + 6}.png`;
      img.alt = `Animal ${i}`;
      document.body.appendChild(img);
      console.log(`Created element with id: selected-animal-${i}`);
    }
  }
}

function sendSelectedAnimalToGame() {
  if (!selectedAnimals || Object.keys(selectedAnimals).length === 0) {
    console.error("No animals selected");
    alert("กรุณาเลือกสัตว์ในทุกช่องก่อนส่งข้อมูล");
    return;
  }

  const message = {
    command: "selectAnimal",
    animals: selectedAnimals
  };

  const jsonString = JSON.stringify(message);
  socket.send(jsonString); // ส่งข้อมูล JSON ผ่าน WebSocket

  console.log("Animal selection sent to game:", jsonString);
  // alert("ส่งข้อมูลสัตว์ไปยังหน้าเกมสำเร็จ");

  // ** เพิ่มส่วนนี้เข้าไป เพื่อ reapply รูปที่ผู้ใช้เลือกไว้ **
  setTimeout(function () {
    for (let slot in selectedAnimals) {
      const img = document.getElementById(`selected-animal-${slot}`);
      if (img && selectedAnimals[slot]) {
        img.src = `assets/${selectedAnimals[slot]}.png`;
      }
    }
  }, 100); // delay 100ms (สามารถปรับได้ตามความเหมาะสม)
}
