const removeChildrens = ((parent) => {
  for (let index = parent.children.length - 1; index >= 0; index--) {
    parent.children[index].remove();
  }
});

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const setRedBorderError = (element, value) => {
  if (value) {
    element.classList.add('validation-error-red');
  }
  else {
    element.classList.remove('validation-error-red');
  }
};

export {removeChildrens, isEscEvent, setRedBorderError};
