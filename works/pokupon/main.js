document.addEventListener("DOMContentLoaded", function() {
	var form = document.querySelector('.search-form');

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		var input = e.target.querySelector('.search-form__input'),
			select = e.target.querySelector('.search-form__select'),
			selectedOption = select.querySelector('option:checked'),
			error = document.querySelector('.error-message');

		if (input.value) {
			input.classList.remove('search-form__input--with-error');

			if (selectedOption && !selectedOption.disabled) {
				window.location.href = selectedOption.value + input.value;
			} else {
				select.classList.add('search-form__input--with-error')
				error.innerHTML = 'Укажите поисковую систему'
			}
		} else {
			error.innerHTML = 'Введите текст для поиска';
			input.classList.add('search-form__input--with-error');
		}
	});
});





// function validate(form) {
// 	var elems = form.elements;
// 	if (elems[0].value) {
// 		var element = document.getElementById("search-text");
//         element.classList.remove("error");
//         if (elems[1].value) {
//         		element.classList.remove("error");
//         		document.location.href=document.getElementById("searcher").options[document.getElementById("searcher").selectedIndex].value+elems[0].value;
//     	} else {
//     		alert('Укажите поисковую систему.');
//         	var element = document.getElementById("searcher");
//         	element.classList.add("error");
//     	}
//     } else {
//     	alert('Введите текст для поиска.');
//         element = document.getElementById("search-text");
//         element.classList.add("error");
//     }
// }




