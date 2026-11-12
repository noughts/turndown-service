// Docs やスプレッドシートは本文・セルの画像も canvas に drawImage で描くので、ページ全体の反転で画像まで反転してしまう。
// 写真を描くときだけ先に反転しておき、ページ全体の反転で元の色に戻す。
// canvas から canvas への転写は文字などを含むので対象にしない。
// ページと同じ世界（MAIN world）で動くので、名前がページの変数とぶつからないようブロックに閉じ込める。
{
  const REINVERT = 'invert(1) hue-rotate(180deg)';

  const isPicture = (source) =>
    source instanceof HTMLImageElement || source instanceof ImageBitmap;

  const { drawImage } = CanvasRenderingContext2D.prototype;

  CanvasRenderingContext2D.prototype.drawImage = function (source, ...rest) {
    if (!isPicture(source)) return drawImage.call(this, source, ...rest);
    const { filter } = this;
    this.filter = REINVERT;
    try {
      return drawImage.call(this, source, ...rest);
    } finally {
      this.filter = filter;
    }
  };
}
