export const renderLoading = (button, initialText, isLoading) => {
  if (isLoading) {
    button.textContent = 'Сохранение..';
  } else {
    button.textContent = initialText;
  }
}