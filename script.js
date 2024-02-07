
let font = document.querySelector('.font');

font.addEventListener('click', () => {
    font.classList.add()
})

let show = document.querySelector('.show');
// show.style.display = 'none';
let child = document.querySelector('.child');
child.addEventListener('click', () => {

    let show = document.querySelector('.show');
    let child = document.querySelector('.child');

    child.addEventListener('click', () => {
        if (show.style.display === 'none') {
            show.style.display = 'block';
        }

        else if (show.style.display === 'block') {
            show.style.display = 'none';
        }
    });


})