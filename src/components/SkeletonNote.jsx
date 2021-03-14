import React from "react";
import Tag from "./Tag.jsx";

function SkeletonNote() {
  return (
      <div className="Notes">
        <div className="note skeleton">
        <h1>Teste</h1>
        <Tag nameClass="tag">Teste</Tag>
        <p>Teste</p>
        </div>
        <div className="note skeleton">
        <h1>Teste</h1>
        <Tag nameClass="tag">Teste</Tag>
        <p>Teste</p>
        </div>
        <div className="note skeleton">
        <h1>Teste</h1>
        <Tag nameClass="tag">Teste</Tag>
        <p>Teste</p>
        </div>
    </div>
  );
}

export default SkeletonNote;
