import tw from "tailwind-styled-components"

const Tag = tw.span`
  badge badge-ghost fixed start-1 bottom-1 font-mono opacity-50 badge-sm cursor-pointer
  hover:opacity-100 active:scale-90 hover:badge-lg hover:badge-info transition-all 
`

const VersionTag = ({ version }) => <Tag dir="ltr">v{version}</Tag>

export default VersionTag
