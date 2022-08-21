$(document).ready(function ($) {
  $('.finish__gift-list').slick({
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  })

  //////////////////// CHANGE PAGE FUNCTIONS

  const startBtn = document.querySelector('.start__btn'),
        oneBtn = document.querySelector('.one__btn'),
        twoBtn = document.querySelector('.two__btn'),
        threeBtn = document.querySelector('.three__btn'),
        fourBtn = document.querySelector('.four__btn'),
        fiveBtn = document.querySelector('.five__btn'),
        sixBtn = document.querySelector('.six__btn'),
        sevenBtn = document.querySelector('.seven__btn');

  const startPage = document.querySelector('.start'),
        onePage = document.querySelector('.one'),
        twoPage = document.querySelector('.two'),
        threePage = document.querySelector('.three'),
        fourPage = document.querySelector('.four'),
        fivePage = document.querySelector('.five'),
        sixPage = document.querySelector('.six'),
        sevenPage = document.querySelector('.seven'),
        finishPage = document.querySelector('.finish');

  ///////////// TEXT ANIMATION
  function animationPageOne() {
    let animationBlocks = document.querySelectorAll('.one__inner p span'),
        radioBtns1 = document.querySelectorAll('.one__inner .form .radio');

    animationBlocks.forEach(block => {
      block.classList.add('ta-l');
    })

    setTimeout(() => {
      radioBtns1[0].classList.add('transform-up');
      radioBtns1[1].classList.add('transform-bottom');
      radioBtns1[2].classList.add('transform-left');
      radioBtns1[3].classList.add('transform-right');
    }, 4000)
  }

  function animationPageTwo() {
    let animationBlocks1 = document.querySelectorAll('.two__inner p span'),
        animationBlocks2 = document.querySelectorAll('.two__inner .list li'),
        formBlock = document.querySelector('.two__inner .form .custom-input-block');

    animationBlocks1.forEach(block => {
      block.classList.add('ta-l');
    })

    animationBlocks2.forEach(block => {
      block.classList.add('ta-l');
    })

    setTimeout(() => {
      formBlock.classList.add('scaleIn');
    }, 6000)
  }

  function animationPageThree() {
    let animationBlocks3 = document.querySelectorAll('.three__inner p span');

    animationBlocks3.forEach(block => {
      block.classList.add('ta-l');
    })
  }

  function animationPageFive() {
    let animationBlocks4 = document.querySelectorAll('.five__inner .five__q_1 span'),
        inputFullAns = document.querySelector('.five__inner .custom-input-block.t-1');

    animationBlocks4.forEach(block => {
      block.classList.add('ta-l');
    })

    setTimeout(() => {
      inputFullAns.classList.add('transform-up');
    }, 1500)
  }

  function animationPageSix() {
    let animationBlock5 = document.querySelectorAll('.six__inner .btn-small');

    animationBlock5.forEach((btn, i) => {
      setTimeout(() => {
        btn.classList.add('scaleIn');
      }, 100 + (i * 100))
    })
  }

  function animationPageSeven() {
    let animationBlocks6 = document.querySelectorAll('.seven__inner p span'),
        formBlock1 = document.querySelector('.seven__inner .form');

    animationBlocks6.forEach(block => {
      block.classList.add('ta-l');
    })

    setTimeout(() => {
      formBlock1.classList.add('scaleIn');
    }, 2000)
  }

  function insertGifts() {
    let finishGiftsBlocks = document.querySelectorAll('.finish__gift');

    for(let i = 0; i < finishGiftsBlocks.length; i++) {
      // finishGiftsBlocks[i].children[0].src = `./images/${giftsArray[i].children[1].children[0].src.split('/')[4]}`
      finishGiftsBlocks[i].children[0].src = `./images/${giftsArray[i].children[1].children[0].src.split('/')[5]}`
      finishGiftsBlocks[i].children[1].innerHTML = giftsArray[i].children[1].children[1].innerHTML;
    }
  }

  //
  function changePage(button, currentPage, nextPage) {
    button.addEventListener('click', function () {
      currentPage.classList.remove('active');
      currentPage.classList.add('hide');
      nextPage.classList.add('active');

      if(twoPage.classList.contains('active')) {
        animationPageTwo();
      } else if(threePage.classList.contains('active')) {
        animationPageThree();
      } else if(fourPage.classList.contains('active')) {
        popupInnerText.innerHTML = 'Пограємо в Шерлока? В цьому завдання тобі потрібно розкрити справу, тобто найти 3 речі які слугують доказами. Бажаю удачі!';
        popup.classList.add('active');
      } else if(fivePage.classList.contains('active')) {
        animationPageFive();
      } else if(sixPage.classList.contains('active')) {
        popupInnerText.innerHTML = 'На екрані ти бачиш 100 кнопок, лише 1 з них активна, найди її!';
        popup.classList.add('active');
        animationPageSix();
      } else if(finishPage.classList.contains('active')) {
        insertGifts();
      }
    })
  }

  changePage(oneBtn, onePage, twoPage);
  changePage(twoBtn, twoPage, threePage);
  changePage(threeBtn, threePage, fourPage);
  changePage(fourBtn, fourPage, fivePage);
  changePage(fiveBtn, fivePage, sixPage);
  changePage(sevenBtn, sevenPage, finishPage);

  startBtn.addEventListener('click', function () {
    startPage.classList.add('hide');
    onePage.classList.add('active');

    document.querySelector('.start #particles-js').remove();

    if(onePage.classList.contains('active')) {
      animationPageOne();
    }
  })

  sixBtn.addEventListener('click', function () {
    sixPage.classList.remove('active');
    sixPage.classList.add('hide');
    sevenPage.classList.add('active');
    setTimeout(() => {
      sevenPage.classList.add('active-1');
      animationPageSeven();
    }, 400)
  })

  /////////////////// GIFTS FUNCTIONS

  const giftListOne = document.querySelectorAll('.one .gift > img'),
        giftListTwo = document.querySelectorAll('.two .gift > img'),
        giftListThree = document.querySelectorAll('.three .gift > img'),
        giftListFour = document.querySelectorAll('.four .gift > img'),
        giftListFive = document.querySelectorAll('.five .gift > img'),
        giftListSix = document.querySelectorAll('.six .gift > img'),
        giftListSeven = document.querySelectorAll('.seven .gift > img');

  let giftsArray = [],
      selectedGift = null;

  function showGifts(giftList, btn) {
    giftList.forEach((gift, i) => {
      gift.addEventListener('click', function () {
        giftList.forEach(gift1 => {gift1.parentElement.classList.add('hide')});
        gift.parentElement.classList.remove('hide');

        setTimeout(() => {
          gift.parentElement.classList.add('active');
        }, 300)

        setTimeout(() => {
          gift.parentElement.classList.add('active-1');
        }, 700)

        setTimeout(() => {
          if(gift.parentElement.classList.contains('active-1')) {
            btn.classList.remove('hide');
          }
        }, 1000)

        selectedGift = gift.parentElement;
        giftsArray.push(selectedGift);
      })
    })
  }

  showGifts(giftListOne, oneBtn);
  showGifts(giftListTwo, twoBtn);
  showGifts(giftListThree, threeBtn);
  showGifts(giftListFour, fourBtn);
  showGifts(giftListFive, fiveBtn);
  showGifts(giftListSix, sixBtn);
  showGifts(giftListSeven, sevenBtn);

  /////////////////// PAGE FUNCTIONS

  const sendBtnOne = document.querySelector('.one .btn-small'),
        sendBtnTwo = document.querySelector('.two .btn-small'),
        cats = document.querySelectorAll('.three__cat'),
        testimonies = document.querySelectorAll('.four__item'),
        inputFive = document.querySelector('.five__input'),
        inputFiveQ3 = document.querySelector('.five__q_3 input'),
        sendBtnSeven = document.querySelector('.seven .btn-small'),
        inputSeven = document.querySelector('.seven__input');

  let catsCount = 0,
      testimoniesCount = 0;

  // 1 PAGE FUNC
  sendBtnOne.addEventListener('click', function () {
    let radioBtns = document.querySelectorAll('.one .radio input'),
        giftBlock = document.querySelector('.one .gift-bg');

    if(radioBtns[2].value === 'drStrange' && radioBtns[2].checked) {
      popupInnerText.innerHTML = 'Тут потрібно було трішки подумати, ти справилась, забирай один із призів)';
      giftBlock.classList.remove('hide');
      popup.classList.add('active');
    } else {
      console.log('false');
    }
  })

  // 2 PAGE FUNC
  sendBtnTwo.addEventListener('click', function () {
    let inputField = document.querySelector('.two input'),
        giftBlock = document.querySelector('.two .gift-bg');

    if(inputField.value === '165426') {
      popupInnerText.innerHTML = 'Важче ніж попередній? Але ти змогла, йдемо далі)';
      giftBlock.classList.remove('hide');
      popup.classList.add('active');
    } else {
      console.log('false');
    }
  })

  // 3 PAGE FUNC
  cats.forEach((cat, i) => {
    let giftBlock = document.querySelector('.three .gift-bg');

    cat.addEventListener('click', function () {
      cat.classList.add('hide');
      catsCount += 1;

      if(catsCount === 10) {
        popupInnerText.innerHTML = 'Наскільки було важко від 1 до 10? Забирай свій приз, і до речі в кінці ти матимеш змогу вибрати приз серед вибраних призів 🎁😊';
        giftBlock.classList.remove('hide');
        popup.classList.add('active');
      } else {
        console.log('false')
      }
    })
  })

  // 4 PAGE FUNC
  function quest4Finish() {
    let giftBlock = document.querySelector('.four .gift-bg');

    if(testimoniesCount === 3 && !popup.classList.contains('active')) {
      popupInnerText.innerHTML = 'Неймовірна робота юний Шерлок! Ти змогла розкрити цю справу дуже швидко, забирай свою винагороду і йдемо далі!';
      popup.classList.add('active');
      giftBlock.classList.remove('hide');
      testimoniesCount = 0;
    }
  }

  testimonies[0].addEventListener('click', function () {
    this.classList.add('hide');
    popupInnerText.innerHTML = `Ти знайшла ${++testimoniesCount} річ. Швидше за все ця ваза є знаряддям вбивста.`;
    popup.classList.add('active');
  })

  testimonies[1].addEventListener('click', function () {
    this.classList.add('hide');
    popupInnerText.innerHTML = `Ти знайшла ${++testimoniesCount} річ. Взуття! Злочин було вчинено особою жіночої статі.`;
    popup.classList.add('active');
  })

  testimonies[2].addEventListener('click', function () {
    this.classList.add('hide');
  })

  testimonies[3].addEventListener('click', function () {
    this.classList.add('hide');
    popupInnerText.innerHTML = `Ти знайшла ${++testimoniesCount} річ. Ці документи підтверджують особу над якою стався злочин, хороша робота!`;
    popup.classList.add('active');
  })

  // 5 PAGE FUNC
  inputFive.addEventListener('input', function () {
    let questions = document.querySelectorAll('.five__q'),
        giftBlock = document.querySelector('.five .gift-bg');

    if(inputFiveQ3.value === '2022' && this.value === '16') {
      this.value = '16.';
    } else if(this.value === '16.01') {
      this.value = '16.01.';
    } else if(this.value === '16.01.2022') {
      popupInnerText.innerHTML = 'Цікава дата. В цей день почалась наша історія, яку ми будемо разом створювати та писати. Я дуже щасливий, що таке чудо з`явилось у моєму житті ❤️';
      giftBlock.classList.remove('hide');
      popup.classList.add('active');
    }

    if(this.value === '01' && questions[2].classList.contains('hide')) {
      this.value = '';
      questions[0].classList.add('hide');
      questions[1].classList.remove('hide');
    } else if(this.value === '16'  && questions[0].classList.contains('hide')) {
      this.value = '';
      questions[1].classList.add('hide');
      questions[2].classList.remove('hide');
    }
  })

  inputFiveQ3.addEventListener('input', function () {
    let question = document.querySelector('.five__q_3 p');

    if(this.value === '1200') {
      this.value = '';
      question.innerHTML = 'Результат поділи на 3';
    }

    if(this.value === '400') {
      this.value = '';
      question.innerHTML = 'Результат помнож на 5.5';
    }

    if(this.value === '2200') {
      this.value = '';
      question.innerHTML = 'І від результату відніми 178';
    }

    if(this.value === '2022') {
      this.parentElement.classList.add('hide');
      question.innerHTML = 'Ось твій результат <span>2022</span>. А тепер постав числа (01 16 2022) в правильному порядку.';
    }
  })

  // 6 PAGE FUNC
  function getXPositionOfElement() {
    let x_position = Math.floor(Math.random() * window.innerWidth);
    return x_position;
  }

  function getYPositionOfElement() {
    let y_position = Math.floor(Math.random() * window.innerHeight);
    return y_position;
  }

  for(let i = 0; i < 100; i++) {
    let sendBtnSix = document.createElement('div');
    sendBtnSix.classList.add('btn-small', 'delay-05');
    sendBtnSix.innerText = 'Жми мене ❤️';
    sixPage.children[0].append(sendBtnSix);

    sendBtnSix.style.top = getYPositionOfElement() + 'px';
    sendBtnSix.style.left = getXPositionOfElement() + 'px';
  }

  let sendBtnSix = document.querySelectorAll('.six .btn-small');

  sendBtnSix.forEach(btn => {
    btn.addEventListener('click', function () {
      btn.classList.add('hide');
    })
  })

  sendBtnSix[Math.floor(Math.random() * 101)].addEventListener('click', function () {
    let giftBlock = document.querySelector('.six .gift-bg');

    popupInnerText.innerHTML = 'Вибач за такі дразливі квести😁. Забирай заслужену винагороду.';
    giftBlock.classList.remove('hide');
    popup.classList.add('active');
  })

  // 7 PAGE FUNC
  let  sevenInputValue = null;

  function quest7Finish() {
    let giftBlock = document.querySelector('.seven .gift-bg');

    sevenInputValue = inputSeven.value;

    if(sevenInputValue.trim().length > 1 ) {
      popupInnerText.innerHTML = `"${sevenInputValue}" - досить цікава назва, мені подобається) Вперед, забирай свій приз.`;
      giftBlock.classList.remove('hide');
      popup.classList.add('active');
    }
  }

  sendBtnSeven.addEventListener('click', function () {
    quest7Finish();
  })

  inputSeven.addEventListener('keydown', function (e) {
    if(e.keyCode == 13) {
      quest7Finish();
    }
  })


  ///////////////// POPUP

  const popup = document.querySelector('.popup'),
        popupBg = document.querySelector('.popup__bg'),
        closePopupBtn = document.querySelector('.popup__close'),
        popupInnerText = document.querySelector('.popup__inner .text-small');

  function closePopup(btnClose) {
    btnClose.addEventListener('click', function () {
      popup.classList.remove('active');

      quest4Finish();
    })
  }

  closePopup(popupBg);
  closePopup(closePopupBtn);



  // PARTICLES
  particlesJS.load('particles-js', './js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#3cefff"
          },
          "size": {
            "value": 5,
          },
          "line_linked": {
            "color": "#3cefff",
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
      }
  );
});