// ============================================
// VERB-KONJUGATION - Atelier de Aprofundare Dativ — Lecția 3: Stolpersteine
// Claudia Toth · 4 verbe utile pentru capcanele Dativ-ului
// dauern (NEW, slab, +Akk durată!) · sich treffen (NEW, tare, +mit+Dat) ·
// gehören (recap L14, slab, +Dat direct) · gefallen (recap L14, tare, +Dat direct)
// Toate verificate PONS · REGULĂ: NU ghilimele interne!
// ============================================

const verbsData = [
    {
        inf: 'dauern', ro: 'a dura · 🚨 + Akkusativ pentru durată (NU Dativ!)', typ: 'slab / regulat', aux: 'haben', part: 'gedauert',
        praes: [['ich','dauere','durez'],['du','dauerst','durezi'],['er/sie/es','dauert','durează'],['wir','dauern','durăm'],['ihr','dauert','durați'],['sie/Sie','dauern','durează']],
        praet: [['ich','dauerte','duram'],['du','dauertest','durai'],['er/sie/es','dauerte','dura'],['wir','dauerten','duram'],['ihr','dauertet','durați'],['sie/Sie','dauerten','durau']],
        perf: [['ich','habe gedauert','am durat'],['du','hast gedauert','ai durat'],['er/sie/es','hat gedauert','a durat'],['wir','haben gedauert','am durat'],['ihr','habt gedauert','ați durat'],['sie/Sie','haben gedauert','au durat']],
        note: '🚨 CAPCANĂ: dauern + Akkusativ pentru durată! „Es dauert DREI Stunden" (Akk, NU „drei Stunden" cu Dativ). NU confunda cu seit + Dativ („seit drei Stunden" = de 3 ore continuu). dauern = durata totală a acțiunii · seit = momentul de start. Verificat PONS.'
    },
    {
        inf: 'sich treffen', ro: 'a se întâlni · sich + mit + Dativ', typ: 'tare / neregulat (reflexiv)', aux: 'haben', part: 'getroffen',
        praes: [['ich','treffe mich','mă întâlnesc'],['du','triffst dich','te întâlnești'],['er/sie/es','trifft sich','se întâlnește'],['wir','treffen uns','ne întâlnim'],['ihr','trefft euch','vă întâlniți'],['sie/Sie','treffen sich','se întâlnesc']],
        praet: [['ich','traf mich','mă întâlneam'],['du','trafst dich','te întâlneai'],['er/sie/es','traf sich','se întâlnea'],['wir','trafen uns','ne întâlneam'],['ihr','traft euch','vă întâlneați'],['sie/Sie','trafen sich','se întâlneau']],
        perf: [['ich','habe mich getroffen','m-am întâlnit'],['du','hast dich getroffen','te-ai întâlnit'],['er/sie/es','hat sich getroffen','s-a întâlnit'],['wir','haben uns getroffen','ne-am întâlnit'],['ihr','habt euch getroffen','v-ați întâlnit'],['sie/Sie','haben sich getroffen','s-au întâlnit']],
        note: '🚨 TARE: triff-s-t (e→i la pers III/du) · Präteritum traf · Partizip getroffen. REFLEXIV cu Akk (mich/dich/sich) + folosit cu mit + Dativ. Ex: Andreea trifft SICH MIT ihrer Freundin (cu Akk + mit Dat). NU treffen jemandem (Dat direct) — acela e un verb diferit (a întâlni întâmplător). Verificat PONS.'
    },
    {
        inf: 'gehören', ro: 'a aparține · +Dativ direct (fără prepoziție!)', typ: 'slab / regulat', aux: 'haben', part: 'gehört',
        praes: [['ich','gehöre','aparțin'],['du','gehörst','aparții'],['er/sie/es','gehört','aparține'],['wir','gehören','aparținem'],['ihr','gehört','aparțineți'],['sie/Sie','gehören','aparțin']],
        praet: [['ich','gehörte','aparțineam'],['du','gehörtest','aparțineai'],['er/sie/es','gehörte','aparținea'],['wir','gehörten','aparțineam'],['ihr','gehörtet','aparțineați'],['sie/Sie','gehörten','aparțineau']],
        perf: [['ich','habe gehört','am aparținut'],['du','hast gehört','ai aparținut'],['er/sie/es','hat gehört','a aparținut'],['wir','haben gehört','am aparținut'],['ihr','habt gehört','ați aparținut'],['sie/Sie','haben gehört','au aparținut']],
        note: 'Slab/regulat (recap Lecția 14 A1). Construcție cu Dativ DIRECT, fără prepoziție: „Das Buch gehört MIR" (mir = pronume Dativ) sau „Das Buch gehört DEM Vater" (dem = articol Dativ). NU spui „gehören ZU mir" — confundă cu „gehören ZU" care înseamnă „a face parte din" (Das gehört zu meiner Familie). Verificat PONS.'
    },
    {
        inf: 'gefallen', ro: 'a plăcea · +Dativ direct (fără prepoziție!)', typ: 'tare / neregulat (e → ä)', aux: 'haben', part: 'gefallen',
        praes: [['ich','gefalle','plac'],['du','gefällst','placi'],['er/sie/es','gefällt','place'],['wir','gefallen','plăcem'],['ihr','gefallt','plăceți'],['sie/Sie','gefallen','plac']],
        praet: [['ich','gefiel','plăceam'],['du','gefielst','plăceai'],['er/sie/es','gefiel','plăcea'],['wir','gefielen','plăceam'],['ihr','gefielt','plăceați'],['sie/Sie','gefielen','plăceau']],
        perf: [['ich','habe gefallen','am plăcut'],['du','hast gefallen','ai plăcut'],['er/sie/es','hat gefallen','a plăcut'],['wir','haben gefallen','am plăcut'],['ihr','habt gefallen','ați plăcut'],['sie/Sie','haben gefallen','au plăcut']],
        note: 'TARE e → ä la pers II/III: du gefällst, er gefällt. Construcție specială: subiectul e CE place, persoana e la Dativ! „Das Buch GEFÄLLT MIR" (literal: cartea îmi place = lit. cartea place mie). Pattern românesc: place + Dativ exact ca românește! recap Lecția 14 A1. Verificat PONS.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (ich habe, du hast, er hat...) + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe — capcane specifice cu Dativ.</strong> Toate verificate PONS.<br>' +
        'Click pe un verb ca să-i vezi conjugarea + capcana.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Aceste 4 verbe au CAPCANE specifice cu Dativ: <strong>dauern</strong> e capcana centrală (durată = Akkusativ, NU Dativ ca seit!) · <strong>sich treffen</strong> cere reflexiv Akk + mit Dat (combinație rară) · <strong>gehören</strong> și <strong>gefallen</strong> au Dativ DIRECT fără prepoziție — exact ca românește „îmi place" / „îmi aparține". 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
