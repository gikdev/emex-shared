import { forwardRef, useId } from "react"
import { Textarea } from "."

function LabeledTextareaComponent({ labelTextPrimary, labelTextSecondary = "", ...delegated }, ref) {
  const idToUse = useId()
  const id = `labeled-textarea-${idToUse}`

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex justify-between items-center">
        <span>{labelTextPrimary}</span>
        <span className="text-xs">{labelTextSecondary}</span>
      </label>
      <Textarea dir="ltr" id={id} {...delegated} ref={ref} />
    </div>
  )
}

const LabeledTextarea = forwardRef(LabeledTextareaComponent)

export { LabeledTextarea }
