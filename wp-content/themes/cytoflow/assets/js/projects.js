/**
 * CytoFlow Projects Filter Script (Static / JS Version)
 */

document.addEventListener('DOMContentLoaded', () => {

    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return; // Not on projects page, exit early

    const searchInput    = document.getElementById('searchInput');
    const serviceSelect  = document.getElementById('serviceSelect');
    const categorySelect = document.getElementById('categorySelect');
    const projectsCount  = document.getElementById('projectsCount');
    const noResults      = document.getElementById('noResults');
    const resetFilters   = document.getElementById('resetFilters');

    const projectCards = Array.from(document.querySelectorAll('.filterable-project'));

    // Cache options to easily restore them
    const allCategoryOptions = categorySelect ? Array.from(categorySelect.querySelectorAll('option')) : [];

    /* ── Initial state ── */
    if (projectsCount) projectsCount.textContent = projectCards.length;

    /* ── Filter function ── */
    function filterProjects() {
        const searchTerm  = searchInput    ? searchInput.value.trim().toLowerCase()  : '';
        const svcFilter   = serviceSelect  ? serviceSelect.value                     : 'all';
        const catFilter   = categorySelect ? categorySelect.value                    : 'all';

        let visible = 0;

        projectCards.forEach(card => {
            const cardName = (card.dataset.name     || '').toLowerCase();
            const cardSvc  = (card.dataset.service  || '');
            const cardCat  = (card.dataset.category || '');

            const okSearch = cardName.includes(searchTerm);
            const okSvc    = svcFilter === 'all'  || cardSvc  === svcFilter;
            const okCat    = catFilter === 'all'  || cardCat  === catFilter;

            if (okSearch && okSvc && okCat) {
                card.style.display = '';
                // Add visible class in a small timeout to allow CSS transitions
                setTimeout(() => card.classList.add('visible'), 10);
                visible++;
            } else {
                card.style.display = 'none';
                card.classList.remove('visible');
            }
        });

        if (projectsCount) projectsCount.textContent = visible;
        if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
        
        // Show/hide reset button
        if (resetFilters) {
            if (searchTerm !== '' || svcFilter !== 'all' || catFilter !== 'all') {
                resetFilters.style.display = 'inline-flex';
            } else {
                resetFilters.style.display = 'none';
            }
        }
    }

    /* ── Cascade Categories Function ── */
    function updateCategories() {
        if (!serviceSelect || !categorySelect) return;
        
        const selectedService = serviceSelect.value;
        const currentSelectedCategory = categorySelect.value;
        
        // Clear all options
        categorySelect.innerHTML = '';
        
        let foundPreviousCategory = false;

        // Re-add matching options
        allCategoryOptions.forEach(option => {
            // "All Categories" option has value 'all' and no data-service
            if (option.value === 'all') {
                categorySelect.appendChild(option);
                return;
            }

            // In static mode, we figure out which categories belong to which service by inspecting the project cards
            // Find if there is any project that has THIS service AND THIS category
            let categoryHasProjectsWithThisService = false;
            
            if (selectedService === 'all') {
                categoryHasProjectsWithThisService = true; // Show all categories if no service selected
            } else {
                // Check if any card matches both the selected service and this option's category
                categoryHasProjectsWithThisService = projectCards.some(card => 
                    card.dataset.service === selectedService && 
                    card.dataset.category === option.value
                );
            }

            if (categoryHasProjectsWithThisService) {
                categorySelect.appendChild(option);
                if (option.value === currentSelectedCategory) {
                    foundPreviousCategory = true;
                }
            }
        });

        // If the previously selected category is no longer valid for the new service, reset it
        if (!foundPreviousCategory) {
            categorySelect.value = 'all';
        }
    }

    /* ── Event listeners ── */
    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }
    
    if (serviceSelect) {
        serviceSelect.addEventListener('change', () => {
            updateCategories();
            filterProjects();
        });
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', filterProjects);
    }
    
    if (resetFilters) {
        resetFilters.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (serviceSelect) serviceSelect.value = 'all';
            updateCategories();
            if (categorySelect) categorySelect.value = 'all';
            filterProjects();
        });
    }

});
