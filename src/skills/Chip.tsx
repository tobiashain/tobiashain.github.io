import "./chip.scss";

const Chip = ({ text, image }: { text: string; image: string }) => {
  return (
    <div className="chip">
      <img src={`/public/icons/${image}`} alt="" />
      <div className="text">{text}</div>
    </div>
  );
};

export default Chip;
