import store from "./store/index";
import { validateName, getData, chooseColor } from "./actions/index";

window.store = store;
window.validateName = validateName;
window.getData = getData;
window.chooseColor = chooseColor;