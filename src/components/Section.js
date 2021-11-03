export default class Section {
  constructor({
    data,
    renderer
  }, cardSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = cardSelector;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
}