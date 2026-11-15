type Note = string | { title: string; text: string };

export default function Notes({ items }: { items: Note[] }) {
  return (
    <div className="notes-row">
      {items.map((item) => {
        const title = typeof item === "string" ? undefined : item.title;
        const text = typeof item === "string" ? item : item.text;

        return (
          <div key={title ? `${title}-${text}` : text} className="notes-row-card">
            {title ? <p className="notes-row-title">{title}</p> : null}
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
}
