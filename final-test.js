// ============================================
// TEST FINAL - Atelier de Aprofundare Dativ — Lecția 3: Stolpersteine
// Claudia Toth · 25 întrebări (pattern dens — aprofundare)
// REGULĂ: NU ghilimele interne în stringuri JS!
// ============================================

function normalizeTestAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // 6× Hause + persoane + bei + activitate
    { type: 'multiple', category: '🏠 Hause/persoane', question: 'Mihai geht ____ Hause. (MIȘCARE)', options: ['nach', 'zu', 'bei', 'in'], correct: 'nach', explanation: 'MIȘCARE acasă = nach Hause (FĂRĂ articol). zu Hause ar fi POZIȚIE.' },
    { type: 'luckentext', category: '🏠 Hause/persoane', question: 'Completează (POZIȚIE acasă):', sentence: 'Andreea ist ____ Hause.', translation: 'Andreea e acasă.', accept: ['zu'], correct: 'zu', explanation: 'POZIȚIE acasă = zu Hause (FĂRĂ articol, expresie fixă).' },
    { type: 'multiple', category: '🏠 Hause/persoane', question: 'Carolina ist ____ ihrer Mutter. (POZIȚIE)', options: ['nach', 'zu', 'bei', 'mit'], correct: 'bei', explanation: 'bei + persoană = POZIȚIE (la mama, ești acolo). zu ar fi MIȘCARE.' },
    { type: 'luckentext', category: '🏠 Hause/persoane', question: 'Completează (în timp ce mănânc):', sentence: '____ Essen sprechen wir nicht.', translation: 'În timp ce mâncăm nu vorbim.', accept: ['beim'], correct: 'Beim', explanation: 'bei + activitate substantivizată (das Essen) = beim. Expresie clasică germană.' },
    { type: 'multiple', category: '🏠 Hause/persoane', question: 'Florian fährt ____ seinem Bruder. (MIȘCARE la persoană)', options: ['bei', 'zu', 'mit', 'für'], correct: 'zu', explanation: 'zu + persoană = MIȘCARE (te duci la cineva). bei ar fi POZIȚIE.' },
    { type: 'luckentext', category: '🏠 Hause/persoane', question: 'Completează (în timp ce gătesc):', sentence: '____ Kochen höre ich Musik.', translation: 'Când gătesc ascult muzică.', accept: ['beim'], correct: 'Beim', explanation: 'beim + activitate (das Kochen) = în timp ce gătesc.' },

    // 4× Țări (fără/cu articol)
    { type: 'multiple', category: '🌍 Țări', question: 'Acar kommt ____ Türkei. (țară cu articol fem)', options: ['aus', 'aus der', 'aus dem', 'aus die'], correct: 'aus der', explanation: 'die Türkei e fem cu articol → aus DER Türkei (Dativ).' },
    { type: 'luckentext', category: '🌍 Țări', question: 'Completează (țară fără articol, MIȘCARE):', sentence: 'Andreea fährt ____ Berlin.', translation: 'Andreea merge la Berlin.', accept: ['nach'], correct: 'nach', explanation: 'Orașe/țări FĂRĂ articol → nach (Berlin, Italien, Deutschland).' },
    { type: 'multiple', category: '🌍 Țări', question: 'Carolina möchte ____ Schweiz fahren. (țară cu articol — MIȘCARE!)', options: ['nach der', 'in die', 'aus der', 'zu der'], correct: 'in die', explanation: 'Țări CU articol + MIȘCARE = in + Akkusativ (Wechselpräp Wohin). NU nach!' },
    { type: 'luckentext', category: '🌍 Țări', question: 'Completează (SUA cu plural+-n):', sentence: 'Florian kommt gerade ____ USA.', translation: 'Florian vine chiar acum din SUA.', accept: ['aus den'], correct: 'aus den', explanation: 'die USA e plural cu articol → aus DEN USA (+ -n la plural Dativ).' },

    // 4× Materiale + obiecte
    { type: 'multiple', category: '🔨 Materiale', question: 'Der Ring ist ____ Gold.', options: ['aus dem', 'aus', 'von', 'aus der'], correct: 'aus', explanation: 'aus + MATERIAL = fără articol (aus Gold, aus Holz, aus Plastik).' },
    { type: 'luckentext', category: '🔨 Materiale', question: 'Completează (din cuptor — obiect cu articol):', sentence: 'Mihai nimmt das Brot ____ Ofen.', translation: 'Mihai scoate pâinea din cuptor.', accept: ['aus dem'], correct: 'aus dem', explanation: 'aus + interiorul unui obiect = cu articol. der Ofen → aus DEM Ofen.' },
    { type: 'multiple', category: '🔨 Materiale', question: 'Die Tasche ist ____ Leder. (material — piele)', options: ['aus dem', 'aus', 'von', 'aus der'], correct: 'aus', explanation: 'Material (Leder, Gold, Holz, Plastik) = fără articol.' },
    { type: 'luckentext', category: '🔨 Materiale', question: 'Completează (din geantă):', sentence: 'Acar holt sein Buch ____ Tasche.', translation: 'Acar își ia cartea din geantă.', accept: ['aus der'], correct: 'aus der', explanation: 'die Tasche fem → aus DER Tasche (interior obiect cu articol).' },

    // 4× Temporale
    { type: 'multiple', category: '⏰ Temporale', question: '____ drei Jahren wohne ich in Berlin. (durată CONTINUĂ)', options: ['Vor', 'Seit', 'Im', 'Beim'], correct: 'Seit', explanation: 'seit = de când (durată continuă până ACUM). vor ar fi punctual în trecut.' },
    { type: 'luckentext', category: '⏰ Temporale', question: 'Completează (acum 2 săptămâni — punctual):', sentence: 'Andreea ist ____ zwei Wochen nach Berlin gefahren.', translation: 'Andreea a plecat acum 2 săptămâni la Berlin.', accept: ['vor'], correct: 'vor', explanation: 'vor + perioadă = acum X timp în urmă (PUNCTUAL în trecut).' },
    { type: 'multiple', category: '⏰ Temporale', question: 'Florian hat ____ Juli Geburtstag.', options: ['am', 'im', 'beim', 'seit'], correct: 'im', explanation: 'im + lună (im Januar, im Juli, im Dezember). NU am — am e pentru zile.' },
    { type: 'luckentext', category: '⏰ Temporale', question: 'Completează (în timp ce învăț):', sentence: '____ Lernen mache ich Pausen.', translation: 'Când învăț îmi iau pauze.', accept: ['beim'], correct: 'Beim', explanation: 'beim + activitate (das Lernen) = în timp ce învăț.' },

    // 4× Persoane (mit/für/gegen/von)
    { type: 'multiple', category: '👥 Persoane', question: 'Carolina kauft Blumen ____ ihre Mutter. (BENEFICIAR)', options: ['mit', 'für', 'gegen', 'von'], correct: 'für', explanation: 'für + Akk = pentru cineva (BENEFICIAR). für e Akkusativ, NU Dativ!' },
    { type: 'luckentext', category: '👥 Persoane', question: 'Completează (împotriva — sport):', sentence: 'Florian spielt Tennis ____ seinen Bruder.', translation: 'Florian joacă tenis împotriva fratelui lui.', accept: ['gegen'], correct: 'gegen', explanation: 'gegen + Akk = împotriva (sport, conflict). gegen e Akkusativ, NU Dativ!' },
    { type: 'multiple', category: '👥 Persoane', question: 'Andreea fährt nach Italien ____ ihrer Mutter. (PARTENER)', options: ['für', 'gegen', 'mit', 'von'], correct: 'mit', explanation: 'mit + Dat = împreună cu (PARTENER). mit e Dativ.' },
    { type: 'luckentext', category: '👥 Persoane', question: 'Completează (de la persoană, nume propriu):', sentence: 'Das Buch ist ____ Mihai.', translation: 'Cartea e de la Mihai.', accept: ['von'], correct: 'von', explanation: 'von + nume propriu = de la (FĂRĂ articol). „von Mihai", NU „von DEM Mihai".' },

    // 3× Meserie vs companie + sinteză
    { type: 'multiple', category: '💼 Meserie/companie', question: 'Care e CORECT? Florian e medic.', options: ['Florian ist bei Arzt.', 'Florian ist Arzt.', 'Florian ist als Arzt.', 'Florian ist im Arzt.'], correct: 'Florian ist Arzt.', explanation: 'Sein + MESERIE fără bei/als! „Ich bin Arzt", „Ich bin Lehrerin". Doar substantivul.' },
    { type: 'luckentext', category: '💼 Meserie/companie', question: 'Completează (lucrează la — companie):', sentence: 'Acar arbeitet ____ Audi.', translation: 'Acar lucrează la Audi.', accept: ['bei'], correct: 'bei', explanation: 'arbeiten bei + companie = lucrează la firma X. NU „in Audi" sau „für Audi" la sensul ăsta.' },
    { type: 'multiple', category: '💼 Meserie/companie', question: 'Mihai arbeitet ____ Koch. (ca bucătar)', options: ['bei', 'als', 'für', 'mit'], correct: 'als', explanation: 'arbeiten als + meserie = lucrează ca X. „als Koch", „als Lehrer", „als Arzt".' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre cele 12 capcane clasice ale Dativ-ului.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 12-15 minute (Atelier de Aprofundare — capcane)</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true; testCompleted = false; currentQuestionIndex = 0; userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback'; feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => { if (r.value === userAnswers[index].answer) r.checked = true; });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index); checkBtn.disabled = true; setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false; setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false; setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        // 🆕 22 mai 2026 — acceptă atât fragmentul cât și propoziția întreagă
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
        if (!isCorrect && q.sentence) {
            const sentenceClean = q.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
            isCorrect = q.accept.some(a => {
                const full = sentenceClean.replace(/____+/g, a);
                return normalizeTestAnswer(full) === norm;
            });
        }
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) { finishTest(); }
    else { currentQuestionIndex++; showQuestion(currentQuestionIndex); scrollToTest(); }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(currentQuestionIndex); scrollToTest(); }
}

function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k]; const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#5A5147;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none'; r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0; userAnswers = {}; testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0); scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) {
        t.classList.add('active');
        if (a) a.classList.add('rotated');
    }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
