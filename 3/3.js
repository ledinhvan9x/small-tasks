let btnOpen = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.modal');
let iconClose = document.querySelector('.modal-inner .modal-header i');
let btnClose = document.querySelector('.modal-inner .modal-footer button');

let toggleModal = () => {
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
modal.addEventListener('click', function (e){
    if (e.target === e.currentTarget) {
        toggleModal();
    }
});
iconClose.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);