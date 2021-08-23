/* eslint-disable func-names */
// eslint-disable-next-line func-names
(function (_) {
    const ui = {
        header:    document.querySelector('header'),
        preloader: document.querySelector('.preloader'),
        navLinks:  document.getElementsByClassName('nav-link'),
    };

    const breakpoints = {
        sm:  576,
        md:  768,
        lg:  992,
        xl:  1200,
        xxl: 1400,
    };


    const preloader = () => {
        ui.preloader.classList.add('on');
    };

    window.onload = () => {
        const headerAnimations = ['.header-ani', '.header-ani2', '.header-ani3', '.nav-ani'];
        let animationClasses = ['.nav-ani'];
        // preloader();


        // setInterval(() => {

        // }, interval);
        // // after preloader
        // const animation1 = setTimeout(() => {
        //     listEach(ui.header.querySelectorAll('.header-ani'), (headerItem) => {
        //         headerItem.classList.add('on');
        //         // console.log(now, headerItem);
        //     });

        //     document.querySelector('header').classList.add('on');
        //     // document.querySelector('.header-copy').classList.add('on');
        // }, 2000);

        // const animation2

        if (window.location.hash.length) {
            document.getElementById(window.location.hash.slice(1)).classList.add('active-section');
            ui.header.classList.add('d-none');
        } else {
            document.body.style.height = `${window.innerHeight}px`;
            animationClasses = headerAnimations;
        }


        _.each(animationClasses, (className, i) => {
            setTimeout(() => {
                _.each(document.querySelectorAll(className), (item) => {
                    item.classList.add('on');
                });
            }, 1000 * i + 1);
        });

        console.log('loaded');
        preloader();


        // console.log(document.querySelectorAll('[data-yt]'));
        _.each(document.querySelectorAll('[data-yt]'), (el) => {
            el.src = el.dataset.yt;
        });

        // ui.head = `${window.innerHeight}px`;
    };

    const navEvent = (e) => {
        const id = e.target.getAttribute('href');
        ui.preloader.classList.remove('on');
        setTimeout(() => {
            ui.preloader.classList.add('on');
        }, 600);

        _.each(document.querySelectorAll('.active-section'), (el) => {
            el.classList.remove('active-section');
        });

        document.getElementById(id.slice(1)).classList.add('active-section');
    };

    _.each(ui.navLinks, (link) => {
        // console.log(link);
        link.addEventListener('click', navEvent);
    });
}(utilities));
