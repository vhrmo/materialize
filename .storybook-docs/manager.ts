import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
// import {lightTheme} from './themes.js';

themes.light.brandTitle = 'Materialize Web';
themes.dark.brandTitle = 'Materialize Web dark';


addons.setConfig({
  // theme: lightTheme,
  showToolbar: false,
  // brandTitle: 'Materialize Web',
  // brandUrl: 'https://materializeweb.com/',
  // brandImage: './materialize.svg',

  toolbar: {
    // You can explicitly control what appears in the toolbar
    // This doesn't always control "Configure" if it's from an addon
  },
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: false,
});
