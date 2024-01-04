import createEmoji from './emoji';

function draw() {
  const canvas = document.querySelector<HTMLCanvasElement>('#tutorial');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  if (canvas?.getContext) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // createRectangle(ctx, 6);
      const emotion =
        (document
          .querySelector('.emotion_btn.active')
          ?.getAttribute('data-emotion') as EmojiFace) || 'happy';

      createEmoji(ctx, emotion);
    }
  }
}

const emojiBtns = document.querySelectorAll<HTMLButtonElement>('.emotion_btn');

emojiBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.emotion_btn.active')?.classList.remove('active');
    btn.classList.add('active');
    draw();
  });
});

window.addEventListener('load', draw);
window.addEventListener('resize', draw);
