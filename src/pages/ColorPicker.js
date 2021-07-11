import React, { useState, useEffect, useRef } from 'react'
import MenuRgb from '../Components/MenuRgb'
import MenuColors from '../Components/MenuColors'

export default function ColorPicker() {

    const [menuColor, setMenuColor] = useState(false)
    const [menuRgb, setMenuRgb] = useState(false)
    const [beforeColor, setBeforeColor] = useState("")
    const [rgbMenu, setRgbClass] = useState("")
    const inputCol = useRef(null)

    let colorSquare
    let r
    let g
    let b
    let inpColor

    useEffect(() => {
        colorSquare = document.querySelector(".color")
        r = document.querySelector('#r')
        g = document.querySelector('#g')
        b = document.querySelector('#b')
        inpColor = inputCol.current

        r.addEventListener('input', function () {
            setColor();
        }, false);

        g.addEventListener('input', function () {
            setColor();
        }, false);

        b.addEventListener('input', function () {
            setColor();
        }, false);

    }, [])


    function selectColor(e) {
        let elem
        if (e.target.children[0]) {
            elem = e.target.children[0]
        } else elem = e.target
        setMenuColor(!menuColor)
        document.querySelector(".color").style.backgroundColor = rgb2hex(getComputedStyle(elem).backgroundColor)
        document.querySelector(".inp__color").value = rgb2hex(getComputedStyle(elem).backgroundColor)
        setRangeColor(hexToRgb(`${rgb2hex(getComputedStyle(elem).backgroundColor)}`))
    }


    function setRangeColor(rgb) {
        document.querySelector('#r').value = rgb[0]
        document.querySelector('#g').value = rgb[1]
        document.querySelector('#b').value = rgb[2]
    }


    ///////////////////////////////////formater
    function setColor() {
        let r_hexVal = parseInt(r.value, 10).toString(16),
            g_hexVal = parseInt(g.value, 10).toString(16),
            b_hexVal = parseInt(b.value, 10).toString(16),
            hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
        colorSquare.style.backgroundColor = hexVal;
        inpColor.value = hexVal;
    }

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))
    function pad(n) {
        return (n.length < 2) ? "0" + n : n;
    }

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }



    /////////////////////////////////////////// rgbmenu
    function rgbOpen() {
        setMenuRgb(!menuRgb)
        setMenuColor(false)
        menuRgb ? setRgbClass("") : setRgbClass("open")

        setBeforeColor(getComputedStyle(document.querySelector(".color")).backgroundColor)
    }

    function colorOpen() {
        setMenuColor(!menuColor)
        setMenuRgb(false)
        setRgbClass("")
    }

    //////////////////////// closeButton
    function cancelColor() {
        setMenuRgb(false)
        document.querySelector(".color").style.backgroundColor = beforeColor
        setRgbClass("")
        setRangeColor(hexToRgb(`${rgb2hex(beforeColor)}`))
        inputCol.current.value = `${rgb2hex(beforeColor)}`
    }

    function applyColor() {
        setMenuRgb(false)
         setRgbClass("")
    }


    ///////////////////////////////////////closeOutside

    function closeAll(e) {
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
                    <input ref={inputCol} type="text" className="inp__color" spellCheck="false" placeholder="Color" id="inputText" readOnly={true} defaultValue="#ffed00" />
                    <div onClick={rgbOpen} className="square__color"><div className="color"></div></div>
                    <div onClick={colorOpen} className="drop__block"> <div className="arrow__drop"></div> </div>
                </div>

                {menuColor ? <MenuColors selectColor={selectColor} /> : ""}

                <MenuRgb applyColor={applyColor} classRgb={rgbMenu} cancelColor={cancelColor} />

            </div>
        </div>
    )
}
