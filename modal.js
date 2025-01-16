// <!-- 모달 열기 버튼 -->
// 	<button class="modal-btn">모달창 열기</button>
// 	<!-- 모달 창: hide 클래스로 숨김처리 -->
// 	<div class="modal hide">
// 		<div class="modal-content">
// 			<h2>모달창</h2>
// 			<p>모달창 내용</p>
// 			<button class="close-btn">닫기</button>
// 		</div>
// 	</div>


const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn")

function toggleModal(a) {
    modal.style.display = (a);
};

const toggleClosed = closeBtn.addEventListener("click", function () {
    toggleModal("none");
})

export default toggleClosed;