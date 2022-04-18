import React from "react";
import cs from './LabelInput.module.css'

const LabelInput = (props) => {

  return (
    <div 
    className={cs.LabelInput}
    style={{
        margin:props.margin
    }}>
      <p>{props.label}</p>
      <div>
      {props.t ? (
        <textarea 
            placeholder={props.placeholder}
            cols={props.cols}
            rows={props.rows} />
      ) : (
        <input placeholder={props.placeholder} />
      )}
      </div>
    </div>
  );
};

export default LabelInput;
