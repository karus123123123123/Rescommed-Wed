//slider2 for other section
document.addEventListener("DOMContentLoaded", () => {
    // Đảm bảo biến được khởi tạo sau khi DOM đã tải
    let currentSlidev1 = 0;

    function showSlidev1(index) {
        const slideses = document.querySelector('.slidered-items');

        // console.log(totalSlide);
        if (index >= 2) {
            currentSlidev1 = 0;
        } else if (index < 0) {
            currentSlidev1 = 1;
        } else {
            currentSlidev1 = index;
        }
        // console.log(currentSlidev1);
        slideses.style.transform = `translateX(-${currentSlidev1 * 100}%)`;
    }

    function nextSlidev1() {
        showSlidev1(currentSlidev1 + 1);
    }

    function prevSlidev1() {
        showSlidev1(currentSlidev1 - 1);
    }

    // Gán sự kiện cho các nút
    document.getElementById("nextButton").addEventListener("click", nextSlidev1);
    document.getElementById("prevButton").addEventListener("click", prevSlidev1);
});