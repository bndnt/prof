// document.getElementById('mobile_menu_toggle').onclick = function (e){
//     e.preventDefault();
//     this.classList.toggle('active');
// }
document.querySelector('#mobile_menu_toggle').addEventListener('click',function (e) {
    e.preventDefault();
    if(this.classList.contains('active')){
        this.classList.remove('active');
        document.querySelector('.top__hamburger').classList.remove('nav-active');
        document.body.classList.remove('nav-active');

    }
    else{
        this.classList.add('active');
        document.querySelector('.top__hamburger').classList.add('nav-active');
        document.body.classList.add('nav-active');

    }
})