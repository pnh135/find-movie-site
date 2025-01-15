const input = document.querySelector('input[type="text"]');

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // 엔터키를 눌렀을 때 수행할 동작
        console.log('엔터키를 눌렀습니다.');
    }
});



const toggleModal = function () {
    modal.classList.toggle("hide")
};

modalBtn.addEventLister("click", toggleModal);