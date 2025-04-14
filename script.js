function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    section.classList.add('active');
}