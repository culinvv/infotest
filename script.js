// 取得按鈕與訊息元素
const thankBtn = document.getElementById('thankBtn');
const thankMessage = document.getElementById('thankMessage');

// 點擊按鈕後切換顯示/隱藏提示文字
thankBtn.addEventListener('click', () => {
  if (thankMessage.style.display === 'none' || thankMessage.style.display === '') {
    thankMessage.style.display = 'block';
  } else {
    thankMessage.style.display = 'none';
  }
});
