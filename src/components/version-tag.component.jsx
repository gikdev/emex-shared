import tw from "tailwind-styled-components"
import { Badge } from "."

const StyledBadge = tw(Badge)`
  fixed start-1 bottom-1 font-[monospace] opacity-50 cursor-pointer
  hover:opacity-100 active:scale-90 hover:text-lg transition-all 
`

// const VersionTag = ({ version, usePrefix = false }) => <Tag dir="ltr">{usePrefix ? "v" : ""}{version}</Tag>
function VersionTag({ version, usePrefix = false }) {
  return (
    <StyledBadge dir="ltr" theme="info">
      {usePrefix && "v"}
      {version}
    </StyledBadge>
  )
}

export default VersionTag
