import { useRef } from "react";

export default function InfoCard() {
  const ref = useRef<HTMLDivElement | null>(null);

  const INFO_CARD = `
    Hello!! <br>
    The numbers above represent <br>
    the word's length in the found text. <br>
    Click on this to see all words <br>
    with that defined length.
    `;

  function showInfoCard() {
    let count = 0;

    function show() {
      if (count <= INFO_CARD.length && ref.current) {
        count += 10;
        ref.current.innerHTML = INFO_CARD.slice(0, count);
      }
      requestAnimationFrame(show);
    }
    show();
    return INFO_CARD;
  }

  return <div ref={ref}>{showInfoCard()}</div>;
}
