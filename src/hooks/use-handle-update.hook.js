import { useEffect } from "react"
import { handleUpdate } from "../helpers"

function useHandleUpdate(version) {
  useEffect(() => {
    handleUpdate(version)
  }, [version])
}

export { useHandleUpdate }
