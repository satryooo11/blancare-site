// Blancare Dental Clinic — 動き（メニュー開閉、写真の欠けの表示、出現アニメーション）
(function () {
  document.documentElement.classList.add('js');

  // スマホのメニュー
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // トップの背景写真：読み込めたときだけ薄い白のグラデーションを重ねる
  var heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    var hero = heroBg.closest('.hero');
    function heroOk() { hero.classList.add('has-photo'); }
    function heroMissing() { heroBg.classList.add('is-missing'); hero.classList.remove('has-photo'); }
    if (heroBg.complete) { heroBg.naturalWidth > 0 ? heroOk() : heroMissing(); }
    heroBg.addEventListener('load', heroOk);
    heroBg.addEventListener('error', heroMissing);
  }

  // 写真がまだ無い枠には、何の写真かを表示する
  document.querySelectorAll('.photo img').forEach(function (img) {
    var box = img.closest('.photo');
    function missing() { box.classList.add('is-missing'); }
    if (img.complete && img.naturalWidth === 0) missing();
    img.addEventListener('error', missing);
  });

})();
