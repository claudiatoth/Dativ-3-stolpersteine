// ============================================
// TEORIE - Atelier de Aprofundare Dativ — Lecția 3:
// Stolpersteine — toate capcanele clasice ale Dativ-ului
// Claudia Toth · Annettes Deutschkurs
// REGULĂ: NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + ce e Stolperstein + diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🪨 1. Stolpersteine — ce sunt și de ce contează</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-stolpersteine-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ss</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ß</code></li>
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ae/oe/ue</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ä/ö/ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Diacriticele RO le accept și cu, și fără."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🪨 Ce e o Stolperstein?</h4>
                <p>În germană, <strong>Stolperstein</strong> înseamnă literal „<em>piatră de poticnire</em>" (Stolper = a se poticni · Stein = piatră). Sunt acele <strong>capcane mărunte</strong> în care orice cursant se împiedică — chiar și după ani de germană.</p>
                <p style="margin-top: 8px;">La Atelier #1 ai stăpânit Wechselpräpositionen, la #2 cele 7 fixe Dativ + Woher. <strong>Aici concentrăm tot pe CAPCANE</strong> — 15+ situații în care 9 din 10 români greșesc. Lecția asta NU introduce gramatică nouă, ci <strong>aprofundează capcanele</strong> deja întâlnite + adaugă altele clasice.</p>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Cele 5 grupe de capcane</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>Capcane cu Hause + persoane</strong> — nach/zu Hause · bei vs zu cu cineva · bei + activitate (beim Essen)</li>
                    <li><strong>Capcane țări + orașe + materiale</strong> — aus/nach Berlin vs aus DER Türkei · aus + material fără articol</li>
                    <li><strong>Capcane temporale</strong> — seit · vor · in (Wechselpräp cu Dat) · bei + activitate</li>
                    <li><strong>Capcane cu persoane</strong> — von + nume vs von + rol · mit (partener) vs für (beneficiar) vs gegen (adversar)</li>
                    <li><strong>Capcane cu articole</strong> — când contractăm (zum/zur/beim/vom), când NU (bei der, von der)</li>
                </ol>
                <p style="margin-top: 8px;">📌 La fiecare grupă: 3-4 capcane principale, cu exemplu concret și „RAU vs BUN".</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„La început și eu greșeam tot timpul: „<em>Ich gehe zu Hause</em>" (greșit!) când voiam să spun „merg acasă". E vorba de <strong>direcție vs poziție</strong>. Sau spuneam „<em>aus die Türkei</em>" (greșit!) pentru că în română „din Turcia" nu cere articol. Lecția asta îți arată CAPCANELE — și-ți rezolvă confuziile. 🦋"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 1: Capcane Hause + persoane -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🏠 2. Capcanele cu Hause + persoane</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-hause-persoane.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 1: nach Hause vs zu Hause</h4>
                <p>Cea mai clasică capcană pentru începători. AMBELE = „acasă", DAR:</p>
                <table class="grammar-table">
                    <tr><th>Forma</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>nach Hause</strong></td><td>MIȘCARE — merg ACASĂ</td><td>Ich gehe nach Hause.</td><td><em style="color:#5A5147;">Merg acasă. (mă deplasez)</em></td></tr>
                    <tr><td><strong>zu Hause</strong></td><td>POZIȚIE — sunt ACASĂ</td><td>Ich bin zu Hause.</td><td><em style="color:#5A5147;">Sunt acasă. (deja acolo)</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 AMBELE expresii FIXE — fără articol! NU spui „<em>zu DEM Hause</em>" (greșit) sau „<em>nach DEM Hause</em>" (greșit).</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 2: bei + persoană (POZIȚIE) vs zu + persoană (MIȘCARE)</h4>
                <p>Same regulă mișcare/poziție — dar cu PERSOANE. AMBELE cer Dativ.</p>
                <table class="grammar-table">
                    <tr><th>Forma</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>bei + persoană</strong></td><td>POZIȚIE — la cineva (deja acolo)</td><td>Carolina ist bei ihrer Mutter.</td><td><em style="color:#5A5147;">Carolina e la mama. (deja acolo)</em></td></tr>
                    <tr><td><strong>zu + persoană</strong></td><td>MIȘCARE — la cineva (te duci)</td><td>Carolina geht zu ihrer Mutter.</td><td><em style="color:#5A5147;">Carolina merge la mama.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 La Carolina = STARE. La cineva = ACȚIUNE.</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🆕 🚨 Capcana 3: bei + activitate (gerund) — beim Essen, beim Lesen</h4>
                <p>O construcție tipic germană: <strong>bei + activitate substantivizată</strong> = „în timp ce". Activitatea devine substantiv (cu majusculă), Dativ obligatoriu:</p>
                <table class="grammar-table">
                    <tr><th>Activitate verb</th><th>Substantivizată bei + Dat</th><th>Traducere RO</th></tr>
                    <tr><td>essen</td><td><strong>beim</strong> Essen</td><td><em style="color:#5A5147;">în timp ce mănânc / la masă</em></td></tr>
                    <tr><td>lesen</td><td><strong>beim</strong> Lesen</td><td><em style="color:#5A5147;">în timp ce citesc</em></td></tr>
                    <tr><td>arbeiten</td><td><strong>bei der</strong> Arbeit</td><td><em style="color:#5A5147;">la lucru / în timp ce lucrez</em></td></tr>
                    <tr><td>kochen</td><td><strong>beim</strong> Kochen</td><td><em style="color:#5A5147;">în timp ce gătesc</em></td></tr>
                    <tr><td>schlafen</td><td><strong>beim</strong> Schlafen</td><td><em style="color:#5A5147;">în timp ce dorm</em></td></tr>
                </table>
                <p style="margin-top: 8px;">Exemplu: <em>Beim Essen sprechen wir nicht.</em> = În timp ce mâncăm nu vorbim. · <em>Mihai liest beim Frühstück.</em> = Mihai citește la micul dejun.</p>
            </div>
        </div>
    </div>

    <!-- 2: Capcane țări + orașe + materiale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🌍 3. Capcanele cu țări + orașe + materiale</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-tari-materiale.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 4: aus + țară — FĂRĂ articol vs CU articol</h4>
                <p>Majoritatea țărilor sunt fără articol în germană → <strong>aus + țară</strong> direct, fără articol. DAR există un grup mic cu articol obligatoriu:</p>
                <table class="grammar-table">
                    <tr><th>Țări FĂRĂ articol (majoritatea)</th><th>Țări CU articol (excepții)</th><th>Traducere RO</th></tr>
                    <tr><td>aus Deutschland</td><td>aus <strong>der</strong> Türkei (fem)</td><td><em style="color:#5A5147;">din Germania · din Turcia</em></td></tr>
                    <tr><td>aus Rumänien</td><td>aus <strong>der</strong> Schweiz (fem)</td><td><em style="color:#5A5147;">din România · din Elveția</em></td></tr>
                    <tr><td>aus Frankreich</td><td>aus <strong>der</strong> Ukraine (fem)</td><td><em style="color:#5A5147;">din Franța · din Ucraina</em></td></tr>
                    <tr><td>aus Italien</td><td>aus <strong>den</strong> USA (plural +-n!)</td><td><em style="color:#5A5147;">din Italia · din SUA</em></td></tr>
                    <tr><td>aus Spanien</td><td>aus <strong>den</strong> Niederlanden (plural)</td><td><em style="color:#5A5147;">din Spania · din Olanda</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 Truc: dacă țara are <strong>articol în Nominativ</strong> (die Türkei, die Schweiz, das Frankreich nu există, dar die USA pluralul), atunci articolul rămâne la Dativ. Trebuie memorate țările-excepție.</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 5: nach + țară/oraș (FĂRĂ articol) vs in + țară (CU articol — pentru excepții)</h4>
                <p>Pentru destinație (Wohin?) cu țări fără articol → folosești <strong>nach</strong>. Cu țări cu articol → folosești <strong>in + Akkusativ</strong> (Wechselpräp Wohin)!</p>
                <table class="grammar-table">
                    <tr><th>Țară fără articol (nach)</th><th>Țară cu articol (in + Akk)</th><th>Traducere RO</th></tr>
                    <tr><td>nach Deutschland</td><td>in <strong>die</strong> Türkei</td><td><em style="color:#5A5147;">în Germania · în Turcia</em></td></tr>
                    <tr><td>nach Berlin</td><td>in <strong>die</strong> Schweiz</td><td><em style="color:#5A5147;">la Berlin · în Elveția</em></td></tr>
                    <tr><td>nach Italien</td><td>in <strong>die</strong> USA</td><td><em style="color:#5A5147;">în Italia · în SUA</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 ATENȚIE: aici <strong>in + țară cu articol = Akkusativ</strong> (mișcare spre = Wohin = Akk, recap Atelier #1). NU Dativ!</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 6: aus + material (FĂRĂ articol)</h4>
                <p>Pentru materialul din care e făcut ceva → <strong>aus + material fără articol</strong>:</p>
                <table class="grammar-table">
                    <tr><th>Construcție</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td>aus + metal</td><td>Der Ring ist <strong>aus</strong> Gold.</td><td><em style="color:#5A5147;">Inelul e din aur.</em></td></tr>
                    <tr><td>aus + lemn</td><td>Der Tisch ist <strong>aus</strong> Holz.</td><td><em style="color:#5A5147;">Masa e din lemn.</em></td></tr>
                    <tr><td>aus + plastic</td><td>Die Flasche ist <strong>aus</strong> Plastik.</td><td><em style="color:#5A5147;">Sticla e din plastic.</em></td></tr>
                    <tr><td>aus + țesătură</td><td>Das Hemd ist <strong>aus</strong> Baumwolle.</td><td><em style="color:#5A5147;">Cămașa e din bumbac.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 NU spui „<em>aus DEM Gold</em>" sau „<em>aus DEM Holz</em>" — materialul rămâne fără articol când vorbim de ce e făcut un obiect.</p>
            </div>
        </div>
    </div>

    <!-- 3: Capcane temporale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⏰ 4. Capcanele temporale — seit / vor / bei / in</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-temporale.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 7: seit (de când, continuă) — Dativ obligatoriu</h4>
                <p><strong>seit + Dativ</strong> înseamnă „de când" — o acțiune care a început în trecut și CONTINUĂ până ACUM:</p>
                <table class="grammar-table">
                    <tr><th>Construcție</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td>seit + perioadă (Dat)</td><td>Mihai wohnt <strong>seit drei Jahren</strong> in Berlin.</td><td><em style="color:#5A5147;">Mihai locuiește de 3 ani în Berlin. (continuă!)</em></td></tr>
                    <tr><td>seit + dată</td><td>Andreea studiert <strong>seit September</strong> in Berlin.</td><td><em style="color:#5A5147;">Andreea studiază din septembrie.</em></td></tr>
                    <tr><td>seit + eveniment</td><td>Florian arbeitet <strong>seit dem Urlaub</strong>.</td><td><em style="color:#5A5147;">Florian lucrează de la concediu.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">⚠️ NU spui „<em>seit 5 Jahren</em>" pentru vârstă — vârsta e „<em>Ich bin 5 Jahre alt</em>".</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 8: vor + Dativ (acum X timp, în trecut)</h4>
                <p><strong>vor + Dativ</strong> înseamnă „acum X timp în urmă" — moment punctual în trecut (NU continuă!):</p>
                <table class="grammar-table">
                    <tr><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td>Andreea ist <strong>vor zwei Wochen</strong> nach Berlin gefahren.</td><td><em style="color:#5A5147;">Andreea a plecat la Berlin acum două săptămâni.</em></td></tr>
                    <tr><td>Wir haben uns <strong>vor einem Jahr</strong> kennengelernt.</td><td><em style="color:#5A5147;">Ne-am cunoscut acum un an.</em></td></tr>
                    <tr><td><strong>Vor drei Tagen</strong> hat es geregnet.</td><td><em style="color:#5A5147;">Acum trei zile a plouat.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">⚠️ Capcană: <em>vor</em> e și Wechselpräp pentru POZIȚIE spațială (vor der Tür = în fața ușii). Aici e folosire TEMPORALĂ — context decide.</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 9: in + lună/anotimp (Wechselpräp în Dativ — POZIȚIE temporală)</h4>
                <p><strong>in + Dativ</strong> pentru lună/anotimp = „în luna X / în anotimpul X":</p>
                <table class="grammar-table">
                    <tr><th>Construcție</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td>im + lună (masculin)</td><td><strong>im</strong> Januar / <strong>im</strong> Juli</td><td><em style="color:#5A5147;">în ianuarie · în iulie</em></td></tr>
                    <tr><td>im + anotimp (masculin)</td><td><strong>im</strong> Sommer / <strong>im</strong> Winter</td><td><em style="color:#5A5147;">vara · iarna</em></td></tr>
                    <tr><td>in + plural (decenii)</td><td>in <strong>den</strong> Neunziger<strong>n</strong></td><td><em style="color:#5A5147;">în anii '90</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 NU confundați cu <strong>am + zi</strong> (am Montag = lunea) — recap Lecția 13 A1.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🦋 Sinteză temporale Dativ</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>seit</strong> = continuu de când (durată până acum)</li>
                    <li><strong>vor</strong> = acum X timp în urmă (punctual în trecut)</li>
                    <li><strong>im / in</strong> = în luna/anotimpul/anul</li>
                    <li><strong>bei + activitate</strong> = în timp ce (beim Essen)</li>
                </ul>
                <p style="margin-top: 8px;">Toate cer Dativ. NU confunda cu Akkusativ-temporal („<em>jeden Tag</em>" cu Akk).</p>
            </div>
        </div>
    </div>

    <!-- 4: Capcane cu persoane -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>👥 5. Capcanele cu persoane — mit · für · gegen · von</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-persoane.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 10: mit (partener) vs für (beneficiar) vs gegen (adversar)</h4>
                <p>Trei prepoziții diferite — trei roluri diferite. Atenție: <strong>für și gegen cer AKKUSATIV</strong>, NU Dativ! Le includem aici pentru contrast.</p>
                <table class="grammar-table">
                    <tr><th>Prepoziție</th><th>Rol</th><th>Caz</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>mit</strong></td><td>PARTENER (împreună cu)</td><td>Dativ</td><td>Andreea spielt <strong>mit ihrem</strong> Bruder.</td><td><em style="color:#5A5147;">Andreea se joacă cu fratele ei. (împreună)</em></td></tr>
                    <tr><td><strong>für</strong></td><td>BENEFICIAR (pentru)</td><td>Akk</td><td>Carolina kauft Blumen <strong>für ihren</strong> Vater.</td><td><em style="color:#5A5147;">Carolina cumpără flori pentru tatăl ei.</em></td></tr>
                    <tr><td><strong>gegen</strong></td><td>ADVERSAR (împotriva)</td><td>Akk</td><td>Florian spielt Tennis <strong>gegen seinen</strong> Bruder.</td><td><em style="color:#5A5147;">Florian joacă tenis împotriva fratelui lui.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 La sport: <strong>mit + partener de echipă</strong> · <strong>gegen + echipa adversă</strong>. Same lecție: Spielen MIT der Mannschaft GEGEN die Gegner.</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 11: von + nume propriu (FĂRĂ articol) vs von + rol (CU articol)</h4>
                <table class="grammar-table">
                    <tr><th>Folosire</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>von + nume propriu</strong> (fără articol)</td><td>Das Buch ist <strong>von</strong> Mihai.</td><td><em style="color:#5A5147;">Cartea e de la Mihai. (sau a lui Mihai)</em></td></tr>
                    <tr><td><strong>von + rol/profesie</strong> (cu articol)</td><td>Das Buch ist <strong>von der</strong> Lehrerin.</td><td><em style="color:#5A5147;">Cartea e de la profesoară.</em></td></tr>
                    <tr><td><strong>von + posesie</strong> (informal Genitiv)</td><td>Das Auto <strong>von</strong> Acar = Acars Auto</td><td><em style="color:#5A5147;">Mașina lui Acar.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 NU spui „<em>von DER Andreea</em>" la limbă standard — doar la dialecte colocviale.</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🚨 Capcana 12: bei + meserie vs bei + companie</h4>
                <table class="grammar-table">
                    <tr><th>Folosire</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>Sein + meserie</strong> (fără bei!)</td><td>Florian ist <strong>Arzt</strong>.</td><td><em style="color:#5A5147;">Florian e medic. (profesia)</em></td></tr>
                    <tr><td><strong>arbeiten bei + companie</strong></td><td>Acar arbeitet <strong>bei Audi</strong>.</td><td><em style="color:#5A5147;">Acar lucrează la Audi. (angajator)</em></td></tr>
                    <tr><td><strong>arbeiten als + meserie</strong></td><td>Mihai arbeitet <strong>als Koch</strong>.</td><td><em style="color:#5A5147;">Mihai lucrează ca bucătar.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 NU spui „<em>Ich bin bei Arzt</em>" (greșit) → Ich BIN Arzt (sunt medic) sau Ich GEHE zum Arzt (merg la doctor).</p>
            </div>
        </div>
    </div>

    <!-- 5: Sinteză + dialog 6 personaje -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🎬 6. Sinteză + dialog 6 personaje (toate capcanele în context)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-sinteza-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🦋 Cele 6 personaje, fiecare cu o capcană în context real</h4>
                <p>Annette le-a cerut elevilor să spună ceva natural — fiecare a evitat o capcană clasică. Vezi cum funcționează:</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai (Capcana 1+3: nach Hause + bei + activitate)</div>
                        <div class="dialog-text"><strong>Beim Kochen</strong> höre ich Musik. Wenn ich fertig bin, fahre ich <strong>nach Hause</strong>.
                            <span class="translation">Când gătesc ascult muzică. Când termin, merg acasă. (Beim Kochen = în timp ce gătesc · nach Hause = mișcare)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea (Capcana 7+8: seit vs vor)</div>
                        <div class="dialog-text">Ich wohne <strong>seit drei Jahren</strong> in Berlin. Ich bin <strong>vor drei Jahren</strong> aus Rumänien gekommen.
                            <span class="translation">Locuiesc de 3 ani în Berlin. Am venit acum 3 ani din România. (seit = continuă · vor = punct în trecut)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian (Capcana 12: meserie vs companie)</div>
                        <div class="dialog-text">Ich <strong>bin Arzt</strong> und arbeite <strong>bei der Charité</strong>. Heute Abend gehe ich <strong>zu meiner</strong> Schwester.
                            <span class="translation">Sunt medic și lucrez la Charité. Diseară merg la sora mea. (bin Arzt fără bei · bei der Charité = companie · zu meiner Schwester = mișcare)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina (Capcana 4+5: țări + materiale)</div>
                        <div class="dialog-text">Ich komme <strong>aus Italien</strong>, aber meine Mutter ist <strong>aus der Schweiz</strong>. Wir fahren oft <strong>in die Schweiz</strong>. Ihr Ring ist <strong>aus</strong> Gold.
                            <span class="translation">Sunt din Italia, dar mama e din Elveția. Mergem des în Elveția. Inelul ei e din aur. (aus Italien fără art · aus der Schweiz cu art · in die Schweiz = Akk pentru țară cu articol · aus Gold material fără art)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar (Capcana 10: mit vs gegen)</div>
                        <div class="dialog-text">Heute spiele ich Fußball <strong>mit meinen</strong> Kollegen <strong>gegen die</strong> andere Mannschaft.
                            <span class="translation">Azi joc fotbal cu colegii mei împotriva celeilalte echipe. (mit + Dat = partener · gegen + Akk = adversar)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette (profesoara)</div>
                        <div class="dialog-text">Bravo! Acum aveți toate capcanele clasice. <strong>Beim Üben</strong> evitați greșelile — și veți vorbi natural. 🦋
                            <span class="translation">Bravo! Acum aveți toate capcanele clasice. În timp ce exersați evitați greșelile — și veți vorbi natural.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Cele 5 reguli de aur ale lecției</h4>
                <ol style="margin-left: 18px;">
                    <li>🏠 <strong>nach Hause</strong> (mișcare) vs <strong>zu Hause</strong> (poziție) — fără articol · <strong>bei + activitate</strong> = în timp ce</li>
                    <li>🌍 <strong>aus + țară</strong>: fără articol pentru cele mai multe (aus Italien) · CU articol pentru excepții (die Türkei, die Schweiz, die USA + -n) · <strong>aus + material</strong> mereu fără articol</li>
                    <li>⏰ <strong>seit</strong> = continuă · <strong>vor</strong> = punct trecut · <strong>im + lună/anotimp</strong> · NU pentru vârstă!</li>
                    <li>👥 <strong>mit</strong> + Dat (partener) · <strong>für</strong> + Akk (beneficiar) · <strong>gegen</strong> + Akk (adversar) · <strong>von + nume propriu</strong> fără articol</li>
                    <li>💼 <strong>Sein + meserie</strong> (fără bei!) · <strong>arbeiten bei + companie</strong> · <strong>arbeiten als + meserie</strong></li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Cu cele 12 Stolpersteine din această lecție, eviți 90% din greșelile clasice ale românilor la Dativ. 🪨🦋</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}
