// скрипт для селекта позаимствован из интернета
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

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
