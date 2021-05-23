import React from 'react'

export default function Colors(props) {
    return (
        <div onClick={props.selectColor} className="menu__color">
                        <div>
                            red
                            <div className="clr__ex red"></div>
                        </div>
                        <div>
                            yellow
                            <div className="clr__ex"></div>
                        </div>
                        <div>
                            green
                            <div className="clr__ex green"></div>
                        </div>
                        <div>
                            blue
                            <div className="clr__ex blue"></div>
                        </div>
                    </div>
    )
}
