const checkPrice = () => {
  let price = {
    startPrice: 10000,
    diametr: {
      first: 1,
      second: 1
    },
    rings: {
      first: 1,
      second: 1
    },
    bottom: 1000,
    distance: 0,
  };
  const selectAll = document.getElementById('accordion').querySelectorAll('select'),
        inputAll = document.getElementById('accordion').querySelectorAll('input');


  selectAll.forEach(select => {
    select.addEventListener('change', (event) => {
      updSelect();
    });
  });

  inputAll.forEach((input) => {
    input.addEventListener('change', (event) => {
      updInput();
    });
  });

  const updSelect = () => {
    selectAll.forEach(select => {
      
      let val = select.value.slice(0, -6);
      for (let key in selectAll) {
        if (select == selectAll[key]) {
          switch (key) {
            case '0': {
              if (val == 1.4) {
                price.diametr.first = 1;
              } else {
                price.diametr.first = 1.2;
              }
              showResult();
              return;
            }
            case '1': {
              if (val == 1) {
                price.rings.first = 1;
              } else if (val == 2) {
                price.rings.first = 1.3;
              } else {
                price.rings.first = 1.5;
              }
              showResult();
              return;
            }
            case '2': {
              if (val == 1.4) {
                price.diametr.second = 1;
              } else {
                price.diametr.second = 1.2;
              }
              showResult();
              return;
            }
            case '3': {
              if (val == 1) {
                price.rings.second = 1;
              } else if (val == 2) {
                price.rings.second = 1.3;
              } else {
                price.rings.second = 1.5;
              }
              showResult();
              return;
            }
          }
        }
      }
      return price;
    });
  };
  const updInput = () => {
    inputAll.forEach((input) => {
      for(let key in inputAll){
        if(input == inputAll[key]){
          switch(key){
            case '0': {
              if(input.checked){
                price.startPrice = 10000;
                if(price.bottom != 0){
                  price.bottom = 1000;
                }
              }else{
                price.startPrice = 15000;
                if(price.bottom != 0){
                  price.bottom = 2000;
                }
              }
              showResult();
              return price;
            }
            case '1':{
              if(input.checked){
                if(price.startPrice == 10000){
                  price.bottom = 1000;
                }else{
                  price.bottom = 2000;
                }
              }else{
                price.bottom = 0;
              }
              showResult();
              return price;
            }
            case '2':{
              price.distance = input.value;
              showResult();
              return price;
            }
          }
        }
        
      }
      return price;
    });
  };
  const showResult = () => {
    price.sum = price.startPrice * price.diametr.first * price.diametr.second * price.rings.first * price.rings.second + price.bottom;
    document.getElementById('calc-result').value = price.sum;
  };

  updSelect();
  updInput();
  showResult();
  return price;
};
export default checkPrice;