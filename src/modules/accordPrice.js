const accordPrice = () => {
  let allHeight = [];
  const acc = document.getElementById('accordion'),
        all = acc.querySelectorAll('.panel-collapse '),
        box = document.querySelectorAll('.onoffswitch-checkbox'),
        title = document.querySelectorAll('#collapseTwo .title-text'),
        select = document.querySelectorAll('#collapseTwo .select-box');
  const check = () => {
    if(box[0].checked){
      title[1].style.display = 'none';
      select[2].style.display = 'none';
      select[3].style.display = 'none';
    }else{
      title[1].style.display = 'block';
      select[2].style.display = 'inline-block';
      select[3].style.display = 'inline-block';
    }
  };
  const height = () => {
    allHeight = [];
    all.forEach((el, i) => {
      el.classList.add('tab-active');
      el.classList.remove('tab-nonactive');
      el.style.height = '100%';
      allHeight.push(el.scrollHeight);
      el.style.height = '0px';
      el.classList.add('tab-nonactive');
      el.classList.remove('tab-active');

      if(i == 0){
        el.classList.remove('tab-nonactive');
        el.classList.add('tab-active');
        el.style.height = `${allHeight[i]}px`;
      }
    });
    
  };
  
  const show = (el, i) => {
    setTimeout(() => { el.style.height = `${allHeight[i]}px`; }, 0);
  
    el.classList.remove('tab-nonactive');
    el.classList.add('tab-active');
  };
  const hide = (el) => {
    el.style.height = `${0}px`;
    setTimeout(() => {
      el.classList.add('tab-nonactive');
      el.classList.remove('tab-active');
    }, 800);
  };
  
  acc.addEventListener('click', (event) => {
    
    
    let target = event.target;
    
    if(!target.closest('.panel-heading')){
      if(target.closest('.construct-btn')){
        if(target.closest('.construct-btn').classList.contains('call-btn')){
          return;
        }
        event.preventDefault();
        let nextStep = target.closest('.panel-collapse');
        for(let key in all){
          if(nextStep == all[key]){
            hide(all[key]);
            show(all[+key + 1], +key + 1);
          }
        }
      }
      return;
    }
    event.preventDefault();
    let blockItem = target.closest('.panel-heading').nextElementSibling;
    all.forEach((el, i) => {
      if(blockItem == el){
        if(el.classList.contains('tab-nonactive')){
          show(el, i);
        }
      }
      else{
        hide(el);
      }
      
    });
    
  });
  
  box[0].addEventListener('change', (event) => {
    check();
    height();
  });
  
  setTimeout(() => {
    check();
    height();
  }, 100);
  
};
export default accordPrice;