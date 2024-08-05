import { cn } from "../helpers"

const styles = {
  base: "inline-block rounded px-2 py-1 text-xs",
  success: "bg-jadedark-3 text-jadedark-11",
  error: "bg-reddark-3 text-reddark-11",
  warning: "bg-yellowdark-3 text-yellowdark-11",
  info: "bg-bluedark-3 text-bluedark-11",
  primary: "bg-amberdark-3 text-amberdark-11",
  neutral: "bg-slatedark-3 text-slatedark-11",
}

function Badge({ theme = "neutral", children, ...delegated }) {
  return (
    <span className={cn(styles.base, styles[theme])} {...delegated}>
      {children}
    </span>
  )
}

export default Badge
