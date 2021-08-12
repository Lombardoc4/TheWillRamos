/* eslint-disable func-names */
// eslint-disable-next-line func-names
(function () {
    const preloader = () => {
        document.querySelector('.preloader').classList.add('on');
        document.getElementById('mainContent').classList.remove('d-none');
    }

    window.onload = () => {
        preloader();
        document.body.style.minHeight = `${window.innerHeight}px`;
        document.getElementById('mainContent').style.minHeight = `${window.innerHeight}px`;
    };


}());
