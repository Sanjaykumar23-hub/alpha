document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Store containing detailed content info AND images for each highlight card
    const dataHighlights = {
        certifications: {
            title: "Government Recognized Certifications",
            // Replace with your local image asset path or a custom URL
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop", 
            desc: "Ganesh Commercial Institute provides structured training blueprints perfectly aligned with technical examinations authorized by the Directorate of Technical Education (DoTE), Tamil Nadu.",
            bullets: [
                "Essential qualifications for TNPSC Group 4, VAO, and High Court service evaluations.",
                "Official syllabus tracks covering Junior, Senior, and High-Speed certification grades.",
                "Dedicated assistance with official examination application documentation routines."
            ]
        },
        timings: {
            title: "Flexible Batch Schedules",
            // Replace with your local image asset path or a custom URL
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
            desc: "We understand balancing education and professional timelines can be complex. Our institute remains accessible across extensive operational hours to serve everyone.",
            bullets: [
                "Early Morning Batches starting before college hours.",
                "Late Evening Batches tailored specifically for corporate and working employees.",
                "Self-Paced Practice hours: Spend extra hours sharpening your speed keys whenever machines are free."
            ]
        },
        exams: {
            title: "Weekly Speed-Evaluation Mock Tests",
            // Replace with your local image asset path or a custom URL
            image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=600&auto=format&fit=crop",
            desc: "Speed accuracy is built through simulation. Our weekly mock setup replicates state test center evaluation conditions down to the exact second.",
            bullets: [
                "Conducted on genuine mechanical typewriters to acclimatize finger tension dynamics.",
                "Rigorous evaluation matching state standard valuation error deduct matrices.",
                "Personalized metric dashboards charting your Words-Per-Minute (WPM) progress week-over-week."
            ]
        }
    };

    const modal = document.getElementById('highlight-modal');
    const modalContent = document.getElementById('modal-dynamic-content');
    const closeTrigger = document.querySelector('.modal-close-trigger');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    // Open Modal Event Sequence
    readMoreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const highlightKey = btn.getAttribute('data-highlight');
            const data = dataHighlights[highlightKey];

            if (data) {
                let bulletListHTML = data.bullets.map(item => `<li>${item}</li>`).join('');
                
                // Generated 2-Column layout layout string (Image Column + Text Column)
                modalContent.innerHTML = `
                    <div class="modal-info-wrap">
                        <div class="modal-img-col">
                            <img src="${data.image}" alt="${data.title}" class="modal-feature-img">
                        </div>
                        <div class="modal-text-col">
                            <h2>${data.title}</h2>
                            <p>${data.desc}</p>
                            <ul>${bulletListHTML}</ul>
                        </div>
                    </div>
                `;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; 
    }

    if (closeTrigger) closeTrigger.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
});
