const popups = () => {

  const callBtn = document.querySelectorAll('.call-btn'), //a //.call-btn
        discountPopup = document.querySelector('.popup-discount'), //btn .call-btn, .discount-btn
        checkPopup = document.querySelector('.popup-check'),
        callPopup = document.querySelector('.popup-call'),
        consultPopup = document.querySelector('.popup-consultation'),
        btns = document.querySelectorAll('button');

  const showPopup = (popupName) => {
    popupName.style.display = 'block';
    closePopup(popupName);
  };
  const closePopup = (popupName) => {
    popupName.addEventListener('click', (event) => {
      let target = event.target;
      if(!target.closest('.capture-form') || target.closest('.popup-close')){
        event.preventDefault();
        popupName.style.display = 'none';
        return;
      }

    });
  };

  callBtn.forEach((el) => {
    if(el.tagName.toLowerCase() == 'a'){
      el.addEventListener('click', (event) => {
        event.preventDefault();
        showPopup(callPopup);
      });
    }
  });

  btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      let target = event.target;
      
      if(target.classList.contains('call-btn') || target.classList.contains('discount-btn')){
        showPopup(discountPopup);
      }else if(target.classList.contains('check-btn')){
        showPopup(checkPopup);
      }else if(target.classList.contains('consultation-btn')){
        event.preventDefault();
        showPopup(consultPopup);
      }else if (target.classList.contains('add-sentence-btn')){
        const wrap = document.querySelector('.sentence .row').children,
              blocks = [...wrap].filter((el) => el.tagName.toLowerCase() == 'div');
        blocks.forEach((element) => {
          if(element.classList.contains('hidden') || element.classList.contains('visible-sm-block')){
            element.classList = ['col-xs-12 col-sm-6 col-md-4'];
          }
        });
        target.style.display = 'none';
      }else{
        return;
      }
    });
  });

};
export default popups;