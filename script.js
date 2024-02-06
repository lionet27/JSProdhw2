// 1. Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
class library{
	#books=[];
	constructor(books){
		// const setBooks=new Set(books);
		if ((new Set(books)).size<books.length) {
						throw new Error('Есть дубликаты книг!');
				  }
		this.#books=books;
	}
	addBook(title){
		if(this.#books.includes(title)){
			throw new Error('Такая книга уже есть в библиотеке!')
		}
		this.#books.push(title);
	}
	getAllBooks(){
		return this.#books;
	}
	removeBook(title){
		const index = this.#books.indexOf(title);
		if (index !== -1) {
		  this.#books.splice(index, 1);
		} else {
		  throw new Error('Такой книги нет в библиотеке!');
		}
	}
	hasBook(title){
		return this.#books.includes(title);
	}

}
let library1=new library(["Алиса","Траст","Миллениум"]);
console.log(library1.getAllBooks());
library1.addBook("Трон");
console.log(library1.getAllBooks());
console.log(library1.hasBook("Алиса"));
library1.removeBook("Миллениум");
console.log(library1.getAllBooks());


let library2=new library(["Алиса","Траст","Траст","Миллениум"]);
console.log(library2.getAllBooks());

// 2. Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения. Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const userInputElement=document.querySelector('.user-input');
// const buttonElement=document.querySelector('.add-button');
// const listElement=document.querySelector('.reviews-list');

// const errorElement=document.querySelector('.error-message');


// buttonElement.addEventListener("click", ()=>{
//     try{
        
//         if(
//            userInputElement.value.length>500||
//            userInputElement.value.length<50
//         ){ throw new Error ("Длина введенного отзыва не соответствует требованием");
//         }
//         const li=document.createElement('li');
//         li.textContent=userInputElement.value;
//         listElement.appendChild(li);
//         errorElement.textContent='';       
//     }catch (error){
//         errorElement.textContent=error.message;
// }
// finally{
//     console.log('Попытка завершена');
// }
// });