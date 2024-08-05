import * as RadixSwitch from "@radix-ui/react-switch"
import { forwardRef } from "react"
import { cn } from "../helpers"

function Switch({ checked, ...delegated }, ref) {
  const styles = {
    root: cn(
      "w-12 transition-all h-7 flex p-1 items-center rounded",
      checked ? "bg-amberdark-9" : "bg-slatedark-6",
      checked ? "justify-end" : "justify-start",
    ),
  }

  return (
    <RadixSwitch.Root className={styles.root} ref={ref} {...delegated}>
      <RadixSwitch.Thumb className="size-5 bg-slatedark-12 inline-block rounded shadow-lg" />
    </RadixSwitch.Root>
  )
}

export default forwardRef(Switch)
