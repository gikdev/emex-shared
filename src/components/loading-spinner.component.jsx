import { SpinnerGap } from "@phosphor-icons/react"

function LoadingSpinner(props) {
  return (
    <span className="text-inherit">
      <SpinnerGap {...props} className="animate-spin" />
    </span>
  )
}

export { LoadingSpinner }
