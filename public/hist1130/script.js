const container = document.getElementById("puzzle-container");
const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game-screen");
const headerTitle = document.getElementById("header-title");
const timerCount = document.getElementById("timer-count");

const stages = [
  {
    image: "imgs/spanish.jpg",
    title: "Spanish Colonial Period (1565–1898)",
    summary: `
      <p class="font-extrabold text-2xl mb-4 text-black">🎉✨ Puzzle Complete! 🧩🎊</p>

      <div class="mb-4">
        <a href="https://vocal.media/history/spanish-colonization-in-the-philippines" target="_blank"
           class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900">
          <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-transparent group-hover:dark:bg-transparent">
            Go to Image Source
          </span>
        </a>
      </div>

      
      <div class="text-left space-y-4">
        <p>The puzzle you just solved was drawn by Alfredo Roque Gameiro, depicting the first encounter between Spanish colonizers and the native peoples of the islands, symbolizing the beginning of the Spanish Colonial Period in the Philippines (1565–1898). Spanish conquistadors are disembarking from galleons under the iconic red-cross flags of the Spanish crown, marking the arrival of European imperial power on the shores of the archipelago. The indigenous peoples, shown in traditional attire, observe the newcomers with a mix of curiosity and caution, foreshadowing the profound cultural, religious, and political upheaval that would follow. This moment marks not only the start of over three centuries of Spanish rule but also the introduction of Christianity, Western governance, and a deeply transformative colonial legacy that would shape Filipino identity for generations.</p>
        <p>Spanish colonization transformed the Philippines politically, culturally, and spiritually. Manila became the colonial capital in 1571, anchoring the Manila-Acapulco Galleon Trade and spreading Christianity through missionary work. The Spanish introduced centralized governance and a tribute-based economy but also imposed forced labor and social inequality. Despite centuries of control, resistance never ceased, thus ranging from local uprisings to the intellectual reform movement of the 19th century. This long period of colonization ultimately sparked a national awakening that led to the Philippine Revolution and the end of Spanish rule in 1898.</p>
      </div>
    `,
    buttonText: "Next: American Colonization",
    source: "https://vocal.media/history/spanish-colonization-in-the-philippines"
  },
  {
    image: "imgs/american.jpg",
    title: "American Colonial Period (1898–1946)",
    summary: `
      <p class="font-extrabold text-2xl mb-4 text-black">🎉✨ Puzzle Complete! 🧩🎊</p>

      <div class="mb-4">
        <a href="https://daily.jstor.org/the-ugly-origins-of-americas-involvement-in-the-philippines/" target="_blank"
           class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900">
          <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-transparent group-hover:dark:bg-transparent">
            Go to Image Source
          </span>
        </a>
      </div>

      
      <div class="text-left space-y-4">
      <p>The puzzle you just solved was by the U.S. Department of the Army, illustrating the fierce four-day Battle of Bagsak on Jolo Island in June 1913. Led by Brigadier General John J. Pershing, American forces and Philippine Scouts clashed with Moro warriors, renowned for their strength, discipline, and fierce resistance to foreign rule. Notably, these same warriors had withstood centuries of Spanish colonization, only to face intense military campaigns under American occupation. The brutal hand-to-hand combat during these encounters even influenced the development of the .45-caliber pistol, designed specifically to stop charging fighters like the Moros.</p>

      <p>Following Spain's defeat in 1898, the United States annexed the Philippines, sparking the Philippine-American War, which became a bloody conflict born from the Filipinos' struggle for independence. Though the United States introduced reforms like a public school system, democratic institutions, and English as a lingua franca, its rule was also marked by suppression of dissent and strategic control of the archipelago. Resistance persisted in various forms, and while the U.S. promised eventual self-governance, full independence was only achieved on July 4, 1946. This complex chapter left a lasting legacy on Philippine education, politics, and its enduring ties to the United States.</p>
      </div>
    `,
    buttonText: "Next: Japanese Colonization",
    source: "https://daily.jstor.org/the-ugly-origins-of-americas-involvement-in-the-philippines/"
  },
  {
    image: "imgs/japanese.jpg",
    title: "Japanese Colonial Period (1942–1945)",
    summary: `
      <p class="font-extrabold text-2xl mb-4 text-black">🎉✨ Puzzle Complete! 🧩🎊</p>
      
      <div class="mb-4">
        <a href="https://www.flickr.com/photos/govph/albums/72157636382454785/with/10203706693/" target="_blank"
           class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900">
          <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-transparent group-hover:dark:bg-transparent">
            Go to Image Source
          </span>
        </a>
      </div>

      <div class="text-left space-y-4">
      <p>The puzzle you just solved depicts a Japanese military unit advancing across open ground after a bombing and landing, likely during the early stages of Japan’s occupation of the Philippines in World War II. This image, sourced from The Sunday Times Magazine (1967), captures the stark devastation of war, as Japanese forces moved to occupy key strongholds like Corregidor following the fall of Bataan in 1942. The Philippine archipelago, once again, found itself under foreign control, this time by the Empire of Japan, whose brutal wartime regime would leave deep scars on the Filipino people.</p>

      <p>Japan’s occupation was marked by widespread violence, oppression, and resistance. The Japanese military imposed martial law, silenced dissent, and committed numerous atrocities, including the infamous Bataan Death March. Yet, Filipinos across the islands organized underground movements and guerrilla resistance, keeping the spirit of freedom alive. Though short in duration, the Japanese colonial period was among the most harrowing in Philippine history. Liberation came in 1945 with the return of Allied forces, setting the stage for the country’s long-awaited independence the following year.</p>
      </div>    
`,
    buttonText: "Return to Start",
    source: "https://www.flickr.com/photos/govph/albums/72157636382454785/with/10203706693"
  }
];


let currentStage = 0;
let timer = 0;
let timerInterval = null;
let snappedCount = 0;
const gridSize = 4;

function startGame() {
  introScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  currentStage = 0;
  startStage(currentStage);
}

function startStage(stageIndex) {
  container.innerHTML = "";
  document.getElementById("completion-message").classList.add("hidden");
  snappedCount = 0;
  timer = 0;
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timer++;
    updateTimerDisplay();
  }, 1000);

  const stage = stages[stageIndex];
  headerTitle.textContent = stage.title;

  const img = new Image();
  img.src = stage.image;
  img.onload = () => {
    const { width, height } = img;

    // Scale to fit max height of 600px
    const scale = Math.min(600 / height, 1);
    const scaledWidth = Math.floor(width * scale);
    const scaledHeight = Math.floor(height * scale);
    const tileWidth = Math.floor(scaledWidth / gridSize);
    const tileHeight = Math.floor(scaledHeight / gridSize);

    container.style.width = `${tileWidth * gridSize}px`;
    container.style.height = `${tileHeight * gridSize}px`;

    createTiles(tileWidth, tileHeight, scaledWidth, scaledHeight, stage.image);
  };

  // Ensure complete and preview buttons are visible again
  const existingBtn = document.getElementById("complete-button");
  if (!existingBtn) {
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "flex flex-wrap gap-4 justify-center mt-4";

    // --- Complete Puzzle Button ---
    const completeBtn = document.createElement("button");
    completeBtn.id = "complete-button";
    completeBtn.onclick = completeManually;
    completeBtn.className =
      "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900";

    const completeSpan = document.createElement("span");
    completeSpan.className =
      "relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-transparent group-hover:dark:bg-transparent";
    completeSpan.textContent = "Click Me to Complete Puzzle";

    completeBtn.appendChild(completeSpan);

    // --- Hover to View Full Image Button with Image Above ---
    const viewBtnWrapper = document.createElement("div");
    viewBtnWrapper.className = "relative group flex flex-col items-center";

    const tooltip = document.createElement("div");
    tooltip.className =
      "absolute hidden group-hover:block bottom-full mb-2 z-50 border border-gray-300 shadow-xl rounded bg-white";
    tooltip.innerHTML = `<img src="${stages[stageIndex].image}" alt="Full Puzzle Image" class="max-w-xs max-h-96 rounded" />`;

    const viewBtn = document.createElement("button");
    viewBtn.className =
      "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md bg-gradient-to-br from-indigo-300 to-sky-300 hover:from-indigo-400 hover:to-sky-400 dark:text-white dark:hover:text-gray-900";
    viewBtn.innerHTML = `
      <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded hover:bg-transparent hover:dark:bg-transparent">
        Hover to View Full Image
      </span>
    `;

    viewBtnWrapper.appendChild(tooltip);  // Tooltip (image) above
    viewBtnWrapper.appendChild(viewBtn);  // Button below the image

    // --- Append both buttons to button group ---
    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(viewBtnWrapper);

    // --- Insert into DOM above completion message ---
    container.parentNode.insertBefore(buttonGroup, document.getElementById("completion-message"));
  }
}

function updateTimerDisplay() {
  timerCount.textContent = timer;
}

function createTiles(tileWidth, tileHeight, imgWidth, imgHeight, imgSrc) {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const piece = document.createElement("div");
      piece.classList.add("piece");
      piece.style.width = `${tileWidth}px`;
      piece.style.height = `${tileHeight}px`;
      piece.style.backgroundImage = `url(${imgSrc})`;
      piece.style.backgroundSize = `${imgWidth}px ${imgHeight}px`;
      piece.style.backgroundPosition = `-${col * tileWidth}px -${row * tileHeight}px`;
      piece.style.position = "absolute";

      const x = Math.random() * (container.clientWidth - tileWidth);
      const y = Math.random() * (container.clientHeight - tileHeight);
      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;

      container.appendChild(piece);
      makeDraggable(piece, row, col, tileWidth, tileHeight);
    }
  }
}

function makeDraggable(el, correctRow, correctCol, tileWidth, tileHeight) {
  let offsetX, offsetY;
  let isSnapped = false;

  el.addEventListener("mousedown", (e) => {
    if (isSnapped) return;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    el.style.zIndex = 1000;

    const onMouseMove = (e) => {
      el.style.left = `${e.pageX - container.offsetLeft - offsetX}px`;
      el.style.top = `${e.pageY - container.offsetTop - offsetY}px`;
    };

    const onMouseUp = () => {
      const snappedX = correctCol * tileWidth;
      const snappedY = correctRow * tileHeight;
      const currentX = parseInt(el.style.left);
      const currentY = parseInt(el.style.top);

      const deltaX = Math.abs(currentX - snappedX);
      const deltaY = Math.abs(currentY - snappedY);
      const snapThreshold = Math.min(tileWidth, tileHeight) * 0.2;

      if (deltaX < snapThreshold && deltaY < snapThreshold) {
        el.style.left = `${snappedX}px`;
        el.style.top = `${snappedY}px`;
        el.style.zIndex = 0;
        isSnapped = true;
        el.style.cursor = "default";
        el.removeEventListener("mousedown", arguments.callee);

        snappedCount++;
        if (snappedCount === gridSize * gridSize) {
          handlePuzzleComplete();
        }
      }

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
}

function completeManually() {
  const tileWidth = container.clientWidth / gridSize;
  const tileHeight = container.clientHeight / gridSize;
  const pieces = Array.from(container.children);

  pieces.forEach((el, i) => {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    el.style.transition = "all 0.5s ease";
    el.style.left = `${col * tileWidth}px`;
    el.style.top = `${row * tileHeight}px`;
    el.style.cursor = "default";
    el.style.zIndex = 0;

    // Disable dragging
    el.style.pointerEvents = "none";
  });

  setTimeout(() => {
    snappedCount = gridSize * gridSize;
    handlePuzzleComplete();
  }, 600);
}

function handlePuzzleComplete() {
  clearInterval(timerInterval);

  const stage = stages[currentStage];
  const completeBtn = document.getElementById("complete-button");
  const messageBox = document.getElementById("completion-message");
  const messageText = document.getElementById("completion-text");
  const nextBtn = document.getElementById("next-stage-btn");

  if (completeBtn) completeBtn.remove();

  const viewBtnWrapper = document.querySelector(".group.flex-col");
  if (viewBtnWrapper) viewBtnWrapper.remove();
  messageText.innerHTML = `
    ${stage.summary}
  `;

  nextBtn.textContent = stage.buttonText;
  nextBtn.className = "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700";
  nextBtn.innerHTML = `${stage.buttonText}
  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>`;
  messageBox.classList.remove("hidden");

  startConfetti();
}

function nextStage() {
  currentStage++;
  if (currentStage >= stages.length) {
    location.reload(); // return to welcome screen
  } else {
    startStage(currentStage);
  }
}

const jsConfetti = new JSConfetti();
function startConfetti() {
  jsConfetti.addConfetti({
    emojis: ['🎉', '✨', '🧩', '🎊'],
    confettiNumber: 100,
  });
}
