'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__close-btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });

        $('.slider').slick({
            autoplay: true, // 自動再生
            autoplaySpeed: 3000, // 3秒ごとに切り替え
            dots: true, // 下にドットを表示
            arrows: false, // 矢印は非表示（必要ならtrueに）
            infinite: true, // 無限ループ
            speed: 500, // フェード/スライドのスピード
            fade: false // trueにするとフェード切り替えになる
            });

        $(window).on('scroll',function(){
            $('.fadein').each(function(){
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 100){
                    $(this).addClass('show');
                }
            });
        });

        //モーダル開く
        $('.product__cta').on('click',function(){
            let $product = $
            (this).closest('.product');

            if ($product.hasClass('product--soap')){
                $('#modal-soap').addClass('show');
            } else if
            ($product.hasClass('product--oil')){
                $('#modal-oil').addClass('show');
            } else if
            ($product.hasClass('product--pillow-mist')){
                $('#modal-mist').addClass('show');
            }
        });

        //閉じる
        $('.modal__close').on('click',function(){
            $(this).closest('.modal').removeClass('show');
        });

        //モーダル外クリックで閉じる
        $('.modal').on('click',function(e){
            if ($(e.target).is('.modal')){
                $(this).removeClass('show');
            }
        })

        //Quality開閉操作
        document.querySelectorAll('.quality__toggle').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.closest('.quality__item');
                const description = item.querySelector('.quality__description') ;
                const isOpen = button.getAttribute('aria-expanded')==='true';

                if(isOpen){
                    description.style.display = 'none';
                    button.textContent = '+';
                    button.setAttribute('aria-expanded','false');
                }else{
                    description.style.display = 'block';
                    button.textContent = '-';
                    button.setAttribute('aria-expanded','true');
                }
            });
        });

     // レビュースライド
        const list = document.querySelector('.reviews__list');
        const items = document.querySelectorAll('.review');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const indicators = document.querySelectorAll('.indicator li');

        let index = 0; // 現在のスライド番号

        // スライドを更新する関数
        function updateSlide() {
            const itemWidth = items[0].offsetWidth + 20; // 幅 + margin調整（pxは余白に合わせて調整してね）
            list.style.transform = `translateX(-${index * itemWidth}px)`;

            // インジケータの色更新
            indicators.forEach((dot, i) => {
            dot.style.backgroundColor = i === index ? '#2d2d2d' : '#ffffff';
            });
        }

        // 次へ
        next.addEventListener('click', () => {
            index++;
            if (index >= items.length) {
                index = 0; //先頭に戻る
            }
            updateSlide();
        });

        // 前へ
        prev.addEventListener('click', () => {
            index--;
            if (index < 0) {
                index = items.length - 1;//最後に戻る
            }
            updateSlide();
        });

        // ドットクリック
        indicators.forEach((dot, i) => {
            dot.addEventListener('click', () => {
            index = i;
            updateSlide();
            });
        });

        // 初期表示
        updateSlide();
        });

    //ページトップボタン
        const pageTopBtn = document.getElementById("pagetop");

        //ボタンを最初は非表示
        pageTopBtn.style.display = 'none';
        
        // スクロール位置に応じてボタンの表示/非表示を切り替える
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                pageTopBtn.style.display = 'block';
            } else {
                pageTopBtn.style.display = 'none';
            }
        });

        // ページトップへスクロール
        pageTopBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        });


}