// ============================================
// PDF BUILDER — Atelier de Aprofundare Dativ — Lecția 3: Stolpersteine
// Extrage materia din celelalte JS-uri și o livrează printabil
// Claudia Toth · model PDF după TV1 (commit fb1f150, validat 20 mai 2026)
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        let html = '';
        html += buildTheory();
        html += buildExercises();
        html += buildFlashcards();
        html += buildVerbs();
        root.innerHTML = html;
    }

    // ============================================
    // 1. TEORIE — preia din theoryHTML și curăță elementele interactive
    // ============================================
    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        // FIX BUG 20 mai (regex lacom): anchor precis pe </span>\s*</div> (finalul real al lesson-audio)
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        // Scoate butoanele cu onclick (audio + dialog players)
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        // Înlocuiește header-ele subsecțiunilor cu h2.sub-chapter
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g,
            '<h2 class="sub-chapter">$1</h2>');
        // Elimină wrapper-ele div sub-section / sub-section-content (păstrăm conținutul)
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        // Înlocuiește andreea-note în box de info
        t = t.replace(/<div class="andreea-note"[^>]*>[\s\S]*?<div class="andreea-note-content">/g, '<div class="theory-box info-box"><div>');
        // Scoate imaginile (avatare etc.)
        t = t.replace(/<img[^>]*>/g, '');
        // Convertește dialog-box și dialog-bubble la dialog-line minimalist
        t = t.replace(/<div class="dialog-box">/g, '<div>');
        t = t.replace(/<div class="dialog-line">/g, '<div class="dialog-line">');
        t = t.replace(/<div class="dialog-bubble"[^>]*>/g, '<div>');
        t = t.replace(/<div class="dialog-speaker">/g, '<div class="speaker">');
        t = t.replace(/<div class="dialog-text">/g, '<div>');
        t = t.replace(/<span class="translation">/g, '<div class="ro">');
        t = t.replace(/<\/span>\s*<\/div>\s*<\/div>\s*<\/div>(?=\s*<div class="dialog-line"|\s*<\/div>)/g, '</div></div></div></div>');
        // grammar-table → table (deja gestionat de CSS)
        t = t.replace(/<table class="grammar-table">/g, '<table>');
        // Clean misc inline styles pentru consistență
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#d1fae5[^"]*"[^>]*>/g, '<div class="theory-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#ecfdf5[^"]*"[^>]*>/g, '<div class="theory-box">');
        t = t.replace(/<div class="theory-box"\s+style="margin:[^"]*"[^>]*>/g, '<div class="theory-box">');
        return `<h1 class="chapter">📘 1. Teorie — Stolpersteine (toate capcanele clasice ale Dativ-ului)</h1>` + t;
    }

    // ============================================
    // 2. EXERCIȚII — toate 7 cu rezolvări (banner verde)
    // ============================================
    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>
            <p style="margin-bottom: 10px; color: #6b7280; font-style: italic;">7 exerciții × 10 itemi = <strong>70 itemi de practică</strong>. Pentru fiecare exercițiu, întâi citește instrucțiunea, încearcă pe cont propriu, apoi verifică rezolvările.</p>`;

        const exercises = [
            { num: 1, title: 'Übung 1 — 🏠 Capcanele cu Hause + persoane + bei + activitate', instr: 'nach Hause = MIȘCARE · zu Hause = POZIȚIE · bei + persoană = la cineva · beim + Verb-Nomen = în timp ce.', data: typeof ex1Data !== 'undefined' ? ex1Data : [] },
            { num: 2, title: 'Übung 2 — 🌍 Țări fără/cu articol (aus/nach/in)', instr: 'Țări fără articol: nach/aus + țară direct (nach Berlin, aus Italien). Țări cu articol: aus DER/DEN, in DIE (Akk!).', data: typeof ex2Data !== 'undefined' ? ex2Data : [] },
            { num: 3, title: 'Übung 3 — 🔨 aus material vs interior obiect', instr: 'aus + MATERIAL = fără articol (aus Gold). aus + INTERIOR obiect = cu articol (aus dem Ofen).', data: typeof ex3Data !== 'undefined' ? ex3Data : [] },
            { num: 4, title: 'Übung 4 — ⏰ Capcanele temporale Dativ', instr: 'seit = durată CONTINUĂ · vor = punct trecut · im = lună/anotimp · beim + Verb-Nomen = în timp ce.', data: typeof ex4Data !== 'undefined' ? ex4Data : [] },
            { num: 5, title: 'Übung 5 — 👥 mit/für/gegen/von cu persoane', instr: 'mit + Dat = partener · für + Akk = beneficiar · gegen + Akk = adversar · von + Dat = de la persoană.', data: typeof ex5Data !== 'undefined' ? ex5Data : [] },
            { num: 6, title: 'Übung 6 — 💼 Meserie vs companie', instr: 'Sein + meserie (fără bei!) · arbeiten bei + companie · arbeiten als + meserie · zum/beim Arzt.', data: typeof ex6Data !== 'undefined' ? ex6Data : [] },
            { num: 7, title: 'Übung 7 — 🎬 Dialog 6 personaje (sinteză masivă toate capcanele)', instr: 'Fiecare propoziție testează O CAPCANĂ specifică din cele 12.', data: typeof ex7Data !== 'undefined' ? ex7Data : [] }
        ];

        exercises.forEach(ex => {
            html += `<div class="ex-block">
                <h3>${ex.title}</h3>
                <div class="instruction">${ex.instr}</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex.data.forEach((it, i) => {
                const sentence = it.sentence.replace(/____/g, '<strong style="color:#047857;">' + it.correct + '</strong>');
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${sentence}</div>
                        <div class="ex-a">${it.correct}</div>
                        <div class="ex-tr">💬 ${it.translation}</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        });

        return html;
    }

    // ============================================
    // 3. FLASHCARDS — listă completă DE | RO în 2 coloane
    // ============================================
    function buildFlashcards() {
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom: 14px;">Cele <strong>${typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0} carduri</strong> ale lecției, grupate pe teme. Folosește ca dicționar de referință.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    // ============================================
    // 4. VERB-KONJUGATION — 9 verbe complete
    // ============================================
    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verb-Konjugation — 4 verbe cu capcane Dativ</h1>
            <div class="theory-box warn-box">
                <p><strong>📌 Cele 4 verbe cu capcane Dativ:</strong> dauern (+Akk pentru durată, NU Dativ!) · sich treffen (reflexiv Akk + mit Dat) · gehören (+Dat direct, fără prepoziție) · gefallen (+Dat direct, tare e→ä). Toate verificate PONS.</p>
            </div>`;

        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                const isStrong = v.typ.indexOf('tare') === 0;
                const typeBadge = isStrong
                    ? '<span class="badge strong">TARE (neregulat)</span>'
                    : '<span class="badge weak">REGULAT</span>';
                const auxBadge = v.aux === 'sein'
                    ? '<span class="badge sein">Perfekt + sein</span>'
                    : '<span class="badge haben">Perfekt + haben</span>';

                html += `<div class="verb-card">
                    <div class="vh">
                        <span class="name">${idx + 1}. ${v.inf}</span>
                        <span class="ro">— ${v.ro}</span>
                        ${typeBadge}
                        ${auxBadge}
                    </div>

                    <h5>Präsens</h5>
                    <table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>

                    <h5>Präteritum (imperfect / mai mult ca perfect — RO: imperfect)</h5>
                    <table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praet.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>

                    <h5>Perfekt (timp vorbit)</h5>
                    <div class="perfekt-box">
                        <div class="de">Auxiliar <strong>${v.aux}</strong> + participiu <strong>${v.part}</strong></div>
                        <div class="de" style="margin-top: 3px;">Exemplu: ${v.perf[2][0]} <strong>${v.perf[2][1]}</strong></div>
                        <div class="ro">${v.perf[2][2]}</div>
                    </div>

                    <div class="note"><strong>📌 Notă:</strong> ${v.note}</div>
                </div>`;
            });
        }

        html += `<div class="theory-box">
            <h4>🎯 Cele 12 Stolpersteine ale Dativ-ului</h4>
            <ol>
                <li><strong>nach Hause</strong> (mișcare) vs <strong>zu Hause</strong> (poziție) — fără articol</li>
                <li><strong>bei + persoană</strong> (poziție) vs <strong>zu + persoană</strong> (mișcare)</li>
                <li><strong>bei + activitate</strong> (beim Essen, beim Lesen) = în timp ce</li>
                <li><strong>aus + țară fără articol</strong> (aus Italien) vs <strong>aus DER Türkei</strong> (cu articol — excepții)</li>
                <li><strong>nach + țară fără articol</strong> (nach Berlin) vs <strong>in DIE Schweiz</strong> (Akk! pentru țări cu articol)</li>
                <li><strong>aus + material</strong> (aus Gold) — fără articol vs <strong>aus DEM Ofen</strong> (interior obiect cu articol)</li>
                <li><strong>seit + Dativ</strong> = durată continuă (NU vârstă!)</li>
                <li><strong>vor + Dativ</strong> = acum X timp în trecut (punctual)</li>
                <li><strong>im + lună/anotimp</strong> (im Juli, im Sommer)</li>
                <li><strong>mit + Dat</strong> partener · <strong>für + Akk</strong> beneficiar · <strong>gegen + Akk</strong> adversar</li>
                <li><strong>von + nume propriu</strong> fără articol (von Mihai) vs <strong>von DER Lehrerin</strong> (rol cu articol)</li>
                <li><strong>Sein + meserie</strong> fără bei! · <strong>arbeiten bei + companie</strong> · <strong>arbeiten als + meserie</strong></li>
            </ol>
        </div>`;

        return html;
    }
})();
