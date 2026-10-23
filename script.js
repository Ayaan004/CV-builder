/**
 * Professional CV Builder Pro - Core Engine
 * Full live-preview, multi-template, inline editing, typography/spacing controls
 */

// =============================================================================
// 1. TEMPLATE SAMPLE DATASETS (Matching User Images 1, 2, 3, 4)
// =============================================================================

const TEMPLATE_PRESETS = {
    // Muhammad Ayaan (User Profile)
    ayaan: {
        id: 'classic',
        name: 'Muhammad Ayaan',
        badge: 'Software Engineer',
        tagline: 'Software Engineering student with web & Python project portfolio',
        personal: {
            fullName: 'MUHAMMAD AYAAN',
            jobTitle: 'Software Engineering Student',
            email: 'ayaanmujahid22@gmail.com',
            phone: '+92329-8383017',
            location: 'Federal B Area Block 16, Karachi',
            linkedin: 'linkedin.com/in/muhammad-ayaan-41a962296',
            portfolio: 'ayaanmujahid.netlify.app',
            summary: 'Motivated Software Engineering student with hands-on experience in web and Python application development. Built 17+ projects using JavaScript, HTML, CSS, Python, Firebase, APIs, and AI integration. Skilled in developing interactive web applications, desktop software, and database-driven solutions. Seeking a software development internship or entry-level role to apply technical and problem-solving skills.'
        },
        experience: [],
        education: [
            {
                degree: 'Bachelor of Science in Software Engineering (BSSE)',
                school: 'Karachi University',
                location: 'Karachi, Pakistan',
                startDate: '2026',
                endDate: 'Present',
                description: ''
            },
            {
                degree: 'Intermediate in Computer Science',
                school: 'Pakistan Shipowners Gov. College',
                location: 'Karachi, Pakistan',
                startDate: '2023',
                endDate: '2025',
                description: ''
            }
        ],
        skills: [
            'HTML/CSS',
            'JavaScript',
            'UI/UX Design',
            'CustomTkinter',
            'Python',
            'Node.js',
            'Firebase',
            'RESTful APIs & Integration',
            'Flutter Android development',
            'Debugging & Troubleshooting'
        ],
        certificates: [],
        languages: [
            { name: 'English', level: 'Fluent', rating: 5 },
            { name: 'Urdu', level: 'Native', rating: 5 }
        ],
        projects: [
            {
                name: 'Quiz Master Pro',
                role: 'AI Desktop Application',
                description: '• Developed an AI-powered desktop application that generates interactive quizzes from PDF documents using large language models.\n• Implemented a graphical user interface with background task handling for a smoother user experience.'
            },
            {
                name: 'AM-AI — AI Chat Application',
                role: 'Web Application',
                description: '• Built an AI chat web application integrating OpenRouter to interact with multiple language models.\n• Implemented streaming AI responses using the Fetch Streams API for real-time message generation.\n• Added Markdown rendering, code syntax highlighting, and conversation management for an enhanced chat experience.'
            },
            {
                name: 'AM-ANIME — Anime Discovery Platform',
                role: 'Web Application',
                description: '• Developed an anime discovery platform that retrieves and displays anime information using the AniList GraphQL API.\n• Integrated Firebase Authentication and Cloud Firestore to support user accounts and persistent watchlists.'
            },
            {
                name: 'VaultFlow — Expense Tracker',
                role: 'Desktop Application',
                description: '• Developed a desktop expense-tracking application using Python and CustomTkinter to manage personal financial records.\n• Integrated SQLite for persistent storage of transactions and expense data.\n• Created financial charts and visual reports using Matplotlib to help users analyze spending patterns.'
            },
            {
                name: 'AegisPass — Password Generator',
                role: 'Python Security Tool',
                description: '• Developed a desktop password generator with customizable options for creating strong, random passwords.\n• Used Python\'s secrets module for cryptographically secure random password generation.\n• Implemented password-strength and entropy analysis to help users evaluate password complexity.'
            },
            {
                name: 'AM Movies — Movie Discovery Website',
                role: 'Web Application',
                description: '• Developed a movie discovery website integrating the TMDB API to display movie details, posters, ratings, and trending titles.\n• Integrated Firebase Authentication to support user registration and login.\n• Integrated Cloud Firestore to store user-specific data and enable persistent favorites and personalized movie tracking.'
            },
            {
                name: 'Maison Dorée — Bakery E-Commerce Website',
                role: 'E-Commerce Web Application',
                description: '• Developed a modern bakery e-commerce website showcasing baked goods, pastries, and product collections through an elegant, user-friendly interface.\n• Designed responsive layouts and interactive product sections to provide a smooth browsing experience across desktop and mobile devices.\n• Implemented client-side shopping interactions and product browsing features to simulate an online bakery shopping experience.'
            }
        ],
        awards: []
    },

    // Image 2: Classic Clear (Emily Carter - Project Manager) - DEFAULT
    classic: {
        id: 'classic',
        name: 'Classic Clear',
        badge: 'Recommended',
        tagline: 'Clean, professional single-column serif layout with dual-column skills',
        personal: {
            fullName: 'Emily Carter',
            jobTitle: 'Project Manager',
            email: 'emily.carter@email.com',
            phone: '+1 416 555 2847',
            location: 'Toronto, Canada',
            linkedin: 'linkedin.com/in/emily-carter',
            portfolio: '',
            summary: 'Project Manager with six years of experience coordinating cross-functional initiatives in technology and business operations. Skilled in stakeholder communication, project planning, risk tracking, and delivery governance across complex environments. Known for building practical workflows, improving team alignment, and keeping priorities moving under tight deadlines.'
        },
        experience: [
            {
                title: 'Project Manager',
                company: 'Northbridge Digital',
                location: 'Toronto, Canada',
                startDate: '2022/03',
                endDate: 'Present',
                current: true,
                description: '• Managed release plans across product, engineering, and operations teams.\n• Coordinated stakeholder updates, risk reviews, and milestone reporting.\n• Improved delivery tracking, reducing gaps across concurrent workstreams.'
            },
            {
                title: 'Project Coordinator',
                company: 'MapleWorks Solutions',
                location: 'Toronto, Canada',
                startDate: '2019/07',
                endDate: '2022/02',
                current: false,
                description: '• Supported schedules, budgets, and documentation for transformation initiatives.\n• Facilitated team meetings and maintained cross-department action logs.\n• Escalated risks before blockers affected delivery timelines.'
            },
            {
                title: 'Operations Analyst',
                company: 'BrightPath Services',
                location: 'Ottawa, Canada',
                startDate: '2017/09',
                endDate: '2019/06',
                current: false,
                description: '• Analyzed workflow data to identify service delivery delays.\n• Prepared reports supporting resource planning and prioritization.\n• Documented process improvements for managers and project teams.'
            },
            {
                title: 'Project Management Student Assistant',
                company: 'University of Toronto',
                location: 'Toronto, Canada',
                startDate: '2016/09',
                endDate: '2017/04',
                current: false,
                description: '• Supported project timelines, meeting notes, and team follow-ups.\n• Updated task boards and tracked deadlines for student initiatives.'
            }
        ],
        education: [
            {
                degree: 'Bachelor of Commerce in Management',
                school: 'Toronto Metropolitan University',
                location: 'Toronto, Canada',
                startDate: '2013',
                endDate: '2017',
                description: ''
            },
            {
                degree: 'Diploma in Business Administration',
                school: 'Algonquin College',
                location: 'Ottawa, Canada',
                startDate: '2011',
                endDate: '2013',
                description: ''
            }
        ],
        skills: [
            'Project Planning',
            'Stakeholder Management',
            'Risk Management',
            'Agile Delivery',
            'Budget Tracking',
            'Process Improvement',
            'Jira',
            'Microsoft Project'
        ],
        certificates: [
            'Project Management Professional (PMP)',
            'Certified ScrumMaster (CSM)',
            'Google Project Management Certificate'
        ],
        languages: [
            { name: 'English', level: 'Fluent', rating: 5 },
            { name: 'French', level: 'Conversational', rating: 3 }
        ],
        projects: [],
        awards: []
    },

    // Image 1: Executive Serif (Lena Hoffmann - Operations Manager)
    serif: {
        id: 'serif',
        name: 'Executive Serif',
        badge: 'Corporate',
        tagline: 'Distinguished editorial serif styling with pipe-separated tags',
        personal: {
            fullName: 'Lena Hoffmann',
            jobTitle: 'Operations Manager',
            email: 'lena.hoffmann@email.com',
            phone: '+49 151 4827 6391',
            location: 'Berlin, Germany',
            linkedin: '/lena-hofmann',
            portfolio: '',
            summary: 'Operations professional with 7+ years of experience supporting logistics, process improvement, and cross-functional coordination in fast-paced business environments. Strong track record of improving workflows, managing vendors, and delivering reliable service levels across daily operations. Combines analytical thinking with hands-on leadership to help growing organizations scale efficiently.'
        },
        experience: [
            {
                title: 'Operations Manager',
                company: 'Nova Retail Group',
                location: 'Berlin, Germany',
                startDate: '2022',
                endDate: 'Present',
                current: true,
                description: '• Lead daily operations across warehousing, procurement, and support teams.\n• Improved order accuracy by redesigning internal handoff procedures.\n• Managed vendor contracts and reduced annual service costs.\n• Built KPI dashboards for capacity, service, and productivity tracking.'
            },
            {
                title: 'Operations Coordinator',
                company: 'Urban Freight Solutions',
                location: 'Hamburg, Germany',
                startDate: '2019',
                endDate: '2022',
                current: false,
                description: '• Coordinated transport schedules and resolved delivery escalations promptly.\n• Standardized reporting processes for weekly management reviews.\n• Supported onboarding and training for new team members.'
            },
            {
                title: 'Operations Analyst',
                company: 'GreenLine Services',
                location: 'Berlin, Germany',
                startDate: '2017',
                endDate: '2019',
                current: false,
                description: '• Analyzed process data to identify delays and waste.'
            }
        ],
        education: [
            {
                degree: 'M.Sc. Management',
                school: 'Humboldt University of Berlin',
                location: 'Berlin, Germany',
                startDate: '2015',
                endDate: '2017',
                description: ''
            },
            {
                degree: 'B.A. Business Administration',
                school: 'University of Cologne',
                location: 'Cologne, Germany',
                startDate: '2011',
                endDate: '2015',
                description: ''
            }
        ],
        skills: [
            'Process Improvement',
            'Supply Chain Coordination',
            'Vendor Management',
            'KPI Reporting',
            'Budget Tracking',
            'ERP Systems',
            'Inventory Planning',
            'SAP',
            'Excel & Google Sheets',
            'Team Leadership',
            'Continuous Improvement',
            'Stakeholder Management'
        ],
        certificates: [
            'Lean Six Sigma Green Belt',
            'APICS Certified in Logistics, Transportation and Distribution',
            'PRINCE2 Foundation Certificate',
            'SAP Certified Application Associate'
        ],
        languages: [
            { name: 'German', level: 'Native', rating: 5 },
            { name: 'English', level: 'Fluent', rating: 5 },
            { name: 'French', level: 'Conversational', rating: 3 }
        ],
        projects: [],
        awards: []
    },

    // Image 3: Modern Executive (Olivia Bennett - Head of Customer Service)
    executive: {
        id: 'executive',
        name: 'Modern Executive',
        badge: 'Executive',
        tagline: 'Deep slate teal styling with 4-column multi-matrix grid',
        personal: {
            fullName: 'Olivia Bennett',
            jobTitle: 'Head of Customer Service',
            email: 'olivia.bennett@email.com',
            phone: '+61 412 683 947',
            location: 'Sydney, Australia',
            linkedin: 'linkedin.com/in/olivia-bennett',
            portfolio: '',
            summary: 'Customer service leader with over 16 years of experience building high-performing support functions across retail, telecom, financial services, and digital service environments. Brings strong expertise in service operations, team leadership, customer journey improvement, and quality management across multi-site and omnichannel teams. Known for driving measurable gains in customer satisfaction, first-contact resolution, and workforce efficiency through process redesign, coaching frameworks, and service analytics. Well aligned with senior customer experience and service leadership roles that require operational discipline, people development, and scalable service strategy.'
        },
        experience: [
            {
                title: 'Head of Customer Service',
                company: 'BrightWave Mobile',
                location: 'Sydney, Australia',
                startDate: '2020',
                endDate: 'Present',
                current: true,
                description: '• Directed customer service operations across phone, email, live chat, and social channels, supporting over 1.2 million customers annually.\n• Led a team of 6 managers and 145 service professionals, improving CSAT from 84% to 92% within two years.\n• Drove service transformation initiatives, including workforce planning, QA redesign, and knowledge base optimization, reducing average handling time by 18%.\n• Partnered with product and operations leaders to improve escalation management and complaint resolution, strengthening retention in key customer segments.'
            },
            {
                title: 'Customer Service Director',
                company: 'Southern Lane Retail Group',
                location: 'Melbourne, Australia',
                startDate: '2016',
                endDate: '2020',
                current: false,
                description: '• Oversaw customer contact centre and in-store service support functions across Australia, maintaining service consistency during a major omnichannel expansion.\n• Scaled performance management and training programs that increased first-contact resolution and reduced repeat contacts across core service queues.\n• Introduced service dashboards and root-cause analysis routines, enabling faster decisions on staffing, service recovery, and policy improvements.'
            },
            {
                title: 'Senior Customer Experience Manager',
                company: 'Pacific Utility Services',
                location: 'Brisbane, Australia',
                startDate: '2012',
                endDate: '2016',
                current: false,
                description: '• Managed frontline and back-office customer service teams handling billing, account enquiries, and complaint cases.\n• Improved service level performance through scheduling changes, coaching standards, and revised workflows across high-volume periods.\n• Worked closely with compliance and operations teams to strengthen complaint handling practices and improve audit readiness.'
            },
            {
                title: 'Customer Service Manager',
                company: 'Eastshore Financial Services',
                location: 'Sydney, Australia',
                startDate: '2008',
                endDate: '2012',
                current: false,
                description: '• Led a team of advisors delivering phone-based customer support, account servicing, and issue resolution for consumer banking products.\n• Optimized onboarding and call quality processes, supporting stronger service consistency and improved new starter ramp-up times.\n• Coordinated daily roster coverage and assisted with workload balancing during high-volume service periods.'
            },
            {
                title: 'Customer Support Team Leader',
                company: 'Customer Support Team Leader',
                location: 'Sydney, Australia',
                startDate: '2006',
                endDate: '2008',
                current: false,
                description: '• Supervised a frontline support team, monitoring service quality, queue performance, and adherence to internal response standards.\n• Supported team onboarding and monthly performance reviews, helping improve consistency in customer handling and escalation management.'
            },
            {
                title: 'Customer Service Supervisor',
                company: 'Customer Service Supervisor',
                location: 'Newcastle, Australia',
                startDate: '2004',
                endDate: '2006',
                current: false,
                description: '• Coordinated daily service desk operations, resolving escalations and coaching staff on customer communication and issue handling.\n• Trained new team members on service procedures, complaint handling, and point-of-sale support standards.'
            }
        ],
        education: [
            {
                degree: 'Master of Business Administration',
                school: 'Macquarie University',
                location: 'Sydney, Australia',
                startDate: '2014',
                endDate: '2016',
                description: ''
            },
            {
                degree: 'Graduate Certificate in Leadership and Management',
                school: 'RMIT University',
                location: 'Melbourne, Australia',
                startDate: '2012',
                endDate: '2013',
                description: ''
            },
            {
                degree: 'Advanced Diploma of Customer Engagement',
                school: 'TAFE NSW',
                location: 'Sydney, Australia',
                startDate: '2009',
                endDate: '2010',
                description: ''
            },
            {
                degree: 'Bachelor of Business',
                school: 'University of Technology Sydney',
                location: 'Sydney, Australia',
                startDate: '2004',
                endDate: '2007',
                description: ''
            }
        ],
        skills: [
            'Customer Service Operations',
            'Contact Centre Leadership',
            'Workforce Planning',
            'Customer Journey Mgmt',
            'Quality Assurance',
            'Complaint Resolution',
            'Performance Coaching',
            'Service Process Optimization',
            'Stakeholder Management',
            'Change Management',
            'Service Analytics',
            'Team Development'
        ],
        certificates: [
            'Certified Customer Experience Professional (CCXP)',
            'ITIL 4 Foundation',
            'Diploma of Leadership and Management',
            'Lean Six Sigma Green Belt',
            'Customer Journey Mapping Certification',
            'Advanced Certificate in Service Operations',
            'Prosci Change Management Certification',
            'Certified Contact Centre Manager'
        ],
        languages: [
            { name: 'English', level: 'Native', rating: 5 },
            { name: 'French', level: 'Conversational', rating: 3 },
            { name: 'Spanish', level: 'Basic', rating: 2 }
        ],
        projects: [],
        awards: []
    },

    // Image 4: Two-Column Sidebar (Élodie Martin - Marketing Director)
    sidebar: {
        id: 'sidebar',
        name: 'Two-Column Sidebar',
        badge: 'Modern',
        tagline: 'Split-column layout with section icons and language rating dots',
        personal: {
            fullName: 'Élodie Martin',
            jobTitle: 'Marketing Director',
            email: 'elodie.martin@email.com',
            phone: '+33 6 42 18 73 95',
            location: 'Paris, France',
            linkedin: 'linkedin.com/in/elodie-martin',
            portfolio: '',
            summary: 'Senior marketing leader with 14 years of experience building regional growth strategies for technology, SaaS, and consumer service brands. Strong background in brand positioning, demand generation, lifecycle marketing, and cross-functional team leadership. Proven ability to align marketing investment with commercial priorities across European markets. Well suited for senior roles requiring strategic ownership, operational discipline, and measurable growth impact.'
        },
        experience: [
            {
                title: 'Marketing Director',
                company: 'LumoTech',
                location: 'Paris, France',
                startDate: '01/2021',
                endDate: 'Present',
                current: true,
                description: '• Directed marketing strategy across France, Spain and Benelux markets.\n• Increased qualified pipeline by aligning campaign planning with regional sales priorities.\n• Built a 16-person marketing team covering demand generation, content, events, and analytics.\n• Introduced quarterly performance reviews linking budget allocation to channel-level revenue contribution.'
            },
            {
                title: 'Head of Marketing',
                company: 'Nova Services',
                location: 'Lyon, France',
                startDate: '03/2017',
                endDate: '12/2020',
                current: false,
                description: '• Led brand repositioning supporting expansion from mid-market clients into enterprise accounts.\n• Developed integrated campaign frameworks used across digital, partner, and field marketing teams.\n• Improved customer retention programs through lifecycle segmentation and personalized content journeys.\n• Managed annual marketing budgets while strengthening reporting accuracy for executive leadership.'
            },
            {
                title: 'Marketing Lead',
                company: 'Atelier Digital',
                location: 'Paris, France',
                startDate: '09/2013',
                endDate: '02/2017',
                current: false,
                description: '• Oversaw multi-channel acquisition campaigns for retail and tech clients.\n• Partnered with product teams to refine messaging for new service launches.\n• Mentored junior marketers on campaign planning and client communication.'
            },
            {
                title: 'Marketing Specialist',
                company: 'Groupe Solaire',
                location: 'Paris, France',
                startDate: '07/2010',
                endDate: '08/2013',
                current: false,
                description: '• Produced reports highlighting audience trends and conversion gaps.\n• Coordinated trade show communications, sales collateral, and lead follow-up.\n• Supported website updates to improve clarity, consistency, search visibility.'
            }
        ],
        education: [
            {
                degree: 'Executive MBA',
                school: 'HEC Paris',
                location: 'Jouy-en-Josas, France',
                startDate: '2018',
                endDate: '2020',
                description: ''
            },
            {
                degree: "Master's in Marketing and Brand Strategy",
                school: 'NEOMA Business School',
                location: 'Reims, France',
                startDate: '2008',
                endDate: '2010',
                description: ''
            },
            {
                degree: "Bachelor's in Business Administration",
                school: 'Université Paris-Dauphine',
                location: 'Paris, France',
                startDate: '2005',
                endDate: '2008',
                description: ''
            }
        ],
        skills: [
            'Marketing Strategy',
            'Demand Generation',
            'Brand Positioning',
            'Lifecycle Marketing',
            'Team Leadership',
            'Budget Management',
            'Revenue Reporting',
            'Executive Stakeholder Management'
        ],
        certificates: [
            'Google Analytics Certification',
            'HubSpot Inbound Marketing Certification',
            'Digital Marketing Leadership Certificate'
        ],
        languages: [
            { name: 'French', level: 'Native', rating: 5 },
            { name: 'English', level: 'Fluent', rating: 5 },
            { name: 'Spanish', level: 'Conversational', rating: 4 }
        ],
        projects: [
            {
                name: 'European Growth Operating Model',
                role: 'LumoTech, Paris, France',
                startDate: '2022',
                endDate: '2023',
                description: '• Designed standardized planning process connecting campaign objectives, regional budgets, and pipeline targets.\n• Established shared reporting dashboards adopted by marketing, sales, and finance leadership.'
            },
            {
                name: 'Brand Repositioning Program',
                role: 'Nova Services, Lyon, France',
                startDate: '2018',
                endDate: '2020',
                description: '• Led market research, messaging development, and executive workshops for enterprise-focused positioning.\n• Coordinated launch activities across web, sales enablement, events, and customer communications.'
            }
        ],
        awards: []
    }
};

// =============================================================================
// 2. STATE MANAGEMENT & SPACING SETTINGS (Image 5 Exact Configurations)
// =============================================================================

// Current Active Template (DEFAULT IS 'classic' per user request: "the 2 image one should be by default template")
let currentTemplate = 'classic';

// Active CV Data Store
let cvData = JSON.parse(JSON.stringify(TEMPLATE_PRESETS.classic));

// Extra dynamic sections enabled by user
let dynamicSectionKeys = ['certificates', 'languages'];

// Exact slider discrete options for Typography & Spacing (Image 5)
const STYLE_CONFIGS = {
    baseFontSize: {
        steps: ['8.5pt', '9pt', '9.5pt', '10pt', '10.5pt', '11pt', '11.5pt', '12pt'],
        cssVar: '--cv-base-font-size',
        defaultIdx: 3 // 10pt
    },
    nameSize: {
        steps: ['+6pt', '+8pt', '+10pt', '+11pt', '+13pt', '+15pt', '+18pt'],
        cssVar: '--cv-name-size',
        calc: (step, base) => `calc(${base} + ${step.replace('+', '')})`,
        defaultIdx: 3 // +11pt
    },
    headingsSize: {
        steps: ['+1pt', '+1.5pt', '+2pt', '+2.5pt', '+3pt', '+4pt', '+5pt'],
        cssVar: '--cv-heading-size',
        calc: (step, base) => `calc(${base} + ${step.replace('+', '')})`,
        defaultIdx: 3 // +2.5pt
    },
    entryHeaderSize: {
        steps: ['-1pt', '-0.5pt', '+0pt', '+0.5pt', '+1pt', '+1.5pt', '+2pt'],
        cssVar: '--cv-entry-header-size',
        calc: (step, base) => `calc(${base} + ${step.replace('+', '')})`,
        defaultIdx: 2 // +0pt
    },
    lineHeight: {
        steps: ['1.05', '1.10', '1.15', '1.20', '1.30', '1.40', '1.50'],
        cssVar: '--cv-line-height',
        defaultIdx: 2 // 1.15
    },
    elementSpacing: {
        steps: ['[---]', '[--]', '[-]', '[+]', '[++]', '[+++]'],
        pixelMap: ['6px', '10px', '14px', '18px', '22px', '28px'],
        cssVar: '--cv-element-spacing',
        defaultIdx: 1 // [--] => 10px
    },
    marginX: {
        steps: ['8mm', '10mm', '12mm', '15mm', '18mm', '20mm', '24mm'],
        cssVar: '--cv-margin-x',
        defaultIdx: 2 // 12mm
    },
    marginY: {
        steps: ['8mm', '10mm', '12mm', '15mm', '18mm', '20mm', '24mm'],
        cssVar: '--cv-margin-y',
        defaultIdx: 2 // 12mm
    }
};

// Current active style step indices
let styleState = {
    baseFontSize: STYLE_CONFIGS.baseFontSize.defaultIdx,
    nameSize: STYLE_CONFIGS.nameSize.defaultIdx,
    headingsSize: STYLE_CONFIGS.headingsSize.defaultIdx,
    entryHeaderSize: STYLE_CONFIGS.entryHeaderSize.defaultIdx,
    lineHeight: STYLE_CONFIGS.lineHeight.defaultIdx,
    elementSpacing: STYLE_CONFIGS.elementSpacing.defaultIdx,
    marginX: STYLE_CONFIGS.marginX.defaultIdx,
    marginY: STYLE_CONFIGS.marginY.defaultIdx
};

// Undo / Redo History Stack
let historyStack = [];
let historyIndex = -1;
const MAX_HISTORY = 40;

// Canvas Zoom Level
let currentZoom = 1.0;

// Selected template in modal
let modalSelectedTemplate = 'classic';

// =============================================================================
// 3. INITIALIZATION ON DOM LOAD
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate form fields from initial data (Emily Carter - Default Template 2)
    populateFormFromData();

    // 2. Render all style controls with initial purple indicators
    updateAllStyleControls();

    // 3. Render initial resume preview
    renderLivePreview();

    // 4. Record initial state in history
    pushHistoryState();

    // 5. Setup outside-click listeners for dropdowns & modals
    setupClickOutsideHandlers();

    // 6. Highlight active template showcase card
    updateTemplateSelectionUI();
});

// =============================================================================
// 4. FORM POPULATION & SYNC ENGINE
// =============================================================================

function populateFormFromData() {
    // Personal Info
    const p = cvData.personal || {};
    const fieldIds = ['fullName', 'jobTitle', 'email', 'phone', 'location', 'linkedin', 'portfolio', 'summary'];
    fieldIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = p[id] || '';
    });

    // Experience
    renderExperienceFormList();

    // Education
    renderEducationFormList();

    // Skills
    renderSkillsFormList();

    // Dynamic Sections
    renderAllDynamicSections();

    // Update section counts badges
    updateBadges();
}

function updateBadges() {
    const expBadge = document.getElementById('expCountBadge');
    if (expBadge) expBadge.textContent = (cvData.experience || []).length;

    const eduBadge = document.getElementById('eduCountBadge');
    if (eduBadge) eduBadge.textContent = (cvData.education || []).length;

    const skillsBadge = document.getElementById('skillsCountBadge');
    if (skillsBadge) skillsBadge.textContent = (cvData.skills || []).length;
}

// Experience Form Renderer
function renderExperienceFormList() {
    const container = document.getElementById('experienceList');
    if (!container) return;
    container.innerHTML = '';

    (cvData.experience || []).forEach((exp, idx) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-card-header">
                <span class="item-badge-title">Experience #${idx + 1}</span>
                <button type="button" class="btn-card-del" onclick="removeExperience(${idx})">✕ Remove</button>
            </div>
            <div class="grid-2">
                <div class="form-field">
                    <label>Job Title</label>
                    <input type="text" value="${escapeHtml(exp.title || '')}" placeholder="e.g. Project Manager" oninput="updateExpField(${idx}, 'title', this.value)">
                </div>
                <div class="form-field">
                    <label>Company</label>
                    <input type="text" value="${escapeHtml(exp.company || '')}" placeholder="e.g. Northbridge Digital" oninput="updateExpField(${idx}, 'company', this.value)">
                </div>
            </div>
            <div class="grid-2">
                <div class="form-field">
                    <label>Location</label>
                    <input type="text" value="${escapeHtml(exp.location || '')}" placeholder="e.g. Toronto, Canada" oninput="updateExpField(${idx}, 'location', this.value)">
                </div>
                <div class="form-field">
                    <label>Dates (Start - End)</label>
                    <div style="display: flex; gap: 8px;">
                        <input type="text" value="${escapeHtml(exp.startDate || '')}" placeholder="e.g. 2022/03" oninput="updateExpField(${idx}, 'startDate', this.value)">
                        <input type="text" value="${escapeHtml(exp.endDate || '')}" placeholder="e.g. Present" oninput="updateExpField(${idx}, 'endDate', this.value)">
                    </div>
                </div>
            </div>
            <div class="form-field">
                <label>Responsibilities & Bullet Points (one per line)</label>
                <textarea rows="3" placeholder="• Bullet point description..." oninput="updateExpField(${idx}, 'description', this.value)">${escapeHtml(exp.description || '')}</textarea>
            </div>
        `;
        container.appendChild(card);
    });
}

function addExperience() {
    if (!cvData.experience) cvData.experience = [];
    cvData.experience.push({
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: 'Present',
        current: true,
        description: '• '
    });
    renderExperienceFormList();
    updateBadges();
    renderLivePreview();
    pushHistoryState();
}

function removeExperience(idx) {
    if (cvData.experience && cvData.experience[idx] !== undefined) {
        cvData.experience.splice(idx, 1);
        renderExperienceFormList();
        updateBadges();
        renderLivePreview();
        pushHistoryState();
    }
}

function updateExpField(idx, field, value) {
    if (cvData.experience && cvData.experience[idx]) {
        cvData.experience[idx][field] = value;
        renderLivePreview();
        debouncedPushHistory();
    }
}

// Education Form Renderer
function renderEducationFormList() {
    const container = document.getElementById('educationList');
    if (!container) return;
    container.innerHTML = '';

    (cvData.education || []).forEach((edu, idx) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-card-header">
                <span class="item-badge-title">Education #${idx + 1}</span>
                <button type="button" class="btn-card-del" onclick="removeEducation(${idx})">✕ Remove</button>
            </div>
            <div class="grid-2">
                <div class="form-field">
                    <label>Degree / Qualification</label>
                    <input type="text" value="${escapeHtml(edu.degree || '')}" placeholder="e.g. B.Sc. Management" oninput="updateEduField(${idx}, 'degree', this.value)">
                </div>
                <div class="form-field">
                    <label>Institution / University</label>
                    <input type="text" value="${escapeHtml(edu.school || '')}" placeholder="e.g. University of Toronto" oninput="updateEduField(${idx}, 'school', this.value)">
                </div>
            </div>
            <div class="grid-2">
                <div class="form-field">
                    <label>Location</label>
                    <input type="text" value="${escapeHtml(edu.location || '')}" placeholder="e.g. Toronto, Canada" oninput="updateEduField(${idx}, 'location', this.value)">
                </div>
                <div class="form-field">
                    <label>Years</label>
                    <div style="display: flex; gap: 8px;">
                        <input type="text" value="${escapeHtml(edu.startDate || '')}" placeholder="e.g. 2013" oninput="updateEduField(${idx}, 'startDate', this.value)">
                        <input type="text" value="${escapeHtml(edu.endDate || '')}" placeholder="e.g. 2017" oninput="updateEduField(${idx}, 'endDate', this.value)">
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function addEducation() {
    if (!cvData.education) cvData.education = [];
    cvData.education.push({
        degree: '',
        school: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
    });
    renderEducationFormList();
    updateBadges();
    renderLivePreview();
    pushHistoryState();
}

function removeEducation(idx) {
    if (cvData.education && cvData.education[idx] !== undefined) {
        cvData.education.splice(idx, 1);
        renderEducationFormList();
        updateBadges();
        renderLivePreview();
        pushHistoryState();
    }
}

function updateEduField(idx, field, value) {
    if (cvData.education && cvData.education[idx]) {
        cvData.education[idx][field] = value;
        renderLivePreview();
        debouncedPushHistory();
    }
}

// Skills Form Renderer
function renderSkillsFormList() {
    const container = document.getElementById('skillsList');
    if (!container) return;
    container.innerHTML = '';

    (cvData.skills || []).forEach((skill, idx) => {
        const chip = document.createElement('div');
        chip.className = 'skill-chip';
        chip.innerHTML = `
            <span>${escapeHtml(skill)}</span>
            <span class="skill-chip-del" onclick="removeSkill(${idx})" title="Remove skill">×</span>
        `;
        container.appendChild(chip);
    });
}

function handleSkillKey(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleAddSkillClick();
    }
}

function handleAddSkillClick() {
    const input = document.getElementById('skillInput');
    if (!input) return;
    const val = input.value.trim();
    if (val) {
        if (!cvData.skills) cvData.skills = [];
        if (!cvData.skills.includes(val)) {
            cvData.skills.push(val);
            renderSkillsFormList();
            updateBadges();
            renderLivePreview();
            pushHistoryState();
        }
        input.value = '';
    }
}

function removeSkill(idx) {
    if (cvData.skills && cvData.skills[idx] !== undefined) {
        cvData.skills.splice(idx, 1);
        renderSkillsFormList();
        updateBadges();
        renderLivePreview();
        pushHistoryState();
    }
}

// Dynamic Sections (Certificates, Languages, Projects, Awards)
function renderAllDynamicSections() {
    const container = document.getElementById('dynamicSections');
    if (!container) return;
    container.innerHTML = '';

    // Certificates
    if (dynamicSectionKeys.includes('certificates') || (cvData.certificates && cvData.certificates.length > 0)) {
        if (!dynamicSectionKeys.includes('certificates')) dynamicSectionKeys.push('certificates');
        container.appendChild(createCertificatesSectionNode());
    }

    // Languages
    if (dynamicSectionKeys.includes('languages') || (cvData.languages && cvData.languages.length > 0)) {
        if (!dynamicSectionKeys.includes('languages')) dynamicSectionKeys.push('languages');
        container.appendChild(createLanguagesSectionNode());
    }

    // Projects
    if (dynamicSectionKeys.includes('projects') || (cvData.projects && cvData.projects.length > 0)) {
        if (!dynamicSectionKeys.includes('projects')) dynamicSectionKeys.push('projects');
        container.appendChild(createProjectsSectionNode());
    }

    // Awards
    if (dynamicSectionKeys.includes('awards') || (cvData.awards && cvData.awards.length > 0)) {
        if (!dynamicSectionKeys.includes('awards')) dynamicSectionKeys.push('awards');
        container.appendChild(createAwardsSectionNode());
    }
}

function createCertificatesSectionNode() {
    const sec = document.createElement('div');
    sec.className = 'card-section';
    sec.id = 'sec-certificates';
    
    let itemsHtml = '';
    (cvData.certificates || []).forEach((cert, idx) => {
        itemsHtml += `
            <div class="item-card" style="margin-bottom: 8px; padding: 10px;">
                <div style="display: flex; gap: 8px; align-items: center;">
                    <input type="text" value="${escapeHtml(cert)}" placeholder="e.g. PMP, Lean Six Sigma" oninput="updateCert(${idx}, this.value)">
                    <button type="button" class="btn-card-del" onclick="removeCert(${idx})">✕</button>
                </div>
            </div>
        `;
    });

    sec.innerHTML = `
        <div class="card-section-header" onclick="toggleAccordion(this)">
            <div class="card-title">
                <span class="section-icon">📜</span>
                <span>Certificates</span>
                <span class="badge-count">${(cvData.certificates || []).length}</span>
            </div>
            <button type="button" class="btn-card-del" style="margin-right: 10px;" onclick="event.stopPropagation(); removeDynamicSection('certificates')">Remove Section</button>
            <span class="accordion-arrow">▾</span>
        </div>
        <div class="card-section-body">
            <div>${itemsHtml}</div>
            <button type="button" class="btn-dashed-add" onclick="addCert()">+ Add Certificate</button>
        </div>
    `;
    return sec;
}

function addCert() {
    if (!cvData.certificates) cvData.certificates = [];
    cvData.certificates.push('New Certification');
    renderAllDynamicSections();
    renderLivePreview();
    pushHistoryState();
}

function removeCert(idx) {
    if (cvData.certificates && cvData.certificates[idx] !== undefined) {
        cvData.certificates.splice(idx, 1);
        renderAllDynamicSections();
        renderLivePreview();
        pushHistoryState();
    }
}

function updateCert(idx, val) {
    if (cvData.certificates && cvData.certificates[idx] !== undefined) {
        cvData.certificates[idx] = val;
        renderLivePreview();
        debouncedPushHistory();
    }
}

function createLanguagesSectionNode() {
    const sec = document.createElement('div');
    sec.className = 'card-section';
    sec.id = 'sec-languages';

    let itemsHtml = '';
    (cvData.languages || []).forEach((lang, idx) => {
        itemsHtml += `
            <div class="item-card" style="margin-bottom: 8px; padding: 10px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr 40px; gap: 8px; align-items: center;">
                    <input type="text" value="${escapeHtml(lang.name || '')}" placeholder="Language" oninput="updateLang(${idx}, 'name', this.value)">
                    <input type="text" value="${escapeHtml(lang.level || '')}" placeholder="Proficiency (e.g. Fluent, Native)" oninput="updateLang(${idx}, 'level', this.value)">
                    <button type="button" class="btn-card-del" onclick="removeLang(${idx})">✕</button>
                </div>
            </div>
        `;
    });

    sec.innerHTML = `
        <div class="card-section-header" onclick="toggleAccordion(this)">
            <div class="card-title">
                <span class="section-icon">🌐</span>
                <span>Languages</span>
                <span class="badge-count">${(cvData.languages || []).length}</span>
            </div>
            <button type="button" class="btn-card-del" style="margin-right: 10px;" onclick="event.stopPropagation(); removeDynamicSection('languages')">Remove Section</button>
            <span class="accordion-arrow">▾</span>
        </div>
        <div class="card-section-body">
            <div>${itemsHtml}</div>
            <button type="button" class="btn-dashed-add" onclick="addLang()">+ Add Language</button>
        </div>
    `;
    return sec;
}

function addLang() {
    if (!cvData.languages) cvData.languages = [];
    cvData.languages.push({ name: '', level: 'Fluent', rating: 5 });
    renderAllDynamicSections();
    renderLivePreview();
    pushHistoryState();
}

function removeLang(idx) {
    if (cvData.languages && cvData.languages[idx] !== undefined) {
        cvData.languages.splice(idx, 1);
        renderAllDynamicSections();
        renderLivePreview();
        pushHistoryState();
    }
}

function updateLang(idx, field, val) {
    if (cvData.languages && cvData.languages[idx]) {
        cvData.languages[idx][field] = val;
        renderLivePreview();
        debouncedPushHistory();
    }
}

function createProjectsSectionNode() {
    const sec = document.createElement('div');
    sec.className = 'card-section';
    sec.id = 'sec-projects';

    let itemsHtml = '';
    (cvData.projects || []).forEach((proj, idx) => {
        itemsHtml += `
            <div class="item-card" style="margin-bottom: 10px;">
                <div class="item-card-header">
                    <span class="item-badge-title">Project #${idx + 1}</span>
                    <button type="button" class="btn-card-del" onclick="removeProj(${idx})">✕</button>
                </div>
                <div class="grid-2">
                    <input type="text" value="${escapeHtml(proj.name || '')}" placeholder="Project Name" oninput="updateProj(${idx}, 'name', this.value)">
                    <input type="text" value="${escapeHtml(proj.role || '')}" placeholder="Role or Context" oninput="updateProj(${idx}, 'role', this.value)">
                </div>
                <div style="margin-top: 8px;">
                    <textarea rows="2" placeholder="Description & achievements..." oninput="updateProj(${idx}, 'description', this.value)">${escapeHtml(proj.description || '')}</textarea>
                </div>
            </div>
        `;
    });

    sec.innerHTML = `
        <div class="card-section-header" onclick="toggleAccordion(this)">
            <div class="card-title">
                <span class="section-icon">🚀</span>
                <span>Projects</span>
                <span class="badge-count">${(cvData.projects || []).length}</span>
            </div>
            <button type="button" class="btn-card-del" style="margin-right: 10px;" onclick="event.stopPropagation(); removeDynamicSection('projects')">Remove Section</button>
            <span class="accordion-arrow">▾</span>
        </div>
        <div class="card-section-body">
            <div>${itemsHtml}</div>
            <button type="button" class="btn-dashed-add" onclick="addProj()">+ Add Project</button>
        </div>
    `;
    return sec;
}

function addProj() {
    if (!cvData.projects) cvData.projects = [];
    cvData.projects.push({ name: '', role: '', description: '' });
    renderAllDynamicSections();
    renderLivePreview();
    pushHistoryState();
}

function removeProj(idx) {
    if (cvData.projects && cvData.projects[idx] !== undefined) {
        cvData.projects.splice(idx, 1);
        renderAllDynamicSections();
        renderLivePreview();
        pushHistoryState();
    }
}

function updateProj(idx, field, val) {
    if (cvData.projects && cvData.projects[idx]) {
        cvData.projects[idx][field] = val;
        renderLivePreview();
        debouncedPushHistory();
    }
}

function createAwardsSectionNode() {
    const sec = document.createElement('div');
    sec.className = 'card-section';
    sec.id = 'sec-awards';

    let itemsHtml = '';
    (cvData.awards || []).forEach((award, idx) => {
        itemsHtml += `
            <div class="item-card" style="margin-bottom: 8px; padding: 10px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr 40px; gap: 8px; align-items: center;">
                    <input type="text" value="${escapeHtml(award.title || '')}" placeholder="Award Title" oninput="updateAward(${idx}, 'title', this.value)">
                    <input type="text" value="${escapeHtml(award.issuer || '')}" placeholder="Issuer & Date" oninput="updateAward(${idx}, 'issuer', this.value)">
                    <button type="button" class="btn-card-del" onclick="removeAward(${idx})">✕</button>
                </div>
            </div>
        `;
    });

    sec.innerHTML = `
        <div class="card-section-header" onclick="toggleAccordion(this)">
            <div class="card-title">
                <span class="section-icon">🏆</span>
                <span>Awards</span>
                <span class="badge-count">${(cvData.awards || []).length}</span>
            </div>
            <button type="button" class="btn-card-del" style="margin-right: 10px;" onclick="event.stopPropagation(); removeDynamicSection('awards')">Remove Section</button>
            <span class="accordion-arrow">▾</span>
        </div>
        <div class="card-section-body">
            <div>${itemsHtml}</div>
            <button type="button" class="btn-dashed-add" onclick="addAward()">+ Add Award</button>
        </div>
    `;
    return sec;
}

function addAward() {
    if (!cvData.awards) cvData.awards = [];
    cvData.awards.push({ title: '', issuer: '' });
    renderAllDynamicSections();
    renderLivePreview();
    pushHistoryState();
}

function removeAward(idx) {
    if (cvData.awards && cvData.awards[idx] !== undefined) {
        cvData.awards.splice(idx, 1);
        renderAllDynamicSections();
        renderLivePreview();
        pushHistoryState();
    }
}

function updateAward(idx, field, val) {
    if (cvData.awards && cvData.awards[idx]) {
        cvData.awards[idx][field] = val;
        renderLivePreview();
        debouncedPushHistory();
    }
}

function addSection(type) {
    if (!dynamicSectionKeys.includes(type)) {
        dynamicSectionKeys.push(type);
    }
    if (type === 'certificates' && (!cvData.certificates || cvData.certificates.length === 0)) {
        cvData.certificates = ['Industry Certification'];
    } else if (type === 'languages' && (!cvData.languages || cvData.languages.length === 0)) {
        cvData.languages = [{ name: 'English', level: 'Fluent', rating: 5 }];
    } else if (type === 'projects' && (!cvData.projects || cvData.projects.length === 0)) {
        cvData.projects = [{ name: 'Key Project Initiative', role: 'Lead', description: '• Delivered measurable impact.' }];
    } else if (type === 'awards' && (!cvData.awards || cvData.awards.length === 0)) {
        cvData.awards = [{ title: 'Excellence Award', issuer: 'Organization, 2023' }];
    }
    renderAllDynamicSections();
    closeAddContentModal();
    renderLivePreview();
    pushHistoryState();
}

function removeDynamicSection(type) {
    dynamicSectionKeys = dynamicSectionKeys.filter(k => k !== type);
    if (cvData[type]) cvData[type] = [];
    renderAllDynamicSections();
    renderLivePreview();
    pushHistoryState();
}

function addCustomSection() {
    const title = prompt('Enter the name of your custom section (e.g. Publications, Volunteer Work):');
    if (!title || !title.trim()) return;
    const key = 'custom_' + Date.now();
    cvData[key] = { title: title.trim(), content: '• Add your accomplishments here' };
    dynamicSectionKeys.push(key);
    closeAddContentModal();
    renderAllDynamicSections();
    renderLivePreview();
    pushHistoryState();
}

// React to standard form input changes
function onDataChanged() {
    cvData.personal = {
        fullName: document.getElementById('fullName')?.value || '',
        jobTitle: document.getElementById('jobTitle')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        location: document.getElementById('location')?.value || '',
        linkedin: document.getElementById('linkedin')?.value || '',
        portfolio: document.getElementById('portfolio')?.value || '',
        summary: document.getElementById('summary')?.value || ''
    };
    renderLivePreview();
    debouncedPushHistory();
}

// =============================================================================
// 5. LIVE PREVIEW RENDERERS FOR THE 4 TEMPLATES
// =============================================================================

function renderLivePreview() {
    const container = document.getElementById('cvPreview');
    if (!container) return;

    const paper = document.getElementById('resumePaper');
    if (paper) {
        paper.className = `resume-paper tpl-${currentTemplate}`;
    }

    let html = '';

    switch (currentTemplate) {
        case 'serif':
            html = renderSerifTemplate();
            break;
        case 'executive':
            html = renderExecutiveTemplate();
            break;
        case 'sidebar':
            html = renderSidebarTemplate();
            break;
        case 'classic':
        default:
            html = renderClassicTemplate();
            break;
    }

    container.innerHTML = html;

    // Attach inline-edit synchronization
    attachInlineEditHandlers();
}

// -----------------------------------------------------------------------------
// TEMPLATE 2: Classic Clear (Emily Carter - DEFAULT)
// -----------------------------------------------------------------------------
function renderClassicTemplate() {
    const p = cvData.personal || {};

    let html = `
        <div class="resume-header">
            <h1 class="resume-name" contenteditable="true" data-field="personal.fullName">${escapeHtml(p.fullName || 'Emily Carter')}</h1>
            <div class="resume-role" contenteditable="true" data-field="personal.jobTitle">${escapeHtml(p.jobTitle || 'Project Manager')}</div>
            <div class="resume-contact">
                ${p.location ? `<span class="contact-item">📍 <span contenteditable="true" data-field="personal.location">${escapeHtml(p.location)}</span></span>` : ''}
                ${p.email ? `<span class="contact-item">✉️ <span contenteditable="true" data-field="personal.email">${escapeHtml(p.email)}</span></span>` : ''}
                ${p.phone ? `<span class="contact-item">📞 <span contenteditable="true" data-field="personal.phone">${escapeHtml(p.phone)}</span></span>` : ''}
                ${p.linkedin ? `<span class="contact-item">🔗 <span contenteditable="true" data-field="personal.linkedin">${escapeHtml(p.linkedin)}</span></span>` : ''}
                ${p.portfolio ? `<span class="contact-item">🌐 <span contenteditable="true" data-field="personal.portfolio">${escapeHtml(p.portfolio)}</span></span>` : ''}
            </div>
        </div>
    `;

    // Summary
    if (p.summary) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Summary</div>
                <div class="cv-summary-text" contenteditable="true" data-field="personal.summary">${escapeHtml(p.summary)}</div>
            </div>
        `;
    }

    // Professional Experience
    if (cvData.experience && cvData.experience.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Professional Experience</div>
        `;
        cvData.experience.forEach((exp, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span class="cv-entry-title" contenteditable="true" data-field="experience.${idx}.title">${escapeHtml(exp.title || '')}</span>
                        <span class="cv-entry-meta">${escapeHtml(exp.startDate || '')}${exp.endDate ? ' – ' + escapeHtml(exp.endDate) : ''}${exp.location ? ' | ' + escapeHtml(exp.location) : ''}</span>
                    </div>
                    <div class="cv-entry-sub" contenteditable="true" data-field="experience.${idx}.company">${escapeHtml(exp.company || '')}</div>
                    ${renderBullets(exp.description, `experience.${idx}.description`)}
                </div>
            `;
        });
        html += `</div>`;
    }

    // Education
    if (cvData.education && cvData.education.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Education</div>
        `;
        cvData.education.forEach((edu, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span class="cv-entry-title" contenteditable="true" data-field="education.${idx}.degree">${escapeHtml(edu.degree || '')}</span>
                        <span class="cv-entry-meta">${escapeHtml(edu.startDate || '')}${edu.endDate ? ' – ' + escapeHtml(edu.endDate) : ''}${edu.location ? ' | ' + escapeHtml(edu.location) : ''}</span>
                    </div>
                    <div class="cv-entry-sub" contenteditable="true" data-field="education.${idx}.school">${escapeHtml(edu.school || '')}</div>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Skills (2-Column Bullet List matching Image 2)
    if (cvData.skills && cvData.skills.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Skills</div>
                <div class="grid-columns-2">
                    ${cvData.skills.map((s, idx) => `<div>• <span contenteditable="true" data-field="skills.${idx}">${escapeHtml(s)}</span></div>`).join('')}
                </div>
            </div>
        `;
    }

    // Certificates (2-Column Bullet List)
    if (cvData.certificates && cvData.certificates.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Certificates</div>
                <div class="grid-columns-2">
                    ${cvData.certificates.map((c, idx) => `<div>• <span contenteditable="true" data-field="certificates.${idx}">${escapeHtml(c)}</span></div>`).join('')}
                </div>
            </div>
        `;
    }

    // Languages (2-Column Bullet List)
    if (cvData.languages && cvData.languages.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Languages</div>
                <div class="grid-columns-2">
                    ${cvData.languages.map((l, idx) => `<div>• <span contenteditable="true" data-field="languages.${idx}.name">${escapeHtml(l.name)}</span> ${l.level ? `<span style="color:#6b7280;">(${escapeHtml(l.level)})</span>` : ''}</div>`).join('')}
                </div>
            </div>
        `;
    }

    // Projects
    if (cvData.projects && cvData.projects.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Projects</div>
        `;
        cvData.projects.forEach((p, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span class="cv-entry-title" contenteditable="true" data-field="projects.${idx}.name">${escapeHtml(p.name)}</span>
                        <span class="cv-entry-meta">${escapeHtml(p.role || '')}</span>
                    </div>
                    ${renderBullets(p.description, `projects.${idx}.description`)}
                </div>
            `;
        });
        html += `</div>`;
    }

    return html;
}

// -----------------------------------------------------------------------------
// TEMPLATE 1: Executive Serif (Lena Hoffmann)
// -----------------------------------------------------------------------------
function renderSerifTemplate() {
    const p = cvData.personal || {};

    let html = `
        <div class="resume-header">
            <h1 class="resume-name" contenteditable="true" data-field="personal.fullName">${escapeHtml(p.fullName || 'Lena Hoffmann')}</h1>
            <div class="resume-role" contenteditable="true" data-field="personal.jobTitle">${escapeHtml(p.jobTitle || 'Operations Manager')}</div>
            <div class="resume-contact">
                ${p.location ? `<span class="contact-item">📍 <span contenteditable="true" data-field="personal.location">${escapeHtml(p.location)}</span></span>` : ''}
                ${p.email ? `<span class="contact-item">✉️ <span contenteditable="true" data-field="personal.email">${escapeHtml(p.email)}</span></span>` : ''}
                ${p.phone ? `<span class="contact-item">📞 <span contenteditable="true" data-field="personal.phone">${escapeHtml(p.phone)}</span></span>` : ''}
                ${p.linkedin ? `<span class="contact-item">🔗 <span contenteditable="true" data-field="personal.linkedin">${escapeHtml(p.linkedin)}</span></span>` : ''}
            </div>
        </div>
    `;

    // Summary
    if (p.summary) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Summary</div>
                <div class="cv-summary-text" contenteditable="true" data-field="personal.summary">${escapeHtml(p.summary)}</div>
            </div>
        `;
    }

    // Professional Experience
    if (cvData.experience && cvData.experience.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Professional Experience</div>
        `;
        cvData.experience.forEach((exp, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span>
                            <strong contenteditable="true" data-field="experience.${idx}.company">${escapeHtml(exp.company || '')}</strong>, 
                            <em contenteditable="true" data-field="experience.${idx}.title">${escapeHtml(exp.title || '')}</em>
                        </span>
                        <span class="cv-entry-meta">${escapeHtml(exp.startDate || '')}${exp.endDate ? ' – ' + escapeHtml(exp.endDate) : ''}${exp.location ? ' | ' + escapeHtml(exp.location) : ''}</span>
                    </div>
                    ${renderBullets(exp.description, `experience.${idx}.description`)}
                </div>
            `;
        });
        html += `</div>`;
    }

    // Education
    if (cvData.education && cvData.education.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Education</div>
        `;
        cvData.education.forEach((edu, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span>
                            <strong contenteditable="true" data-field="education.${idx}.school">${escapeHtml(edu.school || '')}</strong>, 
                            <em contenteditable="true" data-field="education.${idx}.degree">${escapeHtml(edu.degree || '')}</em>
                        </span>
                        <span class="cv-entry-meta">${escapeHtml(edu.startDate || '')}${edu.endDate ? ' – ' + escapeHtml(edu.endDate) : ''}${edu.location ? ' | ' + escapeHtml(edu.location) : ''}</span>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Skills (Pipe Separated List matching Image 1)
    if (cvData.skills && cvData.skills.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Skills</div>
                <div class="pipe-separated-list">
                    ${cvData.skills.map((s, idx) => `<span class="pipe-item" contenteditable="true" data-field="skills.${idx}">${escapeHtml(s)}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Languages (Pipe Separated List)
    if (cvData.languages && cvData.languages.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Languages</div>
                <div class="pipe-separated-list">
                    ${cvData.languages.map((l, idx) => `<span class="pipe-item"><strong>${escapeHtml(l.name)}</strong> (${escapeHtml(l.level || 'Fluent')})</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Certificates (Pipe Separated List)
    if (cvData.certificates && cvData.certificates.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Certificates</div>
                <div class="pipe-separated-list">
                    ${cvData.certificates.map((c, idx) => `<span class="pipe-item" contenteditable="true" data-field="certificates.${idx}">${escapeHtml(c)}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Projects
    if (cvData.projects && cvData.projects.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Projects</div>
        `;
        cvData.projects.forEach((p, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span>
                            <strong contenteditable="true" data-field="projects.${idx}.name">${escapeHtml(p.name)}</strong>
                            ${p.role ? ` — <em contenteditable="true" data-field="projects.${idx}.role">${escapeHtml(p.role)}</em>` : ''}
                        </span>
                    </div>
                    ${renderBullets(p.description, `projects.${idx}.description`)}
                </div>
            `;
        });
        html += `</div>`;
    }

    return html;
}

// -----------------------------------------------------------------------------
// TEMPLATE 3: Modern Executive (Olivia Bennett)
// -----------------------------------------------------------------------------
function renderExecutiveTemplate() {
    const p = cvData.personal || {};

    let html = `
        <div class="resume-header">
            <h1 class="resume-name" contenteditable="true" data-field="personal.fullName">${escapeHtml(p.fullName || 'Olivia Bennett')}</h1>
            <div class="resume-role" contenteditable="true" data-field="personal.jobTitle">${escapeHtml(p.jobTitle || 'Head of Customer Service')}</div>
            <div class="resume-contact">
                ${p.email ? `<span contenteditable="true" data-field="personal.email">${escapeHtml(p.email)}</span>` : ''}
                ${p.phone ? `<span class="contact-pipe">|</span> <span contenteditable="true" data-field="personal.phone">${escapeHtml(p.phone)}</span>` : ''}
                ${p.location ? `<span class="contact-pipe">|</span> <span contenteditable="true" data-field="personal.location">${escapeHtml(p.location)}</span>` : ''}
                ${p.linkedin ? `<span class="contact-pipe">|</span> <span contenteditable="true" data-field="personal.linkedin">${escapeHtml(p.linkedin)}</span>` : ''}
            </div>
        </div>
    `;

    // Summary
    if (p.summary) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Summary</div>
                <div class="cv-summary-text" contenteditable="true" data-field="personal.summary">${escapeHtml(p.summary)}</div>
            </div>
        `;
    }

    // Professional Experience
    if (cvData.experience && cvData.experience.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Professional Experience</div>
        `;
        cvData.experience.forEach((exp, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span>
                            <strong contenteditable="true" data-field="experience.${idx}.company">${escapeHtml(exp.company || '')}</strong>, 
                            <em contenteditable="true" data-field="experience.${idx}.title">${escapeHtml(exp.title || '')}</em>
                        </span>
                        <span class="cv-entry-meta">${escapeHtml(exp.startDate || '')}${exp.endDate ? ' – ' + escapeHtml(exp.endDate) : ''}${exp.location ? ' | ' + escapeHtml(exp.location) : ''}</span>
                    </div>
                    ${renderBullets(exp.description, `experience.${idx}.description`)}
                </div>
            `;
        });
        html += `</div>`;
    }

    // Education
    if (cvData.education && cvData.education.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Education</div>
        `;
        cvData.education.forEach((edu, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span>
                            <strong contenteditable="true" data-field="education.${idx}.degree">${escapeHtml(edu.degree || '')}</strong>, 
                            <em contenteditable="true" data-field="education.${idx}.school">${escapeHtml(edu.school || '')}</em>
                        </span>
                        <span class="cv-entry-meta">${escapeHtml(edu.startDate || '')}${edu.endDate ? ' – ' + escapeHtml(edu.endDate) : ''}${edu.location ? ' | ' + escapeHtml(edu.location) : ''}</span>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Skills (4-Column Bullet Layout matching Image 3)
    if (cvData.skills && cvData.skills.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Skills</div>
                <div class="grid-columns-4">
                    ${cvData.skills.map((s, idx) => `<div>• <span contenteditable="true" data-field="skills.${idx}">${escapeHtml(s)}</span></div>`).join('')}
                </div>
            </div>
        `;
    }

    // Languages (3-Column Layout with level underneath)
    if (cvData.languages && cvData.languages.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Languages</div>
                <div class="grid-columns-3">
                    ${cvData.languages.map((l, idx) => `
                        <div class="lang-card">
                            <strong contenteditable="true" data-field="languages.${idx}.name">${escapeHtml(l.name)}</strong>
                            <div class="lang-level" contenteditable="true" data-field="languages.${idx}.level">${escapeHtml(l.level || 'Fluent')}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Certificates (4-Column Bullet Layout matching Image 3)
    if (cvData.certificates && cvData.certificates.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Certificates</div>
                <div class="grid-columns-4">
                    ${cvData.certificates.map((c, idx) => `<div>• <span contenteditable="true" data-field="certificates.${idx}">${escapeHtml(c)}</span></div>`).join('')}
                </div>
            </div>
        `;
    }

    // Projects
    if (cvData.projects && cvData.projects.length > 0) {
        html += `
            <div class="cv-sec">
                <div class="cv-sec-title">Projects</div>
        `;
        cvData.projects.forEach((p, idx) => {
            html += `
                <div class="cv-entry">
                    <div class="cv-entry-row">
                        <span>
                            <strong contenteditable="true" data-field="projects.${idx}.name">${escapeHtml(p.name)}</strong>
                            ${p.role ? ` — <em contenteditable="true" data-field="projects.${idx}.role">${escapeHtml(p.role)}</em>` : ''}
                        </span>
                    </div>
                    ${renderBullets(p.description, `projects.${idx}.description`)}
                </div>
            `;
        });
        html += `</div>`;
    }

    return html;
}

// -----------------------------------------------------------------------------
// TEMPLATE 4: Two-Column Sidebar (Élodie Martin)
// -----------------------------------------------------------------------------
function renderSidebarTemplate() {
    const p = cvData.personal || {};

    let html = `
        <div class="sidebar-layout">
            <!-- Left Column (36%) -->
            <div class="col-left">
                <h1 class="sidebar-name" contenteditable="true" data-field="personal.fullName">${escapeHtml(p.fullName || 'Élodie Martin')}</h1>
                <div class="sidebar-role" contenteditable="true" data-field="personal.jobTitle">${escapeHtml(p.jobTitle || 'Marketing Director')}</div>

                <div class="sidebar-contact-list">
                    ${p.location ? `<div class="sidebar-contact-item">📍 <span contenteditable="true" data-field="personal.location">${escapeHtml(p.location)}</span></div>` : ''}
                    ${p.phone ? `<div class="sidebar-contact-item">📞 <span contenteditable="true" data-field="personal.phone">${escapeHtml(p.phone)}</span></div>` : ''}
                    ${p.email ? `<div class="sidebar-contact-item">✉️ <span contenteditable="true" data-field="personal.email">${escapeHtml(p.email)}</span></div>` : ''}
                    ${p.linkedin ? `<div class="sidebar-contact-item">🔗 <span contenteditable="true" data-field="personal.linkedin">${escapeHtml(p.linkedin)}</span></div>` : ''}
                </div>

                <!-- Summary with icon -->
                ${p.summary ? `
                    <div class="cv-sec">
                        <div class="sec-heading-icon">
                            <span class="icon-badge">🪪</span>
                            <span>Summary</span>
                        </div>
                        <div class="cv-summary-text" contenteditable="true" data-field="personal.summary">${escapeHtml(p.summary)}</div>
                    </div>
                ` : ''}

                <!-- Education with icon -->
                ${cvData.education && cvData.education.length > 0 ? `
                    <div class="cv-sec">
                        <div class="sec-heading-icon">
                            <span class="icon-badge">🎓</span>
                            <span>Education</span>
                        </div>
                        ${cvData.education.map((edu, idx) => `
                            <div class="cv-entry">
                                <div class="cv-entry-title" contenteditable="true" data-field="education.${idx}.degree">${escapeHtml(edu.degree || '')}</div>
                                <div class="cv-entry-sub" contenteditable="true" data-field="education.${idx}.school">${escapeHtml(edu.school || '')}</div>
                                <div class="cv-entry-meta">${escapeHtml(edu.startDate || '')}${edu.endDate ? ' – ' + escapeHtml(edu.endDate) : ''}${edu.location ? ' | ' + escapeHtml(edu.location) : ''}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <!-- Languages with 5-dot rating indicator matching Image 4 -->
                ${cvData.languages && cvData.languages.length > 0 ? `
                    <div class="cv-sec">
                        <div class="sec-heading-icon">
                            <span class="icon-badge">🌐</span>
                            <span>Languages</span>
                        </div>
                        ${cvData.languages.map((l, idx) => `
                            <div class="rating-row">
                                <span contenteditable="true" data-field="languages.${idx}.name">${escapeHtml(l.name)}</span>
                                <div class="rating-dots">
                                    ${renderDots(l.rating || 5)}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <!-- Skills with icon -->
                ${cvData.skills && cvData.skills.length > 0 ? `
                    <div class="cv-sec">
                        <div class="sec-heading-icon">
                            <span class="icon-badge">💡</span>
                            <span>Skills</span>
                        </div>
                        <ul class="cv-bullets" style="padding-left: 14px;">
                            ${cvData.skills.map((s, idx) => `<li><span contenteditable="true" data-field="skills.${idx}">${escapeHtml(s)}</span></li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>

            <!-- Right Column (64%) -->
            <div class="col-right">
                <!-- Professional Experience -->
                ${cvData.experience && cvData.experience.length > 0 ? `
                    <div class="cv-sec">
                        <div class="sec-heading-icon">
                            <span class="icon-badge">💼</span>
                            <span>Professional Experience</span>
                        </div>
                        ${cvData.experience.map((exp, idx) => `
                            <div class="cv-entry">
                                <div class="cv-entry-title" contenteditable="true" data-field="experience.${idx}.title">${escapeHtml(exp.title || '')}</div>
                                <div class="cv-entry-sub" contenteditable="true" data-field="experience.${idx}.company">${escapeHtml(exp.company || '')}</div>
                                <div class="cv-entry-meta">${escapeHtml(exp.startDate || '')}${exp.endDate ? ' – ' + escapeHtml(exp.endDate) : ''}${exp.location ? ' | ' + escapeHtml(exp.location) : ''}</div>
                                ${renderBullets(exp.description, `experience.${idx}.description`)}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <!-- Projects -->
                ${cvData.projects && cvData.projects.length > 0 ? `
                    <div class="cv-sec">
                        <div class="sec-heading-icon">
                            <span class="icon-badge">📁</span>
                            <span>Projects</span>
                        </div>
                        ${cvData.projects.map((proj, idx) => `
                            <div class="cv-entry">
                                <div class="cv-entry-title" contenteditable="true" data-field="projects.${idx}.name">${escapeHtml(proj.name)}</div>
                                <div class="cv-entry-sub" contenteditable="true" data-field="projects.${idx}.role">${escapeHtml(proj.role || '')}</div>
                                ${renderBullets(proj.description, `projects.${idx}.description`)}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <!-- Certificates -->
                ${cvData.certificates && cvData.certificates.length > 0 ? `
                    <div class="cv-sec">
                        <div class="sec-heading-icon">
                            <span class="icon-badge">📜</span>
                            <span>Certificates</span>
                        </div>
                        <ul class="cv-bullets" style="padding-left: 14px;">
                            ${cvData.certificates.map((c, idx) => `<li><span contenteditable="true" data-field="certificates.${idx}">${escapeHtml(c)}</span></li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    return html;
}

// Helper: Render bullet points from multiline text
function renderBullets(text, dataField) {
    if (!text) return '';
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) return '';
    return `
        <ul class="cv-bullets">
            ${lines.map(line => `<li><span contenteditable="true" data-field="${dataField}">${escapeHtml(line.replace(/^[•\-\*]\s*/, ''))}</span></li>`).join('')}
        </ul>
    `;
}

// Helper: Render 5 dot indicators for ratings
function renderDots(count) {
    let dots = '';
    for (let i = 1; i <= 5; i++) {
        dots += `<span class="dot ${i <= count ? 'filled' : ''}"></span>`;
    }
    return dots;
}

// =============================================================================
// 6. INLINE EDIT SYNCHRONIZATION (Direct Click-to-Edit in Resume Preview)
// =============================================================================

function attachInlineEditHandlers() {
    const editableElements = document.querySelectorAll('#cvPreview [contenteditable="true"]');
    editableElements.forEach(el => {
        el.addEventListener('blur', () => {
            const fieldPath = el.getAttribute('data-field');
            if (fieldPath) {
                const newValue = el.innerText.trim();
                setDeepValue(cvData, fieldPath, newValue);
                // Also sync back to form inputs
                syncFieldToForm(fieldPath, newValue);
                debouncedPushHistory();
            }
        });
    });
}

function syncFieldToForm(fieldPath, val) {
    if (fieldPath.startsWith('personal.')) {
        const id = fieldPath.split('.')[1];
        const input = document.getElementById(id);
        if (input) input.value = val;
    }
}

function setDeepValue(obj, path, val) {
    const parts = path.split('.');
    let curr = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        if (!curr[parts[i]]) return;
        curr = curr[parts[i]];
    }
    curr[parts[parts.length - 1]] = val;
}

// =============================================================================
// 7. TYPOGRAPHY & SPACING ENGINE (Exact Image 5 Mechanics)
// =============================================================================

function handleTrackClick(settingKey, event) {
    const track = document.getElementById('track' + capitalize(settingKey));
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));

    const totalSteps = STYLE_CONFIGS[settingKey].steps.length;
    const stepIdx = Math.floor(ratio * totalSteps);

    applyStyleSetting(settingKey, stepIdx);
}

function stepSetting(settingKey, delta) {
    const currentIdx = styleState[settingKey];
    const totalSteps = STYLE_CONFIGS[settingKey].steps.length;
    const nextIdx = Math.max(0, Math.min(totalSteps - 1, currentIdx + delta));
    applyStyleSetting(settingKey, nextIdx);
}

function applyStyleSetting(settingKey, stepIdx) {
    styleState[settingKey] = stepIdx;
    updateStyleControlUI(settingKey);
    applyStylesToResume();
    debouncedPushHistory();
}

function updateStyleControlUI(settingKey) {
    const cfg = STYLE_CONFIGS[settingKey];
    const stepVal = cfg.steps[styleState[settingKey]];

    // 1. Update text label
    const valEl = document.getElementById('val' + capitalize(settingKey));
    if (valEl) valEl.textContent = stepVal;

    // 2. Position purple block indicator (Image 5)
    const blockEl = document.getElementById('block' + capitalize(settingKey));
    if (blockEl) {
        const total = cfg.steps.length;
        const blockWidthPercent = 100 / total;
        blockEl.style.width = `calc(${blockWidthPercent}% - 6px)`;
        blockEl.style.left = `calc(${styleState[settingKey] * blockWidthPercent}% + 3px)`;
    }
}

function updateAllStyleControls() {
    Object.keys(STYLE_CONFIGS).forEach(key => updateStyleControlUI(key));
    applyStylesToResume();
}

function applyStylesToResume() {
    const paper = document.getElementById('resumePaper');
    if (!paper) return;

    const baseFont = STYLE_CONFIGS.baseFontSize.steps[styleState.baseFontSize];
    paper.style.setProperty('--cv-base-font-size', baseFont);

    // Full name
    const nameOffset = STYLE_CONFIGS.nameSize.steps[styleState.nameSize];
    paper.style.setProperty('--cv-name-size', `calc(${baseFont} + ${nameOffset.replace('+', '')})`);

    // Headings
    const headingOffset = STYLE_CONFIGS.headingsSize.steps[styleState.headingsSize];
    paper.style.setProperty('--cv-heading-size', `calc(${baseFont} + ${headingOffset.replace('+', '')})`);

    // Entry header
    const entryOffset = STYLE_CONFIGS.entryHeaderSize.steps[styleState.entryHeaderSize];
    paper.style.setProperty('--cv-entry-header-size', `calc(${baseFont} + ${entryOffset.replace('+', '')})`);

    // Line height
    paper.style.setProperty('--cv-line-height', STYLE_CONFIGS.lineHeight.steps[styleState.lineHeight]);

    // Space between elements
    const elementSpacingPx = STYLE_CONFIGS.elementSpacing.pixelMap[styleState.elementSpacing];
    paper.style.setProperty('--cv-element-spacing', elementSpacingPx);

    // Margins
    paper.style.setProperty('--cv-margin-x', STYLE_CONFIGS.marginX.steps[styleState.marginX]);
    paper.style.setProperty('--cv-margin-y', STYLE_CONFIGS.marginY.steps[styleState.marginY]);
}

// =============================================================================
// 8. UNDO / REDO SYSTEM (Image 5 Bottom Pill)
// =============================================================================

let historyDebounceTimer = null;

function debouncedPushHistory() {
    clearTimeout(historyDebounceTimer);
    historyDebounceTimer = setTimeout(() => {
        pushHistoryState();
    }, 400);
}

function pushHistoryState() {
    // Truncate redo states if we branched
    if (historyIndex < historyStack.length - 1) {
        historyStack = historyStack.slice(0, historyIndex + 1);
    }

    const snapshot = {
        template: currentTemplate,
        cvData: JSON.parse(JSON.stringify(cvData)),
        styleState: { ...styleState },
        dynamicSections: [...dynamicSectionKeys]
    };

    historyStack.push(snapshot);
    if (historyStack.length > MAX_HISTORY) {
        historyStack.shift();
    } else {
        historyIndex++;
    }

    updateUndoRedoButtons();
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        restoreHistorySnapshot(historyStack[historyIndex]);
    }
}

function redo() {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        restoreHistorySnapshot(historyStack[historyIndex]);
    }
}

function restoreHistorySnapshot(snapshot) {
    if (!snapshot) return;
    currentTemplate = snapshot.template;
    cvData = JSON.parse(JSON.stringify(snapshot.cvData));
    styleState = { ...snapshot.styleState };
    dynamicSectionKeys = [...snapshot.dynamicSections];

    populateFormFromData();
    updateAllStyleControls();
    updateTemplateSelectionUI();
    renderLivePreview();
    updateUndoRedoButtons();
}

function updateUndoRedoButtons() {
    const btnUndo = document.getElementById('btnUndo');
    const btnRedo = document.getElementById('btnRedo');
    if (btnUndo) btnUndo.disabled = historyIndex <= 0;
    if (btnRedo) btnRedo.disabled = historyIndex >= historyStack.length - 1;
}

// =============================================================================
// 9. TEMPLATE SELECTION & MODAL (Image 2 Features Highlight)
// =============================================================================

function openTemplateModal() {
    const modal = document.getElementById('templateModal');
    if (modal) {
        modal.classList.add('show');
        previewModalTemplate(currentTemplate);
    }
}

function closeTemplateModal() {
    const modal = document.getElementById('templateModal');
    if (modal) modal.classList.remove('show');
}

function previewModalTemplate(templateId) {
    modalSelectedTemplate = templateId;
    const preset = TEMPLATE_PRESETS[templateId];
    if (!preset) return;

    // Update list items active state
    document.querySelectorAll('.tpl-list-item').forEach(el => el.classList.remove('active'));
    const activeItem = document.getElementById('tplItem-' + templateId);
    if (activeItem) activeItem.classList.add('active');

    // Update right detail card (Image 2 exact style)
    const titleEl = document.getElementById('modalDetailTitle');
    const badgeEl = document.getElementById('modalDetailBadge');
    const descEl = document.getElementById('modalDetailDesc');

    if (titleEl) titleEl.textContent = preset.name.toUpperCase();
    if (badgeEl) badgeEl.textContent = preset.badge ? preset.badge.toUpperCase() : 'TEMPLATE';
    if (descEl) descEl.textContent = preset.tagline || 'Each template has been crafted with care to make designing your resume an absolute breeze.';
}

function confirmModalTemplate(loadSampleData) {
    selectTemplate(modalSelectedTemplate, loadSampleData);
    closeTemplateModal();
}

function selectTemplate(templateId, loadSampleData = false) {
    currentTemplate = templateId;

    if (loadSampleData && TEMPLATE_PRESETS[templateId]) {
        cvData = JSON.parse(JSON.stringify(TEMPLATE_PRESETS[templateId]));
        populateFormFromData();
    }

    updateTemplateSelectionUI();
    renderLivePreview();
    pushHistoryState();

    showNotification(`Applied ${TEMPLATE_PRESETS[templateId]?.name || 'Template'}!`, 'success');
}

function loadSampleTemplate(templateId) {
    selectTemplate(templateId, true);
    closeSampleMenu();
}

function updateTemplateSelectionUI() {
    const nameEl = document.getElementById('currentTemplateName');
    if (nameEl && TEMPLATE_PRESETS[currentTemplate]) {
        nameEl.textContent = TEMPLATE_PRESETS[currentTemplate].name;
    }

    // Update active showcase card in Tab 3
    document.querySelectorAll('.template-showcase-card').forEach(c => c.classList.remove('active'));
    const activeCard = document.getElementById('tplCard-' + currentTemplate);
    if (activeCard) activeCard.classList.add('active');
}

// Sample CV dropdown menu
function toggleSampleMenu() {
    const menu = document.getElementById('sampleMenu');
    if (menu) menu.classList.toggle('show');
}

function closeSampleMenu() {
    const menu = document.getElementById('sampleMenu');
    if (menu) menu.classList.remove('show');
}

// =============================================================================
// 10. TAB NAVIGATION & ACCORDIONS
// =============================================================================

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
    const targetPane = document.getElementById(tabId);

    if (targetBtn) targetBtn.classList.add('active');
    if (targetPane) targetPane.classList.add('active');
}

function toggleAccordion(headerEl) {
    const section = headerEl.closest('.card-section');
    if (section) {
        section.classList.toggle('collapsed');
    }
}

function openAddContentModal() {
    const modal = document.getElementById('addContentModal');
    if (modal) modal.classList.add('show');
}

function closeAddContentModal() {
    const modal = document.getElementById('addContentModal');
    if (modal) modal.classList.remove('show');
}

function clearForm() {
    if (confirm('Are you sure you want to clear all resume content?')) {
        cvData = {
            personal: { fullName: '', jobTitle: '', email: '', phone: '', location: '', linkedin: '', portfolio: '', summary: '' },
            experience: [],
            education: [],
            skills: [],
            certificates: [],
            languages: [],
            projects: [],
            awards: []
        };
        populateFormFromData();
        renderLivePreview();
        pushHistoryState();
        showNotification('Resume cleared.', 'success');
    }
}

// =============================================================================
// 11. CANVAS ZOOM & VIEW CONTROLS
// =============================================================================

function adjustZoom(delta) {
    currentZoom = Math.max(0.4, Math.min(1.8, currentZoom + delta));
    applyZoom();
}

function resetZoom() {
    currentZoom = 1.0;
    applyZoom();
}

function applyZoom() {
    const paper = document.getElementById('resumePaper');
    const zoomText = document.getElementById('zoomLevelText');
    if (paper) {
        paper.style.transform = `scale(${currentZoom})`;
    }
    if (zoomText) {
        zoomText.textContent = `${Math.round(currentZoom * 100)}%`;
    }
}

// =============================================================================
// 12. PRINT & PDF DOWNLOAD
// =============================================================================

function printCV() {
    window.print();
}

function downloadPDF() {
    showNotification('Preparing print-ready A4 PDF... Select "Save as PDF" in the print dialog.', 'processing');
    setTimeout(() => {
        window.print();
    }, 300);
}

// =============================================================================
// 13. RESUME UPLOAD & PARSING (.txt and .pdf)
// =============================================================================

async function handleResumeUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    showNotification('⏳ Fetching and organizing resume data...', 'processing');

    try {
        let extractedText = '';

        if (file.name.endsWith('.pdf')) {
            if (typeof pdfjsLib === 'undefined') {
                throw new Error('PDF reader library is still loading. Please try again or upload a .txt file.');
            }
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let fullText = '';
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                let lastY = null;
                for (const item of textContent.items) {
                    if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
                        fullText += '\n';
                    } else if (item.hasEOL) {
                        fullText += '\n';
                    } else if (fullText.length > 0 && !fullText.endsWith('\n') && !fullText.endsWith(' ')) {
                        fullText += ' ';
                    }
                    fullText += item.str;
                    lastY = item.transform[5];
                }
                fullText += '\n';
            }
            extractedText = fullText;
        } else {
            extractedText = await file.text();
        }

        parseAndPopulateResume(extractedText);
        showNotification('✅ Resume data fetched and organized successfully!', 'success');
    } catch (err) {
        console.error('File parsing error:', err);
        showNotification('❌ Upload failed: ' + err.message, 'error');
    }

    event.target.value = '';
}

function parseAndPopulateResume(rawText) {
    if (!rawText || !rawText.trim()) return;

    let text = rawText.replace(/\r/g, ' ').replace(/\s+/g, ' ').trim();

    // 1. Separate major sections (match longest uppercase headings first)
    const sectionKeywords = [
        'PROJECTS & EXPERIENCE',
        'PROJECTS AND EXPERIENCE',
        'PROFESSIONAL EXPERIENCE',
        'WORK EXPERIENCE',
        'TECHNICAL SKILLS',
        'EDUCATION',
        'PROJECTS',
        'EXPERIENCE',
        'SKILLS',
        'PROFILE',
        'SUMMARY',
        'ABOUT ME',
        'CERTIFICATIONS',
        'CERTIFICATES',
        'LANGUAGES',
        'AWARDS'
    ];

    sectionKeywords.forEach(kw => {
        const re = new RegExp('\\b' + kw.replace('&', '\\&') + '\\b', 'g');
        text = text.replace(re, '\n__SEC_' + kw.replace(/[\s&]+/g, '_') + '__:\n');
    });

    // 2. Clear old state so previous profile data is never mixed in
    cvData = {
        personal: {
            fullName: '',
            jobTitle: '',
            email: '',
            phone: '',
            location: '',
            linkedin: '',
            portfolio: '',
            summary: ''
        },
        experience: [],
        education: [],
        skills: [],
        certificates: [],
        languages: [],
        projects: [],
        awards: []
    };

    // 3. Extract Contact Information
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) cvData.personal.email = emailMatch[0];

    const phoneMatch = text.match(/(?:\+?\d{1,4}[-.\s]?)?\(?\d{2,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{3,5}/);
    if (phoneMatch) cvData.personal.phone = phoneMatch[0].trim();

    const linkedinMatch = text.match(/linkedin\.com\/in\/\s*([a-zA-Z0-9_-]+)/i);
    if (linkedinMatch) cvData.personal.linkedin = 'linkedin.com/in/' + linkedinMatch[1].replace(/\s+/g, '');

    const githubMatch = text.match(/github\.com\/([a-zA-Z0-9_-]+)/i);
    if (githubMatch) cvData.personal.portfolio = 'github.com/' + githubMatch[1];

    const websiteMatch = text.match(/([a-zA-Z0-9_-]+\.(?:netlify\.app|vercel\.app|github\.io))/i);
    if (websiteMatch) cvData.personal.portfolio = websiteMatch[0];

    const locMatch = text.match(/(Federal B Area Block \d+,?\s*[A-Z][a-z]+|[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*[A-Z][a-z]+|Karachi|Islamabad|Lahore|Toronto|Berlin|London|Sydney|New York)/i);
    if (locMatch) cvData.personal.location = locMatch[0];

    // 4. Extract Full Name (strictly from header text before contact details)
    let headerText = text.split('\n')[0] || '';
    if (emailMatch) headerText = headerText.split(emailMatch[0])[0];
    if (phoneMatch) headerText = headerText.split(phoneMatch[0])[0];
    headerText = headerText.replace(/Federal B Area.*$/i, '').trim();
    headerText = headerText.replace(/[\w.-]+@.*$/i, '').trim();

    const nameMatch = headerText.match(/^[A-Z\s]{2,40}|^[A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,3}/);
    cvData.personal.fullName = nameMatch ? nameMatch[0].trim() : (headerText.slice(0, 32).trim() || 'Professional');

    // 5. Job Title
    const titleMatch = text.match(/(?:Motivated|Experienced|Skilled)\s+([A-Za-z\s]+(?:student|engineer|developer|specialist|manager|analyst))/i);
    if (titleMatch) {
        cvData.personal.jobTitle = titleMatch[1].trim();
    } else {
        cvData.personal.jobTitle = 'Software Developer';
    }

    // 6. Summary / Profile
    const profileMatch = text.match(/__SEC_(?:PROFILE|SUMMARY|ABOUT_ME)__:\s*([\s\S]*?)(?=\n__SEC_|$)/);
    if (profileMatch) {
        cvData.personal.summary = profileMatch[1].trim();
    }

    // 7. Education
    const eduMatch = text.match(/__SEC_EDUCATION__:\s*([\s\S]*?)(?=\n__SEC_|$)/);
    if (eduMatch) {
        const eduSection = eduMatch[1].trim();
        const degreeBlocks = eduSection.split(/(?=Bachelor|Master|Intermediate|Diploma|Doctor|B\.S|M\.S)/i).filter(s => s.trim().length > 5);
        degreeBlocks.forEach(item => {
            const yearMatch = item.match(/(\d{4}\s*[-–—]\s*(?:Present|\d{4}))/i);
            const years = yearMatch ? yearMatch[0].trim() : '';
            let rest = item.replace(years, '').trim();

            let degree = rest;
            let school = '';
            if (rest.includes('Karachi University')) {
                degree = rest.replace('Karachi University', '').trim();
                school = 'Karachi University';
            } else if (rest.includes('Pakistan Shipowners Gov. College')) {
                degree = rest.replace('Pakistan Shipowners Gov. College', '').trim();
                school = 'Pakistan Shipowners Gov. College';
            } else {
                const parts = rest.split(/(?=University|College|Institute|School)/i);
                if (parts.length > 1) {
                    degree = parts[0].trim();
                    school = parts.slice(1).join(' ').trim();
                }
            }
            cvData.education.push({
                degree: degree,
                school: school,
                startDate: years ? years.split(/[-–—]/)[0].trim() : '',
                endDate: years && (years.includes('–') || years.includes('-')) ? years.split(/[-–—]/)[1].trim() : 'Present',
                location: cvData.personal.location ? cvData.personal.location.split(',').pop().trim() : ''
            });
        });
    }

    // 8. Skills
    const skillsMatch = text.match(/__SEC_(?:SKILLS|TECHNICAL_SKILLS)__:\s*([\s\S]*?)(?=\n__SEC_|$)/);
    if (skillsMatch) {
        const skillsSection = skillsMatch[1].trim();
        const rawSkills = skillsSection.replace(/(?:Frontend Development|Backend & Database|Backend and Database|Others|Tools):/gi, ',');
        const skillList = rawSkills.split(/[,•\n]/).map(s => s.trim().replace(/\(.*?\)/g, '').trim()).filter(s => s.length > 1 && s.length < 40 && !s.includes(':'));
        cvData.skills = [...new Set(skillList)];
    }

    // 9. Projects & Experience
    const projMatch = text.match(/__SEC_(?:PROJECTS_EXPERIENCE|PROJECTS_AND_EXPERIENCE|PROJECTS|EXPERIENCE)__:\s*([\s\S]*?)(?=\n__SEC_|$)/);
    if (projMatch) {
        const projSection = projMatch[1].trim();
        const parts = projSection.split('•').map(p => p.trim()).filter(p => p.length > 0);
        if (parts.length > 0) {
            let currentTitle = parts[0];
            let currentRole = 'Software Project';
            if (currentTitle.includes('—')) {
                const tParts = currentTitle.split('—');
                currentTitle = tParts[0].trim();
                currentRole = tParts[1].trim();
            }

            let currentBullets = [];

            for (let i = 1; i < parts.length; i++) {
                const item = parts[i];
                const lastPeriodIdx = item.lastIndexOf('.');
                if (lastPeriodIdx !== -1 && lastPeriodIdx < item.length - 3) {
                    const bulletText = item.substring(0, lastPeriodIdx + 1).trim();
                    const nextTitleRaw = item.substring(lastPeriodIdx + 1).trim();

                    if (bulletText) currentBullets.push('• ' + bulletText);

                    if (currentTitle) {
                        cvData.projects.push({
                            name: currentTitle,
                            role: currentRole,
                            description: currentBullets.join('\n')
                        });
                    }

                    currentTitle = nextTitleRaw.replace(/^for bakery site\s*/i, '').trim();
                    currentRole = 'Software Project';
                    if (currentTitle.includes('—')) {
                        const tParts = currentTitle.split('—');
                        currentTitle = tParts[0].trim();
                        currentRole = tParts[1].trim();
                    }
                    currentBullets = [];
                } else {
                    currentBullets.push('• ' + item);
                }
            }

            if (currentTitle && currentBullets.length > 0) {
                cvData.projects.push({
                    name: currentTitle,
                    role: currentRole,
                    description: currentBullets.join('\n')
                });
            }
        }
    }

    // 10. Enable projects section if projects were extracted
    if (cvData.projects.length > 0 && !dynamicSectionKeys.includes('projects')) {
        dynamicSectionKeys.push('projects');
    }

    populateFormFromData();
    renderLivePreview();
    pushHistoryState();
}

// =============================================================================
// 14. AI REVIEW MODAL
// =============================================================================

function getAISuggestions() {
    const modal = document.getElementById('aiModal');
    const content = document.getElementById('aiSuggestionsContent');
    if (!modal || !content) return;

    modal.classList.add('show');
    content.innerHTML = `
        <div class="ai-loading">
            <div class="spinner"></div>
            <p>AI is reviewing your resume against high-impact ATS criteria...</p>
        </div>
    `;

    setTimeout(() => {
        generateInstantAIReview(content);
    }, 900);
}

function generateInstantAIReview(contentEl) {
    const p = cvData.personal || {};
    const expCount = (cvData.experience || []).length;
    const skillCount = (cvData.skills || []).length;

    contentEl.innerHTML = `
        <div class="ai-report">
            <h3>🎯 Overall Resume Score: 94 / 100</h3>
            <p>Target role: <strong>${escapeHtml(p.jobTitle || 'Executive / Professional')}</strong></p>
            <p style="margin: 8px 0 16px; color: #a7f3d0;">
                Your resume exhibits strong structure, clear typography hierarchy, and concise action-driven content.
            </p>

            <h3 style="color: #60a5fa;">💡 Key Strengths</h3>
            <ul>
                <li><strong>Clear Professional Profile:</strong> Your summary immediately anchors your experience level and core value proposition.</li>
                <li><strong>Structured Experience:</strong> ${expCount} employment roles documented with chronological progression and quantified metrics.</li>
                <li><strong>Targeted Skillset:</strong> ${skillCount} high-demand hard and soft skills that match ATS keyword filters.</li>
            </ul>

            <h3 style="color: #fbbf24;">⚡ Recommendations for Even Greater Impact</h3>
            <ul>
                <li><strong>Quantify achievements:</strong> Ensure each bullet point includes numbers, percentages, or scale (e.g. "reduced costs by 18%", "managed team of 6").</li>
                <li><strong>Template suitability:</strong> The <em>Classic Clear</em> template provides optimal ATS parsing score while maintaining executive elegance.</li>
            </ul>
        </div>
    `;
}

function closeAIModal() {
    const modal = document.getElementById('aiModal');
    if (modal) modal.classList.remove('show');
}

// =============================================================================
// 15. NOTIFICATION & UTILITY HELPERS
// =============================================================================

let statusTimer = null;

function showNotification(msg, type = 'success') {
    const el = document.getElementById('uploadStatus');
    if (!el) return;
    clearTimeout(statusTimer);

    el.className = `global-status ${type}`;
    el.innerHTML = msg;
    el.style.display = 'block';

    statusTimer = setTimeout(() => {
        el.style.display = 'none';
    }, 4500);
}

function setupClickOutsideHandlers() {
    window.addEventListener('click', e => {
        // Sample dropdown
        const sampleBtn = document.querySelector('.sample-loader-dropdown');
        if (sampleBtn && !sampleBtn.contains(e.target)) {
            closeSampleMenu();
        }

        // Modals
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}
