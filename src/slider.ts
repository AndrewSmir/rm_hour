class Slider {
  url: string;

  constructor() {
    this.url = "";
  }

  createContainer = () => {
    const sliderContainer = `<div id="sliderContainer" class="container"></div>`;
    document.body.insertAdjacentHTML("beforeend", sliderContainer);
  };

  getImg = () => {
    fetch("https://picsum.photos/200/300?grayscale").then(
      (response) => (this.url = response.url)
    );
  };

  createImg = () => {
    const img = `<img src=${this.url}>`;
    const targetElement = document.getElementById("sliderContainer");
    targetElement.innerHTML = img;
  };

  setImg = async () => {
    await this.getImg();
    this.createImg();
  };

  run = () => {
    this.createContainer();
    setInterval(this.setImg, 2000);
  };
}

export const slider = new Slider();
