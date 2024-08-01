const MESSAGES = {
  CANCEL: "منصرف شدم",
  CHANGE_REMAINING_AMOUNT_DESCRIPTION: "چقدر از این محصول برامون مونده؟",
  CHANGE_REMAINING_AMOUNT_TITLE: "تغییر مقدار موجودی",
  CHANGE_USERNAME_DESCRIPTION: "خب، اسمت چی باشه؟",
  CHANGE_USERNAME_TITLE: "میخوای اسمتو عوض کنی؟",
  CONFIRM_ACCEPT_OR_REJECT: isAcceptence => `واقعا میخوای ${isAcceptence ? "تاییدش" : "ردش"} کنی؟`,
  CONFIRM_DELETE_DESCRIPTION: "مطمئنی میخوای اینو پاک کنی؟",
  CONFIRM_DELETE_TITLE: "مواظب باش!",
  CONTINUE: "ادامه بدیم",
  CURRENTLY_SEEING_ORDERS_ALL: "شما در حال دیدن کل سفارشات هستین",
  CURRENTLY_SEEING_ORDERS_TODAY: "شما در حال دیدن سفارشات امروز هستین",
  EMPTY_DESCRIPTION: "خوشبختانه یا متاسفانه چیزی اینجا دیده نمیشه...",
  EMPTY_TITLE: "چیزی رویت نمیشه ناخدا...",
  ERROR_404_DESCRIPTION: "چیزی که دنبالشی پیدا نشد!",
  ERROR_404_PAGE_DESCRIPTION: s =>
    `صفحه‌ای که دنبالشی رو نداریم. بازگشت به صفحه اصلی در ${s} ثانیه.`,
  ERROR_404_PAGE_TITLE: "صفحه پیدا نشد (۴۰۴)",
  ERROR_404_TITLE: "آخ...",
  ERROR_DEFAULT_DESCRIPTION: "مثل اینکه یه مشکلی پیش اومده",
  ERROR_DEFAULT_TITLE: "آخ...",
  ERROR_IN_SERVER_CONNECTION: "مثل اینکه توی ارتباط با سرور مشکلی پیش اومده...",
  ERROR_PASSWORDS_DO_NOT_MATCH: "«رمز» شما و «تکرار» رمز شما با هم یکی نیستن",
  GO_HOME: "بریم خونه",
  GO_ORDERS_ALL: "دیدن کل سفارشات",
  GO_ORDERS_TODAY: "دیدن سفارشات امروز",
  LAST_UPDATED: "بروزرسانی",
  LOADING_DESCRIPTION: "اگه خیلی وقته منتظری یا ریفرش کن یا برو خونه...",
  LOADING_TITLE: "در حال لود...",
  LOGIN_ALREADY_LOGGED_IN_DESCRIPTION: "قبلا وارد سیستم شدین پس لازم نیست دوباره وارد بشین",
  LOGIN_ALREADY_LOGGED_IN_TITLE: "وارد شدین",
  REFRESH: "تازه کردن",
  SUCCESS_DESCRIPTION: "با موفقیت انجام شد",
  SUCCESS_TITLE: "موفقیت",
  TRY_AGAIN: "دوباره تلاش کن",
  WARNING_IRREVERSIBLE_ACTION: "این عملیات قابل برگشت نیست...",
}

const VERSIONS = {
  CLIENT: "0.0.0-beta",
  ADMIN: "0.0.0-beta",
}

export { MESSAGES, VERSIONS }
