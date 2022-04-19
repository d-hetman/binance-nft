Скрипт потрібно помістити на сторінку самого сейла, бажано прямо перед продажем (1хв), після цього з'явиться віконце підтвердження. Кожну мілісекунду опитується блок продажу для знаходження кнопки покупки. Як тільки кнопка з'явилася, натисне на кнопку покупки. Після чого почнеться опитування сторінки на появу блоку підтвердження, щойно з'являється блок, натискається кнопка підтвердження.
_Главный плюс скрипта, получить бан за него невозможно._

_Як користуватися_
1. В скрипті є змінна "packsValue", замініть її значення на ваше. По дефолту 1.(Змінна на початку скрипта "let packsValue=1")
2. Поміщаєте цей скрипт через консоль розробника на сторінці продаж, за пару хвилин до початку сейлу. (Не закривайте сторінку)
(https://prnt.sc/oFVOGRXxu3XC)
4. Чекайте на початок сейлу.
5. Після вдалої покупки або невдалої закрийте або оновіть сторінку.

![Alt Text](https://media.giphy.com/media/tqT7TZQ5Fz15xQaUml/giphy.gif)

Повний скрипт знаходиться в файлі binance-clicker.js



Скрипт:

let packsValue=1,buyerInterval=setInterval(buyer,1),switcher=!0,countInterval;function buyer(){if(document.querySelector(".css-65a3ga").querySelector("button")){const block=document.querySelector(".css-65a3ga"),buyBtn=block.querySelector(".css-1gv20g8");countInterval=setInterval(clicker,1),0==switcher&&(buyBtn.click(),clearInterval(buyerInterval),setInterval(apply,1))}else console.log("waiting selling time")}function apply(){if(document.querySelector(".css-tg2yeu")){const divider=document.querySelector(".css-tg2yeu"),applyBtn=divider.querySelector(".css-1p9f32f");applyBtn.click()}else console.log("waiting apply divider")}function clicker(){packsValue-1!=0?(document.querySelector(".css-1my7wuf").nextElementSibling.click(),packsValue-=1):(switcher=!1,clearInterval(countInterval))}
