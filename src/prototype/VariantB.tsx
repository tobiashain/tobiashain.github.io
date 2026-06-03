const headers = [
  "[ hero.sys       ]",
  "[ career.exe     ]",
  "[ skills.dll     ]",
  "[ projects.bin   ]",
  "[ contact.ini    ]",
];

let headerIdx = 0;
function nextHeader() {
  return headers[headerIdx++ % headers.length];
}

export default function Divider() {
  return (
    <div className="proto-divider proto-divider-b" aria-hidden="true">
      <div className="proto-terminal-label">{nextHeader()}</div>
      <svg
        viewBox="0 0 1200 36"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="600"
          y="26"
          textAnchor="middle"
          fontSize="28"
          fontWeight="700"
          fill="rgba(6,182,212,0.25)"
          fontFamily="'Courier New', monospace"
          letterSpacing="2"
        >
          /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
        </text>
      </svg>
      <div className="proto-terminal-label">&#x2514;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2518;</div>
    </div>
  );
}
