let show = document.querySelectorAll('.show');
show.forEach((e) => {
    e.style.display = 'none';
});

let child = document.querySelectorAll('.child');
Array.from(child).forEach((element, index) => {
    element.addEventListener('click', () => {
        if (show[index].style.display === 'none') {
            show[index].style.display = 'block';
        }

        else if (show[index].style.display === 'block') {
            show[index].style.display = 'none';
        }
    })
})