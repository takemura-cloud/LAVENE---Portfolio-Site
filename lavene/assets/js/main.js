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
        document.addEventListener('DOMContentLoaded',() => {
            const list =
            document.querySelector('.reviews__list');
            const items =
            document.querySelectorAll('.review');
            const prev =
            document.querySelector('.prev');
            const next =
            document.querySelector('.next');

            let index = 0;

            function updateSlide() {
                list.style.transform = `translateX(-${index * 100}%)`;
            }

            next.addEventListener('click',() => {
                if(index < items.length - 1) {
                    index++;
                    updateSlide();
                }
            });

            prev.addEventListener('click',() => {
                if(index > 0) {
                    index--;
                    updateSlide();
                }
            });
        });
    });

}