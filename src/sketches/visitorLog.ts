import p5 from 'p5';
import mono from '../fonts/mono.ttf';
import { uploadBase64Image } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

export const visitorLog = (sketch: p5, width: number) => {
  let font: p5.Font;

  sketch.preload = () => {
    font = sketch.loadFont(mono);
  };

  let video: p5.MediaElement;

  let graphics: p5.Graphics;
  let photoGraphics: p5.Graphics;
  let saveButton: p5.Element;
  let nameInput: p5.Element;
  let isLoading = true;
  let isSaving = false;
  const yOffset = 200;

  sketch.setup = async function setup() {
    sketch.createCanvas(width / 2, width / 2 + yOffset);
    sketch.textFont(font);
    sketch.textSize(16);
    sketch.textAlign(sketch.LEFT, sketch.CENTER);

    video = sketch.createCapture(
      'video',
      () => (isLoading = false),
    ) as p5.MediaElement;
    video.size(200, 200);
    video.hide();

    sketch.fill('white');
    sketch.text(
      'Name:',
      sketch.width / 2 - video.width / 2,
      video.height - yOffset + 25,
    );
    nameInput = sketch.createInput();
    nameInput.size(video.width / 2);
    nameInput.position(sketch.width / 2, video.height + 10);

    saveButton = sketch.createButton('Save');
    saveButton.size(video.width / 4);
    saveButton.position(
      sketch.width / 2 + video.width * 0.75,
      video.height + 10,
    );

    graphics = sketch.createGraphics(video.width, video.height);
    saveButton?.mouseClicked(async () => {
      if (!graphics) {
        return;
      }
      saveButton.hide();
      eventTime = sketch.millis();
      isSaving = true;
      const graphicsCanvas = graphics.elt;
      const dataURL = graphicsCanvas.toDataURL('image/png');
      await uploadBase64Image(dataURL, `${nameInput.value()}`, uuidv4());
    });

    photoGraphics = sketch.createGraphics(video.width, video.height - yOffset);
  };

  let isFinished = false;
  let eventTime = 0;

  const doneButton = sketch.select('.done');
  async function takePhoto() {
    photoGraphics = sketch.createGraphics(video.width, video.height);
    photoGraphics.image(video, 0, 0, video.width, video.height);
    isFinished = true;
    const dataURL = photoGraphics.elt.toDataURL('image/png');
    await uploadBase64Image(dataURL, `${nameInput.value()}`, uuidv4());
    doneButton?.show();
  }

  sketch.draw = async () => {
    if (isLoading) {
      sketch.push();
      sketch.textAlign(sketch.CENTER, sketch.CENTER);
      sketch.text(
        'Loading...',
        sketch.width / 2,
        sketch.height / 2 - video.height / 4,
      );
      return;
    }

    if (isFinished) {
      sketch.image(photoGraphics, 0, 0, video.width, video.height);
    } else {
      sketch.image(video, 0, 0, video.width, video.height);
    }

    if (isSaving && !isFinished) {
      const elapsedTime = sketch.millis() - eventTime;
      const timer = (5000 - elapsedTime) / 1000;
      sketch.push();
      sketch.fill('white');
      sketch.textSize(20);
      sketch.text(
        sketch.ceil(timer),
        sketch.width / 2,
        sketch.height / 2 - video.height / 2,
      );
      sketch.pop();
      if (timer < 0) {
        await takePhoto();
      }
    }
  };
};
