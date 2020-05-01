import { directive } from "lit-html";

// eslint-disable-next-line no-return-assign
export const ref = directive((ref) => (part) =>
	(ref.current = part.committer.element)
);
