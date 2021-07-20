import {showErrorMessage, showErrorOfRequest, showSuccessMessage, returnOriginalState, onResetButton} from './form-status.js';
import {checkValidation} from './form.js';
import {getData, sendData} from'./api.js';
import {createMap, createMinPinIcon, createManyMarkers, removeManyMarkers} from'./map.js';
import {enableForm} from './main-page.js';
import {createFilterNotice, deleteFilters, onMapFilters, onResetButtonFilter, COUNT_DATA_NOTICE} from './filter.js';
import {debounce} from './utils/debounce.js';
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
        onMapFilters(debounce (() =>
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
            deleteFilters(objects);
            removeManyMarkers();
            createManyMarkers(objects.slice(0, COUNT_DATA_NOTICE));
          },
          () => showErrorMessage());
        onResetButtonFilter(objects);
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
        onResetButton();
      });
  });
};

export {getStart};
