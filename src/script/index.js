import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detectLocalStorage';

toggleDarkMode();
changeDisplayedTheme();
storageAvailable();