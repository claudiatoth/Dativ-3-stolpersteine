// ============================================
// FLASHCARDS - Atelier de Aprofundare Dativ — Lecția 3: Stolpersteine
// Claudia Toth · 48 carduri (pattern dens — Atelier de Aprofundare)
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 8 Hause + persoane + bei + activitate ===
    { de: "nach Hause", ro: "🏠 acasă (MIȘCARE) · Ich gehe nach Hause · expresie fixă FĂRĂ articol", audio: "audio/letters/nach-hause.wav" },
    { de: "zu Hause", ro: "🏠 acasă (POZIȚIE) · Ich bin zu Hause · expresie fixă FĂRĂ articol", audio: "audio/letters/zu-hause.wav" },
    { de: "bei meiner Mutter", ro: "POZIȚIE la persoană · Carolina ist bei ihrer Mutter", audio: "audio/letters/bei-mutter.wav" },
    { de: "zu meiner Mutter", ro: "MIȘCARE la persoană · Carolina geht zu ihrer Mutter", audio: "audio/letters/zu-mutter.wav" },
    { de: "beim Essen", ro: "în timp ce mănânc · bei + activitate substantivizată (das Essen)", audio: "audio/letters/beim-essen.wav" },
    { de: "beim Lesen", ro: "în timp ce citesc · bei + activitate (das Lesen)", audio: "audio/letters/beim-lesen.wav" },
    { de: "beim Kochen", ro: "în timp ce gătesc · bei + activitate (das Kochen)", audio: "audio/letters/beim-kochen.wav" },
    { de: "bei der Arbeit", ro: "la lucru · bei + die Arbeit (fem · NU se contractă)", audio: "audio/letters/bei-arbeit.wav" },

    // === 8 țări (5 fără articol + 3 cu articol) ===
    { de: "aus Rumänien", ro: "🌍 din România · țară FĂRĂ articol", audio: "audio/letters/aus-rumaenien.wav" },
    { de: "aus Deutschland", ro: "🌍 din Germania · țară fără articol", audio: "audio/letters/aus-deutschland.wav" },
    { de: "nach Berlin", ro: "🌍 la Berlin · oraș fără articol", audio: "audio/letters/nach-berlin.wav" },
    { de: "aus der Türkei", ro: "🚨 din Turcia · die Türkei CU articol fem", audio: "audio/letters/aus-tuerkei.wav" },
    { de: "aus der Schweiz", ro: "🚨 din Elveția · die Schweiz CU articol fem", audio: "audio/letters/aus-schweiz.wav" },
    { de: "aus den USA", ro: "🚨 din SUA · die USA plural CU + -n!", audio: "audio/letters/aus-usa.wav" },
    { de: "in die Schweiz", ro: "🚨 în Elveția (Wohin?) · țară cu articol → Akkusativ!", audio: "audio/letters/in-die-schweiz.wav" },
    { de: "in Deutschland", ro: "în Germania (Wo? POZIȚIE) · țară fără articol cu Wechselpräp in", audio: "audio/letters/in-deutschland.wav" },

    // === 6 materiale + obiecte interior ===
    { de: "aus Gold", ro: "🔨 din aur · MATERIAL fără articol", audio: "audio/letters/aus-gold.wav" },
    { de: "aus Holz", ro: "🔨 din lemn · material fără articol", audio: "audio/letters/aus-holz.wav" },
    { de: "aus Plastik", ro: "🔨 din plastic · material fără articol", audio: "audio/letters/aus-plastik.wav" },
    { de: "aus Baumwolle", ro: "🔨 din bumbac · material fără articol", audio: "audio/letters/aus-baumwolle.wav" },
    { de: "aus dem Ofen", ro: "din cuptor (interior obiect) · der Ofen CU articol", audio: "audio/letters/aus-ofen.wav" },
    { de: "aus der Tasche", ro: "din geantă (interior obiect) · die Tasche CU articol", audio: "audio/letters/aus-tasche.wav" },

    // === 8 temporale (seit / vor / im / beim) ===
    { de: "seit drei Jahren", ro: "⏰ de 3 ani (durată CONTINUĂ până ACUM)", audio: "audio/letters/seit-jahren.wav" },
    { de: "seit September", ro: "⏰ din septembrie (dată continuă)", audio: "audio/letters/seit-september.wav" },
    { de: "vor zwei Wochen", ro: "⏰ acum 2 săptămâni (PUNCTUAL în trecut)", audio: "audio/letters/vor-wochen.wav" },
    { de: "vor einem Jahr", ro: "⏰ acum un an (punctual)", audio: "audio/letters/vor-jahr.wav" },
    { de: "im Januar", ro: "⏰ în ianuarie · im + lună (masc)", audio: "audio/letters/im-januar.wav" },
    { de: "im Sommer", ro: "⏰ vara · im + anotimp", audio: "audio/letters/im-sommer.wav" },
    { de: "beim Frühstück", ro: "⏰ la micul dejun · bei + masă (das Frühstück)", audio: "audio/letters/beim-fruehstueck.wav" },
    { de: "beim Lernen", ro: "⏰ în timp ce învăț · bei + activitate", audio: "audio/letters/beim-lernen.wav" },

    // === 8 persoane (mit · für · gegen · von) ===
    { de: "mit meinem Bruder", ro: "👥 cu fratele meu (PARTENER) · mit + Dat", audio: "audio/letters/mit-bruder.wav" },
    { de: "mit der Mutter", ro: "👥 cu mama (partener fem) · mit + Dat", audio: "audio/letters/mit-mutter.wav" },
    { de: "für meinen Vater", ro: "👥 pentru tatăl meu (BENEFICIAR) · für + Akk!", audio: "audio/letters/fuer-vater.wav" },
    { de: "für die Familie", ro: "👥 pentru familie (beneficiar fem) · für + Akk", audio: "audio/letters/fuer-familie.wav" },
    { de: "gegen die Mannschaft", ro: "👥 împotriva echipei (ADVERSAR) · gegen + Akk!", audio: "audio/letters/gegen-mannschaft.wav" },
    { de: "gegen die Korruption", ro: "👥 împotriva corupției · gegen + Akk", audio: "audio/letters/gegen-korruption.wav" },
    { de: "von Mihai", ro: "👥 de la Mihai (nume propriu FĂRĂ articol)", audio: "audio/letters/von-mihai.wav" },
    { de: "von der Lehrerin", ro: "👥 de la profesoară (rol CU articol fem)", audio: "audio/letters/von-lehrerin.wav" },

    // === 6 meserie vs companie ===
    { de: "Ich bin Arzt.", ro: "💼 Sunt medic. · MESERIE fără bei/als!", audio: "audio/letters/bin-arzt.wav" },
    { de: "Ich bin Lehrerin.", ro: "💼 Sunt profesoară. · meserie fără bei", audio: "audio/letters/bin-lehrerin.wav" },
    { de: "Ich arbeite bei Audi.", ro: "💼 Lucrez la Audi. · COMPANIE + bei (fără articol)", audio: "audio/letters/arbeite-bei-audi.wav" },
    { de: "Ich arbeite bei der Charité.", ro: "💼 Lucrez la Charité. · companie CU articol", audio: "audio/letters/arbeite-bei-charite.wav" },
    { de: "Ich arbeite als Koch.", ro: "💼 Lucrez ca bucătar. · meserie + als", audio: "audio/letters/arbeite-als-koch.wav" },
    { de: "Ich gehe zum Arzt.", ro: "💼 Merg la doctor. · MIȘCARE + zum vs POZIȚIE beim Arzt", audio: "audio/letters/zum-arzt.wav" },

    // === 4 propoziții emblemă cu 6 personaje ===
    { de: "Andreea wohnt seit drei Jahren in Berlin.", ro: "Andreea locuiește de 3 ani în Berlin. (seit + Dat continuă)", audio: "audio/letters/andreea-seit.wav" },
    { de: "Florian arbeitet bei der Charité als Arzt.", ro: "Florian lucrează la Charité ca medic. (bei + companie + als + meserie)", audio: "audio/letters/florian-charite.wav" },
    { de: "Mihai spielt mit Florian gegen Acar.", ro: "Mihai joacă cu Florian împotriva lui Acar. (mit Dat + gegen Akk)", audio: "audio/letters/mihai-mit-gegen.wav" },
    { de: "Beim Essen sprechen wir nicht.", ro: "În timp ce mâncăm nu vorbim. (beim + activitate)", audio: "audio/letters/beim-essen-prop.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (8 Hause+persoane+bei activitate · 8 țări · 6 materiale+interior · 8 temporale · 8 persoane mit/für/gegen/von · 6 meserie/companie · 4 propoziții emblemă).<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => { console.log('Audio nu poate fi redat:', err); });
}

buildFlashcards();
