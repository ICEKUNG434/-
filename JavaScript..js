function enterSite() {
  // ซ่อน standby
  document.getElementById('standby').style.display = 'none';

  // แสดง loading
  const loading = document.getElementById('loading');
  loading.style.display = 'flex';

  // รอ 1 วินาที
  setTimeout(() => {
    // ซ่อน loading
    loading.style.display = 'none';

    // แสดง main-content
    document.getElementById('main-content').style.display = 'block';

    // เลื่อนขึ้นบนสุด (ถ้าต้องการ)
    window.scrollTo(0, 0);
  }, 1000);
}
