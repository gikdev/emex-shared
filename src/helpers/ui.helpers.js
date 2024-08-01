import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { logOut } from "."

const ReactSwal = withReactContent(Swal)
const swalert = {
  _show(titleText, html, icon, other) {
    return ReactSwal.fire({ titleText, html, icon, ...other })
  },
  message(title, desc) {
    return this._show(title, desc, "info")
  },
  success(title, desc) {
    return this._show(title, desc, "success")
  },
  warning(title, desc) {
    return this._show(title, desc, "warning")
  },
  error(title, desc) {
    return this._show(title, desc, "error")
  },
  info(title, desc) {
    return this._show(title, desc, "info")
  },
  ask(title, desc, defVal = "", inpType = "number") {
    return this._show(title, desc, "question", {
      input: inpType,
      inputValue: defVal,
      showCancelButton: true,
      confirmButtonText: "تغییر بده",
      cancelButtonText: "نه بیخیال...",
    })
  },
  confirm(title, desc) {
    return this._show(title, desc, "question", {
      showCancelButton: true,
      confirmButtonText: "آره",
      cancelButtonText: "نه!",
    })
  },
  updateApp() {
    return this._show("یه آپدیت داریم!", "این برنامه یه بروزرسانی لازم داره.", "info", {
      confirmButtonText: "آپدیت",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then(logOut)
  },
}

class TableFormat {
  constructor(key, name, format) {
    this.key = key
    this.name = name
    this.format = format ?? ""
  }
}

export { swalert, TableFormat }
