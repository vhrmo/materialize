import { create } from '@storybook/theming';

import logo from './materialize.svg';

export const lightTheme = create({
  base: 'light',
  brandTitle: 'Materialize Web',
  brandUrl: 'https://materializeweb.com/',
  // brandImage: './materialize.svg',
  brandImage: logo,
  brandTarget: '_self',
});
