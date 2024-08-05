import { forwardRef, useId } from "react"

function LabeledSwitch({ labelText, ...delegated }, ref) {
  const idToUse = useId()
  const id = `labeled-switch-${idToUse}`

  return (
    <div className="flex gap-2">
      <input type="checkbox" className="accent-amberdark-9" id={id} {...delegated} ref={ref} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default forwardRef(LabeledSwitch)
