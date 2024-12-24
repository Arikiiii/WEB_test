const numberDisplay1 = document.getElementById('number-display1');
const numberDisplay2 = document.getElementById('number-display2');
const numberDisplay3 = document.getElementById('number-display3');
const startButton = document.getElementById('start-button');
const HigtButton = document.getElementById('high-button');
const LowButton = document.getElementById('low-button');

let interval;
async function randomRunningNumber() {
  try {
    // หยุดการสุ่มถ้ายังมีการทำงานอยู่
    clearInterval(interval);

    // เริ่มเลขวิ่ง
    interval = setInterval(() => {
      const randomRunningNumber1 = Math.floor(Math.random() * 6) + 1;
      const randomRunningNumber2 = Math.floor(Math.random() * 6) + 1;
      const randomRunningNumber3 = Math.floor(Math.random() * 6) + 1;

      // อัพเดตเลขที่จอแสดงผลทั้งสามตัว
      numberDisplay1.textContent = randomRunningNumber1;
      numberDisplay2.textContent = randomRunningNumber2;
      numberDisplay3.textContent = randomRunningNumber3;
    }, 100);

    // หยุดหลังจาก 3 วินาทีและส่งคืนผลรวม
    return new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(interval);
        const finalNumber1 = Math.floor(Math.random() * 6) + 1;
        const finalNumber2 = Math.floor(Math.random() * 6) + 1;
        const finalNumber3 = Math.floor(Math.random() * 6) + 1;

        // แสดงเลขสุดท้าย
        numberDisplay1.textContent = finalNumber1;
        numberDisplay2.textContent = finalNumber2;
        numberDisplay3.textContent = finalNumber3;

        // ส่งคืนผลรวม
        resolve(finalNumber1 + finalNumber2 + finalNumber3);
      }, 3000);
    });
  } catch (error) {
    console.error(error);
  }
}



async function HightLow  (ans) {
  try{
  let check = null
  let soroe = await randomRunningNumber();

  if(soroe <= 9 ){
    check= false
  }else{
    check = true
  }

  if (ans === check) {
    Swal.fire({
        title: `${soroe}\n🎉 you win 🎉`,
        icon: "success",
        draggable: true
      });
  }else{
    Swal.fire({
        icon: "error",
        title: `${soroe}\nOops...`,
        
      });
  }
}catch (error) {
  console.log(error);
}
} 

