socket.onmessage = async (event) => {
  try {
    let message;
    if (event.data instanceof Blob) {
      const textData = await event.data.text();
      message = JSON.parse(textData);
    } else {
      message = JSON.parse(event.data);
    }

    // ✅ คงโค้ดเดิมไว้
    if (message.command === "selectAnimal" && message.animals) {
      console.log("✅ Updating Dropdown Images");
      Object.keys(message.animals).forEach((slot) => {
        updateAnimalImage(slot, message.animals[slot]);
      });
    }

    if (message.command === "calculateReward") {
      console.log("✅ Triggering onCalculateButtonClick() from liveadd");
      onCalculateButtonClick();
    }

    if (message.command === "enableButtons") {
      console.log("✅ Triggering disableAnimalButtons(false) from liveadd");
      disableAnimalButtons(false);
    }

    // ✅ เพิ่มเฉพาะคำสั่ง `disableButtons`
    if (message.command === "disableButtons") {
      console.log("✅ Triggering disableAnimalButtons(true) from liveadd");
      disableAnimalButtons(true);
    }
  } catch (error) {
    console.error("❌ Failed to parse JSON:", event.data, error);
  }
};

function updateAnimalImage(slot, animal) {
  const imageElement = document.getElementById(`selected-animal-${slot}`);
  if (imageElement) {
    imageElement.src = `assets/${animal}.png`;
    console.log(`Updated image for slot ${slot}: ${animal}`);
  } else {
    console.error(`Slot ${slot} image element not found`);
  }
}
function updateTotalBetsUI(totalBets) {
  const totalBetsElement = document.getElementById("total-bets");
  if (totalBetsElement) {
    totalBetsElement.textContent = totalBets.toLocaleString();
    console.log("Updated UI total bets:", totalBets);
  } else {
    console.error("Total Bets UI element not found");
  }
}

// ตรวจจับคำสั่งที่ส่งมาผ่าน localStorage (Real-time)
window.addEventListener("storage", function (event) {
  if (event.key === "disableAnimalButtons") {
    disableAnimalButtons(true); // เรียกใช้ฟังก์ชันเดิม
    console.log(
      "✅ คำสั่งจาก liveadd: ปิดปุ่มสัตว์ทั้งหมด ID:",
      event.newValue
    );
  }
});

// ตรวจสอบสถานะเมื่อหน้าโหลดใหม่ (ป้องกันคำสั่งหาย)
document.addEventListener("DOMContentLoaded", function () {
  const lastCommand = localStorage.getItem("disableAnimalButtons");
  if (lastCommand) {
    disableAnimalButtons(true);
    console.log("🔄 รีโหลดหน้า: ปิดปุ่มสัตว์ทั้งหมด ID:", lastCommand);
  }
});
