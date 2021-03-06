export const types = {
  CHANGE_DEFAULT_CURRENCY: "CHANGE_DEFAULT_CURRENCY",
  ADD_CURRENCY: "ADD_NEW_CURRENCY",
  FETCH_EXCHANGE_RATES: "FETCH_EXCHANGE_RATES",
  EDIT_TOTAL_VALUE: "EDIT_TOTAL_VALUE",
  ASCENDING_CURRENCY_ORDER: "ASCENDING_CURRENCY_ORDER",
  DESCENDING_CURRENCY_ORDER: "DESCENDING_CURRENCY_ORDER",
  DELETE_CURRENCY: "DELETE_CURRENCY",
  EDIT_CURRENCY: "EDIT_CURRENCY",
  EDIT_CURRENCIES_VALUES: "EDIT_CURRENCIES_VALUES"
};

export const signs = {
  PLN: "zł",
  USD: "$",
  CAD: "$",
  AUD: "$",
  EUR: "€",
  GBP: "£",
  CHF: "fr",
  CNY: "¥",
  JPY: "¥",
  KRW: "₩"
};

export const URL = "https://api.exchangeratesapi.io";
export const regex = /^[1-9][0-9]{0,9}(\.[0-9]{1,2})?$/;
