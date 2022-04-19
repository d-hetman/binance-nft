let packsValue = 1,                                                         // Змінна введення кількості паків для покупки
    buyerInterval = setInterval(buyer, 1),                                  // Старт функції покупки з інтервалом запитів 1мс
    switcher = true,
    countInterval;


function buyer() {                                                          // ***Вікно покупки***
    if (document.querySelector('.css-65a3ga').querySelector('button')) {    // Якщо є кнопка покупки
        const block = document.querySelector('.css-65a3ga'),                // Блок продажі
              buyBtn = block.querySelector('.css-1gv20g8');                 // Кнопка покупки
        countInterval = setInterval(clicker, 1);                            // Імітація натискання кнопки
        if (switcher == false) {                                            
            buyBtn.click();                                                 // Клік по кнопці покупки
            clearInterval(buyerInterval);                                   // Зупинка інтервалу
            setInterval(apply, 1);                                          // Старт функції підтвердження з інтервалом запитів 1мс
        }
    } else {
        console.log('waiting selling time');
    }
}


function apply() {                                                          // ***Вікно підтвердження***
    if (document.querySelector('.css-tg2yeu')) {                            // Якщо з'явилося вікно підтвердження 
        const divider = document.querySelector('.css-tg2yeu'),              // Блок підтверждення
        applyBtn = divider.querySelector('.css-1p9f32f');                   // Кнопка підтверждення
        applyBtn.click();                                                   // Клік по кнопці підтверждення
    } else {
        console.log('waiting apply divider');
    }
    
}

function clicker() {                                                        // ***Работа з input***
  if (packsValue-1 != 0) {                                                
      document.querySelector('.css-1my7wuf').nextElementSibling.click();  // Клік по кнопці
      packsValue -= 1;
  } else {                                 
      switcher = false;
      clearInterval(countInterval);
  }
}
