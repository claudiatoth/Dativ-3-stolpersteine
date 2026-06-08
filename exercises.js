// ============================================
// EXERCIȚII - Atelier de Aprofundare Dativ — Lecția 3: Stolpersteine
// Claudia Toth · 7 exerciții × 10 itemi = 70 itemi (pattern dens)
// Normalizer pattern v2 (AGENTS-README)
// ============================================

function normalizeAnswer(str) {
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

// 🆕 22 mai 2026 — acceptă DOUĂ forme la verificare:
//  1. Fragmentul lipsă: ex. "nach"
//  2. Propoziția întreagă cu răspunsul inclus
// Cursantul scrie cum îi vine natural. Hint-urile din paranteze sunt ignorate.
function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    const sentenceClean = (item.sentence || '').replace(/\s*\([^)]*\)\s*/g, ' ');
    return item.accept.some(a => {
        const full = sentenceClean.replace(/____+/g, a);
        return normalizeAnswer(full) === u;
    });
}

// ============================================
// EX 1: Capcanele cu Hause + persoane + bei + activitate
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Mihai geht ____ Hause. (MIȘCARE)', translation: 'Mihai merge acasă.', correct: 'nach', accept: ['nach'] },
    { id: 'b', sentence: 'Andreea ist ____ Hause. (POZIȚIE)', translation: 'Andreea e acasă.', correct: 'zu', accept: ['zu'] },
    { id: 'c', sentence: 'Carolina ist ____ ihrer Schwester. (POZIȚIE la cineva)', translation: 'Carolina e la sora ei.', correct: 'bei', accept: ['bei'] },
    { id: 'd', sentence: 'Florian fährt ____ seinem Bruder. (MIȘCARE la cineva)', translation: 'Florian merge la fratele lui.', correct: 'zu', accept: ['zu'] },
    { id: 'e', sentence: '____ Essen sprechen wir nicht. (în timp ce mâncăm)', translation: 'În timp ce mâncăm nu vorbim.', correct: 'Beim', accept: ['beim'] },
    { id: 'f', sentence: 'Mihai liest ____ Frühstück. (în timp ce ia micul dejun)', translation: 'Mihai citește la micul dejun.', correct: 'beim', accept: ['beim'] },
    { id: 'g', sentence: 'Carolina arbeitet ____ Arbeit. (POZIȚIE la lucru — fem, NU se contractă!)', translation: 'Carolina lucrează la lucru.', correct: 'bei der', accept: ['bei der'] },
    { id: 'h', sentence: 'Annette war heute ____ ihren Eltern. (POZIȚIE plural)', translation: 'Annette a fost azi la părinții ei.', correct: 'bei', accept: ['bei'] },
    { id: 'i', sentence: '____ Lesen lerne ich neue Wörter. (în timp ce citesc)', translation: 'Când citesc învăț cuvinte noi.', correct: 'Beim', accept: ['beim'] },
    { id: 'j', sentence: 'Acar ist müde. Er möchte ____ Hause gehen. (MIȘCARE)', translation: 'Acar e obosit. Vrea să meargă acasă.', correct: 'nach', accept: ['nach'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🏠 Capcanele cu Hause + persoane + bei + activitate.</strong><br>nach Hause = MIȘCARE · zu Hause = POZIȚIE · bei + persoană = la cineva · beim + Verb-Nomen = în timp ce.<br><em>💡 Toate sunt expresii fixe — atenție la articol (fără pentru Hause; bei der pentru fem).</em></div>';
    ex1Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex1-${it.id}" placeholder="prepoziția..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => { const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 2: Țări — fără articol vs cu articol (aus / nach / in)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Mihai kommt ____ Rumänien. (țară fără articol)', translation: 'Mihai vine din România.', correct: 'aus', accept: ['aus'] },
    { id: 'b', sentence: 'Acar kommt ____ Türkei. (țară cu articol fem — die Türkei)', translation: 'Acar vine din Turcia.', correct: 'aus der', accept: ['aus der'] },
    { id: 'c', sentence: 'Andreea fährt ____ Berlin. (oraș, fără articol, MIȘCARE)', translation: 'Andreea merge la Berlin.', correct: 'nach', accept: ['nach'] },
    { id: 'd', sentence: 'Carolina möchte ____ Schweiz fahren. (țară cu articol fem — MIȘCARE)', translation: 'Carolina vrea să meargă în Elveția.', correct: 'in die', accept: ['in die'] },
    { id: 'e', sentence: 'Florian kommt gerade ____ USA. (plural cu articol + -n!)', translation: 'Florian vine chiar acum din SUA.', correct: 'aus den', accept: ['aus den'] },
    { id: 'f', sentence: 'Annette fährt ____ Italien. (țară fără articol)', translation: 'Annette merge în Italia.', correct: 'nach', accept: ['nach'] },
    { id: 'g', sentence: 'Carolina ist ____ Ukraine geboren. (țară cu articol fem — die Ukraine)', translation: 'Carolina s-a născut în Ucraina.', correct: 'in der', accept: ['in der'] },
    { id: 'h', sentence: 'Mihai will ____ Niederlande fahren. (plural cu articol — die Niederlande)', translation: 'Mihai vrea să meargă în Olanda.', correct: 'in die', accept: ['in die'] },
    { id: 'i', sentence: 'Andreea kommt ____ München. (oraș fără articol)', translation: 'Andreea vine din München.', correct: 'aus', accept: ['aus'] },
    { id: 'j', sentence: 'Acar lebt ____ Deutschland. (țară fără articol — POZIȚIE = in + Dativ)', translation: 'Acar trăiește în Germania.', correct: 'in', accept: ['in'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Capcanele cu țări + orașe.</strong><br>Țări/orașe FĂRĂ articol: <strong>aus + țară</strong> (origine), <strong>nach + țară</strong> (mișcare), <strong>in + țară</strong> (poziție).<br>Țări CU articol (die Türkei, die Schweiz, die USA + -n): <strong>aus der/den</strong>, <strong>in die/in der</strong>.<br><em>💡 Atenție: in + țară cu articol = Akkusativ pentru MIȘCARE!</em></div>';
    ex2Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="prepoziția + articol (dacă e nevoie)..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => { const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 3: aus — material vs interior obiect
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Der Ring ist ____ Gold. (material)', translation: 'Inelul e din aur.', correct: 'aus', accept: ['aus'] },
    { id: 'b', sentence: 'Mihai nimmt das Brot ____ Ofen. (din interiorul obiectului — der Ofen)', translation: 'Mihai scoate pâinea din cuptor.', correct: 'aus dem', accept: ['aus dem'] },
    { id: 'c', sentence: 'Der Tisch ist ____ Holz. (material lemn)', translation: 'Masa e din lemn.', correct: 'aus', accept: ['aus'] },
    { id: 'd', sentence: 'Carolina nimmt das Foto ____ Schublade. (din interior — die Schublade)', translation: 'Carolina scoate poza din sertar.', correct: 'aus der', accept: ['aus der'] },
    { id: 'e', sentence: 'Die Tasse ist ____ Porzellan. (material porțelan)', translation: 'Ceașca e din porțelan.', correct: 'aus', accept: ['aus'] },
    { id: 'f', sentence: 'Andreea kommt ____ Universität. (de la loc — die Universität, fem)', translation: 'Andreea vine de la universitate.', correct: 'von der', accept: ['von der'] },
    { id: 'g', sentence: 'Die Flasche ist ____ Plastik. (material plastic)', translation: 'Sticla e din plastic.', correct: 'aus', accept: ['aus'] },
    { id: 'h', sentence: 'Florian kommt ____ Arbeit. (formă contrasă, masc — der Arbeit greșit, e die Arbeit FEM)', translation: 'Florian vine de la lucru. (atenție: die Arbeit, fem)', correct: 'von der', accept: ['von der'] },
    { id: 'i', sentence: 'Das Hemd ist ____ Baumwolle. (material bumbac)', translation: 'Cămașa e din bumbac.', correct: 'aus', accept: ['aus'] },
    { id: 'j', sentence: 'Acar holt sein Buch ____ Tasche. (din interior — die Tasche)', translation: 'Acar își ia cartea din geantă.', correct: 'aus der', accept: ['aus der'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🔨 aus + material (fără articol) vs aus + obiect (cu articol).</strong><br><strong>aus + material</strong> = fără articol (aus Gold, aus Holz, aus Plastik).<br><strong>aus + interior obiect</strong> = cu articol (aus dem Ofen, aus der Tasche).<br><em>💡 Bonus: von + loc/persoană (von der Arbeit, von der Universität).</em></div>';
    ex3Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex3-${it.id}" placeholder="aus + (articol dacă e nevoie)..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => { const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 4: Capcanele temporale (seit / vor / im / beim)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Mihai wohnt ____ drei Jahren in Berlin. (durată continuă)', translation: 'Mihai locuiește de 3 ani în Berlin.', correct: 'seit', accept: ['seit'] },
    { id: 'b', sentence: 'Andreea ist ____ zwei Wochen nach Berlin gefahren. (punctual în trecut)', translation: 'Andreea a plecat acum 2 săptămâni la Berlin.', correct: 'vor', accept: ['vor'] },
    { id: 'c', sentence: 'Florian hat ____ Sommer Urlaub. (anotimp)', translation: 'Florian are concediu vara.', correct: 'im', accept: ['im'] },
    { id: 'd', sentence: 'Carolina hat ____ Juli Geburtstag. (lună)', translation: 'Carolina are ziua în iulie.', correct: 'im', accept: ['im'] },
    { id: 'e', sentence: '____ Kochen höre ich Musik. (în timp ce gătesc)', translation: 'Când gătesc ascult muzică.', correct: 'Beim', accept: ['beim'] },
    { id: 'f', sentence: 'Acar arbeitet ____ einem Jahr bei Audi. (durată continuă)', translation: 'Acar lucrează de un an la Audi.', correct: 'seit', accept: ['seit'] },
    { id: 'g', sentence: 'Annette war ____ einer Stunde hier. (acum o oră — punctual trecut)', translation: 'Annette a fost aici acum o oră.', correct: 'vor', accept: ['vor'] },
    { id: 'h', sentence: 'Andreea geht oft ____ Winter in den Bergen. (anotimp, masc — im!)', translation: 'Andreea merge des iarna în munți.', correct: 'im', accept: ['im'] },
    { id: 'i', sentence: '____ Lernen mache ich Pausen. (în timp ce învăț)', translation: 'Când învăț îmi iau pauze.', correct: 'Beim', accept: ['beim'] },
    { id: 'j', sentence: 'Mihai war ____ einem Monat in Italien. (acum o lună)', translation: 'Mihai a fost acum o lună în Italia.', correct: 'vor', accept: ['vor'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>⏰ Capcanele temporale Dativ.</strong><br><strong>seit</strong> = durată continuă (de când, până ACUM) · <strong>vor</strong> = acum X timp în trecut (punctual) · <strong>im</strong> = în lună/anotimp · <strong>beim + Verb-Nomen</strong> = în timp ce.<br><em>💡 NU folosi „seit" pentru vârstă (Ich bin 5 Jahre alt).</em></div>';
    ex4Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="prepoziția temporală..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => { const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 5: mit / für / gegen / von (cu persoane)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Andreea spielt Tennis ____ ihrem Bruder. (împreună cu)', translation: 'Andreea joacă tenis cu fratele ei.', correct: 'mit', accept: ['mit'] },
    { id: 'b', sentence: 'Carolina kauft ein Geschenk ____ ihren Vater. (pentru — Akk!)', translation: 'Carolina cumpără un cadou pentru tatăl ei.', correct: 'für', accept: ['für', 'fuer'] },
    { id: 'c', sentence: 'Florian spielt Fußball ____ den Bruder von Acar. (împotriva — Akk!)', translation: 'Florian joacă fotbal împotriva fratelui lui Acar.', correct: 'gegen', accept: ['gegen'] },
    { id: 'd', sentence: 'Das Buch ist ____ Mihai. (de la persoană, nume propriu — fără articol)', translation: 'Cartea e de la Mihai.', correct: 'von', accept: ['von'] },
    { id: 'e', sentence: 'Das Geschenk ist ____ Lehrerin. (de la rol — cu articol fem)', translation: 'Cadoul e de la profesoară.', correct: 'von der', accept: ['von der'] },
    { id: 'f', sentence: 'Andreea fährt nach Italien ____ ihrer Mutter. (împreună cu)', translation: 'Andreea merge în Italia cu mama ei.', correct: 'mit', accept: ['mit'] },
    { id: 'g', sentence: 'Annette backt einen Kuchen ____ die Schüler. (pentru — Akk!)', translation: 'Annette face o prăjitură pentru elevi.', correct: 'für', accept: ['für', 'fuer'] },
    { id: 'h', sentence: 'Acar protestiert ____ die Korruption. (împotriva — Akk!)', translation: 'Acar protestează împotriva corupției.', correct: 'gegen', accept: ['gegen'] },
    { id: 'i', sentence: 'Das Auto ist ____ Acar. (posesie, nume propriu)', translation: 'Mașina e a lui Acar.', correct: 'von', accept: ['von'] },
    { id: 'j', sentence: 'Mihai arbeitet ____ Florian an dem Projekt. (împreună cu, partener)', translation: 'Mihai lucrează cu Florian la proiect.', correct: 'mit', accept: ['mit'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>👥 Capcanele cu persoane: mit · für · gegen · von.</strong><br><strong>mit + Dat</strong> = partener (împreună) · <strong>für + Akk</strong> = beneficiar (pentru) · <strong>gegen + Akk</strong> = adversar (împotriva) · <strong>von + Dat</strong> = de la (nume propriu fără articol).<br><em>💡 für și gegen cer Akkusativ — NU Dativ! Le includem aici pentru contrast.</em></div>';
    ex5Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="prepoziția..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => { const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 6: Meserie vs companie (sein/arbeiten + bei/als)
// ============================================
const ex6Data = [
    { id: 'a', sentence: 'Florian ist ____. (meserie — Arzt FĂRĂ bei/als!)', translation: 'Florian e medic.', correct: 'Arzt', accept: ['arzt'] },
    { id: 'b', sentence: 'Acar arbeitet ____ Audi. (companie — bei + companie)', translation: 'Acar lucrează la Audi.', correct: 'bei', accept: ['bei'] },
    { id: 'c', sentence: 'Mihai arbeitet ____ Koch. (meserie — als + meserie)', translation: 'Mihai lucrează ca bucătar.', correct: 'als', accept: ['als'] },
    { id: 'd', sentence: 'Carolina ist ____. (meserie — Fotografin FĂRĂ bei!)', translation: 'Carolina e fotografă.', correct: 'Fotografin', accept: ['fotografin'] },
    { id: 'e', sentence: 'Andreea arbeitet ____ Studentenwerk. (companie — bei + companie)', translation: 'Andreea lucrează la Studentenwerk.', correct: 'beim', accept: ['beim'] },
    { id: 'f', sentence: 'Florian arbeitet ____ Charité. (companie cu artikel — bei + der Charité)', translation: 'Florian lucrează la Charité.', correct: 'bei der', accept: ['bei der'] },
    { id: 'g', sentence: 'Annette ist ____. (meserie — Lehrerin FĂRĂ bei!)', translation: 'Annette e profesoară.', correct: 'Lehrerin', accept: ['lehrerin'] },
    { id: 'h', sentence: 'Acar arbeitet ____ Vorarbeiter. (meserie — als)', translation: 'Acar lucrează ca șef de echipă.', correct: 'als', accept: ['als'] },
    { id: 'i', sentence: 'Mihai geht ____ Arzt. (la doctor — MIȘCARE, zu+dem=zum)', translation: 'Mihai merge la doctor.', correct: 'zum', accept: ['zum'] },
    { id: 'j', sentence: 'Florian ist ____ Patient. (la doctor — POZIȚIE, bei+dem=beim)', translation: 'Florian e la doctor (ca pacient).', correct: 'beim', accept: ['beim'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>💼 Capcana meserie vs companie.</strong><br><strong>Sein + meserie</strong> (fără bei/als!): „Ich bin Arzt".<br><strong>arbeiten bei + companie</strong>: „bei Audi", „bei der Charité".<br><strong>arbeiten als + meserie</strong>: „als Koch".<br><strong>zum/beim Arzt</strong>: zum = mișcare · beim = poziție.<br><em>💡 NU spui „Ich bin BEI Arzt" — folosești doar „Ich bin Arzt".</em></div>';
    ex6Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex6-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => { const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 7: Dialog 6 personaje — sinteză toate capcanele
// ============================================
const ex7Data = [
    { id: 'a', sentence: 'Mihai: ____ Kochen höre ich Musik. (Capcana 3 — bei + activitate)', translation: 'Când gătesc ascult muzică.', correct: 'Beim', accept: ['beim'] },
    { id: 'b', sentence: 'Mihai: Dann fahre ich ____ Hause. (Capcana 1 — MIȘCARE)', translation: 'Apoi merg acasă.', correct: 'nach', accept: ['nach'] },
    { id: 'c', sentence: 'Andreea: Ich wohne ____ drei Jahren in Berlin. (Capcana 7 — durată continuă)', translation: 'Locuiesc de 3 ani în Berlin.', correct: 'seit', accept: ['seit'] },
    { id: 'd', sentence: 'Andreea: Ich bin ____ drei Jahren ____ Rumänien gekommen. (Capcana 8+4 — punctual trecut + țară fără articol)', translation: 'Am venit acum 3 ani din România.', correct: 'vor / aus', accept: ['vor aus'] },
    { id: 'e', sentence: 'Florian: Ich bin ____. (Capcana 12 — meserie fără bei)', translation: 'Sunt medic.', correct: 'Arzt', accept: ['arzt'] },
    { id: 'f', sentence: 'Carolina: Meine Mutter ist ____ Schweiz. (Capcana 4 — țară cu articol fem)', translation: 'Mama e din Elveția.', correct: 'aus der', accept: ['aus der'] },
    { id: 'g', sentence: 'Carolina: Ihr Ring ist ____ Gold. (Capcana 6 — material fără articol)', translation: 'Inelul ei e din aur.', correct: 'aus', accept: ['aus'] },
    { id: 'h', sentence: 'Acar: Ich spiele heute Fußball ____ meinen Kollegen ____ die andere Mannschaft. (Capcana 10 — mit + Dat partener, gegen + Akk adversar)', translation: 'Joc azi fotbal cu colegii mei împotriva celeilalte echipe.', correct: 'mit / gegen', accept: ['mit gegen'] },
    { id: 'i', sentence: 'Annette: Ich kaufe ein Geschenk ____ Mihai. (Capcana 10 — pentru, Akk)', translation: 'Cumpăr un cadou pentru Mihai.', correct: 'für', accept: ['für', 'fuer'] },
    { id: 'j', sentence: 'Annette: Ich gehe ____ meinem Sohn. (Capcana 2 — MIȘCARE la persoană)', translation: 'Merg la fiul meu.', correct: 'zu', accept: ['zu'] }
];

function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎬 Dialog 6 personaje — sinteză masivă a tuturor capcanelor.</strong><br>Fiecare propoziție testează O CAPCANĂ specifică din cele 12. La itemii cu 2 răspunsuri, scrie cu spațiu (sistemul acceptă și slash/virgulă).<br><em>💡 Aceasta e cea mai grea probă — dacă reușești aici, ești foarte aproape de fluență în Dativ.</em></div>';
    ex7Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex7-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex7-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx7() {
    let correct = 0; const total = ex7Data.length;
    ex7Data.forEach(it => { const inp = document.getElementById(`ex7-${it.id}`); const fb = document.getElementById(`ex7-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
