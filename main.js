// ==========================================
// FITAPP - JavaScript Principal Complet
// ==========================================

// ==========================================
// 1. NAVIGATION ACTIVE
// ==========================================
function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function scrollToElement(element) {
    if (element) {
        window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
}

// ==========================================
// 2. DONNÉES DES EXERCICES (Images)
// ==========================================
const exerciseImages = {
    // avant-bras
    "avants bras assis": "img/avant bras 1.gif",
    "avants bras debout": "img/avant bras 2.gif",
    // Épaules
    "Développé militaire": "img/Le-Developpe-Militaire.gif", 
    "Élévations frontales": "img/elevation-frontale.gif",
    "Élévations latérales": "img/elevation-laterale.gif", 
    "Shrugs": "img/shrugs-avec-halteres.gif",
    "developpe-epaules-assis": "img/developpe-epaules-assis.gif",
    // Biceps
    "Curl pupitre barre EZ ": "img/curl-au-pupitre-barre-ez-larry-scott.gif", 
    "Curl marteau": "img/curl-marteau.gif",
    "Curl haltères incliné": "img/curl-haltere-incline.gif", 
    "Curl concentration": "img/curl-concentre.gif",
    "Curl pupitre machine":"img/curl-pupitre-machine.gif",
    // Triceps
    "Barre au front": "img/barre-front.gif", 
    "Extension corde haute": "img/extension-haute.gif",
    "Extension corde arriere": "img/extension-verticale-triceps-poulie-basse.gif", 
    "Dips": "img/dips-triceps.gif",
    "Pompes": "img/pompe-musculation.gif",
    // Pectoraux
    "Développé couché": "img/developpe-couche.gif", 
    "Écarté incliné": "img/dev-incliné.gif",
    "Développé incliné haltères": "img/developpe-incline-halteres-exercice-musculation.gif", 
    "Écarté poulie": "img/ecarte-poulie.gif",
    "pompes-incline":"img/pompes-incline.gif",
    "pompes-declinee":"img/pompe-declinee.gif",
    "dips-chaise":"img/dips-chaise.gif",
    // Dos
    "Traction": "img/traction-musculation-dos.gif", 
    "Tirage horizontal": "img/tirage-horizontal-poulie.gif",
    "Tirage vertical": "img/tirage-vertical-poitrine.gif", 
    "Rowing barre": "img/rowing-barre.gif",
    "Soulevé de terre": "img/souleve-de-terre-avec-deficit.gif",
    "extension lombaires":"img/extension-lombaires.gif",
    // Abdominaux
    "Relevé de genoux suspendu": "img/releve-de-genoux-suspendu-exercice-musculation.gif", 
    "Planche": "img/planche-abdos.gif",
    "crunch": "img/crunch.gif",
    "mountain-climber":"img/mountain-climber.gif",
    "planche-inversee":"img/planche-inversee.gif",
    // Jambes
    "Squat": "img/squat.gif", 
    "Presse à cuisses": "img/presse-a-cuisses-inclinee.gif",
    "Leg extension": "img/leg-extension.gif", 
    "Fentes avant": "img/fentes-avant-kettlebell.gif",
    "squat-saute": "img/squat-saute.gif",
    "leg-curl-allonge":"img/leg-curl-allonge.gif"
};

// ==========================================
// 3. DONNÉES DES PROGRAMMES
// ==========================================
const programs = {
"full body complet": {
    title: "Full Body Optimisé & Complet", 
    description: "Ta sélection améliorée avec tous les groupes musculaires", 
    sessions: [
        { day: "Full Body Complet", muscle: "Corps Complet", exercises: [
            { name: "Curl pupitre machine", sets: "3×8 rep" },
            { name: "Curl haltères incliné", sets: "3×8 rep" },
            { name: "avant bras assis", sets: "3×8 rep" },
            { name: "avant bras debout", sets: "3×8 rep" },
            { name: "Extension corde haute", sets: "3×8 rep" },
            { name: "Extension corde arriere", sets: "3×8 rep" },
            { name: "Développé incliné haltères", sets: "3×8 rep" },
            { name: "Écarté poulie", sets: "3×8 rep" },
            { name: "Élévations latérales", sets: "3×10 rep" },
            { name: "Presse à cuisses", sets: "3×8 rep" },
            { name: "Leg extension", sets: "3×10 rep" },
            { name: "leg-curl-allonge", sets: "3×10 rep" },
            { name: "Squat", sets: "4×8 rep" },
            { name: "Tirage horizontal", sets: "3×8 rep" },
            { name: "Tirage vertical", sets: "3×8 rep" },
            { name: "extension lombaires", sets: "3×10 rep" },
            { name: "Soulevé de terre", sets: "4×6 rep" },
            { name: "Développé couché", sets: "4×8 rep" },
            { name: "Développé militaire", sets: "3×10 rep" },
            { name: "Planche", sets: "2 min" }
        ]}
    ]
},

    "2days": { 
        title: "Programme 2 Jours - Full Body", 
        description: "Deux séances complètes pour travailler tout le corps", 
        sessions: [
            { day: "Jour 1 - Full Body A", muscle: "Corps Complet", exercises: [
                { name: "Squat", sets: "4×8 rep" }, 
                { name: "Développé couché", sets: "4×8 rep" }, 
                { name: "Tirage horizontal", sets: "4×8 rep" }, 
                { name: "Développé militaire", sets: "3×10 rep" }, 
                { name: "Curl pupitre barre EZ ", sets: "3×10 rep" },
                { name: "avants bras assis", sets: "3×10 rep" }, 
                { name: "Extension corde haute", sets: "3×10 rep" }, 
                { name: "extension lombaires", sets: "3×10 rep" },
                { name: "Planche", sets: "2 min" }
            ]},
            { day: "Jour 2 - Full Body B", muscle: "Corps Complet", exercises: [
                { name: "Soulevé de terre", sets: "4×6 rep" }, 
                { name: "Écarté incliné", sets: "4×8 rep" }, 
                { name: "Tirage vertical", sets: "4×8 rep" }, 
                { name: "Élévations frontales", sets: "3×10 rep" }, 
                { name: "Curl marteau", sets: "3×10 rep" }, 
                { name: "avants bras debout", sets: "3×10 rep" },
                { name: "extension lombaires", sets: "3×10 rep" },
                { name: "Pompes", sets: "3×max" }, 
                { name: "Planche", sets: "2 min" }
            ]}
        ]
    },
    "3days": { 
        title: "Programme 3 Jours - Push Pull Legs", 
        description: "Split classique pour une progression optimale", 
        sessions: [
            { day: "Jour 1 - Push", muscle: "Poussée", exercises: [
                { name: "Développé couché", sets: "4×8 rep" }, 
                { name: "Développé incliné haltères", sets: "4×8 rep" }, 
                { name: "Écarté poulie", sets: "3×10 rep" }, 
                { name: "Développé militaire", sets: "4×8 rep" }, 
                { name: "Élévations latérales", sets: "3×10 rep" }, 
                { name: "Barre au front", sets: "3×8 rep" }, 
                { name: "Extension corde arriere", sets: "3×8 rep" }
            ]},
            { day: "Jour 2 - Pull", muscle: "Traction", exercises: [
                { name: "Soulevé de terre", sets: "4×6 rep" }, 
                { name: "Traction", sets: "3×8 rep" }, 
                { name: "Tirage horizontal", sets: "4×8 rep" }, 
                { name: "Tirage vertical", sets: "3×8 rep" }, 
                { name: "Shrugs", sets: "3×10 rep" }, 
                { name: "Curl pupitre machine ", sets: "4×8 rep" }, 
                { name: "Curl marteau", sets: "3×8 rep" }
            ]},
            { day: "Jour 3 - Legs", muscle: "Jambes", exercises: [
                { name: "Squat", sets: "4×8 rep" }, 
                { name: "Presse à cuisses", sets: "4×8 rep" }, 
                { name: "Leg extension", sets: "3×8 rep" }, 
                { name: "Fentes avant", sets: "3×8 rep" }, 
                { name: "leg-curl-allonge", sets: "3×10 rep" },
                { name: "Planche", sets: "2 min" }
            ]}
        ]
    },
    "4days": { 
        title: "Programme 4 Jours - Upper Lower", 
        description: "Haute fréquence pour chaque groupe musculaire", 
        sessions: [
            { day: "Jour 1 - Upper A", muscle: "Haut du corps", exercises: [
                { name: "Développé couché", sets: "4×8 rep" }, 
                { name: "Tirage horizontal", sets: "4×8 rep" }, 
                { name: "Développé militaire", sets: "3×8 rep" }, 
                { name: "Tirage vertical", sets: "3×8 rep" }, 
                { name: "Écarté poulie", sets: "3×8 rep" }, 
                { name: "Curl pupitre machine ", sets: "3×8 rep" }, 
                { name: "Extension corde haute", sets: "3×8 rep" }
            ]},
            { day: "Jour 2 - Lower A", muscle: "Bas du corps", exercises: [
                { name: "Squat", sets: "4×8 rep" }, 
                { name: "Soulevé de terre", sets: "4×6 rep" }, 
                { name: "Presse à cuisses", sets: "4×8 rep" }, 
                { name: "Leg extension", sets: "3×8 rep" }, 
                { name: "leg-curl-allonge", sets: "3×10 rep" },
                { name: "Planche", sets: "2 min" }
            ]},
            { day: "Jour 3 - Upper B", muscle: "Haut du corps", exercises: [
                { name: "Écarté incliné", sets: "3×8 rep" }, 
                { name: "Élévations latérales", sets: "3×8 rep" }, 
                { name: "Tirage vertical", sets: "3×8 rep" }, 
                { name: "Écarté poulie", sets: "3×8 rep" }, 
                { name: "avant bras assis", sets: "3×8 rep" },
                { name: "Curl marteau", sets: "3×8 rep" }, 
                { name: "Dips", sets: "3×8 rep" },
                { name: "extension lombaires", sets: "3×10 rep"}
            ]},
            { day: "Jour 4 - Lower B", muscle: "Bas du corps", exercises: [
                { name: "Squat", sets: "4×8 rep" }, 
                { name: "Soulevé de terre", sets: "4×6 rep" }, 
                { name: "Presse à cuisses", sets: "4×8 rep" }, 
                { name: "Leg extension", sets: "3×8 rep" }, 
                { name: "leg-curl-allonge", sets: "3×10 rep" },
                { name: "Planche", sets: "2 min" }
            ]}
        ]
    },
    "5days": { 
        title: "Programme 5 Jours - Split Classique", 
        description: "Volume maximal avec spécialisation par groupe musculaire", 
        sessions: [
            { day: "Jour 1 - Pectoraux", muscle: "Pectoraux", exercises: [
                { name: "Développé couché", sets: "4×8 rep" }, 
                { name: "Écarté incliné", sets: "4×8 rep" }, 
                { name: "Développé incliné haltères", sets: "3×8 rep" }, 
                { name: "Écarté poulie", sets: "3×8 rep" }, 
                { name: "Pompes", sets: "3×max" }
            ]},
            { day: "Jour 2 - Dos", muscle: "Dos", exercises: [
                { name: "Soulevé de terre", sets: "4×6 rep" }, 
                { name: "Traction", sets: "4×max" }, 
                { name: "Tirage vertical", sets: "4×8 rep" }, 
                { name: "Rowing barre", sets: "3×8 rep" }, 
                { name: "Tirage horizontal", sets: "3×8 rep" },
                { name: "extension lombaires", sets: "3×10 rep" }
            ]},
            { day: "Jour 3 - Épaules", muscle: "Épaules", exercises: [
                { name: "Développé militaire", sets: "4×8 rep" }, 
                { name: "Élévations latérales", sets: "4×8 rep" }, 
                { name: "Élévations frontales", sets: "3×8 rep" }, 
                { name: "Shrugs", sets: "3×10 rep" }
            ]},
            { day: "Jour 4 - Jambes", muscle: "Jambes", exercises: [
                { name: "Squat", sets: "4×6 rep" }, 
                { name: "Presse à cuisses", sets: "4×8 rep" }, 
                { name: "Leg extension", sets: "4×8 rep" },
                { name: "leg-curl-allonge", sets: "3×10 rep" }
            ]},
            { day: "Jour 5 - Bras/Abdos", muscle: "Bras & Abdos", exercises: [
                { name: "Curl pupitre machine ", sets: "4×8 rep" }, 
                { name: "Barre au front", sets: "4×8 rep" }, 
                { name: "Curl haltères incliné", sets: "3×8 rep" }, 
                { name: "avants bras assis", sets: "3×8 rep" },
                { name: "Extension corde haute", sets: "3×8 rep" },
                { name: "Dips", sets: "3×8 rep" }, 
                { name: "Planche", sets: "2 min" }
            ]}
        ]
    }
};

// ==========================================
// 3.5 DONNÉES DES SÉANCES PAR MUSCLE
// ==========================================
const muscleWorkouts = {
    "2days": { 
        title: "Séance Bras", 
        sessions: [
            { day: "Biceps", muscle: "Biceps", exercises: [
                { name: "Curl pupitre barre EZ ", sets: "4×8 rep" }, 
                { name: "Curl pupitre machine ", sets: "4×8 rep" },
                { name: "Curl marteau", sets: "3×8 rep" }, 
                { name: "Curl haltères incliné", sets: "3×8 rep" }, 
                { name: "Curl concentration", sets: "3×8 rep" }
            ]},
            { day: "Triceps", muscle: "Triceps", exercises: [
                { name: "Barre au front", sets: "4×8 rep" }, 
                { name: "Extension corde haute", sets: "3×8 rep" }, 
                { name: "Extension corde arriere", sets: "3×8 rep" }, 
                { name: "Dips", sets: "3×8 rep" }
            ]},
            { day: "Avant-bras", muscle: "Avant-bras", exercises: [
                { name: "avants bras assis", sets: "4×10 rep" },
                { name: "avants bras debout", sets: "4×10 rep" }

        ]}
        ]
    },
    "3days": { 
        title: "Séance Épaules & Pectoraux", 
        sessions: [
            { day: "Épaules", muscle: "Épaules", exercises: [
                { name: "Développé militaire", sets: "4×8 rep" }, 
                { name: "Élévations latérales", sets: "4×10 rep" }, 
                { name: "Élévations frontales", sets: "3×8 rep" }, 
                { name: "Shrugs", sets: "3×10 rep" }
            ]},
            { day: "Pectoraux", muscle: "Pectoraux", exercises: [
                { name: "Développé couché", sets: "4×8 rep" }, 
                { name: "Développé incliné haltères", sets: "4×8 rep" }, 
                { name: "Écarté incliné", sets: "4×8 rep" }, 
                { name: "Écarté poulie", sets: "3×8 rep" }, 
                { name: "Pompes", sets: "3×max" }
            ]}
        ]
    },
    "4days": { 
        title: "Séance Dos", 
        sessions: [
            { day: "Dos Complet", muscle: "Dos", exercises: [
                { name: "Soulevé de terre", sets: "4×6 rep" }, 
                { name: "Traction", sets: "4×8 rep" }, 
                { name: "Rowing barre", sets: "4×8 rep" }, 
                { name: "Tirage vertical", sets: "3×8 rep" }, 
                { name: "Tirage horizontal", sets: "3×8 rep" }, 
                { name: "Shrugs", sets: "3×10 rep" },
                { name: "extension lombaires", sets: "3×10 rep" }
            ]}
        ]
    },
    "5days": { 
        title: "Séance Jambes", 
        sessions: [
            { day: "Jambes Complètes", muscle: "Jambes", exercises: [
                { name: "Squat", sets: "4×8 rep" }, 
                { name: "Presse à cuisses", sets: "4×8 rep" }, 
                { name: "Leg extension", sets: "3×8 rep" }, 
                { name: "Fentes avant", sets: "3×10 rep" },
                { name: "leg-curl-allonge", sets: "3×10 rep" }
            ]}
        ]
    },
    "maison": {
        title: "Séance Maison",
        sessions: [
            { day: "maison sans materiel", muscle: "Tout", exercises: [
                {name: "Pompes", sets: "3×max"},
                {name: "Planche", sets: "2min"},
                {name: "crunch", sets: "3×max"},
                {name: "mountain-climber", sets: "3×max"},
                {name: "squat-saute", sets: "3×max"},
                {name: "planche-inversee", sets: "2 min"}
            ]
            },
            { day: "maison avec materiel", muscle: "Tout", exercises: [
                {name: "pompes-incline", sets: "3×max"},
                {name: "pompes-declinee", sets: "3×max"},
                {name: "dips-chaise", sets: "3×max"},
                {name: "developpe-epaules-assis", sets:"3×max"},
                {name: "Traction", sets:"3×max"},
                {name: "Curl marteau", sets:"3×max"}
            ]

            }
        ]
    },
};

// ==========================================
// 4. FONCTIONS PROGRAMMES
// ==========================================

function toggleExerciseImage(button, exerciseName) {
    const item = button.closest('.exercise-item');
    const statsSpan = item.querySelector('.exercise-stats');
    let imageContainer = item.querySelector('.exercise-image-container');

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

        const exercisesHtml = session.exercises.map(exercise => {
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

function showProgramDetails(programKey) {
    renderSessionDetails(programs[programKey], true); 
}

function showMuscleWorkout(muscleKey) {
    renderSessionDetails(muscleWorkouts[muscleKey], false); 
}

function backToPrograms() {
    const sessionDetails = document.getElementById('session-details');
    const programSelection = document.getElementById('program-selection');

    if (sessionDetails) sessionDetails.classList.add('d-none');
    if (programSelection) programSelection.classList.remove('d-none');
    
    if (programSelection) scrollToElement(programSelection);
}

function initProgramOrSeancePage(dataSet, showFn) {
    document.querySelectorAll('.program-card').forEach(card => {
        card.addEventListener('click', () => {
            const key = card.dataset.program;
            if (dataSet[key]) showFn(key);
        });
    });

    window.backToPrograms = backToPrograms;
    window.toggleExerciseImage = toggleExerciseImage;
}

// ==========================================
// 5. TRACKER DE PERFORMANCES (PR)
// ==========================================

// Liste des exercices pour le tracker PR
const trackerExercises = [
    { id: 1, name: 'Développé couché', icon: 'bi-arrow-bar-up', fields: ['Poids (kg)', 'Reps'] },
    { id: 2, name: 'Squat', icon: 'bi-arrow-down-square', fields: ['Poids (kg)', 'Reps'] },
    { id: 3, name: 'Soulevé de terre', icon: 'bi-box-arrow-up', fields: ['Poids (kg)', 'Reps'] },
    { id: 4, name: 'Développé militaire', icon: 'bi-arrow-up-circle', fields: ['Poids (kg)', 'Reps'] },
    { id: 5, name: 'Traction', icon: 'bi-arrow-up', fields: ['Reps', 'Lest (kg)'] },
    { id: 6, name: 'Presse à cuisses', icon: 'bi-arrow-down', fields: ['Poids (kg)', 'Reps'] },
    { id: 7, name: 'Rowing barre', icon: 'bi-bar-chart-line', fields: ['Poids (kg)', 'Reps'] },
    { id: 8, name: 'Curl pupitre barre EZ ', icon: 'bi-file-bar-graph', fields: ['Poids (kg)', 'Reps'] },
];

let selectedExercises = [];

function initExercises() {
    const container = document.getElementById('exerciseList');
    if (!container) return;
    
    container.innerHTML = trackerExercises.map(ex => `
        <div class="exercise-card" onclick="toggleExercise(${ex.id})">
            <i class="exercise-icon bi ${ex.icon}"></i>
            <h5 class="exercise-name">${ex.name}</h5>
        </div>
    `).join('');
}

function toggleExercise(id) {
    const exercise = trackerExercises.find(ex => ex.id === id);
    const index = selectedExercises.findIndex(ex => ex.id === id);

    if (index > -1) {
        selectedExercises.splice(index, 1);
    } else {
        selectedExercises.push({
            ...exercise,
            values: {}
        });
    }

    updateUI();
    renderPerformanceBoard();
}

function updateUI() {
    const exerciseCards = document.querySelectorAll('#exerciseList .exercise-card');
    exerciseCards.forEach(card => {
        const id = parseInt(card.getAttribute('onclick').match(/\d+/)[0]);
        const isSelected = selectedExercises.some(ex => ex.id === id);
        card.classList.toggle('selected', isSelected);
    });

    const actionButtons = document.getElementById('actionButtons');
    if (actionButtons) {
        actionButtons.style.display = selectedExercises.length > 0 ? 'block' : 'none';
    }
}

function renderPerformanceBoard() {
    const board = document.getElementById('performanceBoard');
    if (!board) return;

    if (selectedExercises.length === 0) {
        board.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-hand-index-thumb"></i>
                <h3>Sélectionne des exercices ci-dessus</h3>
                <p>Clique sur les exercices pour les ajouter à ton tableau de performances</p>
            </div>
        `;
        return;
    }

    const today = new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    board.innerHTML = `
        <h2 class="performance-title">
            <i class="bi bi-trophy-fill me-2"></i>Mes Records
        </h2>
        <div class="text-center">
            <span class="date-badge">
                <i class="bi bi-calendar-check me-2"></i>${today}
            </span>
        </div>
        ${selectedExercises.map(ex => `
            <div class="pr-item slide-in">
                <div class="pr-item-header">
                    <i class="bi ${ex.icon}"></i>
                    <h4>${ex.name}</h4>
                </div>
                <div class="pr-inputs">
                    ${ex.fields.map(field => `
                        <div class="pr-input-group">
                            <label>${field}</label>
                            <input
                                type="text"
                                placeholder="--"
                                oninput="updateValue(${ex.id}, '${field}', this.value)"
                                value="${ex.values[field] || ''}"
                            >
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

function updateValue(exerciseId, field, value) {
    const exercise = selectedExercises.find(ex => ex.id === exerciseId);
    if (exercise) {
        exercise.values[field] = value;
    }
}

function resetAll() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les exercices et valeurs ?')) {
        selectedExercises = [];
        updateUI();
        renderPerformanceBoard();
    }
}

function captureScreenshot() {
    const instructions = document.getElementById('screenshot-instructions');
    if (instructions) {
        instructions.style.display = 'block';

        setTimeout(() => {
            instructions.style.display = 'none';
        }, 5000);
    }

    const performanceBoard = document.getElementById('performanceBoard');
    if (performanceBoard) {
        performanceBoard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

function initTrackerPage() {
    initExercises();
    renderPerformanceBoard();
    
    // Rendre les fonctions globales
    window.toggleExercise = toggleExercise;
    window.updateValue = updateValue;
    window.resetAll = resetAll;
    window.captureScreenshot = captureScreenshot;
}

// ==========================================
// 6. GESTION FORMULAIRE DE CONTACT
// ==========================================
function initContactPage() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }
            
            // Affichage d'un message de confirmation
            alert(`Merci ${name} ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.`);
            
            // Réinitialisation du formulaire
            contactForm.reset();
        });
    }
}

// ==========================================
// 7. INITIALISATION AU CHARGEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initActiveNav();

    const currentPage = window.location.pathname.split('/').pop();
    
    // Page programmes.html
    if (currentPage === 'programmes.html') {
        initProgramOrSeancePage(programs, showProgramDetails); 
    }
    
    // Page seance.html
    if (currentPage === 'seance.html') {
        initProgramOrSeancePage(muscleWorkouts, showMuscleWorkout); 
    }
    
    // Page tracker.html (pr.html selon la nav)
    if (currentPage === 'tracker.html' || currentPage === 'pr.html') {
        initTrackerPage();
    }
    
    // Page contact.html
    if (currentPage === 'contact.html') {
        initContactPage();
    }
});


// ==========================================
//  MODULE : CRÉATION DE PROGRAMME PERSONNALISÉ
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const selectionMode = document.getElementById("selection-mode");
    const programMode = document.getElementById("program-mode");

    // Vérifie qu’on est bien sur la page correspondante
// Vérification des modes avant affichage
if (!selectionMode || !programMode) return;

// === Dictionnaire complet des exercices par groupe musculaire ===
const exercisesByMuscle = {
    "Épaules": [
        { name: "Développé militaire", image: "img/Le-Developpe-Militaire.gif" },
        { name: "Élévations frontales", image: "img/elevation-frontale.gif" },
        { name: "Élévations latérales", image: "img/elevation-laterale.gif" },
        { name: "Shrugs", image: "img/shrugs-avec-halteres.gif" },
        { name: "Développé épaules assis", image: "img/developpe-epaules-assis.gif" }
    ],
    "Biceps": [
        { name: "Curl pupitre barre EZ", image: "img/curl-au-pupitre-barre-ez-larry-scott.gif" },
        { name: "Curl pupitre machine", image: "img/curl-pupitre-machine.gif" },
        { name: "Curl marteau", image: "img/curl-marteau.gif" },
        { name: "Curl haltères incliné", image: "img/curl-haltere-incline.gif" },
        { name: "Curl concentration", image: "img/curl-concentre.gif" }
    ],
    "Triceps": [
        { name: "Barre au front", image: "img/barre-front.gif" },
        { name: "Extension corde haute", image: "img/extension-haute.gif" },
        { name: "Extension corde arrière", image: "img/extension-verticale-triceps-poulie-basse.gif" },
        { name: "Dips", image: "img/dips-triceps.gif" },
        { name: "Pompes", image: "img/pompe-musculation.gif" }
    ],
    "Avant-bras": [
        { name: "Avant-bras assis", image: "img/avant bras 1.gif" },
        { name: "Avant-bras debout", image: "img/avant bras 2.gif" }
    ],
    "Pectoraux": [
        { name: "Développé couché", image: "img/developpe-couche.gif" },
        { name: "Écarté incliné", image: "img/dev-incliné.gif" },
        { name: "Développé incliné haltères", image: "img/developpe-incline-halteres-exercice-musculation.gif" },
        { name: "Écarté poulie", image: "img/ecarte-poulie.gif" },
        { name: "Pompes inclinées", image: "img/pompes-incline.gif" },
        { name: "Pompes déclinées", image: "img/pompe-declinee.gif" },
        
    ],
    "Dos": [
        { name: "Traction", image: "img/traction-musculation-dos.gif" },
        { name: "Tirage horizontal", image: "img/tirage-horizontal-poulie.gif" },
        { name: "Tirage vertical", image: "img/tirage-vertical-poitrine.gif" },
        { name: "Rowing barre", image: "img/rowing-barre.gif" },
        { name: "Soulevé de terre", image: "img/souleve-de-terre-avec-deficit.gif" },
        { name: "extension lombaires", image: "img/extension-lombaires.gif" }
    ],
    "Abdominaux": [
        { name: "Relevé de genoux suspendu", image: "img/releve-de-genoux-suspendu-exercice-musculation.gif" },
        { name: "Planche", image: "img/planche-abdos.gif" },
        { name: "Crunch", image: "img/crunch.gif" },
        { name: "Mountain climber", image: "img/mountain-climber.gif" },
        { name: "Planche inversée", image: "img/planche-inversee.gif" }
    ],
    "Jambes": [
        { name: "Squat", image: "img/squat.gif" },
        { name: "Presse à cuisses", image: "img/presse-a-cuisses-inclinee.gif" },
        { name: "Leg extension", image: "img/leg-extension.gif" },
        { name: "leg-curl-allonge", image: "img/leg-curl-allonge.gif" },
        { name: "Fentes avant", image: "img/fentes-avant-kettlebell.gif" },
        { name: "Squat sauté", image: "img/squat-saute.gif" }
        
    ]
};


    let customSelectedExercises = [];

    const container = document.getElementById("exercises-container");
    const counterText = document.getElementById("counter-text");
    const counterBox = document.getElementById("exercise-counter");
    const btnValidate = document.getElementById("btn-validate");
    const btnReset = document.getElementById("btn-reset");
    const programDetails = document.getElementById("program-details");
    const programCount = document.getElementById("program-exercise-count");
    const btnEdit = document.getElementById("btn-edit");
    const btnResetProgram = document.getElementById("btn-reset-program");

    // === AFFICHAGE DES EXERCICES ===
    function renderExercises() {
        container.innerHTML = "";
        Object.entries(exercisesByMuscle).forEach(([muscle, exercises]) => {
            const section = document.createElement("section");
            section.innerHTML = `<h2>${muscle}</h2>`;

            const grid = document.createElement("div");
            grid.className = "d-flex flex-wrap justify-content-center";

            exercises.forEach(ex => {
                const selected = customSelectedExercises.some(sel => sel.name === ex.name);
                const card = document.createElement("div");
                card.className = `card m-2 p-2 exercise-card ${selected ? "border border-warning" : ""}`;
                card.style.width = "180px";
                card.style.cursor = "pointer";
                card.innerHTML = `
                    <img src="${ex.image}" class="card-img-top" alt="${ex.name}">
                    <div class="card-body text-center"><p>${ex.name}</p></div>
                `;
                card.addEventListener("click", () => toggleExercise(ex, muscle));
                grid.appendChild(card);
            });

            section.appendChild(grid);
            container.appendChild(section);
        });
    }

    // === SÉLECTION / DÉSÉLECTION ===
    function toggleExercise(ex, muscle) {
        const index = customSelectedExercises.findIndex(e => e.name === ex.name);
        if (index >= 0) {
            customSelectedExercises.splice(index, 1);
        } else {
            customSelectedExercises.push({ ...ex, muscle });
        }
        updateUI();
    }

    // === MISE À JOUR DE L'INTERFACE ===
    function updateUI() {
        counterText.textContent = `${customSelectedExercises.length} exercice${customSelectedExercises.length > 1 ? "s" : ""} sélectionné${customSelectedExercises.length > 1 ? "s" : ""}`;
        counterBox.style.display = customSelectedExercises.length ? "block" : "none";
        btnReset.style.display = customSelectedExercises.length ? "inline-block" : "none";
        btnValidate.disabled = customSelectedExercises.length === 0;
        btnValidate.style.opacity = customSelectedExercises.length === 0 ? "0.5" : "1";
        renderExercises();
    }

    // === GÉNÉRATION DU PROGRAMME FINAL ===
    function renderProgram() {
        programDetails.innerHTML = "";
        const grouped = customSelectedExercises.reduce((acc, ex) => {
            if (!acc[ex.muscle]) acc[ex.muscle] = [];
            acc[ex.muscle].push(ex);
            return acc;
        }, {});

        Object.entries(grouped).forEach(([muscle, exercises]) => {
            const div = document.createElement("div");
            div.className = "mb-4";
            div.innerHTML = `<h3 class="text-warning">${muscle}</h3>`;

            exercises.forEach(ex => {
                const item = document.createElement("div");
                item.className = "d-flex align-items-center mb-2 bg-dark p-2 rounded";
                item.innerHTML = `
                    <img src="${ex.image}" width="80" class="me-3 rounded">
                    <div><strong>${ex.name}</strong><br><small>3-4 séries de 8-12 reps</small></div>
                    <button class="btn btn-sm btn-outline-danger ms-auto"><i class="fas fa-trash"></i></button>
                `;
                item.querySelector("button").addEventListener("click", () => {
                    customSelectedExercises = customSelectedExercises.filter(e => e.name !== ex.name);
                    renderProgram();
                });
                div.appendChild(item);
            });
            programDetails.appendChild(div);
        });
    }

    // === VALIDATION DU PROGRAMME ===
    btnValidate.addEventListener("click", () => {
        if (customSelectedExercises.length === 0) return;
        selectionMode.style.display = "none";
        programMode.style.display = "block";
        programCount.textContent = `Programme créé avec ${customSelectedExercises.length} exercice${customSelectedExercises.length > 1 ? "s" : ""}`;
        renderProgram();
    });

    // === RÉINITIALISATION ===
    btnReset.addEventListener("click", resetAll);
    btnResetProgram.addEventListener("click", resetAll);

    function resetAll() {
        if (confirm("Supprimer toutes les sélections ?")) {
            customSelectedExercises = [];
            selectionMode.style.display = "block";
            programMode.style.display = "none";
            updateUI();
        }
    }

    // === MODIFICATION DU PROGRAMME ===
    btnEdit.addEventListener("click", () => {
        selectionMode.style.display = "block";
        programMode.style.display = "none";
        updateUI();
    });

    renderExercises();
});
