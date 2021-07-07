const URL =  {
  SERVER: 'https://23.javascript.pages.academy/keksobooking',
  DATA: 'https://23.javascript.pages.academy/keksobooking/data',
};
const formSubmit = document.querySelector('.ad-form');

const getData = (onSuccess, onError) => {
  fetch (URL.DATA)
    .then((response) => {
      if (response.ok){
        return response;
      } else {
        onError();
      }
    })
    .then((response) => response.json())
    .then((objects) => onSuccess(objects))
    .catch(() => {
      onError();
    });

};

const sendData = (onSuccess, onError) => {
  formSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fetch(URL.SERVER,
      {
        method: 'POST',
        body: new FormData(evt.target),
      },
    ) .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
      .catch(() => {
        onError();
      });
  });
};


export {getData, sendData};
