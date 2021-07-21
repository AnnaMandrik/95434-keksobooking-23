import {showErrorMessage, showErrorOfRequest, showSuccessMessage, returnOriginalState, clickResetButton} from './form-status.js';
import {checkValidation} from './form.js';
import {getData, sendData} from'./api.js';
import {createMap, createMinPinIcon, createManyMarkers, removeManyMarkers} from'./map.js';
import {enableForm} from './main-page.js';
import {createFilterNotice, removeFilters, changeMapFilters, clickResetButtonFilter, COUNT_DATA_NOTICE} from './filter.js';
import {correctDebounce} from './utils/debounce.js';
import {showAvatarPreview, showPhotoPreview} from './avatar.js';

const DELAY_BOUNCE = 500;
const filterNoticeFragment = document.querySelector('.map__filters');

const getStart = () => {
  createMap(() => {
    enableForm();
    createMinPinIcon();
    getData (
      (objects) => {
        createManyMarkers(objects.slice(0, COUNT_DATA_NOTICE));
        changeMapFilters(correctDebounce (() =>
          createFilterNotice(objects),
        DELAY_BOUNCE,
        ));
        checkValidation();
        showAvatarPreview();
        showPhotoPreview();
        sendData(
          () => {
            showSuccessMessage();
            returnOriginalState();
            removeFilters(objects);
            removeManyMarkers();
            createManyMarkers(objects.slice(0, COUNT_DATA_NOTICE));
          },
          () => showErrorMessage());
        clickResetButtonFilter(objects);
      },
      () => {
        showErrorOfRequest();
        filterNoticeFragment.classList.add('hidden');
        checkValidation();
        showAvatarPreview();
        showPhotoPreview();
        sendData(
          () => {
            showSuccessMessage();
            returnOriginalState();
          },
          () => showErrorMessage());
        clickResetButton();
      });
  });
};

export {getStart};
