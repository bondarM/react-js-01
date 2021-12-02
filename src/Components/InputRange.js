import React from 'react'

export const InputRange = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.name}</label>
      <input
        ref={ref} type="range" min="0" max="255"
        onChange={(e) => props.onChange(e.target.value)}
        id={props.id} step="1" defaultValue={props.defaultValue} />
    </div>
  )
})
