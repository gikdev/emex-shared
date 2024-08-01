import Cookies from "js-cookie"

const isDev = import.meta.env.DEV
// const BASE_URL = isDev ? "http://tyapi.isola.ir" : "http://tapi.emexgold.com"
const BASE_URL = isDev ? "http://njweb:8099" : "http://tapi.emexgold.com"
// const BASE_URL = isDev ? "http://192.168.0.168:4567" : "http://tapi.emexgold.com"
// const BASE_URL = isDev ? "http://192.168.0.134:8099" : "http://tapi.emexgold.com"

class Endpoint {
  constructor(url, method = "GET") {
    this.url = `${BASE_URL}/api${url}`
    this.method = method
  }
}

const apiHelper = {
  BASE_URL: BASE_URL,
  header: {
    json: { "content-type": "application/json" },
    bearer: { Authorization: `Bearer ${Cookies.get("ttkk")}` },
    jsonAndBearer: {
      "content-type": "application/json",
      Authorization: `Bearer ${Cookies.get("ttkk")}`,
    },
  },
}

const apiEndpoints = {
  BASE: `${BASE_URL}/api`,
  customer: {
    addDoc: new Endpoint("/Customer/AddDocs", "POST"),
    addTransfer: new Endpoint("/Customer/AddTransfer", "POST"),
    docs: new Endpoint("/Customer/GetDocs", "POST"),
    getMaster: new Endpoint("/Customer/GetMaster", "GET"),
    getOrderByID: id => new Endpoint(`/Customer/GetOrderByID/${id}`),
    login: new Endpoint("/Customer/loginCustomer", "POST"),
    orders: new Endpoint("/Customer/GetOrders", "POST"),
    portfolio: new Endpoint("/Customer/GetPortfoli", "GET"),
    profile: new Endpoint("/Customer/GetProfile", "GET"),
    requestOrder: new Endpoint("/Customer/ReqOrder", "POST"),
    stocks: new Endpoint("/TyStocks/ForCustommer", "GET"),
    todayOrders: new Endpoint("/Customer/GetTodayOrders", "GET"),
    transfers: new Endpoint("/Customer/GetTransfers", "POST"),
    update: new Endpoint("/Customer/UpdateF", "POST"),
  },
  customerGroup: {
    addGroup: new Endpoint("/TyCustomerGroups", "POST"),
    editGroup: id => new Endpoint(`/TyCustomerGroups/${id}`, "PUT"),
    getGroup: id => new Endpoint(`/TyCustomerGroups/${id}`, "GET"),
    groups: new Endpoint("/TyCustomerGroups", "GET"),
    removeGroup: id => new Endpoint(`/TyCustomerGroups/${id}`, "DELETE"),
  },
  master: {
    acceptDoc: new Endpoint("/Master/AcceptDocs", "POST"),
    acceptOrders: new Endpoint("/Master/AcceptOrders", "POST"),
    acceptTransfer: new Endpoint("/Master/AcceptTransfer", "POST"),
    addAndAcceptDocs: new Endpoint("/Master/AddAndAcceptDocs", "POST"),
    addAndAcceptTransfer: new Endpoint("/Master/AddAndAcceptTransfer", "POST"),
    addCustomer: new Endpoint("/Master/AddCustomer", "POST"),
    getCustomers: new Endpoint("/Master/GetCustomers", "GET"),
    getDocs: new Endpoint("/Master/GetDocs", "POST"),
    getOrderByID: id => new Endpoint(`/Master/GetOrderByID/${id}`),
    getOrders: new Endpoint("/Master/GetOrders", "POST"),
    getPortfolio: new Endpoint("/Master/GetMasterPortfolio", "GET"),
    getTodayOrders: new Endpoint("/Master/GetTodayOrders", "GET"),
    getTransfers: new Endpoint("/Master/GetTransfer", "POST"),
    getUserPortfolio: id => new Endpoint(`/Master/UserPortfolio/${id}`, "GET"),
    hash: new Endpoint("/Master/Hash", "POST"),
    login: new Endpoint("/Master/loginMaster", "POST"),
    removeCustomer: new Endpoint("/Master/RemoveCustomer", "POST"),
    update: new Endpoint("/Master/UpdateF", "POST"),
    updateCustomer: new Endpoint("/Master/UpdateCustomer", "POST"),
  },
  file: {
    download: id => new Endpoint(`/TyFiles/download/${id}`, "GET"),
    upload: new Endpoint("/TyFiles/upload", "POST"),
  },
  stock: {
    allStocks: new Endpoint("/TyStocks", "GET"),
    editStock: id => new Endpoint(`/TyStocks/${id}`, "PUT"),
    getStock: id => new Endpoint(`/TyStocks/${id}`, "GET"),
    newStock: new Endpoint("/TyStocks", "POST"),
    removeStock: id => new Endpoint(`/TyStocks/${id}`, "DELETE"),
  },
}

export { apiHelper, apiEndpoints }
