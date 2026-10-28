export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="reveal max-w-2xl">
      {eyebrow && <div className={`eyebrow eyebrow-line ${light ? "!text-blue-200" : ""}`}>{eyebrow}</div>}
      <h2 className={`display mt-4 text-3xl md:text-[2.6rem] ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-blue-100/85" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
