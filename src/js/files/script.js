// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const checkboxes = document.querySelectorAll('.main__form input[type="checkbox"]');
console.log(checkboxes)
let selectedCount = 0;

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', () => {
	  // Перевіряємо кількість вибраних чекбоксів
	  const selectedCount = document.querySelectorAll('.main__form input[type="checkbox"]:checked').length;

	  // Якщо кількість вибраних чекбоксів перевищує 2, то відміняємо вибір нового чекбокса
	  if (selectedCount > 2) {
		 checkbox.checked = false;
	  }
	});
 });

 const checkboxesAnimal = document.querySelectorAll('.annimal-icon');

 // Додаємо слухач подій для кожного елемента
 checkboxesAnimal.forEach(checkbox => {
	  checkbox.addEventListener('click', () => {
			checkbox.classList.toggle('checked');
			if (checkbox.classList.contains('checked')) {
				 checkbox.setAttribute('checked', 'checked');
			} else {
				 checkbox.removeAttribute('checked');
			}
	  });
 });