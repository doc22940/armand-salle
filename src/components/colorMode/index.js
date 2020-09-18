import React, { useState } from "react"
import anime from "animejs"

const ColorMode = () => {
  const [colorIndex, setColorIndex] = useState(1)
  const [prevIndex, setPrevIndex] = useState(0)

  const colors = [
    {
      primary: "rgba(238, 27, 73, 1)",
      secondary: "rgba(100, 94, 157, 1)",
      white: "rgba(223, 223, 223, 1)",
      black: "rgba(20, 20, 20, 1)",
    },
    {
      primary: "rgba(74, 75, 199, 1)",
      secondary: "rgba(238, 155, 228, 1)",
      white: "rgba(255, 248, 240, 1)",
      black: "rgba(0, 174, 145, 1)",
    },
    {
      primary: "rgba(243, 214, 49, 1)",
      secondary: "rgba(230, 90, 62, 1)",
      white: "rgba(41, 103, 131, 1)",
      black: "rgba(255, 248, 240, 1)",
    },
  ]

  const changeColorMode = () => {
    const to = colors[colorIndex]
    const from = colors[prevIndex]

    anime({
      targets: from,
      primary: to.primary,
      secondary: to.secondary,
      white: to.white,
      black: to.black,
      duration: 500,
      easing: "linear",
      update: e => {
        e.animations.forEach(el => {
          document.documentElement.style.setProperty(
            `--color-${el.property}`,
            el.currentValue
          )
        })
      },
    })

    setPrevIndex(colorIndex)
    colorIndex + 1 > colors.length - 1
      ? setColorIndex(0)
      : setColorIndex(i => i + 1)
  }

  return (
    <button
      type="button"
      aria-label="Change color"
      className="color-mode"
      onClick={changeColorMode}
    >
      <svg className="color-mode__svg">
        <circle className="color-mode__circle" cx="30" cy="30" r="30" />
      </svg>
    </button>
  )
}

export default ColorMode
