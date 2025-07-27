const music = document.getElementById("bg-music");

const playMusicOnce = () => {
music.play().catch(e => console.log("Music play blocked:", e));
window.removeEventListener("click", playMusicOnce);
};

window.addEventListener("click", playMusicOnce);
const surpriseQuotes = [
  "That day, I held your hand like I’d never let go.",
  "You smiled, and I forgot what pain felt like.",
  "Your silence still echoes louder than the stars."
];


const messages = [
  "I won’t regret our laughs, tears, or time — you’ll always be my favorite memory.",
  "We may not have a future, but I still wish you'd choose to stay, just because you care.",
  "Maybe you’ll ghost me after school… but I’ll still love you from afar, quietly.",
  "I’m not afraid of being alone — just of being forgotten by someone I gave my all to.",
  "You were never mine, but I loved every second like we had forever.",
  "I loved you with all I had — my words, my presence, my patience, even when it hurt.",
  "You will be the only person I will always love you like this and will always be there for you"
];
const fallingTexts = [];

function createFallingText() {
  const text = messages[Math.floor(Math.random() * messages.length)];
  const fontSize = Math.random() * 10 + 10;

  ctx.font = `bold ${fontSize}px Pacifico`;
  const textWidth = ctx.measureText(text).width;

  const x = Math.random() * (width - textWidth); 

  fallingTexts.push({
    text,
    x,
    y: -10,
    speed: Math.random() * 2 + 2,
    alpha: 1,
    fontSize,
    hue: Math.random() * 360
  });
}


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const stars = [];
const heartStars = [];
const meteors = [];

let mouseX = width / 2;
let mouseY = height / 2;
let heartBeat = 1;
let heartScale = Math.min(width, height) * 0.015;

function heartShape(t, scale = 1) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
  return { x: x * scale, y: y * scale };
}

function createHeartStars(count = 1600) {
  const centerX = width / 2;
  const centerY = height / 2 + 20;
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const heart = heartShape(t, heartScale);
    const offsetX = (Math.random() - 0.5) * 15;
    const offsetY = (Math.random() - 0.5) * 15;

    const targetX = centerX + heart.x + offsetX;
    const targetY = centerY + heart.y + offsetY;

    heartStars.push({
      // ⭐ bắt đầu từ vị trí ngẫu nhiên khắp màn hình
      x: Math.random() * width,
      y: Math.random() * height,
      targetX,
      targetY,
      originalX: targetX,
      originalY: targetY,
      size: Math.random() * 3 + 1,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      brightness: Math.random() * 0.5 + 0.5,
      hue: Math.random() * 60 + 300,
      mode: 'flying'  // chuyển sang heart khi đến nơi
    });
  }
}


function createBackgroundStars() {
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.01 + 0.005,
      brightness: Math.random() * 0.3 + 0.2
    });
  }
}

function createMeteor() {
  meteors.push({
    x: Math.random() * width,
    y: -50,
    length: Math.random() * 80 + 50,
    speed: Math.random() * 6 + 6,
    angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
    alpha: 1
  });
}
setInterval(() => {
  const quote = surpriseQuotes[Math.floor(Math.random() * surpriseQuotes.length)];
  fallingTexts.push({
    text: quote,
    x: Math.random() * width,
    y: -30,
    speed: 1.2,
    alpha: 1,
    fontSize: 18,
    hue: 330 + Math.random() * 30
  });
}, 15000); // one every 15 seconds


setInterval(() => {
  if (Math.random() < 0.8) createFallingText();
}, 2000);

// LEFT: "ONLY"
const constellationOnly = [
  // O
  { x: 100, y: 100 },
  { x: 120, y: 110 },
  { x: 120, y: 140 },
  { x: 100, y: 150 },
  { x: 80, y: 140 },
  { x: 80, y: 110 },
  { x: 100, y: 100 },

  // N
  { x: 140, y: 150 },
  { x: 140, y: 100 },
  { x: 170, y: 150 },
  { x: 170, y: 100 },

  // L
  { x: 190, y: 100 },
  { x: 190, y: 150 },
  { x: 210, y: 150 },

  // Y
  { x: 240, y: 100 },
  { x: 260, y: 130 },
  { x: 280, y: 100 },
  { x: 260, y: 130 },
  { x: 260, y: 160 }
];

// RIGHT: "YOU"
const constellationYou = [
  // Y
  { x: 1220, y: 100 },
  { x: 1240, y: 130 },
  { x: 1260, y: 100 },
  { x: 1240, y: 130 },
  { x: 1240, y: 160 },

  // O
  { x: 1290, y: 100 },
  { x: 1310, y: 110 },
  { x: 1310, y: 140 },
  { x: 1290, y: 150 },
  { x: 1270, y: 140 },
  { x: 1270, y: 110 },
  { x: 1290, y: 100 },

  // U
  { x: 1330, y: 100 },
  { x: 1330, y: 150 },
  { x: 1350, y: 160 },
  { x: 1370, y: 150 },
  { x: 1370, y: 100 }
];





let showConstellation = true;
let twinklePhase = 0;

let constellationOpacity = 1;

setTimeout(() => {
  showConstellation = false;
}, 15000); // disappears after 15s


function animate() {
  ctx.clearRect(0, 0, width, height);
  heartBeat += 0.1;
if (showConstellation || constellationOpacity > 0) {
  ctx.save();
  ctx.globalAlpha = constellationOpacity;
  ctx.strokeStyle = "rgba(255,200,255,0.8)";
  ctx.lineWidth = 1.5;
  twinklePhase += 0.05;


  // Draw "ONLY"
  for (let i = 0; i < constellationOnly.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(constellationOnly[i].x, constellationOnly[i].y);
    ctx.lineTo(constellationOnly[i + 1].x, constellationOnly[i + 1].y);
    ctx.stroke();
  }

  constellationOnly.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  });

  // Draw "YOU"
  for (let i = 0; i < constellationYou.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(constellationYou[i].x, constellationYou[i].y);
    ctx.lineTo(constellationYou[i + 1].x, constellationYou[i + 1].y);
    ctx.stroke();
  }

  constellationYou.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  });

  ctx.restore();

  if (!showConstellation) {
    constellationOpacity -= 0.01;
  }
}



  stars.forEach(star => {
    star.twinkle += star.twinkleSpeed;

    // ⭐ Hiệu ứng lóe sáng thật sự (thỉnh thoảng mới lóe lên)
    const flicker = Math.random() < 0.005 ? 1 : 0; // ~0.5% sao lóe sáng mỗi frame

    const baseOpacity = star.brightness * (0.4 + 0.6 * Math.sin(star.twinkle));
    const opacity = Math.min(1, baseOpacity + flicker); // nếu lóe, tăng sáng đột ngột

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = flicker ? 20 : 0; // nếu lóe thì tỏa sáng
    ctx.shadowColor = flicker ? '#fff' : 'transparent';
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });


  
  meteors.forEach((m, i) => {
    const dx = Math.cos(m.angle) * m.length;
    const dy = Math.sin(m.angle) * m.length;
    ctx.save();
    ctx.globalAlpha = m.alpha;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x - dx, m.y - dy);
    ctx.stroke();
    ctx.restore();
    m.x += Math.cos(m.angle) * m.speed;
    m.y += Math.sin(m.angle) * m.speed;
    m.alpha -= 0.005;
    if (m.alpha <= 0) meteors.splice(i, 1);
  });

  // Draw falling texts
  fallingTexts.forEach((t, i) => {
    ctx.save();
    ctx.font = `bold ${t.fontSize}px Pacifico`;
    ctx.fillStyle = `hsla(${t.hue}, 100%, 85%, ${t.alpha})`;
    ctx.shadowBlur = 5;
    ctx.shadowColor = `hsla(${t.hue}, 100%, 70%, ${t.alpha})`;
    ctx.fillText(t.text, t.x, t.y);
    ctx.restore();

    t.y += t.speed;
    t.alpha -= 0.002;

    if (t.y > height + 30 || t.alpha <= 0) {
      fallingTexts.splice(i, 1);
    }
  });

  heartStars.forEach((star, i) => {
    star.twinkle += star.twinkleSpeed;
    const centerX = width / 2;
    const centerY = height / 2 + 20;

    if (star.mode === 'flying') {
      const dx = star.targetX - star.x;
      const dy = star.targetY - star.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.07;
      if (dist > 1) {
        star.x += dx * speed;
        star.y += dy * speed;
      } else {
        star.mode = 'heart';
      }
    } 
    else {
      const deltaX = star.originalX - centerX;
      const deltaY = star.originalY - centerY;
      const beatScale = 1 + Math.sin(heartBeat) * 0.05;
      star.x = centerX + deltaX * beatScale;
      star.y = centerY + deltaY * beatScale;

      const distanceToMouse = Math.hypot(mouseX - star.x, mouseY - star.y);
      let interactionForce = 0;
      if (distanceToMouse < 100) {
        interactionForce = (100 - distanceToMouse) / 100;
        const angle = Math.atan2(star.y - mouseY, star.x - mouseX);
        star.x += Math.cos(angle) * interactionForce * 10;
        star.y += Math.sin(angle) * interactionForce * 10;
      }
    }

    const twinkleOpacity = star.brightness * (0.3 + 0.7 * Math.sin(star.twinkle));
    ctx.save();
    ctx.globalAlpha = twinkleOpacity;
    ctx.fillStyle = `hsl(${star.hue}, 70%, 80%)`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = `hsl(${star.hue}, 70%, 60%)`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

canvas.addEventListener('click', (e) => {
  const centerX = width / 2;
  const centerY = height / 2 + 20;
  heartScale *= 1.015;
  heartStars.forEach((star, i) => {
    if (star.mode === 'heart') {
      const t = (i / heartStars.length) * Math.PI * 2;
      const heart = heartShape(t, heartScale);
      const offsetX = (Math.random() - 0.5) * 15;
      const offsetY = (Math.random() - 0.5) * 15;
      star.originalX = centerX + heart.x + offsetX;
      star.originalY = centerY + heart.y + offsetY;
    }
  });

  for (let i = 0; i < 10; i++) {
    const t = Math.random() * Math.PI * 2;
    const heart = heartShape(t, heartScale);
    const targetX = centerX + heart.x;
    const targetY = centerY + heart.y;

    heartStars.push({
      x: e.clientX + (Math.random() - 0.5) * 50,
      y: e.clientY + (Math.random() - 0.5) * 50,
      targetX,
      targetY,
      originalX: targetX,
      originalY: targetY,
      size: Math.random() * 3 + 2,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.03 + 0.02,
      brightness: Math.random() * 0.8 + 0.6,
      hue: Math.random() * 60 + 300,
      mode: 'flying'
    });
  }
});

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  heartScale = Math.min(width, height) * 0.015;
  heartStars.length = 0;
  stars.length = 0;
  createHeartStars();
  createBackgroundStars();
});

setInterval(() => { if (Math.random() < 0.7) createMeteor(); }, 3000);

createHeartStars();
createBackgroundStars();
animate();

function typeFooterMessage(message, elementId, typingSpeed = 55, fadeDelay = 2500) {
  const el = document.getElementById(elementId);
  let i = 0;
  el.innerHTML = "";
  el.style.opacity = 1;

  function typeChar() {
    if (i < message.length) {
      el.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeChar, typingSpeed);
    } else {
      // After delay, start floating animation
      setTimeout(() => {
        el.classList.add("footer-float");
      }, fadeDelay);
    }
  }

  setTimeout(typeChar, 1000);
}

// Start the typewriter after full ambiance settles
setTimeout(() => {
  typeFooterMessage(
    "And if you ever look up and miss me —\njust know I’m missing you too.",
    "footer-note"
  );
}, 14000); // wait for cosmic ambience to settle

window.addEventListener("load", () => {
  const memoryItems = document.querySelectorAll(".memory-item");
  let current = 0;
  const delay = 7000;

  memoryItems.forEach(item => item.classList.remove("show"));
  memoryItems[current].classList.add("show");

  setInterval(() => {
    memoryItems[current].classList.remove("show");
    current = (current + 1) % memoryItems.length;
    memoryItems[current].classList.add("show");
  }, delay);
});
