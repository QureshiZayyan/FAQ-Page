let show = document.querySelectorAll('.show');
show.forEach((e) => {
    e.style.display = 'none';
});

let child = document.querySelectorAll('.child');

child.forEach((element) => {
    element.addEventListener('click', () => {
        const isOpen = element.classList.contains('open');

        child.forEach((el) => {
            el.classList.remove('open')
            el.nextElementSibling.style.display = 'none';
            el.lastElementChild.style = 'none';
        });

        if (!isOpen) {
            element.classList.add('open');
            element.lastElementChild.classList.add('open');
            element.nextElementSibling.classList.toggle('opens');
            element.lastElementChild.classList.toggle('open');
            element.nextElementSibling.style.display = 'block';
            element.lastElementChild.style = 'transform: rotate(48deg) translateX(2.9px)';
        }
    });
});
