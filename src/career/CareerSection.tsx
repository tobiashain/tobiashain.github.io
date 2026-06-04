import type { Experience } from "./Career";

export default function CareerSection({ item, current }: { item: Experience; current?: boolean }) {
  return (
    <>
      <div className="row" key={item.id}>
        <div className="image">
          {current && <span className="status-dot" />}
          <img src={item.image} alt={item.activity} loading="lazy" />
        </div>
        <div className="description">
          <div className="date">{item.date}</div>
          <div className="activity">
            {item.activity}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
              >
                ↗
              </a>
            )}
          </div>
          <div className="type">{item.type}</div>
          <div className="context">{item.context}</div>
        </div>
      </div>
    </>
  );
}
