document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.category a'); 
    links.forEach(link => { 
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            alert(`You clicked on ${link.textContent}');
        });
    });
});
