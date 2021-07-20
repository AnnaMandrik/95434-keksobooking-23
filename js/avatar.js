const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avtarField = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoUpload = document.querySelector('.ad-form__upload input[type=file]');
const photoPreview = document.querySelector('.ad-form__photo');
let previewImg;

const showAvatarPreview = () => {
  avtarField.addEventListener('change', () => {
    const file = avtarField.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        avatarPreview.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
};

const showPhotoPreview = () => {
  photoUpload.addEventListener('change', () => {
    const file = photoUpload.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      const reader = new FileReader();
      photoPreview.style.display = 'flex';
      reader.addEventListener('load', () => {
        previewImg = document.createElement('img');
        previewImg.style.width = '40px';
        previewImg.style.height = '44px';
        previewImg.style.margin = 'auto';
        previewImg.alt = 'Фотография жилья';
        previewImg.src = reader.result;
        photoPreview.appendChild(previewImg);
      });
      reader.readAsDataURL(file);
    }
  });
};

const resetAvatarPhotoPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  if (previewImg) {
    previewImg.remove();
  }
};

export {showAvatarPreview, showPhotoPreview, resetAvatarPhotoPreview};

