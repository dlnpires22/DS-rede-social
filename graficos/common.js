const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  export {getCSS}
  import { getCSS } from "./common.js";
  