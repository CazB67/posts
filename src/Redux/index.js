import store from "./store/index";
import { validateName } from "./actions/index";

window.store = store;
window.validateName = validateName;