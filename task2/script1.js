// 2. Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения. Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const userInputElement=document.querySelector('.user-input');
const buttonElement=document.querySelector('.add-button');
const listElement=document.querySelector('.reviews-list');

const errorElement=document.querySelector('.error-message');


buttonElement.addEventListener("click", ()=>{
    try{
        
        if(
           userInputElement.value.length>500||
           userInputElement.value.length<50
        ){ throw new Error ("Длина введенного отзыва не соответствует требованием");
        }
        const li=document.createElement('li');
        li.textContent=userInputElement.value;
        listElement.appendChild(li);
        errorElement.textContent='';       
    }catch (error){
        errorElement.textContent=error.message;
}
finally{
    console.log('Попытка завершена');
}
});