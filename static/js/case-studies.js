// static/js/case-studies.js
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all "Use This" buttons
    const useButtons = document.querySelectorAll('.use-case-study');
    
    useButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            const title = this.getAttribute('data-title');
            
            // Redirect to homepage with URL parameter
            window.location.href = `/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterCaseStudies(searchTerm);
        });
    }
    
    // Industry filter
    const industrySelect = document.getElementById('industry');
    if (industrySelect) {
        industrySelect.addEventListener('change', function() {
            const industry = this.value.toLowerCase();
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            filterCaseStudies(searchTerm, industry);
        });
    }
    
    // Function to filter case studies based on search term and industry
    function filterCaseStudies(searchTerm = '', industry = '') {
        const caseStudies = document.querySelectorAll('.grid > div');
        
        caseStudies.forEach(study => {
            const title = study.querySelector('h4').textContent.toLowerCase();
            const company = study.querySelector('h3').textContent.toLowerCase();
            const description = study.querySelector('p').textContent.toLowerCase();
            const studyIndustry = study.querySelector('.bg-blue-100').textContent.toLowerCase();
            
            const matchesSearch = !searchTerm || 
                title.includes(searchTerm) || 
                company.includes(searchTerm) || 
                description.includes(searchTerm);
                
            const matchesIndustry = !industry || studyIndustry === industry;
            
            if (matchesSearch && matchesIndustry) {
                study.classList.remove('hidden');
            } else {
                study.classList.add('hidden');
            }
        });
    }
});