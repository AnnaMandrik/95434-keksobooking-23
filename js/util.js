const removeChildrens = ((parent) => {
  for (let index = parent.children.length - 1; index >= 0; index--) {
    parent.children[index].remove();
  }
});

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


export {removeChildrens, isEscEvent};
