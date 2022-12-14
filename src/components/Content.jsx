import React, { useState } from "react";

function Content({ title, text }) {
  const [status, setStatus] = useState(false);
  return (
    <div className="content">
      <div className="title">
        <p>{title}</p>
        <button onClick={()=>setStatus(!status)}>{status ? '-' : '+'}</button>
      </div>
      {status && <p className="info">{text}</p>}
    </div>
  );
}

export default Content;
