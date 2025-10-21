// ==========================================
// FITAPP - JavaScript Principal Simplifié
// ==========================================

// ==========================================
// 1. NAVIGATION ACTIVE
// ==========================================
/**
 * Active automatiquement le lien de navigation correspondant à la page actuelle
 */
function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

/**
 * ⬇️ Fait défiler la page de manière douce vers l'élément donné.
 */
function scrollToElement(element) {
    if (element) {
        // On décale de 100px pour éviter la navbar fixe
        window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
}


// ==========================================
// 2. DONNÉES DES EXERCICES (Images)
// ==========================================
const exerciseImages = {
    // Épaules
    "Développé militaire": "img/Le-Developpe-Militaire.gif", "Élévations frontales": "img/elevation-frontale.gif",
    "Élévations latérales": "img/elevation-laterale.gif", "Shrugs": "img/shrugs-avec-halteres.gif",
    // Biceps
    "Curl pupitre barre EZ ": "img/curl-au-pupitre-barre-ez-larry-scott.gif", "Curl marteau": "img/curl-marteau.gif",
    "Curl haltères incliné": "img/curl-haltere-incline.gif", "Curl concentration": "img/curl-concentre.gif",
    // Triceps
    "Barre au front": "img/barre-front.gif", "Extension corde haute": "img/extension-haute.gif",
    "Extension corde arriere": "img/extension-verticale-triceps-poulie-basse.gif", "Dips": "img/dips-triceps.gif",
    "Pompes": "img/pompe-musculation.gif",
    // Pectoraux
    "Développé couché": "img/developpe-couche.gif", "Écarté incliné": "img/dev-incliné.gif",
    "Développé incliné haltères": "img/developpe-incline-halteres-exercice-musculation.gif", "Écarté poulie": "img/ecarte-poulie.gif",
    // Dos
    "Traction": "img/traction-musculation-dos.gif", "Tirage horizontal": "img/tirage-horizontal-poulie.gif",
    "Tirage vertical": "img/tirage-vertical-poitrine.gif", "Rowing barre": "img/rowing-barre.gif",
    "Soulevé de terre": "img/souleve-de-terre-avec-deficit.gif",
    // Abdominaux
    "Relevé de genoux suspendu": "img/releve-de-genoux-suspendu-exercice-musculation.gif", "Planche": "img/planche-abdos.gif",
    // Jambes
    "Squat": "img/squat.gif", "Presse à cuisses": "img/presse-a-cuisses-inclinee.gif",
    "Leg extension": "img/leg-extension.gif", "Fentes avant": "img/fentes-avant-kettlebell.gif"
};

// ==========================================
// 3. DONNÉES DES PROGRAMMES
// ==========================================
const programs = {
    "2days": { title: "Programme 2 Jours - Full Body", description: "Deux séances complètes pour travailler tout le corps", sessions: [
        { day: "Jour 1 - Full Body A", muscle: "Corps Complet", exercises: [{ name: "Squat", sets: "4×8-10" }, { name: "Développé couché", sets: "4×8-10" }, { name: "Rowing barre", sets: "4×8-10" }, { name: "Développé militaire", sets: "3×10-12" }, { name: "Curl pupitre barre EZ ", sets: "3×10-12" }, { name: "Extension corde haute", sets: "3×10-12" }, { name: "Relevé de genoux suspendu", sets: "3×max" }] },
        { day: "Jour 2 - Full Body B", muscle: "Corps Complet", exercises: [{ name: "Soulevé de terre", sets: "4×6-8" }, { name: "Écarté incliné", sets: "4×8-10" }, { name: "Traction", sets: "4×8-10" }, { name: "Élévations frontales", sets: "3×12-15" }, { name: "Curl marteau", sets: "3×10-12" }, { name: "Pompes", sets: "3×max" }, { name: "Planche", sets: "3×30-60s" }] }
    ]},
    "3days": { title: "Programme 3 Jours - Push Pull Legs", description: "Split classique pour une progression optimale", sessions: [
        { day: "Jour 1 - Push", muscle: "Poussée", exercises: [{ name: "Développé couché", sets: "4×8-10" }, { name: "Développé incliné haltères", sets: "4×8-10" }, { name: "Écarté poulie", sets: "3×12-15" }, { name: "Développé militaire", sets: "4×8-10" }, { name: "Élévations latérales", sets: "3×12-15" }, { name: "Barre au front", sets: "3×10-12" }, { name: "Extension corde arriere", sets: "3×12-15" }] },
        { day: "Jour 2 - Pull", muscle: "Traction", exercises: [{ name: "Soulevé de terre", sets: "4×6-8" }, { name: "Traction", sets: "4×8-10" }, { name: "Tirage horizontal", sets: "4×8-10" }, { name: "Tirage vertical", sets: "3×10-12" }, { name: "Shrugs", sets: "3×12-15" }, { name: "Curl pupitre barre EZ ", sets: "4×8-12" }, { name: "Curl marteau", sets: "3×10-12" }] },
        { day: "Jour 3 - Legs", muscle: "Jambes", exercises: [{ name: "Squat", sets: "4×8-10" }, { name: "Presse à cuisses", sets: "4×10-12" }, { name: "Leg extension", sets: "3×12-15" }, { name: "Relevé de genoux suspendu", sets: "3×max" }, { name: "Planche", sets: "3×30-60s" }] }
    ]},
    "4days": { title: "Programme 4 Jours - Upper Lower", description: "Haute fréquence pour chaque groupe musculaire", sessions: [
        { day: "Jour 1 - Upper A", muscle: "Haut du corps", exercises: [{ name: "Développé couché", sets: "4×6-8" }, { name: "Tirage horizontal", sets: "4×6-8" }, { name: "Développé militaire", sets: "3×8-10" }, { name: "Traction", sets: "3×8-10" }, { name: "Écarté poulie", sets: "3×10-12" }, { name: "Curl pupitre barre EZ ", sets: "3×10-12" }, { name: "Extension corde haute", sets: "3×10-12" }] },
        { day: "Jour 2 - Lower A", muscle: "Bas du corps", exercises: [{ name: "Squat", sets: "4×6-8" }, { name: "Soulevé de terre", sets: "4×8-10" }, { name: "Presse à cuisses", sets: "3×10-12" }, { name: "Leg extension", sets: "3×12-15" }, { name: "Relevé de genoux suspendu", sets: "3×max" }] },
        { day: "Jour 3 - Upper B", muscle: "Haut du corps", exercises: [{ name: "Écarté incliné", sets: "4×8-10" }, { name: "Élévations latérales", sets: "3×10-12" }, { name: "Tirage vertical", sets: "3×10-12" }, { name: "Écarté poulie", sets: "3×12-15" }, { name: "Curl marteau", sets: "3×10-12" }, { name: "Dips", sets: "3×8-12" }] },
        { day: "Jour 4 - Lower B", muscle: "Bas du corps", exercises: [{ name: "Squat", sets: "4×8-10" }, { name: "Soulevé de terre", sets: "4×6-8" }, { name: "Presse à cuisses", sets: "3×10-12" }, { name: "Leg extension", sets: "3×12-15" }, { name: "Planche", sets: "3×30-60s" }] }
    ]},
    "5days": { title: "Programme 5 Jours - Split Classique", description: "Volume maximal avec spécialisation par groupe musculaire", sessions: [
        { day: "Jour 1 - Pectoraux", muscle: "Pectoraux", exercises: [{ name: "Développé couché", sets: "4×6-8" }, { name: "Écarté incliné", sets: "4×8-10" }, { name: "Développé incliné haltères", sets: "3×8-10" }, { name: "Écarté poulie", sets: "3×10-12" }, { name: "Pompes", sets: "3×max" }] },
        { day: "Jour 2 - Dos", muscle: "Dos", exercises: [{ name: "Soulevé de terre", sets: "4×5-6" }, { name: "Traction", sets: "4×8-10" }, { name: "Tirage vertical", sets: "4×8-10" }, { name: "Rowing barre", sets: "3×10-12" }, { name: "Tirage horizontal", sets: "3×12-15" }] },
        { day: "Jour 3 - Épaules", muscle: "Épaules", exercises: [{ name: "Développé militaire", sets: "4×6-8" }, { name: "Élévations latérales", sets: "4×12-15" }, { name: "Élévations frontales", sets: "3×10-12" }, { name: "Shrugs", sets: "3×12-15" }] },
        { day: "Jour 4 - Jambes", muscle: "Jambes", exercises: [{ name: "Squat", sets: "5×5" }, { name: "Presse à cuisses", sets: "4×8-10" }, { name: "Leg extension", sets: "4×12-15" }] },
        { day: "Jour 5 - Bras/Abdos", muscle: "Bras & Abdos", exercises: [{ name: "Curl pupitre barre EZ ", sets: "4×8-10" }, { name: "Barre au front", sets: "4×8-10" }, { name: "Curl haltères incliné", sets: "3×12-15" }, { name: "Dips", sets: "3×10-12" }, { name: "Relevé de genoux suspendu", sets: "4×max" }, { name: "Planche", sets: "3×30s/side" }] }
    ]}
};

// ==========================================
// 3.5 DONNÉES DES SÉANCES PAR MUSCLE
// ==========================================
const muscleWorkouts = {
    "2days": { title: "Séance Bras", sessions: [
        { day: "Biceps", muscle: "Biceps", exercises: [{ name: "Curl pupitre barre EZ ", sets: "4×8-10" }, { name: "Curl marteau", sets: "3×10-12" }, { name: "Curl haltères incliné", sets: "3×10-12" }, { name: "Curl concentration", sets: "3×12-15" }] },
        { day: "Triceps", muscle: "Triceps", exercises: [{ name: "Barre au front", sets: "4×8-10" }, { name: "Extension corde haute", sets: "3×10-12" }, { name: "Extension corde arriere", sets: "3×10-12" }, { name: "Dips", sets: "3×8-12" }] }
    ]},
    "3days": { title: "Séance Épaules & Pectoraux", sessions: [
        { day: "Épaules", muscle: "Épaules", exercises: [{ name: "Développé militaire", sets: "4×8-10" }, { name: "Élévations latérales", sets: "4×12-15" }, { name: "Élévations frontales", sets: "3×10-12" }, { name: "Shrugs", sets: "3×12-15" }] },
        { day: "Pectoraux", muscle: "Pectoraux", exercises: [{ name: "Développé couché", sets: "4×8-10" }, { name: "Développé incliné haltères", sets: "4×8-10" }, { name: "Écarté incliné", sets: "4×8-10" }, { name: "Écarté poulie", sets: "3×12-15" }, { name: "Pompes", sets: "3×max" }] }
    ]},
    "4days": { title: "Séance Dos", sessions: [
        { day: "Dos Complet", muscle: "Dos", exercises: [{ name: "Soulevé de terre", sets: "4×6-8" }, { name: "Traction", sets: "4×8-10" }, { name: "Rowing barre", sets: "4×8-10" }, { name: "Tirage vertical", sets: "3×10-12" }, { name: "Tirage horizontal", sets: "3×10-12" }, { name: "Shrugs", sets: "3×12-15" }] }
    ]},
    "5days": { title: "Séance Jambes", sessions: [
        { day: "Jambes Complètes", muscle: "Jambes", exercises: [{ name: "Squat", sets: "4×8-10" }, { name: "Presse à cuisses", sets: "4×10-12" }, { name: "Leg extension", sets: "3×12-15" }, { name: "Fentes avant", sets: "3×12-15" }] }
    ]}
};

// ==========================================
// 4. FONCTIONS PROGRAMMES
// ==========================================

/**
 * 🖼️ Affiche/masque l'image d'un exercice quand on clique sur l'icône.
 */
function toggleExerciseImage(button, exerciseName) {
    const item = button.closest('.exercise-item');
    const statsSpan = item.querySelector('.exercise-stats');
    let imageContainer = item.querySelector('.exercise-image-container');

    // On utilise la variable ORIGINALE : exerciseImages
    const imageUrl = exerciseImages[exerciseName]; 
    if (!imageUrl) {
        alert(`Oups ! Image non trouvée pour : ${exerciseName}`);
        return;
    }

    if (!imageContainer) {
        imageContainer = document.createElement('div');
        imageContainer.classList.add('exercise-image-container');
        item.appendChild(imageContainer);
    }

    const isShowing = button.classList.toggle('active-show');
    
    if (isShowing) {
        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Illustration de ${exerciseName}" class="exercise-preview-img">`;
        imageContainer.style.display = 'flex';
        statsSpan.style.display = 'none';
        button.innerHTML = '<i class="bi bi-x-lg"></i>'; 
    } else {
        imageContainer.style.display = 'none';
        statsSpan.style.display = 'inline';
        button.innerHTML = '<i class="bi bi-image"></i>'; 
    }
}

/**
 * 🔄 FONCTION FUSIONNÉE : Affiche les détails d'un programme OU d'une séance.
 */
function renderSessionDetails(data, isProgram = true) {
    const { title, sessions } = data;
    const programTitle = document.getElementById('program-title');
    const daysContainer = document.getElementById('days-container');
    const programSelection = document.getElementById('program-selection');
    const sessionDetails = document.getElementById('session-details');

    if (!programTitle || !daysContainer || !programSelection || !sessionDetails) return;

    programTitle.textContent = title;
    let daysHtml = '';

    sessions.forEach(session => {
        const icon = isProgram ? 'fa-calendar-day' : 'fa-dumbbell';
        const muscleInfo = isProgram ? `<p class="text-muted">Objectif : ${session.muscle}</p>` : '';

        // Utilisation de .map().join('') pour générer le HTML des exercices (plus court !)
        const exercisesHtml = session.exercises.map(exercise => {
            // On utilise encore la variable exerciseImages ici
            const hasImage = exerciseImages.hasOwnProperty(exercise.name);
            const imageButtonHtml = hasImage ?
                `<button type="button" class="btn btn-sm btn-image-toggle" onclick="toggleExerciseImage(this, '${exercise.name.replace(/'/g, "\\'")}')">
                  <i class="bi bi-image"></i>
                </button>` : '';

            return `
                <div class="exercise-item" data-exercise="${exercise.name}">
                    <span class="exercise-name">${exercise.name}</span>
                    <div class="exercise-right-side">
                        ${imageButtonHtml}
                        <span class="exercise-stats">${exercise.sets}</span>
                    </div>
                </div>
            `;
        }).join('');

        daysHtml += `
            <div class="day-card">
                <h4><i class="fas ${icon} me-2"></i>${session.day}</h4>
                ${muscleInfo}
                <h5><i class="fas fa-fire me-2"></i>Exercices</h5>
                ${exercisesHtml}
            </div>
        `;
    });

    if (isProgram && sessions.length < 7) {
        daysHtml += `
            <div class="rest-note text-center">
                <i class="fas fa-bed me-2"></i> Pense à ta récup !
            </div>
        `;
    }

    daysContainer.innerHTML = daysHtml;
    programSelection.classList.add('d-none');
    sessionDetails.classList.remove('d-none');
    sessionDetails.classList.add('fade-in');
    scrollToElement(sessionDetails);
}

/**
 * Affiche les détails d'un programme (pour programmes.html)
 */
function showProgramDetails(programKey) {
    // On utilise la variable ORIGINALE : programs
    renderSessionDetails(programs[programKey], true); 
}

/**
 * Affiche les exercices par muscle (pour seance.html)
 */
function showMuscleWorkout(muscleKey) {
    // On utilise la variable ORIGINALE : muscleWorkouts
    renderSessionDetails(muscleWorkouts[muscleKey], false); 
}

/**
 * ⬅️ Revenir à la sélection des programmes/séances.
 */
function backToPrograms() {
    const sessionDetails = document.getElementById('session-details');
    const programSelection = document.getElementById('program-selection');

    if (sessionDetails) sessionDetails.classList.add('d-none');
    if (programSelection) programSelection.classList.remove('d-none');
    
    if (programSelection) scrollToElement(programSelection);
}

/**
 * 🚀 Initialise les événements pour une page de type Programme/Séance.
 */
function initProgramOrSeancePage(dataSet, showFn) {
    document.querySelectorAll('.program-card').forEach(card => {
        card.addEventListener('click', () => {
            const key = card.dataset.program;
            if (dataSet[key]) showFn(key);
        });
    });

    // Rendre les fonctions globales pour le HTML
    window.backToPrograms = backToPrograms;
    window.toggleExerciseImage = toggleExerciseImage;
}


// ==========================================
// 6. TRACKER DE PERFORMANCES (PR)
// ==========================================

// Liste des exercices pour le tracker PR (on garde le nom d'origine)
const PR_EXERCISES = [
    { name: "Développé couché", icon: "bi-arrow-bar-up" },
    { name: "Squat", icon: "bi-arrow-down-square" },
    { name: "Soulevé de terre", icon: "bi-box-arrow-up" },
    { name: "Développé militaire", icon: "bi-arrow-up-circle" },
    { name: "Traction", icon: "bi-arrow-up" },
    { name: "Rowing barre", icon: "bi-bar-chart-line" },
    { name: "Développé incliné", icon: "bi-layout-text-window-reverse" },
    { name: "Curl barre", icon: "bi-hand-index-thumb" },
    { name: "Presse inclinée", icon: "bi-arrow-down" },
    { name: "Presse à cuisses", icon: "bi-columns-gap" }
];

// On garde l'état du tracker en mémoire
let prData = []; 
let selectedExercises = [];

/**
 * 🛠️ Crée la grille cliquable des exercices.
 */
function renderExerciseGrid() {
    const grid = document.getElementById('exercise-grid');
    if (!grid) return;

    grid.innerHTML = PR_EXERCISES.map(ex => {
        const isSelected = selectedExercises.includes(ex.name);
        return `
            <div class="exercise-card ${isSelected ? 'selected' : ''}" data-exercise="${ex.name}" onclick="toggleExerciseSelection('${ex.name}')">
                <i class="exercise-icon bi ${ex.icon}"></i>
                <p class="exercise-name">${ex.name}</p>
            </div>
        `;
    }).join('');
}

/**
 * 🖱️ Ajoute/enlève un exercice de la liste du jour.
 */
function toggleExerciseSelection(exerciseName) {
    const card = document.querySelector(`.exercise-card[data-exercise="${exerciseName}"]`);
    
    if (selectedExercises.includes(exerciseName)) {
        selectedExercises = selectedExercises.filter(ex => ex !== exerciseName);
    } else {
        selectedExercises.push(exerciseName);
    }

    card.classList.toggle('selected');
    renderPerformanceBoard();
}

/**
 * 📊 Affiche le tableau de saisie des performances.
 */
function renderPerformanceBoard() {
    const board = document.getElementById('performance-board');
    if (!board) return;

    const today = new Date().toLocaleDateString('fr-FR');
    
    if (selectedExercises.length === 0) {
        board.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-hand-index-thumb"></i>
                <h3>Sélectionne des exercices ci-dessus</h3>
            </div>
        `;
        return;
    }

    const prItemsHtml = selectedExercises.map(ex => {
        const existingPR = prData.find(pr => pr.exercise === ex && pr.date === today);
        const icon = PR_EXERCISES.find(p => p.name === ex)?.icon || 'bi-dumbbell';
        
        return `
            <div class="pr-item slide-in">
                <div class="pr-item-header">
                    <i class="bi ${icon}"></i>
                    <h4>${ex}</h4>
                </div>
                <div class="pr-inputs">
                    <div class="pr-input-group">
                        <label>Poids (kg)</label>
                        <input type="number" id="weight-${ex}" placeholder="0" 
                               value="${existingPR ? existingPR.weight : ''}" min="0" step="0.5">
                    </div>
                    <div class="pr-input-group">
                        <label>Répétitions</label>
                        <input type="number" id="reps-${ex}" placeholder="0" 
                               value="${existingPR ? existingPR.reps : ''}" min="0" step="1">
                    </div>
                    <div class="pr-input-group">
                        <label>Séries</label>
                        <input type="number" id="sets-${ex}" placeholder="0" 
                               value="${existingPR ? existingPR.sets : ''}" min="0" step="1">
                    </div>
                </div>
            </div>
        `;
    }).join('');

    board.innerHTML = `
        <h2 class="performance-title">📊 Mes Records</h2>
        <div class="text-center"><span class="date-badge">📅 ${today}</span></div>
        ${prItemsHtml}
        <div class="action-buttons">
          <button class="btn-capture" onclick="capturePerformances()">
            <i class="fas fa-save me-2"></i> Enregistrer mes PRs
          </button>
          <button class="btn-reset" onclick="resetSelection()">
            <i class="fas fa-redo me-2"></i> Réinitialiser
          </button>
        </div>
        <div id="screenshot-instructions" style="display:none;">
          <p><i class="fas fa-camera me-2"></i> N'oublie pas le screenshot pour garder une trace !</p>
        </div>
    `;
}

/**
 * 💾 Récupère les valeurs des champs de saisie et les sauvegarde.
 */
function capturePerformances() {
    const today = new Date().toLocaleDateString('fr-FR');
    let hasData = false;

    selectedExercises.forEach(ex => {
        const weight = parseFloat(document.getElementById(`weight-${ex}`)?.value) || 0;
        const reps = parseInt(document.getElementById(`reps-${ex}`)?.value) || 0;
        const sets = parseInt(document.getElementById(`sets-${ex}`)?.value) || 0;

        if (weight > 0 || reps > 0 || sets > 0) {
            hasData = true;
            
            prData = prData.filter(pr => !(pr.exercise === ex && pr.date === today));
            prData.push({ exercise: ex, date: today, weight, reps, sets });
        }
    });

    if (hasData) {
        alert('Performances enregistrées !');
        renderPerformanceBoard(); 
        const instructions = document.getElementById('screenshot-instructions');
        if (instructions) instructions.style.display = 'block';
    } else {
        alert('Dis-donc, tu n\'as rien saisi !');
    }
}

/**
 * 🗑️ Vide la sélection d'exercices.
 */
function resetSelection() {
    selectedExercises = [];
    renderExerciseGrid();
    renderPerformanceBoard();
}

/**
 * 🚀 Initialise la page du Tracker.
 */
function initTrackerPage() {
    renderExerciseGrid();
    renderPerformanceBoard();
    
    window.toggleExerciseSelection = toggleExerciseSelection;
    window.capturePerformances = capturePerformances;
    window.resetSelection = resetSelection;
}


// ==========================================
// 7. INITIALISATION AU CHARGEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initActiveNav();

    const currentPage = window.location.pathname.split('/').pop();
    
    // Page programmes.html
    if (currentPage === 'programmes.html') {
        // On passe ta variable 'programs' et la fonction qui doit l'afficher
        initProgramOrSeancePage(programs, showProgramDetails); 
    }
    
    // Page seance.html
    if (currentPage === 'seance.html') {
        // On passe ta variable 'muscleWorkouts' et la fonction qui doit l'afficher
        initProgramOrSeancePage(muscleWorkouts, showMuscleWorkout); 
    }
    
    // Page tracker.html
    if (currentPage === 'tracker.html') {
        initTrackerPage();
    }
});