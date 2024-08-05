import { forwardRef } from "react"
import tw from "tailwind-styled-components"

const StyledInput = tw.input`
  px-4 py-3 bg-slatedark-3 border border-slatedark-6 rounded text-slatedark-11 w-full
  focus:border-transparent focus:bg-slatedark-5 focus:text-slatedark-12
`

function InputComponent({ className, ...delegated }, ref) {
  return <StyledInput className={className} ref={ref} {...delegated} />
}

const Input = forwardRef(InputComponent)

export { Input }
