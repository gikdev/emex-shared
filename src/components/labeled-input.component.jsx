import { Input } from "."
import { forwardRef, useId } from "react"

function LabeledInput({ labelTextPrimary, labelTextSecondary = "", ...delegated }, ref) {
  const idToUse = useId()
  const id = `labeled-input-${idToUse}`
  
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex justify-between items-center">
        <span>{labelTextPrimary}</span>
        <span className="text-xs">{labelTextSecondary}</span>
      </label>
      <Input dir="ltr" id={id} {...delegated} ref={ref} />
    </div>
  )
}

export default forwardRef(LabeledInput)
