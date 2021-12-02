import React from 'react'
import { InputRange } from './InputRange'

export default function MenuRgb(props) {
  return (
    <div className={`rgb__menu ${props.classRgb}`}>
      <InputRange
        label="r"
        name="R"
        id="r"
        defaultValue="255"
        onChange={props.changeRangeR}
        ref={props.inputR}
      />

      <InputRange
        label="g"
        name="G"
        id="g"
        defaultValue="237"
        onChange={props.changeRangeG}
        ref={props.inputG}
      />

      <InputRange
        label="b"
        name="B"
        id="b"
        defaultValue="0"
        onChange={props.changeRangeB}
        ref={props.inputB}
      />

      <div className="btn__block">
        <div onClick={props.cancelColor} className="btn__cancel btn">CANCEL</div>
        <div onClick={props.applyColor} className="btn__ok btn">OK</div>
      </div>
    </div>
  )
}
