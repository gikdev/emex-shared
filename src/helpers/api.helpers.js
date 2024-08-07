import Cookies from "js-cookie"
import { apiEndpoints, swalert } from "."
import { deleteAllCookies, randomString } from "../utils"

/**
 * Gets the download URL of an upload file by getting the `GUID`
 * @param {string} GUID the GUID of the file...
 * @returns {Promise<string>} the downloadable url
 */
async function getFileDLURL(GUID) {
  if (!GUID) return ""
  try {
    const url = apiEndpoints.file.download(GUID).url
    const res = await fetch(url)
    return res.url
  } catch (e) {
    return ""
  }
}

/** Tells whether the user is logged in or not
 * @returns {boolean}
 */
const getIsLoggedIn = () => !!Cookies.get("ttkk")

/** Handles the common HTTP errors
 * @param {Error} err
 * @returns {*}
 */
function handleHTTPErrors(err) {
  console.error(err)
  const status = err.status
  switch (status) {
    case 400:
      swalert.error("آخ...", "یه مشکلی پیش اومده...").then(logOut).catch(logOut)
      return Promise.reject(new Error("An error occurred. Please try again."))
    case 401:
      swalert
        .error(
          "آخ...",
          "مثل اینکه نشناختیم شما رو. لطفا دوباره لاگین کن (شایدم یه چیزی رو اشتباه وارد کردی...)",
        )
        .then(logOut)
        .catch(logOut)
      return Promise.reject(new Error("Unauthorized: Please log in again."))
    case 403:
      swalert.error("آخ...", "شرمنده ولی اجازه نداری به این دست بزنی...")
      return Promise.reject(new Error("Forbidden: You do not have permission."))
    case 404:
      swalert.error("آخ...", "چیزی که دنبالشی پیدا نشد...")
      return Promise.reject(new Error("Not Found: The requested resource was not found."))
    case status >= 500 && status < 600:
      swalert.error("آخ...", "یه مشکلی هست که مقصرش ما هستیم... لطفا بعدا امتحان کن...")
      return Promise.reject(new Error("Server Error: Please try again later."))
    default:
      swalert.error("آخ...", `این اروره دیگه چیه؟ ${status} - ${err.message}`)
      return Promise.reject(new Error("An error occurred. Please try again."))
  }
}

/**
 * Uploads a file to the API
 * @async
 * @param {File} file the file to upload to server
 * @param {boolean} [isPrivate] whether the file is private or not
 * @returns {Promise<string>} Returns GUID if `isPrivate` else *adress*
 */
async function uploadFile(file, isPrivate = false) {
  const formData = new FormData()
  const fileName = file.name
  const lastDotPosition = fileName.lastIndexOf(".")
  const fileExt = fileName.slice(lastDotPosition, fileName.length)
  const conf = apiEndpoints.file.upload
  const url = conf.url
  const options = {
    method: conf.method,
    body: formData,
  }

  formData.append("File", file)
  formData.append("Name", randomString(20) + fileExt)
  formData.append("Description", "")
  formData.append("IsPrivate", isPrivate)

  try {
    const res = await fetch(url, options)
    const data = await res.json()
    return isPrivate ? data.id : data.adress
  } catch (error) {
    swalert.error("ای وای...!", "مثل اینکه توی آپلود به مشکل خوردیم 🥲")
    return ""
  }
}

/** Logs the user out: deletes cookies and redirects them to login */
function logOut() {
  deleteAllCookies()
  localStorage.clear()
  sessionStorage.clear()
  location.href = "/login"
}

/** The default fetcher for SWR
 * @param {...{}} config
 * @returns {*} an async function for the SWR
 */
function fetcher(config) {
  return async url => {
    const res = await fetch(url, config)
    const data = await res.json()

    if (!res.ok) {
      handleHTTPErrors(res)
      const error = new Error("An error occurred while fetching the data.")
      error.info = await res.json()
      error.status = res.status
      throw error
    }

    return data
  }
}

export { getFileDLURL, getIsLoggedIn, handleHTTPErrors, uploadFile, logOut, fetcher }
