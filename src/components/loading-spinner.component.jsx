import { SpinnerGap } from "@phosphor-icons/react"

function LoadingSpinner() {
  return (
    <span className="text-inherit">
      <SpinnerGap className="animate-spin" />
    </span>
  )
}

export { LoadingSpinner }
