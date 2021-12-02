import React, { useState, useRef } from 'react'
import MenuRgb from '../Components/MenuRgb'
import MenuColors from '../Components/MenuColors'
import { pad, toRgb } from '../scripts/toRgb'
import { toHex } from '../scripts/toHex'

export default function ColorPicker() {
  const [menuColor, setMenuColor] = useState(false)
  const [menuRgb, setMenuRgb] = useState(false)
  const [beforeColor, setBeforeColor] = useState("")
  const [rgbMenu, setRgbClass] = useState("")
  const inputColorHex = useRef(null)
  const squareColor = useRef(null)
  const inputR = useRef('255')
  const inputG = useRef('237')
  const inputB = useRef('0')

  const changeRangeR = (value) => {
    inputR.current.value = value
    setColor()
  }

  const changeRangeG = (value) => {
    inputG.current.value = value
    setColor()
  }

  const changeRangeB = (value) => {
    inputB.current.value = value
    setColor()
  }

  const selectStaticColor = (e) => {
    let staticColor
    if (e.target.children[0]) {
      staticColor = e.target.children[0]
    } else staticColor = e.target
    setMenuColor(!menuColor)
    squareColor.current.style.backgroundColor = toHex(getComputedStyle(staticColor).backgroundColor)
    inputColorHex.current.value = toHex(getComputedStyle(staticColor).backgroundColor)
    setRangeColor(toRgb(`${toHex(getComputedStyle(staticColor).backgroundColor)}`))
  }

  const setRangeColor = (rgb) => {
    inputR.current.value = rgb[0]
    inputG.current.value = rgb[1]
    inputB.current.value = rgb[2]
  }

  ///////////////////////////////////formater
  const setColor = () => {
    let r_hexVal = parseInt(inputR.current.value, 10).toString(16),
      g_hexVal = parseInt(inputG.current.value, 10).toString(16),
      b_hexVal = parseInt(inputB.current.value, 10).toString(16),
      hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    squareColor.current.style.backgroundColor = hexVal
    inputColorHex.current.value = hexVal;
  }

  /////////////////////////////////////////// rgbmenu
  const rgbOpen = () => {
    setMenuRgb(!menuRgb)
    setMenuColor(false)
    menuRgb ? setRgbClass("") : setRgbClass("open")
    setBeforeColor(getComputedStyle(squareColor.current).backgroundColor)
  }

  const colorsOpen = () => {
    setMenuColor(!menuColor)
    setMenuRgb(false)
    setRgbClass("")
  }

  //////////////////////// closeButton
  const cancelColor = () => {
    setMenuRgb(false)
    squareColor.current.style.backgroundColor = beforeColor
    setRgbClass("")
    setRangeColor(toRgb(`${toHex(beforeColor)}`))
    inputColorHex.current.value = `${toHex(beforeColor)}`
  }

  const applyColor = () => {
    setMenuRgb(false)
    setRgbClass("")
  }

  ///////////////////////////////////////closeOutside
  const closeAll = (e) => {
    if (e.target.classList.contains("wrapp")) {
      if (menuRgb) {
        cancelColor()
      }
      else if (menuColor) {
        setMenuColor(false)
      }
    }
  }

  return (
    <div onClick={closeAll} className="wrapp">
      <div className="wrapp__center">
        <div className="block__edit__nav">
          <input ref={inputColorHex} type="text" className="inp__color" spellCheck="false" placeholder="Color" id="inputText" readOnly={true} defaultValue="#ffed00" />
          <div onClick={rgbOpen} className="square__color"><div ref={squareColor} className="color"></div></div>
          <div onClick={colorsOpen} className="drop__block"> <div className="arrow__drop"></div> </div>
        </div>

        {menuColor && <MenuColors selectColor={selectStaticColor} />}

        <MenuRgb
          changeRangeR={changeRangeR}
          changeRangeG={changeRangeG}
          changeRangeB={changeRangeB}
          applyColor={applyColor}
          classRgb={rgbMenu}
          inputR={inputR}
          inputG={inputG}
          inputB={inputB}
          cancelColor={cancelColor} />
      </div>
    </div>
  )
}