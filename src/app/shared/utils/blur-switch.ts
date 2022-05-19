export function blurAnimate() {
  this.blurClass = 'blurClass';
  setTimeout(() => {
    this.blurClass = '';
  }, 300);
}
