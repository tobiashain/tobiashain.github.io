import "./divider.scss";

const labels = [
  "[ career.exe     ]",
  "[ skills.dll     ]",
  "[ projects.bin   ]",
  "[ contact.ini    ]",
];

let labelIdx = 0;
function nextLabel() {
  return labels[labelIdx++ % labels.length];
}

export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <div className="divider__label">{nextLabel()}</div>
      <svg
        viewBox="0 0 1200 36"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="divider__slash"
      >
        <text
          x="600"
          y="26"
          textAnchor="middle"
          fontSize="32"
          fontWeight="700"
          fill="rgba(6,182,212,0.45)"
          fontFamily="'Courier New', 'Consolas', monospace"
          letterSpacing="2"
        >
          /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
        </text>
      </svg>
      <div className="divider__label">&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;</div>
    </div>
  );
}
