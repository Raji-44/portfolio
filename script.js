document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll Animations (Fade In)
    const fadeElems = document.querySelectorAll('.info-card, .skill-category, .project-card, .cert-card, .timeline-item');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => {
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(30px)';
        elem.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(elem);
    });

    // --- DATA & CONTENT ---

    // 1. Resource Map (Links to Files)
    const resourceMap = {
        // Projects
        'zomato': 'zomato.png',
        'superstore': 'Sales dashboard.png',
        'women': 'Partime dashboard.png',
        'jobportal': 'jobportal.png',
        'neoweb': 'neoweb.png',

        // Certifications
        'ibm': 'TNSDC.png',
        'infosys': 'infosys.png',
        'besant_cert': 'besantcousre.jpeg',
        'novitech': 'novitech.png',
        'ics': 'tcs.png',
        'swati': 'hackathon.jpeg',

        // Internships
        'monk': 'internship.jpeg',
        'besant': 'beasantinternship.jpeg'
    };

    // 2. Content Data (Titles, Descriptions, Tags)
    const projectsData = {
        'zomato': {
            title: 'Zomato Dashboard',
            desc: [
                'Analyzed restaurant ratings, locations, and customer preferences',
                'Built interactive visuals using Power BI and Excel',
                'Extracted insights to understand performance patterns'
            ],
            tags: ['Power BI', 'Excel'],
            icon: 'fa-utensils'
        },
        'superstore': {
            title: 'Superstore Sales Dashboard',
            desc: [
                'Tracked revenue, profit, and regional performance',
                'Created dynamic dashboards using Power BI',
                'Supported business decision-making through insights'
            ],
            tags: ['Power BI', 'Analysis'],
            icon: 'fa-shopping-cart'
        },
        'women': {
            title: 'Women Part-time Work Dashboard',
            desc: [
                'Studied women’s part-time employment patterns',
                'Visualized workforce participation trends',
                'Highlighted key employment insights'
            ],
            tags: ['Excel', 'Visualization'],
            icon: 'fa-female'
        },
        'jobportal': {
            title: 'Job Portal Website',
            desc: [
                'Developed job posting and login features',
                'Used HTML, CSS, JavaScript, and MySQL',
                'Gained full-stack development exposure'
            ],
            tags: ['HTML/CSS', 'MySQL'],
            icon: 'fa-briefcase'
        },
        'neoweb': {
            title: 'Neo Web Platform (Team Project)',
            desc: [
                'Designed responsive and user-friendly pages',
                'Collaborated in a team environment',
                'Used HTML, CSS, and JavaScript'
            ],
            tags: ['HTML/CSS', 'JS'],
            icon: 'fa-users'
        }
    };

    const internshipData = {
        'monk': {
            title: 'Engineering Monk – Offline Internship',
            desc: [
                'Assisted in simple data analysis activities',
                'Supported basic web-related tasks',
                'Gained real-world teamwork experience'
            ],
            tags: ['Offline', 'Analysis'],
            icon: 'fa-briefcase'
        },
        'besant': {
            title: 'Besant Technologies – Online Internship',
            desc: [
                'Practiced Python, SQL, Excel, and Power BI',
                'Created basic dashboards and reports',
                'Learned data analytics fundamentals'
            ],
            tags: ['Online', 'Training'],
            icon: 'fa-laptop-code'
        }
    };

    const certificationData = {
        'ibm': {
            title: 'IBM SkillsBuild – TNSDC FEWD & Cloud',
            desc: [
                'Learned HTML, CSS, and basic web concepts',
                'Introduced to cloud fundamentals',
                'Hands-on learning through structured modules'
            ],
            tags: ['Web', 'Cloud'],
            icon: 'fa-certificate'
        },
        'infosys': {
            title: 'Infosys Springboard – OOPs Using Python',
            desc: [
                'Learned classes, objects, and inheritance',
                'Practiced Python problem-solving',
                'Strengthened programming fundamentals'
            ],
            tags: ['Python', 'OOP'],
            icon: 'fa-code'
        },
        'besant_cert': {
            title: 'Besant Technologies – Data Analytics',
            desc: [
                'Worked with Python, SQL, Excel, and Power BI',
                'Created dashboards using real datasets',
                'Gained hands-on analytics experience'
            ],
            tags: ['Analytics', 'Tools'],
            icon: 'fa-chart-line'
        },
        'novitech': {
            title: 'Novitech – Data Analytics',
            desc: [
                'Learned data cleaning techniques',
                'Practiced data visualization',
                'Worked with real-world datasets'
            ],
            tags: ['Data', 'Viz'],
            icon: 'fa-database'
        },
        'ics': {
            title: 'ICS ION Certificate',
            desc: [
                'Learned workplace readiness skills',
                'Improved communication basics',
                'Gained career-oriented knowledge'
            ],
            tags: ['Soft Skills', 'Professional'],
            icon: 'fa-award'
        },
        'swati': {
            title: 'Swati.ai – Learnathon',
            desc: [
                'Participated in structured learning challenges',
                'Improved consistency in learning',
                'Focused on continuous skill development'
            ],
            tags: ['Learning', 'Growth'],
            icon: 'fa-brain'
        }
    };

    // --- MODAL & INTERACTION LOGIC ---

    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const modalBtn = document.querySelector('.modal-action');

    /**
     * Opens the modal with populated data.
     */
    const openModal = (data, category, key) => {
        if (!data) return;

        // 1. Populate Text Content
        document.getElementById('modalTitle').textContent = data.title;

        const descContainer = document.getElementById('modalDesc');
        descContainer.innerHTML = '';
        const ul = document.createElement('ul');
        ul.style.listStylePosition = 'inside';
        ul.style.textAlign = 'left';

        data.desc.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            li.style.marginBottom = '8px';
            ul.appendChild(li);
        });
        descContainer.appendChild(ul);

        // 2. Set Icon
        const imgPlaceholder = document.querySelector('.modal-img-placeholder');
        imgPlaceholder.innerHTML = `<i class="fas ${data.icon}"></i>`;

        // 3. Set Tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = '';
        if (data.tags) {
            data.tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });
        }

        // 4. Configure Button Text & Action
        // Text Logic
        if (category === 'project') {
            if (['zomato', 'superstore', 'women'].includes(key)) {
                modalBtn.textContent = 'View Dashboard';
            } else {
                modalBtn.textContent = 'View Website';
            }
        } else {
            modalBtn.textContent = 'View'; // Default for Certs/Internships
        }

        // Action Logic (Click to Open File)
        const fileName = resourceMap[key];
        modalBtn.onclick = (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            if (fileName) {
                window.open(fileName, '_blank');
            } else {
                alert('Project/Certificate file not mapped or available.');
            }
        };

        // 5. Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // --- EVENT LISTENERS ---

    // 1. Projects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-project');
            openModal(projectsData[key], 'project', key);
        });
    });

    // 2. Certifications & Internships
    document.querySelectorAll('.timeline-item, .cert-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-cat');
            const key = card.getAttribute('data-key');

            if (cat === 'internship') openModal(internshipData[key], 'internship', key);
            if (cat === 'certification') openModal(certificationData[key], 'certification', key);
        });
    });

    // Close Modal Events
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

});
