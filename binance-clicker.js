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