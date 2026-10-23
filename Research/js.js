
const programs = [
  {
    id: "bsit", name: "BS Information Technology", level: "College",
    field: "Technology", tag: "Technology", icon: "💻",
    summary: "Explore computing, software, networks, and information systems.",
    definition: "A degree focused on using and managing technology to solve practical problems.",
    focus: "Programming, web development, databases, networking, and information systems.",
    subjects: ["Web Development", "Database Management", "Networking Fundamentals", "Systems Analysis"],
    skills: ["Programming fundamentals", "Web development", "Database management", "Problem-solving"],
    careers: ["Web Developer", "IT Support Specialist", "Systems Analyst", "Database Assistant"],
    suitable: "Students interested in computers, software, technology, and solving practical problems."
  },
  {
    id: "bscs", name: "BS Computer Science", level: "College",
    field: "Technology", tag: "Computing", icon: "⌘",
    summary: "Learn about computing principles, algorithms, and software development.",
    definition: "A degree that studies computation, algorithms, and the design of software solutions.",
    focus: "Algorithms, programming, computation, software design, and data structures.",
    subjects: ["Data Structures and Algorithms", "Programming", "Discrete Mathematics", "Software Development"],
    skills: ["Logical thinking", "Programming", "Algorithm design", "Computational problem-solving"],
    careers: ["Software Developer", "Programmer", "QA Analyst", "Research Assistant"],
    suitable: "Students who enjoy logic, programming, mathematics, and understanding how software works."
  },
  {
    id: "bsce", name: "BS Computer Engineering", level: "College",
    field: "Engineering", tag: "Engineering", icon: "⚙",
    summary: "Discover the connection between computer hardware and software.",
    definition: "A degree combining computer systems, electronics, hardware, and software.",
    focus: "Digital systems, computer architecture, electronics, and embedded systems.",
    subjects: ["Computer Architecture", "Digital Logic Design", "Electronics", "Embedded Systems"],
    skills: ["Technical analysis", "Hardware fundamentals", "Programming", "Circuit concepts"],
    careers: ["Computer Engineering Associate", "Embedded Systems Developer", "Technical Support Engineer", "Hardware Specialist"],
    suitable: "Students curious about both computer hardware and software."
  },
  {
    id: "bsece", name: "BS Electronics Engineering", level: "College",
    field: "Engineering", tag: "Engineering", icon: "⌁",
    summary: "Study electronic circuits, communications, and electronic systems.",
    definition: "A degree focused on electronic devices, circuits, communication systems, and related technologies.",
    focus: "Electronics, circuits, signals, communications, and system design.",
    subjects: ["Electronic Circuits", "Signals and Systems", "Communication Systems", "Control Systems"],
    skills: ["Circuit analysis", "Technical problem-solving", "System analysis", "Electronics fundamentals"],
    careers: ["Electronics Engineer", "Test Engineer", "Technical Support Engineer", "Communications Technician"],
    suitable: "Students interested in electronics, communication technology, mathematics, and engineering."
  },
  {
    id: "bsba-marketing", name: "BSBA - Marketing Management", level: "College",
    field: "Business", tag: "Business", icon: "↗",
    summary: "Explore branding, customer behavior, marketing, and business strategy.",
    definition: "A business degree focusing on understanding customers and promoting products or services.",
    focus: "Marketing strategy, consumer behavior, branding, and market research.",
    subjects: ["Principles of Marketing", "Consumer Behavior", "Marketing Research", "Brand Management"],
    skills: ["Communication", "Market research", "Creative planning", "Business analysis"],
    careers: ["Marketing Associate", "Brand Assistant", "Sales Executive", "Market Research Assistant"],
    suitable: "Students interested in business, promotions, branding, and understanding customers."
  },
  {
    id: "bsba-hrm", name: "BSBA - Human Resource Management", level: "College",
    field: "Business", tag: "Business", icon: "♧",
    summary: "Learn about people management, recruitment, and workplace development.",
    definition: "A business degree focused on employee relations and human resource practices.",
    focus: "Recruitment, training, employee relations, and organizational development.",
    subjects: ["Human Resource Management", "Recruitment and Selection", "Training and Development", "Employee Relations"],
    skills: ["Communication", "Organization", "Conflict resolution", "People management"],
    careers: ["HR Assistant", "Recruitment Associate", "Training Assistant", "HR Coordinator"],
    suitable: "Students interested in people, workplace organization, and employee development."
  },
  {
    id: "bsba-fm", name: "BSBA - Financial Management", level: "College",
    field: "Business", tag: "Business", icon: "₱",
    summary: "Understand financial planning, budgeting, and business finance.",
    definition: "A business degree focused on financial decision-making and managing resources.",
    focus: "Financial planning, budgeting, investment fundamentals, and financial analysis.",
    subjects: ["Financial Management", "Financial Analysis", "Investment Fundamentals", "Business Finance"],
    skills: ["Numerical analysis", "Planning", "Financial literacy", "Decision-making"],
    careers: ["Finance Assistant", "Budget Assistant", "Banking Associate", "Financial Services Associate"],
    suitable: "Students interested in money management, planning, numbers, and business decisions."
  },
  {
    id: "bsa", name: "BS Accountancy", level: "College",
    field: "Business", tag: "Accountancy", icon: "▤",
    summary: "Explore accounting, financial reporting, auditing, and taxation.",
    definition: "A degree focused on recording, analyzing, and reporting financial information.",
    focus: "Accounting principles, financial reporting, auditing, and taxation.",
    subjects: ["Financial Accounting", "Cost Accounting", "Auditing", "Taxation"],
    skills: ["Attention to detail", "Numerical analysis", "Organization", "Analytical thinking"],
    careers: ["Accounting Assistant", "Audit Associate", "Tax Associate", "Bookkeeper"],
    suitable: "Students who enjoy structured work, accuracy, numbers, and financial records."
  },
  {
    id: "stem", name: "STEM", level: "Senior High School",
    field: "Science", tag: "SHS Strand", icon: "⚗",
    summary: "Explore science, technology, engineering, and mathematics.",
    definition: "A senior high school strand designed around science, technology, engineering, and mathematics subjects.",
    focus: "Science, mathematics, research, and analytical problem-solving.",
    subjects: ["Science", "Mathematics", "Research", "Technology-related subjects"],
    skills: ["Research", "Scientific thinking", "Mathematics", "Problem-solving"],
    careers: ["Future college pathways in science, technology, engineering, and mathematics"],
    suitable: "Students interested in science, mathematics, technology, and related college pathways."
  },
  {
    id: "abm-tvl", name: "ABM-TVL", level: "Senior High School",
    field: "Business", tag: "SHS Strand", icon: "▦",
    summary: "Review this strand and confirm its current curriculum and specializations with the school.",
    definition: "The official name, subject list, and specializations for ABM-TVL should be verified with AMA College Cavite.",
    focus: "Confirm the official subject areas and specialization with the school.",
    subjects: ["Confirm current official curriculum"],
    skills: ["To be confirmed with the official curriculum"],
    careers: ["Depends on the verified curriculum and subsequent education or training"],
    suitable: "Students considering this strand should consult the school for its exact curriculum and available specializations."
  },
  {
    id: "prog", name: "PROG", level: "Senior High School",
    field: "Technology", tag: "SHS Strand", icon: "</>",
    summary: "Ask about programming-related subjects and the current strand curriculum.",
    definition: "The exact official name and curriculum for PROG should be confirmed with AMA College Cavite.",
    focus: "Confirm the official subjects, practical activities, and specialization with the school.",
    subjects: ["Confirm current official curriculum"],
    skills: ["To be confirmed with the official curriculum"],
    careers: ["Depends on the verified curriculum and subsequent education or training"],
    suitable: "Students interested in programming should ask about the strand's current subjects and learning outcomes."
  },
  {
    id: "humss", name: "HUMSS", level: "Senior High School",
    field: "Humanities", tag: "SHS Strand", icon: "▤",
    summary: "Explore humanities, social sciences, communication, and society.",
    definition: "A senior high school strand centered on humanities and social sciences.",
    focus: "Communication, social sciences, humanities, and research.",
    subjects: ["Communication", "Social Sciences", "Humanities", "Research"],
    skills: ["Communication", "Research", "Critical thinking", "Writing"],
    careers: ["Future college pathways in communication, humanities, social sciences, and related fields"],
    suitable: "Students interested in people, society, communication, writing, and social issues."
  }
];

const $ = id => document.getElementById(id);

const programGrid = $("programGrid");
const resultCount = $("resultCount");
const emptyState = $("emptyState");
const searchInput = $("searchInput");
const levelFilter = $("levelFilter");
const fieldFilter = $("fieldFilter");
const compareProgram1 = $("compareProgram1");
const compareProgram2 = $("compareProgram2");
const comparisonOutput = $("comparisonOutput");
const inquiryProgram = $("inquiryProgram");
const inquiryForm = $("inquiryForm");
const formStatus = $("formStatus");
const programDialog = $("programDialog");
const dialogContent = $("dialogContent");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  }[character]));
}

function getProgram(id) {
  return programs.find(program => program.id === id);
}

function populateSelect(select, placeholder) {
  if (!select) return;

  select.innerHTML =
    `<option value="">${escapeHTML(placeholder)}</option>` +
    programs.map(program =>
      `<option value="${escapeHTML(program.id)}">${escapeHTML(program.name)}</option>`
    ).join("");
}

function renderPrograms() {
  if (!programGrid) return;

  const query = searchInput.value.trim().toLowerCase();
  const level = levelFilter.value;
  const field = fieldFilter.value;

  const filteredPrograms = programs.filter(program => {
    const searchable = [
      program.name, program.level, program.field,
      program.tag, program.summary, program.focus
    ].join(" ").toLowerCase();

    return searchable.includes(query) &&
      (level === "all" || program.level === level) &&
      (field === "all" || program.field === field);
  });

  programGrid.innerHTML = filteredPrograms.map(program => `
    <article class="program-card">
      <div class="program-top">
        <span class="program-icon" aria-hidden="true">${escapeHTML(program.icon)}</span>
        <span class="program-tag">${escapeHTML(program.tag)}</span>
      </div>
      <h3>${escapeHTML(program.name)}</h3>
      <p>${escapeHTML(program.summary)}</p>
      <div class="program-card-actions">
        <button class="text-button" type="button" data-details="${escapeHTML(program.id)}">View Details →</button>
        <a class="text-button" href="#compare" data-choose="${escapeHTML(program.id)}">Compare</a>
      </div>
    </article>
  `).join("");

  resultCount.textContent = `${filteredPrograms.length} program${filteredPrograms.length === 1 ? "" : "s"}`;
  emptyState.hidden = filteredPrograms.length > 0;
}

function renderComparison() {
  if (!comparisonOutput) return;

  const first = getProgram(compareProgram1.value);
  const second = getProgram(compareProgram2.value);

  if (!first || !second) {
    comparisonOutput.innerHTML = `<p class="compare-placeholder">Select two programs to view the comparison.</p>`;
    return;
  }

  if (first.id === second.id) {
    comparisonOutput.innerHTML = `<p class="compare-placeholder">Please select two different programs.</p>`;
    return;
  }

  const makeList = items =>
    `<ul class="comparison-list">${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;

  comparisonOutput.innerHTML = `
    <table class="comparison-table">
      <thead><tr>
        <th scope="col">Comparison</th>
        <th scope="col">${escapeHTML(first.name)}</th>
        <th scope="col">${escapeHTML(second.name)}</th>
      </tr></thead>
      <tbody>
        <tr><th scope="row">Core Subjects</th><td>${makeList(first.subjects)}</td><td>${makeList(second.subjects)}</td></tr>
        <tr><th scope="row">Career Paths</th><td>${makeList(first.careers)}</td><td>${makeList(second.careers)}</td></tr>
      </tbody>
    </table>`;
}

function showDetails(id) {
  const program = getProgram(id);
  if (!program) return;

  dialogContent.innerHTML = `
    <div class="dialog-content">
      <span class="program-tag">${escapeHTML(program.level)} · ${escapeHTML(program.tag)}</span>
      <h2>${escapeHTML(program.name)}</h2>
      <p>${escapeHTML(program.definition)}</p>
      <h3>Core Subjects (general examples)</h3>
      <ul>${program.subjects.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
      <h3>What you may learn</h3><p>${escapeHTML(program.focus)}</p>
      <h3>Skills to develop</h3>
      <ul>${program.skills.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
      <h3>Possible Career Paths</h3>
      <ul>${program.careers.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
      <h3>May be suitable for</h3><p>${escapeHTML(program.suitable)}</p>
      <p style="margin-top:14px"><strong>Reminder:</strong> Confirm the official curriculum and program availability with AMA College Cavite.</p>
      <a class="button button-red" href="#inquiry" id="askProgram">Ask About This Program →</a>
    </div>`;

  if (typeof programDialog.showModal === "function") {
    programDialog.showModal();
  } else {
    alert(`${program.name}\n\n${program.summary}`);
  }

  $("askProgram").addEventListener("click", () => {
    inquiryProgram.value = program.id;
    programDialog.close();
  });
}

/* FIND MY PROGRAM SURVEY */

const recommendationForm = $("recommendationForm");
const recommendationResults = $("recommendationResults");
const recommendationGrid = $("recommendationGrid");
const recommendationIntro = $("recommendationIntro");
const surveyError = $("surveyError");

const collegeCourseField = $("collegeCourseField");
const seniorHighCourseField = $("seniorHighCourseField");
const collegeSkillsField = $("collegeSkillsField");
const seniorHighSkillsField = $("seniorHighSkillsField");
const collegeCareerField = $("collegeCareerField");
const seniorHighCareerField = $("seniorHighCareerField");

const collegeCourse = $("collegeCourse");
const seniorHighCourse = $("seniorHighCourse");
const careerPreference = $("careerPreference");
const seniorHighCareerPreference = $("seniorHighCareerPreference");
const clearRecommendation = $("clearRecommendation");
const retakeRecommendation = $("retakeRecommendation");

const collegeSkillWeights = {
  programming: ["bsit", "bscs", "bsce"],
  logic: ["bscs", "bsit", "bsce", "bsece", "bsa"],
  hardware: ["bsce", "bsit", "bsece"],
  electronics: ["bsece", "bsce"],
  creative: ["bsba-marketing"],
  people: ["bsba-hrm", "bsba-marketing"],
  numbers: ["bsba-fm", "bsa"],
  detail: ["bsa", "bsba-fm", "bsba-hrm"],
  research: ["bscs", "bsece", "bsce"],
  communication: ["bsba-marketing", "bsba-hrm"]
};

const shsSkillWeights = {
  technology: ["prog", "stem"],
  math: ["stem", "prog"],
  science: ["stem"],
  business: ["abm-tvl"],
  finance: ["abm-tvl"],
  creative: ["abm-tvl", "humss"],
  people: ["humss", "abm-tvl"],
  research: ["stem", "humss"],
  communication: ["humss", "abm-tvl"]
};

const collegeCareerWeights = {
  technology: ["bsit", "bscs"],
  engineering: ["bsce", "bsece"],
  business: ["bsba-marketing", "bsba-hrm"],
  finance: ["bsba-fm", "bsa"],
  people: ["bsba-hrm", "bsba-marketing"],
  science: ["bscs", "bsce", "bsece"],
  undecided: []
};

const shsCareerWeights = {
  technology: ["prog", "stem"],
  math: ["stem", "prog"],
  business: ["abm-tvl"],
  finance: ["abm-tvl"],
  people: ["humss"],
  humanities: ["humss"],
  science: ["stem"],
  undecided: []
};

function selectedLevel() {
  return document.querySelector('input[name="targetLevel"]:checked')?.value || "College";
}

function setSurveyLevel() {
  const isCollege = selectedLevel() === "College";

  collegeCourseField.hidden = !isCollege;
  seniorHighCourseField.hidden = isCollege;
  collegeSkillsField.hidden = !isCollege;
  seniorHighSkillsField.hidden = isCollege;
  collegeCareerField.hidden = !isCollege;
  seniorHighCareerField.hidden = isCollege;

  collegeCourse.disabled = !isCollege;
  seniorHighCourse.disabled = isCollege;
  careerPreference.disabled = !isCollege;
  seniorHighCareerPreference.disabled = isCollege;

  collegeSkillsField.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.disabled = !isCollege;
    if (!isCollege) input.checked = false;
  });

  seniorHighSkillsField.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.disabled = isCollege;
    if (isCollege) input.checked = false;
  });

  surveyError.hidden = true;
  recommendationResults.hidden = true;

  updateClearSelectionVisibility();
}

/* One red-text clear option per dropdown.
   It only appears when the user has selected a value. */

function addClearSelection(select) {
  if (!select || select.dataset.clearAdded === "true") return;

  select.dataset.clearAdded = "true";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "clear-selection";
  button.textContent = "Clear option";
  button.hidden = true;

  button.addEventListener("click", () => {
    select.value = "";
    select.dispatchEvent(new Event("change", { bubbles: true }));
    updateClearSelectionVisibility();
  });

  select.insertAdjacentElement("afterend", button);

  select.addEventListener("change", updateClearSelectionVisibility);
}

function updateClearSelectionVisibility() {
  document.querySelectorAll("#recommendationForm select").forEach(select => {
    const button = select.nextElementSibling;

    if (button && button.classList.contains("clear-selection")) {
      button.hidden = !select.value || select.disabled;
    }
  });
}

function getCheckedSkills(field) {
  return [...field.querySelectorAll('input[type="checkbox"]:checked')]
    .map(input => input.value);
}

function getWeightedRecommendations(level, skills, preference, chosenProgram) {
  const isCollege = level === "College";
  const validPrograms = programs.filter(program => program.level === level);
  const skillWeights = isCollege ? collegeSkillWeights : shsSkillWeights;
  const careerWeights = isCollege ? collegeCareerWeights : shsCareerWeights;

  const scores = validPrograms.map(program => {
    let score = 0;

    skills.forEach(skill => {
      if (skillWeights[skill]?.includes(program.id)) score += 2;
    });

    (careerWeights[preference] || []).forEach(id => {
      if (id === program.id) score += 3;
    });

    if (chosenProgram && program.id === chosenProgram) score += 5;

    return { program, score };
  });

  scores.sort((a, b) => b.score - a.score);

  const hasAnyScore = scores.some(item => item.score > 0);

  return hasAnyScore
    ? scores.filter(item => item.score > 0).slice(0, 3)
    : scores.slice(0, 3);
}

function renderRecommendations(results, level) {
  recommendationGrid.innerHTML = results.map((item, index) => `
    <article class="recommendation-result-card">
      <span class="match-rank">${index === 0 ? "Best match" : `Option ${index + 1}`}</span>
      <h4>${escapeHTML(item.program.name)}</h4>
      <p>${escapeHTML(item.program.summary)}</p>
      <p><strong>Why explore this?</strong> ${escapeHTML(item.program.suitable)}</p>
      <button type="button" data-survey-details="${escapeHTML(item.program.id)}">View details →</button>
    </article>
  `).join("");

  recommendationIntro.textContent = level === "College"
    ? "These college programs match the skills and career interests you selected."
    : "These Senior High School strands match the subjects and interests you selected.";

  recommendationResults.hidden = false;
}

recommendationForm.addEventListener("change", event => {
  if (event.target.matches('input[name="targetLevel"]')) {
    setSurveyLevel();
  }
});

recommendationForm.addEventListener("submit", event => {
  event.preventDefault();

  const level = selectedLevel();
  const isCollege = level === "College";
  const skills = getCheckedSkills(isCollege ? collegeSkillsField : seniorHighSkillsField);
  const preference = isCollege ? careerPreference.value : seniorHighCareerPreference.value;
  const chosenProgram = isCollege ? collegeCourse.value : seniorHighCourse.value;

  if (skills.length === 0 || !preference) {
    surveyError.textContent = "Please select at least one relevant skill or interest and choose a preference.";
    surveyError.hidden = false;
    recommendationResults.hidden = true;
    return;
  }

  surveyError.hidden = true;

  const results = getWeightedRecommendations(level, skills, preference, chosenProgram);
  renderRecommendations(results, level);
  recommendationResults.scrollIntoView({ behavior: "smooth", block: "start" });
});

recommendationGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-survey-details]");
  if (button) showDetails(button.dataset.surveyDetails);
});

function clearSurvey() {
  recommendationForm.reset();

  const collegeRadio = document.querySelector('input[name="targetLevel"][value="College"]');
  if (collegeRadio) collegeRadio.checked = true;

  collegeCourse.value = "";
  seniorHighCourse.value = "";
  careerPreference.value = "";
  seniorHighCareerPreference.value = "";

  recommendationForm.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.checked = false;
  });

  surveyError.hidden = true;
  recommendationResults.hidden = true;
  recommendationGrid.innerHTML = "";

  setSurveyLevel();
  updateClearSelectionVisibility();
}

clearRecommendation.addEventListener("click", clearSurvey);

retakeRecommendation.addEventListener("click", () => {
  clearSurvey();
  recommendationForm.scrollIntoView({ behavior: "smooth", block: "start" });
});

addClearSelection(collegeCourse);
addClearSelection(seniorHighCourse);
addClearSelection(careerPreference);
addClearSelection(seniorHighCareerPreference);

setSurveyLevel();

/* SEARCH AND PROGRAM LISTING */

$("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  renderPrograms();
  $("programs").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", renderPrograms);
levelFilter.addEventListener("change", renderPrograms);
fieldFilter.addEventListener("change", renderPrograms);

programGrid.addEventListener("click", event => {
  const detailsButton = event.target.closest("[data-details]");

  if (detailsButton) {
    showDetails(detailsButton.dataset.details);
    return;
  }

  const compareLink = event.target.closest("[data-choose]");
  if (!compareLink) return;

  const id = compareLink.dataset.choose;

  if (!compareProgram1.value) {
    compareProgram1.value = id;
  } else if (!compareProgram2.value && compareProgram1.value !== id) {
    compareProgram2.value = id;
  } else if (compareProgram1.value !== id) {
    compareProgram1.value = id;
  } else {
    compareProgram2.value = "";
  }

  renderComparison();
});

compareProgram1.addEventListener("change", renderComparison);
compareProgram2.addEventListener("change", renderComparison);

$("closeDialog").addEventListener("click", () => programDialog.close());

programDialog.addEventListener("click", event => {
  if (event.target === programDialog) programDialog.close();
});

/* MOBILE NAVIGATION */

const navLinks = $("navLinks");
const menuToggle = $("menuToggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

/* ADMISSION GUIDE */

const admissionGuides = {
  new: {
    title: "New Student: General Guide",
    steps: [
      "Choose your preferred program.",
      "Contact the admissions office for the current list of requirements.",
      "Prepare and submit the documents requested by the school.",
      "Confirm application steps, fees, deadlines, and enrollment instructions with authorized personnel."
    ]
  },
  transferee: {
    title: "Transferee: General Guide",
    steps: [
      "Ask whether your preferred program accepts transferees.",
      "Request the current list of transfer and credential requirements.",
      "Prepare your transcript and other documents as instructed by the school.",
      "Confirm credit evaluation, deadlines, and next steps with admissions."
    ]
  },
  shs: {
    title: "Senior High School Applicant: General Guide",
    steps: [
      "Confirm the available SHS strands for the current school year.",
      "Ask admissions for the current application requirements.",
      "Prepare the school records and documents requested.",
      "Confirm the enrollment process and schedule with the school."
    ]
  },
  international: {
    title: "International Applicant: General Guide",
    steps: [
      "Contact the school to confirm eligibility and available programs.",
      "Ask for the current academic, identification, and immigration-related requirements.",
      "Prepare documents in the formats requested by the school.",
      "Confirm processing steps, fees, and timelines with authorized personnel."
    ]
  }
};

document.querySelectorAll("[data-admission]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-admission]").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    const guide = admissionGuides[button.dataset.admission];

    $("admissionContent").innerHTML = `
      <h3>${escapeHTML(guide.title)}</h3>
      <ol>${guide.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol>`;
  });
});

/* INQUIRY FORM */

inquiryForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!inquiryForm.checkValidity()) {
    inquiryForm.reportValidity();
    return;
  }

  formStatus.textContent =
    "Form validation successful, but this is a frontend demo. No inquiry was sent or saved because a backend has not been connected.";
});

/* INITIALIZE WEBSITE */

$("currentYear").textContent = new Date().getFullYear();

populateSelect(compareProgram1, "Choose first program");
populateSelect(compareProgram2, "Choose second program");
populateSelect(inquiryProgram, "Not yet decided");

renderPrograms();
renderComparison();
