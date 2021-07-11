import React, {useEffect} from 'react'

export default function MenuRgb(props) {


    return (
        <div className={`rgb__menu ${props.classRgb}`}>
                    <div>
                        <label htmlFor="r">R</label>
                        <input type="range" min="0" max="255" id="r" step="1" defaultValue="255" />
                    </div>

                    <div>
                        <label htmlFor="g">G</label>
                        <input type="range" min="0" max="255" id="g" step="1" defaultValue="255" />
                    </div>

                    <div>
                        <label className="l_b" htmlFor="b">B</label>
                        <input type="range" min="0" max="255" id="b" step="1" defaultValue="0" />
                    </div>

                    <div className="btn__block">
                        <div onClick={props.cancelColor} className="btn__cancel btn">CANCEL</div>
                        <div onClick={props.applyColor} className="btn__ok btn">OK</div>
                    </div>
                </div>
    )
}
