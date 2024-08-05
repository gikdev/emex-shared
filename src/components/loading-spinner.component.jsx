import { CircleNotch } from "@phosphor-icons/react"

function LoadingSpinner() {
  return (
    <span className="text-inherit">
      <CircleNotch className="animate-spin" />
    </span>
  )
}

export { LoadingSpinner }
