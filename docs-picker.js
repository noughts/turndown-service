// 画像を選ぶピッカーは iframe なので、親ページの反転がそのまま掛かる。
// 親ページが反転されているとき（Docs の中で開いたとき）だけ中の画像を反転し直し、元の色で見せる。
const isParentInverted = () => {
  try {
    return getComputedStyle(window.parent.document.documentElement).filter !== 'none';
  } catch {
    return false; // 別オリジンのページに埋め込まれている
  }
};

if (isParentInverted()) {
  const style = document.createElement('style');
  style.textContent = 'img, video { filter: invert(1) hue-rotate(180deg) !important; }';
  document.documentElement.append(style);
}
