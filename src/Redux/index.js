import store from "./store/index";
import { validateName, getData } from "./actions/index";

window.store = store;
window.validateName = validateName;
window.getData = getData