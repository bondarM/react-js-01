import React from 'react'

export default function Colors(props) {
    return (
        <div onClick={props.selectColor} className="menu__color">
                        <div>
                            Red
                            <div className="clr__ex red"></div>
                        </div>
                        <div>
                            Yellow
                            <div className="clr__ex"></div>
                        </div>
                        <div>
                            Green
                            <div className="clr__ex green"></div>
                        </div>
                        <div>
                            Blue
                            <div className="clr__ex blue"></div>
                        </div>
                    </div>
    )
}
