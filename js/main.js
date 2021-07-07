import {showErrorMessage, onResetButton, reportSuccess} from './form-status.js';
import {checkValidation} from './form.js';
import {getData, sendData} from'./api.js';
import {createMap, createMinPinIcon, createManyMarkers} from'./map.js';
import {disableForm, enableForm} from './main-page.js';
import {errorOfRequest} from './util.js';

disableForm();
createMap(() => {
  enableForm();
  createMinPinIcon();
  getData (
    (objects) => createManyMarkers(objects),
    () => errorOfRequest('При загрузке данных с сервера произошла ошибка . Попробуйте позже еще раз'));
  checkValidation();
  sendData(() => {
    reportSuccess();
  },
  () => showErrorMessage());
  onResetButton();
});


