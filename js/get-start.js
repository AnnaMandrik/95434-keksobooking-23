import {showErrorMessage, onResetButton, reportSuccess, showErrorOfRequest} from './form-status.js';
import {checkValidation} from './form.js';
import {getData, sendData} from'./api.js';
import {createMap, createMinPinIcon, createManyMarkers} from'./map.js';
import {enableForm} from './main-page.js';
import {createFilterNotice, onMapFilters, deleteFilters} from './filter.js';
import {debounce} from './utils/debounce.js';

const COUNT_DATA_NOTICE = 10;
const DELAY_BOUNCE = 500;
const filterNoticeFragment = document.querySelector('.map__filters');

const getStart = () => {
  createMap(() => {
    enableForm();
    createMinPinIcon();
    getData (
      (objects) => {
        createManyMarkers(objects.slice(0, COUNT_DATA_NOTICE));
        onMapFilters(debounce (() =>
          createFilterNotice(objects),
        DELAY_BOUNCE,
        ));
        checkValidation();
        sendData(() => {
          reportSuccess();
          deleteFilters(objects);
        },
        () => showErrorMessage());
        onResetButton();
      },
      () => {
        showErrorOfRequest();
        filterNoticeFragment.classList.add('hidden');
        checkValidation();
        sendData(() => {
          reportSuccess();
        },
        () => showErrorMessage());
        onResetButton();
      });
  });
};

export {getStart};
