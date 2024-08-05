import tw from "tailwind-styled-components"

const StyledInput = tw.input`
  px-4 py-3 bg-slatedark-3 border border-slatedark-6 rounded text-slatedark-11 w-full
  focus:border-transparent focus:bg-slatedark-5 focus:text-slatedark-12
`

function Input({ className, ...delegated }) {
  return <StyledInput className={className} {...delegated} />
}

export default Input
