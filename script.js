// 1. Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
async function myAsync(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
const body = document.querySelector('body');
const url = 'https://jsonplaceholder.typicode.com/users';

try {
	const myData = await myAsync(url);
	console.log(myData);
	myData.forEach((el) => {
		body.insertAdjacentHTML(
			'beforeend',
			
			` <h4>
					${JSON.stringify(el, null, 2)} 
				</h4>	
				<br>
  		`
		);
	});
} catch (error) {
	console.log(error.message);
}

// 2.Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
const url1 = 'https://dog.ceo/api/breeds/image/random';
async function addDog(url1){
	try {
		const myData1 = await myAsync(url1);
		console.log(myData1);
		body.insertAdjacentHTML(
				'beforeend',
				
				`
					<figure>
						<img src="${myData1.message}" />
					
					</figure>
			`
			);
		
		} catch (error) {
			console.log(error.message);
	}
}	
for (let index = 3; index < 31; index=index+3) {
	setTimeout(()=> addDog(url1),index*1000);
}


