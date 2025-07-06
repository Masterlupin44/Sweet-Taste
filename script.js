// script.js
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- หน้า 1 : เลือกชื่อ ---------- */
  document.querySelectorAll('.nameBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.name;

      if (choice === 'Ching') {
        // โชว์หน้า 2
        document.getElementById('screen1').classList.add('hidden');
        document.getElementById('screen2').classList.remove('hidden');
      } else if (choice === 'Ping') {
        alert('กรือโบ๋เมียกเรยนะเนี่ย');
      } else if (choice === 'Gift') {
        alert('โหะอย่างใดวะ');
      } else if (choice === 'Fang') {
        alert('มี่มีอือรัย');
      }
    });
  });

  /* ---------- หน้า 2 : Yes / No ---------- */
  const yesBtn = document.getElementById('yesBtn');
  const noBtn  = document.getElementById('noBtn');

 yesBtn.addEventListener('click', () => {
  /* ⬇️ ซ่อนหน้า 2 ทันที */
  document.getElementById('screen2').classList.add('hidden');

  /* ⬇️ สร้าง overlay เป็นกล่อง .card */
const overlay = document.createElement('div');
overlay.id = 'countOverlay';
overlay.className = 'card';
overlay.style.position = 'fixed';
overlay.style.top = '50%';
overlay.style.left = '50%';
overlay.style.transform = 'translate(-50%, -50%)';
overlay.style.width  = '300px';
overlay.style.height = '150px';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.zIndex = '9999';

const countText = document.createElement('h1');
overlay.appendChild(countText);
document.body.appendChild(overlay);

const steps = ['3','2','1','Happy birthday to you'];
steps.forEach((txt,i)=>{
  setTimeout(()=>{
    countText.textContent = txt;
    if(txt.includes('Happy')){
      confetti({ particleCount:150, spread:100, origin:{y:0.6}, colors: ['#ff69b4', '#ffcc00', '#66ccff', '#ff99cc'],
  zIndex: 999999});
    }
  }, i*1000);
});


  /* ⬇️ ครบ 4 วิ → ลบ overlay, โชว์หน้า 3, เล่นเพลง */
  setTimeout(()=>{
    overlay.remove();
    document.getElementById('screen3').classList.remove('hidden');
    document.getElementById('hbdAudio').play?.();
  }, steps.length*1000);
});


  /* ปุ่ม No */
  noBtn.onclick = () => alert("ไม่ใช่ก็บ้าแล้ว");

});
