const validator = () => {
  const inputAll = document.querySelectorAll('input'),
        rus = /[^а-яё]/i,
        numb = /[^\d.]/g;
  inputAll.forEach((input) => {

    if(input.closest('.constructor .panel-collapse') && input.type == 'text'){
      input.addEventListener('input', () => {
        input.value = input.value.replace(numb, '');
      });
    }
    
    if(input.name.slice(0,4) !== 'user'){
      return;
    }
    if(input.name.slice(5) == 'phone'){
      maskPhone(`#${input.getAttribute('id')}`);
      input.addEventListener('change', () => {
        if(input.value.length !== 18){
          alert('Неверно заполнен номер телефона');
          input.value = '';
          return;
        }
      });
    }
    else if (input.name.slice(5) == 'name'){
      input.addEventListener('input', (event) => {
        input.value = input.value.replace(rus, "");
      });
      input.addEventListener('change', () => {
        if(rus.test(input.value)){
          input.value = '';
        }
      });
    }
  });
};
export default validator;