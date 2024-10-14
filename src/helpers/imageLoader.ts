export const getActivitiesSrc = (imageName: string) => {
  try {
    const image = require(`@/assets/img/activities/${imageName}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    console.error("Error loading image:", err);
    return '';
  }
};

export const getPostsSrc = (imageName: string) => {
  try {
    const image = require(`@/assets/img/posts/${imageName}.jpg`)
    return image ? image.default : '';
  } catch (err) {
    console.error("Error loading image:", err);
    return '';
  }
};

export const getCustomSrc = (imageName: string) => {
  try {
    const image = require(`@/assets/custom/${imageName}`);
    return image ? image.default : '';
  } catch (err) {
    console.error("Error loading image:", err);
    return '';
  }
};

export const getCustomIconsSrc = (imageName: string) => {
  try {
    const image = require(`@/assets/img/custom/${imageName}`);
    return image ? image.default : '';
  } catch (err) {
    console.error("Error loading image:", err);
    return '';
  }
};

export const getCardsSrc = (imageName: string) => {
  try {
    const image = require(`@/assets/img/cards/${imageName}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    console.error("Error loading image:", err);
    return '';
  }
};

export const getFingerSrc = (imageName: string) => {
  try {
    const image = require(`@/assets/img/fingers/${imageName}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    console.error("Error loading image:", err);
    return '';
  }
};
