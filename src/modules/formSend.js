import checkPrice from "./checkPrice";

const formSend = () => {
  const formsAll = document.querySelectorAll('form'),
        errorImg = 'https://media1.tenor.com/images/ea380a3a8e119935fdc9d52a77bc037b/tenor.gif?itemid=12694673', //ссылка на картинку с ошибкой
        successImg = 'https://media1.tenor.com/images/2b71d287ad48566ba5ba19bad0d55ff2/tenor.gif?itemid=6211650', // ссылка на картинку с успешной загрузой
        loadImg = 'https://media1.tenor.com/images/a03b546ff3a38fd187d008b2f843e3d0/tenor.gif', // ссылка на картинку с ожиданием
        statusMessage = document.createElement('div'), //создаем элемент, где будет назодится текст
        wrapDiv = document.createElement('div');
  
  wrapDiv.style.cssText = 'padding-top: 10%; position: fixed;top: 0;left: 0%;width: 100%;height: 100%;font-size: 43px; color: white; background: rgba(0,0,0,.5); z-index: 999;'; //обозначаем стили тексту
  statusMessage.style.cssText = 'display: flex;flex-direction: column;justify-content: center;align-items: center;padding-top: 10%; position: fixed;top: 0;left: 0%;width: 100%;height: 100%;font-size: 43px; color: white; background: rgba(0,0,0,.5); z-index: 999;'; //обозначаем стили тексту
  let img = false; //показана ли картинка
  formsAll.forEach((form) => {
    document.body.addEventListener('click', (event) => {
      if(img){ // если сейчас показывается картинка
        wrapDiv.remove(); // то удаляем ее
        img = false; // переводим значение в FALSE
      }
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if(form.closest('.popup')){
        form.closest('.popup').style.display = 'none';
        }
      wrapDiv.appendChild(statusMessage);
      document.body.appendChild(wrapDiv); // добавляем на страницу элемент с текстом о начале обработки формы
      statusMessage.innerHTML = `<strong>Подождите ...</strong><br><br><br><img src="${loadImg}">`; //добавляем картинку с ожиданием
      img = true; 
      
      
      const formData = new FormData(form); // получаем данные формы
      const inpts = form.querySelectorAll('input');
      const phone = [...inpts].filter((el) => el.name.slice(5) == 'phone');
      if(phone[0].value.length !== 18){
        alert('Неверно заполнен номер');
        phone[0].value = '';
        return;
      }
      let body = {}; // создаем элемент
      formData.forEach((val, key) => { // каждое поле формы отправляем в элемент
        body[key] = val;
      });
      if(form.closest('.popup-consultation')){
        body.userQuest = document.querySelector('.director-form>input').value;
      }
      if(form.closest('.popup-discount')){
        body.price = checkPrice();
      }
      
      inpts.forEach((inpt) => {
        inpt.value = '';
        if(form.closest('.popup-consultation')){
          document.querySelector('.director-form>input').value = '';
        }
      });
      post(body)
        .then((response) => { //при успешной отправке
            if (response.status !== 200){
              statusMessage.innerHTML = `<strong>Ужас ...</strong><br><br><br><img src="${errorImg}">`; // показываем картинку 
              img = true;
              return;
            }
            statusMessage.innerHTML = `<strong>Все прекрасно !!!</strong><br><br><br><img src="${successImg}">`;// показываем картинку 
            img = true;
        })
        .catch((error) => { // в случае ошибке
          console.error(error); // передаем в консоль код оштбки
          statusMessage.innerHTML = `<strong>Ужас ...</strong><br><br><br><img src="${errorImg}">`; // показываем картинку 
          img = true;
        });
    });
    
  });
  
  const post = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
  
};

export default formSend;