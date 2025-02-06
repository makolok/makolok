socket.onmessage = async (event) => {
  try {
    let message;

    if (event.data instanceof Blob) {
      const textData = await event.data.text();
      console.log("Converted Blob to text (liveadd):", textData);

      // ✅ ตรวจสอบว่าเป็น JSON จริงก่อนแปลง
      try {
        message = JSON.parse(textData);
      } catch (jsonError) {
        console.warn("Received non-JSON message in liveadd:", textData);
        return; // ❌ หยุดการประมวลผลถ้าไม่ใช่ JSON
      }
    } else {
      try {
        message = JSON.parse(event.data);
      } catch (jsonError) {
        console.warn("Received non-JSON message in liveadd:", event.data);
        return;
      }
    }

    console.log("Parsed message (liveadd):", message);

    // ✅ ตรวจสอบว่าเป็นคำสั่ง `selectAnimal` ก่อนทำงานต่อ
    if (message.command === "selectAnimal") {
      console.log(
        "Received animal update in liveadd but not processing further"
      );
    }

    // ✅ ถ้าได้รับคำสั่ง `enableButtons` ให้เปิดใช้งานปุ่มสัตว์
    if (message.command === "enableButtons") {
      console.log("✅ Triggering disableAnimalButtons(false) from liveadd");
      disableAnimalButtons(false);
    }

    // ✅ ถ้าได้รับคำสั่ง `disableButtons` ให้ปิดใช้งานปุ่มสัตว์แต่ยังคงแสดงปุ่ม
    if (message.command === "disableButtons") {
      console.log("✅ Triggering disableAnimalButtons(true) from liveadd");
      disableAnimalButtons(true);
    }
  } catch (error) {
    console.error("❌ Failed to parse JSON in liveadd:", event.data, error);
  }
};

//ส่งรูปดอปดาวไปหน้าเกม
function sendCalculateCommand() {
  const message = { command: "calculateReward" };
  socket.send(JSON.stringify(message)); // ✅ ส่งผ่าน WebSocket
  console.log("Sent calculate command to game:", message);
}

// function disableAnimalButtons(state) {
//   const animalButtons = document.querySelectorAll(".animal-button");
//   animalButtons.forEach((button) => {
//     button.disabled = state;
//   });

//   console.log(`Animal buttons are now ${state ? "disabled" : "enabled"}`);
// }

// คำสังให้ปุมเปิดการใส่เงิน

function sendEnableButtonsCommand() {
  if (!window.socket) {
    console.error("❌ WebSocket is not initialized");
    return;
  }

  const message = { command: "enableButtons" };
  window.socket.send(JSON.stringify(message)); // ✅ ส่งคำสั่งผ่าน WebSocket
  console.log("✅ Sent enable buttons command to game:", message);
}
document.addEventListener("DOMContentLoaded", () => {
  const enableButton = document.getElementById("enable-buttons");
  if (enableButton) {
    enableButton.addEventListener("click", sendEnableButtonsCommand);
  } else {
    console.error("❌ Enable button not found in DOM");
  }
});

function sendCalculateCommand() {
  const message = { command: "calculateReward" };
  socket.send(JSON.stringify(message)); // ส่งข้อมูล JSON ผ่าน WebSocket
  console.log("Sent calculate command to game:", message);

  // หลังจากส่งคำสั่งไปแล้ว ให้รอเล็กน้อย (เช่น 100ms) จากนั้นนำค่าที่ผู้ใช้เลือกไว้ (selectedAnimals)
  // มาปรับค่า src ของรูปใน dropdown ให้ตรงกับที่ผู้ใช้เลือกไว้
  setTimeout(() => {
    // ตรวจสอบว่ามีตัวแปร selectedAnimals อยู่หรือไม่
    if (typeof selectedAnimals !== "undefined") {
      for (let slot in selectedAnimals) {
        const img = document.getElementById(`selected-animal-${slot}`);
        if (img && selectedAnimals[slot]) {
          // ตั้งค่า src ของรูปให้เป็นค่าที่ผู้ใช้เลือกไว้
          img.src = `assets/${selectedAnimals[slot]}.png`;
        }
      }
    }
  }, 100); // delay 100ms (ปรับค่าได้ตามความเหมาะสม)
}

function sendDisableCommand() {
  const message = JSON.stringify({ command: "disableButtons" });
  socket.send(message);
  console.log("✅ ส่งคำสั่งปิดปุ่มสัตว์ไปยัง game");
}
