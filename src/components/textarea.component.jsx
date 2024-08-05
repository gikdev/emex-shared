import { forwardRef } from "react"
import tw from "tailwind-styled-components"

const StyledTextarea = tw.textarea`
  px-4 py-3 bg-slatedark-3 border border-slatedark-6 rounded text-slatedark-11 w-full
  min-h-10
  focus:border-transparent focus:bg-slatedark-5 focus:text-slatedark-12
`

function TextareaComponent({ className, ...delegated }, ref) {
  return <StyledTextarea className={className} ref={ref} {...delegated} />
}

const Textarea = forwardRef(TextareaComponent)

export { Textarea }
