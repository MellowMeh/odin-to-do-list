import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';

toggleDarkMode();
changeDisplayedTheme();
storageAvailable();