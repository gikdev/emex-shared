import clsx from "clsx"
import { twMerge } from "tailwind-merge"
import { swalert } from "."

/** Converts a number to a `step` string for `<input />`
 * @example decimalCountToInputStep(3) // "0.001"
 * @param {number} decimalCount >= 1
 * @returns
 */
function decimalCountToInputStep(decimalCount) {
  const _decimalCount = decimalCount >= 1 ? decimalCount : 1
  let final = ""
  final += "0."
  for (let i = 0; i < _decimalCount - 1; i++) final += "0"
  final += "1"
  return final
}

/**
 * Gets expiry for that react-timer
 * @param {number} seconds Amount of time in seconds
 * @returns {Date}
 */
function getExpiry(seconds) {
  const date = new Date()
  date.setSeconds(date.getSeconds() + seconds)
  return date
}

/**
 * Handles notifying user about updates and version...
 * @param {'CLIENT' | 'ADMIN'} app
 * @returns {void}
 */
function handleUpdate(version) {
  const KEYS = {
    VERSION: "APP_VERSION",
    CHECKED: "LAST_TIME_CHECKED",
  }
  const setCheckedNow = () => localStorage.setItem(KEYS.CHECKED, JSON.stringify(Date.now()))
  const doesVersionExist = !!localStorage.getItem(KEYS.VERSION)
  const doesCheckedExist = !!localStorage.getItem(KEYS.CHECKED)

  if (!doesCheckedExist || !doesVersionExist) {
    localStorage.setItem(KEYS.VERSION, version)
    setCheckedNow()

    return
  }

  const isUpdated = localStorage.getItem(KEYS.VERSION) === version

  if (isUpdated) {
    setCheckedNow()
    return
  }

  if (!isUpdated) {
    localStorage.setItem(KEYS.VERSION, version)
    setCheckedNow()
    swalert.updateApp()
  }
}

const cn = (...inputs) => twMerge(clsx(inputs))

export { cn, decimalCountToInputStep, getExpiry, handleUpdate }
