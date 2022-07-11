var pic = document.getElementById('cat-img');

function blank() {
    pic.src = "../img/blank.jpg";
}

function domi() {
    pic.src = "../img/cbg.jpg";
}

document.getElementById('acc1').addEventListener('click', blank);
document.getElementById('acc2').addEventListener('click', blank);
document.getElementById('acc3').addEventListener('click', blank);
document.getElementById('acc4').addEventListener('click', blank);
document.getElementById('acc5').addEventListener('click', blank);
document.getElementById('acc6').addEventListener('click', blank);
document.getElementById('acc7').addEventListener('click', blank);
document.getElementById('acc8').addEventListener('click', blank);
document.getElementById('acc9').addEventListener('click', blank);
document.getElementById('acc10').addEventListener('click', blank);
document.getElementById('acc11').addEventListener('click', blank);
document.getElementById('acc12').addEventListener('click', domi);
document.getElementById('acc13').addEventListener('click', blank);
document.getElementById('acc14').addEventListener('click', blank);
document.getElementById('acc15').addEventListener('click', blank);
document.getElementById('acc16').addEventListener('click', blank);
document.getElementById('acc17').addEventListener('click', blank);
document.getElementById('acc18').addEventListener('click', blank);
document.getElementById('acc19').addEventListener('click', blank);
document.getElementById('acc20').addEventListener('click', blank);
document.getElementById('acc21').addEventListener('click', blank);
document.getElementById('acc22').addEventListener('click', blank);
document.getElementById('acc23').addEventListener('click', blank);
document.getElementById('acc24').addEventListener('click', blank);


$(document).ready(function (event) {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
    });
});
$(document).ready(function (event) {
    $('.asearch').click(function (event) {
        $('.asearch__input').toggleClass('visible');
        $('.asearch__wrap').toggleClass('temp');

        setTimeout(() => $(".input__search").focus(), 300)
    });
});


// код из чужой реализации данной работы
document.addEventListener('DOMContentLoaded', function () {
    /*---------------- Header ----------------*/

    // Bottom header
    // нижнее выпадающее меню
    const buttonDrop = document.querySelectorAll('.nav-direction__link');
    //на каждую кнопку вешаем обработчик
    buttonDrop.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let button = this;
            console.log(this)
            if (e.target.classList.contains('activ')) { //если уже класс есть на этой кнопке
                e.currentTarget.classList.remove('activ') //то удаляем конкретно на этой кнопке
            } else {
                e.target.classList.add('activ') //иначе добавляем класс
                buttonDrop.forEach(el => {      //удаляем активный класс на других кнопках
                    if (el != button) {
                        el.classList.remove("activ");
                    }
                });
            }
        })
    })
    //если это не кнопка и не само выпадающее меню, то удаляем класс
    //первое условие необходимо добавить, чтобы незацикливать появление->исчезновение класса
    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('nav-direction__link') && !event.target.classList.contains('nav-direction__scroll')) {
            buttonDrop.forEach(function (e) {
                e.classList.remove('activ')
            })
        }
    })

    //скрол в выпадающем меню

    const simpleBar1 = new SimpleBar(document.getElementById('scroll-1'), { autoHide: false, scrollbarMaxSize: 28 });
    simpleBar1.recalculate();

    const simpleBar2 = new SimpleBar(document.getElementById('scroll-2'), { autoHide: false, scrollbarMaxSize: 28 });
    simpleBar2.recalculate();

    const simpleBar3 = new SimpleBar(document.getElementById('scroll-3'), { autoHide: false, scrollbarMaxSize: 28 });
    simpleBar3.recalculate();

    const simpleBar4 = new SimpleBar(document.getElementById('scroll-4'), { autoHide: false, scrollbarMaxSize: 28 });
    simpleBar4.recalculate();

    const simpleBar5 = new SimpleBar(document.getElementById('scroll-5'), { autoHide: false, scrollbarMaxSize: 28 });
    simpleBar5.recalculate();


})
