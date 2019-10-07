const accordQuestion = () => {
  const panelGroup = document.querySelector('.questions .panel-group');
  
  
  const h = [];
  [...panelGroup.querySelectorAll('.panel-collapse')].forEach(element => {
    h.push(element.offsetHeight);
    element.style.maxHeight = '0px';
  });
  panelGroup.addEventListener('click', (event) => {
    event.preventDefault();
    
    let target = event.target;
    if(!target.closest('.panel-group>.panel>.panel-heading')){
      return;
    }
    let slideText = target.closest('.panel-heading').nextElementSibling;
    const all = panelGroup.querySelectorAll('.panel-collapse');
    all.forEach((el, i) => {
      el.style.transition = '0.2s';
      if(slideText == el){
        el.classList.remove('ksv_accord');
        el.style.maxHeight = h[i] + 'px';
      }else{
        el.classList.add('ksv_accord');
        el.style.maxHeight = '0px';
      }
    });

  });
};

export default accordQuestion;