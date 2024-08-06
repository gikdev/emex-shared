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
  ERROR_DEFAULT_DESCRIPTION: "یه مشکلی پیش اومده",
  ERROR_DEFAULT_TITLE: "خطا!",
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
  LOGIN_SUCCESSFUL: "با موفقیت وارد شدین",
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

const AG_GRID_LOCALE_IR = {
  // Set Filter
  selectAll: "(انتخاب همه)",
  selectAllSearchResults: "(انتخاب همه نتایج جستجو)",
  addCurrentSelectionToFilter: "افزودن انتخاب فعلی به فیلتر",
  searchOoo: "جستجو...",
  blanks: "(خالی)",
  noMatches: "موردی یافت نشد",

  // Number Filter & Text Filter
  filterOoo: "فیلتر...",
  equals: "برابر است با",
  notEqual: "برابر نیست با",
  blank: "خالی",
  notBlank: "خالی نیست",
  empty: "یکی را انتخاب کنید",

  // Number Filter
  lessThan: "کمتر از",
  greaterThan: "بیشتر از",
  lessThanOrEqual: "کمتر یا مساوی با",
  greaterThanOrEqual: "بیشتر یا مساوی با",
  inRange: "بین",
  inRangeStart: "از",
  inRangeEnd: "تا",

  // Text Filter
  contains: "شامل است",
  notContains: "شامل نمی‌شود",
  startsWith: "شروع می‌شود با",
  endsWith: "پایان می‌یابد با",

  // Date Filter
  dateFormatOoo: "yyyy-mm-dd",
  before: "قبل",
  after: "بعد",

  // Filter Conditions
  andCondition: "و",
  orCondition: "یا",

  // Filter Buttons
  applyFilter: "اعمال",
  resetFilter: "بازنشانی",
  clearFilter: "پاک کردن",
  cancelFilter: "لغو",

  // Filter Titles
  textFilter: "فیلتر متنی",
  numberFilter: "فیلتر عددی",
  dateFilter: "فیلتر تاریخ",
  setFilter: "فیلتر مجموعه",

  // Group Column Filter
  groupFilterSelect: "انتخاب فیلد:",

  // Advanced Filter
  advancedFilterContains: "شامل می‌شود",
  advancedFilterNotContains: "شامل نمی‌شود",
  advancedFilterTextEquals: "مساوی است با",
  advancedFilterTextNotEqual: "مساوی نیست با",
  advancedFilterStartsWith: "شروع می‌شود با",
  advancedFilterEndsWith: "پایان می‌یابد با",
  advancedFilterBlank: "خالی است",
  advancedFilterNotBlank: "خالی نیست",
  advancedFilterEquals: "=",
  advancedFilterNotEqual: "!=",
  advancedFilterGreaterThan: ">",
  advancedFilterGreaterThanOrEqual: ">=",
  advancedFilterLessThan: "<",
  advancedFilterLessThanOrEqual: "<=",
  advancedFilterTrue: "درست است",
  advancedFilterFalse: "نادرست است",
  advancedFilterAnd: "و",
  advancedFilterOr: "یا",
  advancedFilterApply: "اعمال",
  advancedFilterBuilder: "سازنده",
  advancedFilterValidationMissingColumn: "ستون گمشده است",
  advancedFilterValidationMissingOption: "گزینه گمشده است",
  advancedFilterValidationMissingValue: "مقدار گمشده است",
  advancedFilterValidationInvalidColumn: "ستون یافت نشد",
  advancedFilterValidationInvalidOption: "گزینه یافت نشد",
  advancedFilterValidationMissingQuote: "مقدار بدون نقل قول انتهایی است",
  advancedFilterValidationNotANumber: "مقدار عددی نیست",
  advancedFilterValidationInvalidDate: "مقدار تاریخ معتبر نیست",
  advancedFilterValidationMissingCondition: "شرط گمشده است",
  advancedFilterValidationJoinOperatorMismatch: "اپراتورهای پیوسته در یک شرط باید یکسان باشند",
  advancedFilterValidationInvalidJoinOperator: "اپراتور پیوست یافت نشد",
  advancedFilterValidationMissingEndBracket: "براکت انتهایی گمشده است",
  advancedFilterValidationExtraEndBracket: "براکت انتهایی زیادی وجود دارد",
  advancedFilterValidationMessage: "عبارت حاوی یک خطاست. ${variable} - ${variable}.",
  advancedFilterValidationMessageAtEnd: "عبارت حاوی یک خطاست. ${variable} در پایان عبارت.",
  advancedFilterBuilderTitle: "عنوان",
  advancedFilterBuilderApply: "اعمال",
  advancedFilterBuilderCancel: "لغو",
  advancedFilterBuilderAddButtonTooltip: "افزودن فیلتر یا گروه",
  advancedFilterBuilderRemoveButtonTooltip: "حذف",
  advancedFilterBuilderMoveUpButtonTooltip: "حرکت به بالا",
  advancedFilterBuilderMoveDownButtonTooltip: "حرکت به پایین",
  advancedFilterBuilderAddJoin: "افزودن گروه",
  advancedFilterBuilderAddCondition: "افزودن فیلتر",
  advancedFilterBuilderSelectColumn: "انتخاب یک ستون",
  advancedFilterBuilderSelectOption: "انتخاب یک گزینه",
  advancedFilterBuilderEnterValue: "وارد کردن مقدار...",
  advancedFilterBuilderValidationAlreadyApplied: "فیلتر فعلی قبلاً اعمال شده است.",
  advancedFilterBuilderValidationIncomplete: "همه شرایط کامل نیستند.",
  advancedFilterBuilderValidationSelectColumn: "باید یک ستون انتخاب شود.",
  advancedFilterBuilderValidationSelectOption: "باید یک گزینه انتخاب شود.",
  advancedFilterBuilderValidationEnterValue: "باید یک مقدار وارد شود.",

  // Side Bar
  columns: "ستون‌ها",
  filters: "فیلترها",

  // columns tool panel
  pivotMode: "حالت Pivot",
  groups: "گروه‌های ردیف",
  rowGroupColumnsEmptyMessage: "اینجا بکشید تا گروه‌های ردیف تنظیم شود",
  values: "مقادیر",
  valueColumnsEmptyMessage: "اینجا بکشید تا جمع‌آوری شود",
  pivots: "برچسب‌های ستون",
  pivotColumnsEmptyMessage: "اینجا بکشید تا برچسب‌های ستون تنظیم شود",

  // Header of the Default Group Column
  group: "گروه",

  // Row Drag
  rowDragRow: "ردیف",
  rowDragRows: "ردیف‌ها",

  // Other
  loadingOoo: "در حال بارگذاری...",
  loadingError: "خطا",
  noRowsToShow: "ردیفی برای نمایش وجود ندارد",
  enabled: "فعال",

  // Menu
  pinColumn: "سنجاق کردن ستون",
  pinLeft: "سنجاق کردن به چپ",
  pinRight: "سنجاق کردن به راست",
  noPin: "بدون سنجاق",
  valueAggregation: "تجمع ارزش",
  noAggregation: "هیچ",
  autosizeThisColumn: "اندازه خودکار این ستون",
  autosizeAllColumns: "اندازه خودکار همه ستون‌ها",
  groupBy: "گروه‌بندی با",
  ungroupBy: "حذف گروه‌بندی با",
  ungroupAll: "حذف همه گروه‌بندی‌ها",
  addToValues: "${variable} را به مقادیر اضافه کنید",
  removeFromValues: "${variable} را از مقادیر حذف کنید",
  addToLabels: "${variable} را به برچسب‌ها اضافه کنید",
  removeFromLabels: "${variable} را از برچسب‌ها حذف کنید",
  resetColumns: "بازنشانی ستون‌ها",
  expandAll: "باز کردن همه گروه‌های ردیف",
  collapseAll: "بستن همه گروه‌های ردیف",
  copy: "کپی",
  ctrlC: "Ctrl+C",
  ctrlX: "Ctrl+X",
  copyWithHeaders: "کپی با سربرگ‌ها",
  copyWithGroupHeaders: "کپی با سربرگ‌های گروه",
  cut: "بریدن",
  paste: "چسباندن",
  ctrlV: "Ctrl+V",
  export: "صادرات",
  csvExport: "صادرات CSV",
  excelExport: "صادرات اکسل",
  columnFilter: "فیلتر ستون",
  columnChooser: "انتخاب ستون‌ها",
  sortAscending: "مرتب‌سازی صعودی",
  sortDescending: "مرتب‌سازی نزولی",
  sortUnSort: "پاک کردن مرتب‌سازی",

  // Enterprise Menu Aggregation and Status Bar
  sum: "جمع",
  first: "اول",
  last: "آخر",
  min: "حداقل",
  max: "حداکثر",
  none: "هیچ‌کدام",
  count: "تعداد",
  avg: "میانگین",
  filteredRows: "فیلتر شده",
  selectedRows: "انتخاب شده",
  totalRows: "کل ردیف‌ها",
  totalAndFilteredRows: "ردیف‌ها",
  more: "بیشتر",
  to: "به",
  of: "از",
  page: "صفحه",
  pageLastRowUnknown: "?",
  nextPage: "صفحه بعد",
  lastPage: "آخرین صفحه",
  firstPage: "اولین صفحه",
  previousPage: "صفحه قبلی",
  pageSizeSelectorLabel: "اندازه صفحه:",
  footerTotal: "کل",

  // Pivoting
  pivotColumnGroupTotals: "مجموع",

  // Enterprise Menu (Charts)
  pivotChartAndPivotMode: "چارت محوری و حالت محوری",
  pivotChart: "چارت محوری",
  chartRange: "دامنه چارت",
  columnChart: "ستون",
  groupedColumn: "گروه بندی شده",
  stackedColumn: "پشته ای",
  normalizedColumn: "۱۰۰٪ پشته ای",
  barChart: "میله ای",
  groupedBar: "گروه بندی شده",
  stackedBar: "پشته ای",
  normalizedBar: "۱۰۰٪ پشته ای",
  pieChart: "دایره ای",
  pie: "دایره ای",
  donut: "دونات",
  line: "خطی",
  xyChart: "ایکس وای (پراکنده)",
  scatter: "پراکنده",
  bubble: "حبابی",
  areaChart: "مساحتی",
  area: "مساحتی",
  stackedArea: "پشته ای",
  normalizedArea: "۱۰۰٪ پشته ای",
  histogramChart: "هیستوگرام",
  polarChart: "قطبی",
  radarLine: "راداری خطی",
  radarArea: "راداری مساحتی",
  nightingale: "نایتینگل",
  radialColumn: "ستون شعاعی",
  radialBar: "میله شعاعی",
  statisticalChart: "آماری",
  boxPlot: "باکس پلات",
  rangeBar: "میله بازه ای",
  rangeArea: "مساحت بازه ای",
  hierarchicalChart: "سلسله مراتبی",
  treemap: "درخت نقشه",
  sunburst: "انفجار خورشیدی",
  specializedChart: "تخصصی",
  waterfall: "آبشار",
  heatmap: "نقشه حرارتی",
  combinationChart: "ترکیبی",
  columnLineCombo: "ستون و خط",
  AreaColumnCombo: "مساحت و ستون",

  // Charts
  pivotChartTitle: "نمودار محوری",
  rangeChartTitle: "نمودار محدوده",
  settings: "نمودار",
  data: "راه اندازی",
  format: "سفارشی سازی",
  categories: "دسته بندی‌ها",
  defaultCategory: "(هیچ)",
  series: "مجموعه داده‌ها",
  switchCategorySeries: "تغییر دسته / مجموعه داده",
  categoryValues: "مقادیر دسته",
  seriesLabels: "برچسب‌های مجموعه داده",
  aggregate: "تجمع",
  xyValues: "مقادیر X Y",
  paired: "حالت جفت",
  axis: "محور",
  xAxis: "محور افقی",
  yAxis: "محور عمودی",
  polarAxis: "محور قطبی",
  radiusAxis: "محور شعاعی",
  navigator: "راهبرد",
  zoom: "بزرگنمایی",
  animation: "انیمیشن",
  crosshair: "موشکاب",
  color: "رنگ",
  thickness: "ضخامت",
  preferredLength: "طول مورد نظر",
  xType: "نوع X",
  axisType: "نوع محور",
  automatic: "خودکار",
  category: "دسته",
  number: "عدد",
  time: "زمان",
  timeFormat: "فرمت زمان",
  autoRotate: "چرخش خودکار",
  labelRotation: "چرخش برچسب",
  circle: "دایره",
  polygon: "چند ضلعی",
  square: "مربع",
  cross: "چلیپا",
  diamond: "لوزی",
  plus: "اضافه",
  triangle: "مثلث",
  heart: "قلب",
  orientation: "جهت",
  fixed: "ثابت",
  parallel: "موازی",
  perpendicular: "عمود",
  radiusAxisPosition: "موقعیت",
  ticks: "علامت‌ها",
  gridLines: "خطوط شبکه",
  width: "عرض",
  height: "ارتفاع",
  length: "طول",
  padding: "حاشیه داخلی",
  spacing: "فاصله",
  chartStyle: "سبک نمودار",
  title: "عنوان",
  chartTitles: "عناوین",
  chartTitle: "عنوان نمودار",
  chartSubtitle: "زیرعنوان",
  horizontalAxisTitle: "عنوان محور افقی",
  verticalAxisTitle: "عنوان محور عمودی",
  polarAxisTitle: "عنوان محور قطبی",
  titlePlaceholder: "عنوان نمودار",
  background: "پس‌زمینه",
  font: "فونت",
  weight: "وزن",
  top: "بالا",
  right: "راست",
  bottom: "پایین",
  left: "چپ",
  labels: "برچسب‌ها",
  calloutLabels: "برچسب‌های توضیحی",
  sectorLabels: "برچسب‌های بخش",
  positionRatio: "نسبت موقعیت",
  size: "اندازه",
  shape: "شکل",
  minSize: "حداقل اندازه",
  maxSize: "حداکثر اندازه",
  legend: "علائم راهنما",
  position: "موقعیت",
  markerSize: "اندازه نشانگر",
  markerStroke: "ضربه نشانگر",
  markerPadding: "حاشیه داخلی نشانگر",
  itemSpacing: "فاصله بین موارد",
  itemPaddingX: "حاشیه داخلی افقی موارد",
  itemPaddingY: "حاشیه داخلی عمودی موارد",
  layoutHorizontalSpacing: "فاصله افقی",
  layoutVerticalSpacing: "فاصله عمودی",
  strokeWidth: "عرض خط",
  offset: "افست",
  offsets: "افست‌ها",
  tooltips: "توضیحات",
  callout: "توضیح",
  markers: "نشانگرها",
  shadow: "سایه",
  blur: "تاری",
  xOffset: "افست X",
  yOffset: "افست Y",
  lineWidth: "عرض خط",
  lineDash: "خط تیره",
  lineDashOffset: "افست خط تیره",
  scrollingZoom: "پیمایش",
  scrollingStep: "مرحله پیمایش",
  selectingZoom: "انتخاب",
  durationMillis: "مدت (میلی‌ثانیه)",
  crosshairLabel: "برچسب",
  crosshairSnap: "نقطه چسبنده",
  normal: "عادی",
  bold: "پررنگ",
  italic: "کج",
  boldItalic: "پررنگ کج",
  predefined: "از پیش تعیین شده",
  fillOpacity: "شفافیت پر کردن",
  strokeColor: "رنگ خط",
  strokeOpacity: "شفافیت خط",
  miniChart: "مینی نمودار",
  histogramBinCount: "تعداد دسته‌ها",
  connectorLine: "خط اتصال",
  seriesItems: "موارد مجموعه داده‌ها",
  seriesItemType: "نوع مورد",
  seriesItemPositive: "مثبت",
  seriesItemNegative: "منفی",
  seriesItemLabels: "برچسب‌های موارد",
  columnGroup: "ستون",
  barGroup: "نوار",
  pieGroup: "دایره‌ای",
  lineGroup: "خط",
  scatterGroup: "X Y (پراکنده)",
  areaGroup: "منطقه",
  polarGroup: "قطبی",
  statisticalGroup: "آماری",
  hierarchicalGroup: "سلسله مراتبی",
  specializedGroup: "تخصصی",
  combinationGroup: "ترکیبی",
  groupedColumnTooltip: "گروهی",
  stackedColumnTooltip: "انباشته",
  normalizedColumnTooltip: "۱۰۰٪ انباشته",
  groupedBarTooltip: "گروهی",
  stackedBarTooltip: "انباشته",
  normalizedBarTooltip: "۱۰۰٪ انباشته",
  pieTooltip: "دایره‌ای",
  donutTooltip: "دونات",
  lineTooltip: "خط",
  groupedAreaTooltip: "منطقه گروهی",
  stackedAreaTooltip: "انباشته",
  normalizedAreaTooltip: "۱۰۰٪ انباشته",
  scatterTooltip: "پراکنده",
  bubbleTooltip: "حباب",
  histogramTooltip: "هیستوگرام",
  radialColumnTooltip: "ستون شعاعی",
  radialBarTooltip: "نوار شعاعی",
  radarLineTooltip: "خط راداری",
  radarAreaTooltip: "منطقه راداری",
  nightingaleTooltip: "نایت‌انگل",
  rangeBarTooltip: "نوار محدوده",
  rangeAreaTooltip: "منطقه محدوده",
  boxPlotTooltip: "نمودار جعبه‌ای",
  treemapTooltip: "نقشه درختی",
  sunburstTooltip: "حلقه‌های خورشید",
  waterfallTooltip: "آبشار",
  heatmapTooltip: "نقشه حرارتی",
  columnLineComboTooltip: "ستون و خط",
  areaColumnComboTooltip: "منطقه و ستون",
  customComboTooltip: "ترکیب سفارشی",
  innerRadius: "شعاع داخلی",
  startAngle: "زاویه شروع",
  endAngle: "زاویه پایان",
  reverseDirection: "برگشت جهت",
  groupPadding: "حاشیه گروه",
  seriesPadding: "حاشیه مجموعه داده‌ها",
  tile: "کاشی",
  whisker: "سبیل",
  cap: "پوشش",
  capLengthRatio: "نسبت طول پوشش",
  labelPlacement: "محل قرارگیری برچسب",
  inside: "داخل",
  outside: "خارج",
  noDataToChart: "داده‌های موجود برای ترسیم نمودار نیست.",
  pivotChartRequiresPivotMode: "نمودار محور نیاز به حالت محوری فعال دارد.",
  chartSettingsToolbarTooltip: "منو",
  chartLinkToolbarTooltip: "پیوند با شبکه",
  chartUnlinkToolbarTooltip: "بدون پیوند از شبکه",
  chartDownloadToolbarTooltip: "دانلود نمودار",
  chartMenuToolbarTooltip: "منو",
  chartEdit: "ویرایش نمودار",
  chartAdvancedSettings: "تنظیمات پیشرفته",
  chartLink: "پیوند با شبکه",
  chartUnlink: "بدون پیوند از شبکه",
  chartDownload: "دانلود نمودار",
  histogramFrequency: "فرکانس",
  seriesChartType: "نوع نمودار مجموعه داده‌ها",
  seriesType: "نوع مجموعه داده",
  secondaryAxis: "محور فرعی",
  seriesAdd: "افزودن یک مجموعه داده",
  categoryAdd: "افزودن یک دسته",
  bar: "نوار",
  column: "ستون",
  histogram: "هیستوگرام",
  advancedSettings: "تنظیمات پیشرفته",
  direction: "جهت",
  horizontal: "افقی",
  vertical: "عمودی",
  seriesGroupType: "نوع گروه",
  groupedSeriesGroupType: "گروه‌بندی‌شده",
  stackedSeriesGroupType: "انباشته",
  normalizedSeriesGroupType: "۱۰۰٪ انباشته",
  legendEnabled: "فعال",
  invalidColor: "مقدار رنگ نامعتبر است",
  groupedColumnFull: "ستون گروه‌بندی‌شده",
  stackedColumnFull: "ستون انباشته",
  normalizedColumnFull: "۱۰۰٪ ستون انباشته",
  groupedBarFull: "نوار گروه‌بندی‌شده",
  stackedBarFull: "نوار انباشته",
  normalizedBarFull: "۱۰۰٪ نوار انباشته",
  stackedAreaFull: "منطقه انباشته",
  normalizedAreaFull: "۱۰۰٪ منطقه انباشته",
  customCombo: "ترکیب سفارشی",

  // ARIA
  ariaAdvancedFilterBuilderItem:
    "${variable}. سطح ${variable}. کلید ENTER را فشار دهید تا ویرایش شود.",
  ariaAdvancedFilterBuilderItemValidation:
    "${variable}. سطح ${variable}. ${variable} کلید ENTER را فشار دهید تا ویرایش شود.",
  ariaAdvancedFilterBuilderList: "لیست سازنده فیلتر پیشرفته",
  ariaAdvancedFilterBuilderFilterItem: "شرط فیلتر",
  ariaAdvancedFilterBuilderGroupItem: "گروه فیلتر",
  ariaAdvancedFilterBuilderColumn: "ستون",
  ariaAdvancedFilterBuilderOption: "گزینه",
  ariaAdvancedFilterBuilderValueP: "ارزش",
  ariaAdvancedFilterBuilderJoinOperator: "عملگر اتصال",
  ariaAdvancedFilterInput: "ورودی فیلتر پیشرفته",
  ariaChecked: "انتخاب شده",
  ariaColumn: "ستون",
  ariaColumnGroup: "گروه ستون",
  ariaColumnFiltered: "ستون فیلتر شده",
  ariaColumnSelectAll: "تغییر انتخاب همه ستون‌ها",
  ariaDateFilterInput: "ورودی فیلتر تاریخ",
  ariaDefaultListName: "لیست",
  ariaFilterColumnsInput: "ورودی فیلتر ستون‌ها",
  ariaFilterFromValue: "فیلتر از مقدار",
  ariaFilterInput: "ورودی فیلتر",
  ariaFilterList: "لیست فیلتر",
  ariaFilterToValue: "فیلتر تا مقدار",
  ariaFilterValue: "مقدار فیلتر",
  ariaFilterMenuOpen: "باز کردن منوی فیلتر",
  ariaFilteringOperator: "عملگر فیلتر کردن",
  ariaHidden: "مخفی",
  ariaIndeterminate: "نامشخص",
  ariaInputEditor: "ویرایشگر ورودی",
  ariaMenuColumn: "ALT+پایین را فشار دهید تا منوی ستون باز شود",
  ariaFilterColumn: "CTRL+ENTER را فشار دهید تا فیلتر را باز کنید",
  ariaRowDeselect: "SPACE را فشار دهید تا این سطر از انتخاب خارج شود",
  ariaRowSelectAll: "SPACE را فشار دهید تا همه سطرها انتخاب/غیرفعال شوند",
  ariaRowToggleSelection: "SPACE را فشار دهید تا انتخاب سطر تغییر یابد",
  ariaRowSelect: "SPACE را فشار دهید تا این سطر انتخاب شود",
  ariaRowSelectionDisabled: "انتخاب سطر برای این سطر غیرفعال است",
  ariaSearch: "جستجو",
  ariaSortableColumn: "ENTER را فشار دهید تا مرتب شود",
  ariaToggleVisibility: "SPACE را فشار دهید تا قابلیت رویت تغییر یابد",
  ariaToggleCellValue: "SPACE را فشار دهید تا مقدار سلول تغییر یابد",
  ariaUnchecked: "انتخاب نشده",
  ariaVisible: "قابل مشاهده",
  ariaSearchFilterValues: "مقادیر فیلتر جستجو",
  ariaPageSizeSelectorLabel: "اندازه صفحه",
  ariaChartMenuClose: "بستن منوی ویرایش نمودار",
  ariaChartSelected: "انتخاب شده",
  ariaSkeletonCellLoadingFailed: "بارگیری ردیف ناموفق بود",
  ariaSkeletonCellLoading: "داده‌های ردیف در حال بارگیری است",

  // ARIA Labels for Drop Zones
  ariaRowGroupDropZonePanelLabel: "گروه‌های ردیفی",
  ariaValuesDropZonePanelLabel: "مقادیر",
  ariaPivotDropZonePanelLabel: "برچسب‌های ستون",
  ariaDropZoneColumnComponentDescription: "برای حذف کلید DELETE را فشار دهید",
  ariaDropZoneColumnValueItemDescription: "برای تغییر نوع تجمع کلید ENTER را فشار دهید",
  ariaDropZoneColumnGroupItemDescription: "برای مرتب‌سازی کلید ENTER را فشار دهید",

  // used for aggregate drop zone, format: {aggregation}{ariaDropZoneColumnComponentAggFuncSeparator}{column name}
  ariaDropZoneColumnComponentAggFuncSeparator: " از ",
  ariaDropZoneColumnComponentSortAscending: "صعودی",
  ariaDropZoneColumnComponentSortDescending: "نزولی",
  ariaLabelDialog: "گفتگو",
  ariaLabelColumnMenu: "منوی ستون",
  ariaLabelColumnFilter: "فیلتر ستون",
  ariaLabelCellEditor: "ویرایشگر سلول",
  ariaLabelSelectField: "انتخاب فیلد",

  // aria labels for rich select
  ariaLabelRichSelectField: "فیلد انتخاب غنی",
  ariaLabelRichSelectToggleSelection: "برای تغییر انتخاب SPACE را فشار دهید",
  ariaLabelRichSelectDeselectAllItems: "برای لغو انتخاب همه موارد DELETE را فشار دهید",
  ariaLabelRichSelectDeleteSelection: "برای لغو انتخاب مورد DELETE را فشار دهید",
  ariaLabelTooltip: "ابزارک",
  ariaLabelContextMenu: "منوی زمینه‌ای",
  ariaLabelSubMenu: "زیرمنو",
  ariaLabelAggregationFunction: "تابع تجمع",
  ariaLabelAdvancedFilterAutocomplete: "تکمیل خودکار فیلتر پیشرفته",
  ariaLabelAdvancedFilterBuilderAddField: "افزودن فیلد جدید به سازنده فیلتر پیشرفته",
  ariaLabelAdvancedFilterBuilderColumnSelectField: "فیلد انتخاب ستون سازنده فیلتر پیشرفته",
  ariaLabelAdvancedFilterBuilderOptionSelectField: "فیلد انتخاب گزینه سازنده فیلتر پیشرفته",
  ariaLabelAdvancedFilterBuilderJoinSelectField: "فیلد انتخاب عملگر پیوستن سازنده فیلتر پیشرفته",

  // ARIA Labels for the Side Bar
  ariaColumnPanelList: "فهرست ستون‌ها",
  ariaFilterPanelList: "فهرست فیلترها",

  // Number Format (Status Bar, Pagination Panel)
  thousandSeparator: ",",
  decimalSeparator: "/",

  // Data types
  true: "درست",
  false: "نادرست",
  invalidDate: "تاریخ نامعتبر",
  invalidNumber: "عدد نامعتبر",
  january: "ژانویه",
  february: "فوریه",
  march: "مارس",
  april: "آوریل",
  may: "مه",
  june: "ژوئن",
  july: "ژوئیه",
  august: "اوت",
  september: "سپتامبر",
  october: "اکتبر",
  november: "نوامبر",
  december: "دسامبر",

  // Time formats
  timeFormatSlashesDDMMYYYY: "روز/ماه/سال",
  timeFormatSlashesMMDDYYYY: "ماه/روز/سال",
  timeFormatSlashesDDMMYY: "روز/ماه/سال",
  timeFormatSlashesMMDDYY: "ماه/روز/سال",
  timeFormatDotsDDMYY: "روز.ماه.سال",
  timeFormatDotsMDDYY: "ماه.روز.سال",
  timeFormatDashesYYYYMMDD: "سال-ماه-روز",
  timeFormatSpacesDDMMMMYYYY: "روز ماه سال",
  timeFormatHHMMSS: "ساعت:دقیقه:ثانیه",
  timeFormatHHMMSSAmPm: "ساعت:دقیقه:ثانیه قبل/بعد از ظهر",
}

export { MESSAGES, VERSIONS, AG_GRID_LOCALE_IR }
