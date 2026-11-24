import { Fragment, type ReactNode } from "react";

/** Split text into sentences and put a line gap between them. */
export function withSentenceGaps(text: string): ReactNode {
  const sentences = text.match(/[^.!?]+[.!?]+(?:["”']?)(?:\s+|$)|[^.!?]+$/g);
  if (!sentences || sentences.length < 2) return text;

  return sentences.map((sentence, index) => (
    <Fragment key={`${index}-${sentence.slice(0, 12)}`}>
      {index > 0 ? (
        <>
          {"\u00A0"}
          <br />
          <br />
        </>
      ) : null}
      {sentence.trim()}
    </Fragment>
  ));
}
