Скрипт нужно поместить на страницу самого сейла, желательно прям перед продажей(1-2 мин), появится окошка запроса количества паков. Каждую миллисекунду опрашивается блок продажи на нахождение кнопки покупки. Как только кнопка появилась, скрипт введет количество паков и нажмет на кнопку покупки. После чего начнется опрос страницы на появление блока подтверждения, как только появляется блок, нажимается кнопка подтверждения. Зачастую после нажатия выдаются ошибки, поэтому после первого нажатия интервал нажатия не сбрасывается. Если количество паков закончилось, закройте страницу.
_Главный плюс скрипта, получить бан за него невозможно._

_Как пользоваться_
1. В скрипте имеется переменная "packsValue", замените ее значение на ваше. По дефолту 1.(Перменная в начале скрипта "let packsValue=1")
2. Помещаете этот скрипт, через консоль разработчика на странице продажа, за пару минут до начала сейла.(Не закрывайте страницу)
3. Ждите начала сейла.
4. После удачной покупки или неудачной закройте или обновите страницу.

![Alt Text](https://media.giphy.com/media/tqT7TZQ5Fz15xQaUml/giphy.gif)

Скрипт:

let packsValue = 1,                                                         // Перемнная ввода кол-ва паков для покупки
    buyerInterval = setInterval(buyer, 10),                                  // Старт функции покупки с интервалом опроса 1мс
    switcher = true,
    countInterval;


function buyer() {                                                          // ***Окно покупки***
    if (document.querySelector('.css-65a3ga').querySelector('button')) {    // Если есть кнопка покупки
        const block = document.querySelector('.css-65a3ga'),                // Блок продажи
              buyBtn = block.querySelector('.css-1gv20g8');                       // Кнопка покупки
        countInterval = setInterval(clicker, 1);                            // Имитация нажатия кнопки +
        if (switcher == false) {                                            
            buyBtn.click();                                                 // Клик по кнопке покупки
            clearInterval(buyerInterval);                                   // Остановка интервала
            setInterval(apply, 1);                                          // Старт функции подтверждения с интервалом опроса 1мс
        }
    } else {
        console.log('waiting selling time');
    }
}


function apply() {                                                          // ***Окно подтверждения***
    if (document.querySelector('.css-tg2yeu')) {                            // Если появилось окошко подтверждения 
        const divider = document.querySelector('.css-tg2yeu'),              // Блок подтверждения
        applyBtn = divider.querySelector('.css-1p9f32f');                   // Кнопка подтверждения
        applyBtn.click();                                                   // Клик по кнопке подтверждения
    } else {
        console.log('waiting apply divider');
    }
    
}

function clicker() {                                                        // ***Работа с input***
  if (packsValue-1 != 0) {                                                
      document.querySelector('.css-1my7wuf').nextElementSibling.click();  // Клик по кнопке +
      packsValue -= 1;
  } else {                                 
      switcher = false;
      clearInterval(countInterval);
  }
}
