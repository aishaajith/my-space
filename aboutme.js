let isOpen = false;
document.addEventListener('DOMContentLoaded', () => {
  let targets = document.getElementById('wrapper');
  let wrapperStyle = wrapper.style;
  let button = document.getElementById('button');
  button.addEventListener('click', () => {
    if (isOpen) {
      anime({
        targets,
        height: 0,
        opacity: [1, 0],
        duration: 400,
        easing: 'easeOutQuad',
        complete() {
          isOpen = false;
          wrapperStyle.display = '';
        } });

    } else {
      isOpen = true;
      wrapperStyle.display = 'block';
      wrapperStyle.height = '0px';
      anime({
        targets,
        height: el => el.scrollHeight,
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutCubic' });

    }
  }, false);
}, false);