export default function CareerSection({ item }) {
  return (
    <>
      <div className="row" key={item.id}>
        <div className="image">
          <img src={item.image} alt={item.activity} />
        </div>
        <div className="description">
          <div className="date">{item.date}</div>
          <div className="activity">
            {item.activity}
            {item.link && (
              <a href={item.link} target="_blank" className="ext-link">
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
