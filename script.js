var crops = [
  {
    name: "Lettuce", image: "lettuce.avif", color: "#C9F0D3",
    space: ["windowsill", "balcony", "room"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal", "moderate"],
    reason: "Fast-growing and ultra-forgiving — the perfect first hydroponic plant for any space."
  },
  {
    name: "Mint", image: "mint.jpg", color: "#B7E4C7",
    space: ["windowsill", "balcony"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Hardy, aromatic and nearly impossible to kill — a beginner's absolute best friend."
  },
  {
    name: "Spinach", image: "spinach.jpg", color: "#B5EAD7",
    space: ["windowsill", "balcony", "room"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal", "moderate"],
    reason: "Cool-tolerant and compact — thrives in shaded spots with almost zero fuss."
  },
  {
    name: "Chives", image: "chives.webp", color: "#D0EDDA",
    space: ["windowsill"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Virtually maintenance-free and perfectly sized for a kitchen windowsill."
  },
  {
    name: "Green Onions", image: "green onion.jpg", color: "#DAEFD8",
    space: ["windowsill"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Regrow from scraps in days — one of the easiest hydroponic plants on the planet."
  },
  {
    name: "Watercress", image: "watercress.avif", color: "#C3EDD4",
    space: ["windowsill"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Loves water by nature — peppery, nutritious, and incredibly easy to grow hydroponically."
  },
  {
    name: "Lemon Balm", image: "lemon balm.webp", color: "#FFF3CD",
    space: ["windowsill", "balcony"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Calming, citrus-scented herb that thrives in low-light conditions with minimal care."
  },
  {
    name: "Wheatgrass", image: "wheatgrass.jpg", color: "#D6F0C0",
    space: ["windowsill"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Nutrient-packed superfood ready to harvest in under 10 days — incredibly beginner-friendly."
  },
  {
    name: "Basil", image: "basil.jpg", color: "#A8D5B5",
    space: ["windowsill", "balcony"], light: ["medium", "lots"],
    exp: ["beginner"], time: ["minimal", "moderate"],
    reason: "A kitchen staple that loves sunlight and rewards you with fragrant, fresh leaves."
  },
  {
    name: "Microgreens", image: "microgreens.jpg", color: "#D4F1DF",
    space: ["windowsill", "balcony", "room"], light: ["low", "medium", "lots"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Ready in just 7–14 days — the fastest, most rewarding greens to grow indoors."
  },
  {
    name: "Arugula", image: "arugula.jpg", color: "#C8EBC2",
    space: ["windowsill", "balcony"], light: ["medium", "lots"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Spicy and ready in weeks — a gourmet leafy green that thrives on a bright windowsill."
  },
  {
    name: "Parsley", image: "parsely.webp", color: "#CAE8C4",
    space: ["windowsill", "balcony"], light: ["medium", "lots"],
    exp: ["beginner"], time: ["minimal", "moderate"],
    reason: "A versatile culinary herb that grows steadily with medium light and minimal attention."
  },
  {
    name: "Cilantro", image: "cilantro.webp", color: "#C4EDBC",
    space: ["windowsill", "balcony"], light: ["medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Fresh and aromatic — grows in compact spaces and is ready to harvest in 3–4 weeks."
  },
  {
    name: "Radishes", image: "radish.jpg", color: "#FADADD",
    space: ["windowsill", "balcony"], light: ["medium", "lots"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Among the fastest growing crops — ready in as little as 3 weeks with great results."
  },
  {
    name: "Thyme", image: "thyme.jpg", color: "#D8EFC8",
    space: ["windowsill"], light: ["lots"],
    exp: ["beginner"], time: ["minimal"],
    reason: "A sun-loving aromatic herb that is practically indestructible once established."
  },
  {
    name: "Oregano", image: "oregano.webp", color: "#D1EBC4",
    space: ["windowsill"], light: ["lots"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Mediterranean herb that thrives in bright windows — harvest continuously for cooking."
  },
  {
    name: "Kale", image: "kale.jpg", color: "#C7F9CC",
    space: ["balcony", "room"], light: ["medium", "lots"],
    exp: ["beginner", "pro"], time: ["minimal", "moderate"],
    reason: "Nutrient-dense and resilient — a powerhouse green for medium-to-bright indoor spaces."
  },
  {
    name: "Swiss Chard", image: "swiss chard.jpg", color: "#D0F0DC",
    space: ["balcony", "room"], light: ["medium", "lots"],
    exp: ["beginner", "pro"], time: ["minimal", "moderate"],
    reason: "Colorful, hardy, and versatile — an excellent all-rounder for indoor hydro gardens."
  },
  {
    name: "Pak Choi", image: "pak choi.jpg", color: "#C5EDCF",
    space: ["balcony", "room"], light: ["medium", "lots"],
    exp: ["beginner"], time: ["minimal", "moderate"],
    reason: "Mild, crunchy Asian green that grows quickly and pairs beautifully with stir-fries."
  },
  {
    name: "Snap Peas", image: "snap peas.jpg", color: "#CCF0C6",
    space: ["balcony", "room"], light: ["medium", "lots"],
    exp: ["beginner", "pro"], time: ["moderate"],
    reason: "Sweet, crunchy pods that climb and produce rewarding harvests in bright spaces."
  },
  {
    name: "Cherry Tomatoes", image: "cherry tomato.jpg", color: "#FFE4D6",
    space: ["balcony", "room"], light: ["lots"],
    exp: ["beginner", "pro"], time: ["moderate"],
    reason: "Sweet, rewarding harvests perfect for bright balcony or dedicated room setups."
  },
  {
    name: "Strawberries", image: "strawberries.jpg", color: "#FFE0E9",
    space: ["balcony", "room"], light: ["lots"],
    exp: ["beginner", "pro"], time: ["moderate"],
    reason: "A delightful treat on a sunny balcony — satisfying for patient, care-giving growers."
  },
  {
    name: "Bell Peppers", image: "bell peppers.jpg", color: "#E4F4D8",
    space: ["balcony", "room"], light: ["lots"],
    exp: ["pro"], time: ["moderate"],
    reason: "Rewarding for experienced growers who can provide warmth, space and consistent light."
  },
  {
    name: "Eggplant", image: "eggplant.webp", color: "#E8D5F0",
    space: ["room"], light: ["lots"],
    exp: ["pro"], time: ["moderate"],
    reason: "A rich, striking crop for dedicated indoor growers — needs strong light and patience."
  },
  {
    name: "Cucumber", image: "cucumber.webp", color: "#D4EDDA",
    space: ["room"], light: ["lots"],
    exp: ["pro"], time: ["moderate"],
    reason: "High-yield for dedicated growers — needs climbing space, strong light, and warmth."
  },
  {
    name: "Dill", image: "dill.webp", color: "#E2F4C5",
    space: ["windowsill", "balcony"], light: ["medium", "lots"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Feathery and aromatic — grows quickly on a windowsill or balcony with minimal effort."
  },
  {
    name: "Sage", image: "sage.webp", color: "#D0E1D4",
    space: ["windowsill", "balcony", "room"], light: ["medium", "lots"],
    exp: ["beginner", "pro"], time: ["minimal", "moderate"],
    reason: "Velvety leaves with deep, earthy flavor — highly resilient and loves sunny spots."
  },
  {
    name: "Rosemary", image: "rosemary.jpg", color: "#C9DFEC",
    space: ["balcony", "room"], light: ["lots"],
    exp: ["pro"], time: ["moderate"],
    reason: "A fragrant, woody herb that loves light and rewards patient growers with long-lived harvests."
  },
  {
    name: "Mustard Greens", image: "mustard greens.jpg", color: "#E2F0D9",
    space: ["windowsill", "balcony", "room"], light: ["low", "medium"],
    exp: ["beginner"], time: ["minimal"],
    reason: "Fast-growing leafy greens with a peppery kick — thrive in cooler spots and low-to-medium light."
  },
  {
    name: "Jalapeno Peppers", image: "jalapeno.jpeg", color: "#FFE8D6",
    space: ["balcony", "room"], light: ["lots"],
    exp: ["pro"], time: ["moderate"],
    reason: "Zesty, high-yield peppers that thrive under bright grow lights or warm balcony sun."
  }
];

var questions = [
  {
    key: "space", label: "Question 1 of 4",
    text: "How much space do you have?",
    options: [
      { val: "windowsill", name: "Windowsill", sub: "A small sill or shelf", icon: "icon-windowsill.png" },
      { val: "balcony", name: "Balcony", sub: "Outdoor or semi-outdoor", icon: "icon-balcony.png" },
      { val: "room", name: "Full Room", sub: "A dedicated indoor space", icon: "icon-room.png" }
    ]
  },
  {
    key: "light", label: "Question 2 of 4",
    text: "How much natural light do you get?",
    options: [
      { val: "low", name: "Low", sub: "Mostly shaded or north-facing", icon: "icon-lowlight.png" },
      { val: "medium", name: "Medium", sub: "Indirect or filtered sunlight", icon: "icon-medlight.png" },
      { val: "lots", name: "Lots", sub: "Direct sun for 6+ hours a day", icon: "icon-lotslight.png" }
    ]
  },
  {
    key: "exp", label: "Question 3 of 4",
    text: "What's your growing experience?",
    options: [
      { val: "beginner", name: "Beginner", sub: "New to growing plants", icon: "icon-beginner.png" },
      { val: "pro", name: "Pro", sub: "I've grown things before", icon: "icon-pro.png" }
    ]
  },
  {
    key: "time", label: "Question 4 of 4",
    text: "How much time can you spare per week?",
    options: [
      { val: "minimal", name: "Minimal", sub: "Less than 30 minutes", icon: "icon-minimal.png" },
      { val: "moderate", name: "Moderate", sub: "A couple of hours", icon: "icon-moderate.png" }
    ]
  }
];

var step = 0;
var answers = {};
var quizHistory = [];
var isTransitioning = false;

function showScreen(id) {
  if (isTransitioning) return;
  var activeScreen = document.querySelector('.screen.active');
  var targetScreen = document.getElementById(id);
  if (!targetScreen) return;
  if (!activeScreen) {
    targetScreen.classList.add('active');
    return;
  }
  if (activeScreen.id === id) return;

  isTransitioning = true;
  activeScreen.classList.add('exiting');

  setTimeout(function () {
    activeScreen.classList.remove('active', 'exiting');
    targetScreen.classList.add('active');
    isTransitioning = false;
  }, 320);
}

function enterMain() {
  var ws = document.getElementById('welcome-screen');
  ws.classList.add('out');
  setTimeout(function () {
    ws.style.display = 'none';
    showScreen('main-page');
    animateHero();
  }, 650);
}

function animateHero() {
  var items = document.querySelectorAll('[data-anim]');
  items.forEach(function (el) {
    var delay = 150 + parseInt(el.getAttribute('data-anim')) * 140;
    setTimeout(function () { el.classList.add('visible'); }, delay);
  });
}

function startQuiz() {
  step = 0;
  answers = {};
  showScreen('quiz-screen');
  renderQ();
}

function backToMain() {
  showScreen('main-page');
}

function startOver() {
  step = 0;
  answers = {};
  showScreen('main-page');
  updateHistoryBtn();
}

function exitHistory() {
  showScreen('main-page');
}

function updateHistoryBtn() {
  var btn = document.getElementById('hist-shortcut');
  if (!btn) return;
  if (quizHistory.length === 0) {
    btn.textContent = 'View previous recommendations';
  } else {
    btn.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> View previous recommendations (' + quizHistory.length + ')';
  }
}

function renderQ() {
  var q = questions[step];
  var stage = document.getElementById('quiz-stage');

  for (var i = 0; i < questions.length; i++) {
    var pip = document.getElementById('pip' + i);
    if (!pip) continue;
    pip.className = 'pip';
    if (i < step) pip.classList.add('done');
    if (i === step) pip.classList.add('active');
  }

  var optsHTML = '';
  for (var j = 0; j < q.options.length; j++) {
    var o = q.options[j];
    optsHTML +=
      '<button class="opt-card" onclick="pick(\'' + q.key + '\',\'' + o.val + '\',this)">' +
      '<div class="opt-text">' +
      '<span class="opt-name">' + o.name + '</span>' +
      '<span class="opt-sub">' + o.sub + '</span>' +
      '</div>' +
      '<div class="opt-icon"><img src="' + o.icon + '" alt="' + o.name + '" style="width:24px; height:24px; object-fit:contain;"></div>' +
      '</button>';
  }

  stage.innerHTML =
    '<div class="q-slide">' +
    '<p class="q-label">' + q.label + '</p>' +
    '<h2 class="q-text">' + q.text + '</h2>' +
    '<div class="opts">' + optsHTML + '</div>' +
    '</div>';

  initInteractiveCards();
}

function pick(key, val, btn) {
  var btns = document.querySelectorAll('.opt-card');
  btns.forEach(function (b) { b.disabled = true; });

  btn.style.borderColor = 'var(--green)';
  btn.style.background = 'var(--green-pale)';
  answers[key] = val;

  var slide = document.querySelector('.q-slide');
  slide.style.transition = 'opacity .27s ease, transform .27s ease';
  slide.style.opacity = '0';
  slide.style.transform = 'translateX(-26px)';

  setTimeout(function () {
    step++;
    if (step < questions.length) {
      renderQ();
    } else {
      showResults();
    }
  }, 270);
}

function getTopCrops() {
  var scored = crops.map(function (c) {
    var s = 0;
    if (c.space.indexOf(answers.space) > -1) s += 3;
    if (c.light.indexOf(answers.light) > -1) s += 2;
    if (c.exp.indexOf(answers.exp) > -1) s += 2;
    if (c.time && c.time.indexOf(answers.time) > -1) s += 1;

    var tieBreaker = Math.random() * 0.01;
    return Object.assign({}, c, { score: (s + tieBreaker), displayScore: s });
  });

  scored.sort(function (a, b) { return b.score - a.score; });

  var good = scored.filter(function (c) { return c.displayScore >= 3; });
  return (good.length >= 3 ? good : scored).slice(0, 3);
}

function badge(score) {
  if (score >= 6) return "Perfect Match";
  if (score >= 4) return "Great Match";
  return "Good Match";
}

function showResults() {
  var matches = getTopCrops();

  quizHistory.push({
    num: quizHistory.length + 1,
    answers: Object.assign({}, answers),
    crops: matches,
    date: formatDate(new Date())
  });

  showScreen('results-screen');

  var grid = document.getElementById('card-grid');
  var html = '';
  for (var i = 0; i < matches.length; i++) {
    var c = matches[i];
    html +=
      '<div class="crop-card" id="cc' + i + '" style="--i: ' + i + ';">' +
      '<div class="card-top" style="background:' + c.color + '; overflow: hidden;">' +
      '<img src="' + c.image + '" alt="' + c.name + '" style="width:100%; height:100%; object-fit:cover;">' +
      '</div>' +
      '<div class="card-body">' +
      '<span class="match-badge">' + badge(c.displayScore) + '</span>' +
      '<div class="crop-name">' + c.name + '</div>' +
      '<p class="crop-reason">' + c.reason + '</p>' +
      '</div>' +
      '</div>';
  }
  grid.innerHTML = html;

  requestAnimationFrame(function () {
    setTimeout(function () {
      for (var j = 0; j < matches.length; j++) {
        var card = document.getElementById('cc' + j);
        if (card) card.classList.add('in');
      }
      initInteractiveCards();
    }, 40);
  });
}

function showHistory() {
  showScreen('history-screen');
  renderHistoryList();
}

function renderHistoryList() {
  var body = document.getElementById('history-body');

  if (quizHistory.length === 0) {
    body.innerHTML =
      '<div class="history-title-block">' +
      '<p class="eyebrow">Your Journey</p>' +
      '<h2 class="history-h2">Previous Quizzes</h2>' +
      '</div>' +
      '<div class="hist-empty">' +
      '<p class="hist-empty-title">No quizzes yet</p>' +
      '<p class="hist-empty-sub">Take( or retake) the quiz and your results will appear here.</p>' +
      '<button class="pill-btn green-btn hist-empty-btn" onclick="exitHistory(); startQuiz();">' +
      '<span>Take the Quiz</span>' +
      '</button>' +
      '</div>';
    return;
  }

  var rowsHTML = '';
  for (var i = quizHistory.length - 1; i >= 0; i--) {
    var entry = quizHistory[i];
    var topCrop = entry.crops[0] ? entry.crops[0].name : 'Various';
    rowsHTML +=
      '<div class="hist-row" onclick="openPanel(' + i + ')" style="animation-delay:' + ((quizHistory.length - 1 - i) * 0.07) + 's">' +
      '<div class="hist-row-left">' +
      '<span class="hist-num">Quiz #' + entry.num + ' &middot; ' + entry.date + '</span>' +
      '<span class="hist-title">Top pick: ' + topCrop + '</span>' +
      '<div class="hist-tags">' +
      '<span class="hist-tag">' + cap(entry.answers.space) + '</span>' +
      '<span class="hist-tag">' + cap(entry.answers.light) + ' light</span>' +
      '<span class="hist-tag">' + cap(entry.answers.exp) + '</span>' +
      '<span class="hist-tag">' + cap(entry.answers.time) + '</span>' +
      '</div>' +
      '</div>' +
      '<span class="hist-arrow">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
      '</span>' +
      '</div>';
  }

  body.innerHTML =
    '<div class="history-title-block">' +
    '<p class="eyebrow">Your Journey</p>' +
    '<h2 class="history-h2">Previous Quizzes</h2>' +
    '<p class="results-sub">Tap any quiz to see its recommendations</p>' +
    '</div>' +
    '<div class="hist-list">' + rowsHTML + '</div>';
}

function openPanel(idx) {
  var entry = quizHistory[idx];
  var overlay = document.getElementById('panel-overlay');

  document.getElementById('panel-tag').textContent = 'Quiz #' + entry.num + ' \u00B7 ' + entry.date;
  document.getElementById('panel-title').textContent = 'Top Picks';

  var bodyHTML = '';
  for (var i = 0; i < entry.crops.length; i++) {
    var c = entry.crops[i];
    bodyHTML +=
      '<div class="mini-card" style="--i: ' + i + ';">' +
      '<div class="mini-emoji" style="background:' + c.color + '; overflow:hidden;">' +
      '<img src="' + c.image + '" alt="' + c.name + '" style="width:100%; height:100%; object-fit:cover;">' +
      '</div>' +
      '<div class="mini-info">' +
      '<span class="mini-badge">' + badge(c.displayScore) + '</span>' +
      '<div class="mini-name">' + c.name + '</div>' +
      '<p class="mini-reason">' + c.reason + '</p>' +
      '</div>' +
      '</div>';
  }
  document.getElementById('panel-body').innerHTML = bodyHTML;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  initInteractiveCards();
}

function closePanel() {
  var overlay = document.getElementById('panel-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function panelBgClick(e) {
  if (e.target === document.getElementById('panel-overlay')) {
    closePanel();
  }
}

function cap(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(d) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

/* ==========================================================================
   Emberco Spring-Mass Physics Engine: Heavy Dynamic Card Weight
   ========================================================================== */
function initInteractiveCards() {
  var targets = document.querySelectorAll('.opt-card, .crop-card, .mini-card');

  targets.forEach(function (card) {
    card.style.transformOrigin = 'center center';
    card.style.transition = 'box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1)';

    // Kinetic state trackers
    let currentX = 0, currentY = 0;
    let currentTiltX = 0, currentTiltY = 0;

    let velX = 0, velY = 0;
    let velTiltX = 0, velTiltY = 0;

    let targetX = 0, targetY = 0;
    let targetTiltX = 0, targetTiltY = 0;

    let animFrameId = null;
    let isHovering = false;

    // Hooke's Law Constants for heavy inertia mass tracking
    const stiffness = 0.06; // Spring snap tension
    const damping = 0.72; // Resistance value preventing loose hyper-bouncing
    const mass = 1.8;  // Simulated heavy weight. High numbers create massive force latency drag

    function updateSprings() {
      // 1. Calculate spring displacement force
      let forceX = (targetX - currentX) * stiffness;
      let forceY = (targetY - currentY) * stiffness;
      let forceTX = (targetTiltX - currentTiltX) * stiffness;
      let forceTY = (targetTiltY - currentTiltY) * stiffness;

      // 2. Acceleration = Force / Mass
      let ax = forceX / mass;
      let ay = forceY / mass;
      let atx = forceTX / mass;
      let aty = forceTY / mass;

      // 3. Update velocity matrices with damping friction applied
      velX = (velX + ax) * damping;
      velY = (velY + ay) * damping;
      velTiltX = (velTiltX + atx) * damping;
      velTiltY = (velTiltY + aty) * damping;

      // 4. Update coordinates position
      currentX += velX;
      currentY += velY;
      currentTiltX += velTiltX;
      currentTiltY += velTiltY;

      // 5. Apply matrix properties
      card.style.transform = `perspective(1200px) rotateX(${currentTiltX.toFixed(3)}deg) rotateY(${currentTiltY.toFixed(3)}deg) translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 8px)`;

      // If we've let go and the card has basically settled back to rest, stop looping frames
      if (!isHovering &&
        Math.abs(velX) < 0.001 && Math.abs(velY) < 0.001 &&
        Math.abs(velTiltX) < 0.001 && Math.abs(velTiltY) < 0.001) {
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)';
        animFrameId = null;
        return;
      }

      animFrameId = requestAnimationFrame(updateSprings);
    }

    // Clear old duplicate listeners by cloning and replacing if necessary, 
    // or simply attach clean listeners if newly rendered.
    const onMouseMove = function (e) {
      isHovering = true;
      var rect = card.getBoundingClientRect();

      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      var dx = (x / rect.width) - 0.5;
      var dy = (y / rect.height) - 0.5;

      // Emberco bounds: tight physics tilt with heavier translation shaking offset
      var maxTiltAngle = 9;
      var maxShiftAmt = 16;

      targetTiltX = dy * maxTiltAngle;
      targetTiltY = -dx * maxTiltAngle;
      targetX = dx * maxShiftAmt;
      targetY = dy * maxShiftAmt;

      if (!animFrameId) {
        animFrameId = requestAnimationFrame(updateSprings);
      }
    };

    const onMouseLeave = function () {
      isHovering = false;
      targetX = 0; targetY = 0;
      targetTiltX = 0; targetTiltY = 0;
    };

    card.removeEventListener('mousemove', card._onMouseMove);
    card.removeEventListener('mouseleave', card._onMouseLeave);

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    card._onMouseMove = onMouseMove;
    card._onMouseLeave = onMouseLeave;
  });
}