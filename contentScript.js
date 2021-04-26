setTimeout(() => {
    const diffContent = document.querySelectorAll('.differential-diff');
    diffContent.forEach(table => {
        const cells = table.getElementsByTagName('td');
        for (let cell of cells) {
            if (cell.getAttribute('id')) {
                cell.addEventListener('click', (e) => {
                    window.location.hash = e.target.id;
                })
            }
        }
    });
}, 14000); // Phat in hope that diff content is loaded before the clicks begin
