document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollToNextSection();
    } else {
        scrollToPreviousSection();
    }
});

function scrollToNextSection() {
    const currentSection = getCurrentSection();
    const nextSection = currentSection.nextElementSibling;
    if (nextSection && nextSection.tagName === 'SECTION') {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToPreviousSection() {
    const currentSection = getCurrentSection();
    const previousSection = currentSection.previousElementSibling;
    if (previousSection && previousSection.tagName === 'SECTION') {
        previousSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let currentSection = sections[0];
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
        }
    });
    return currentSection;
}
