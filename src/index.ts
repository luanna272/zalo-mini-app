import 'locales';

import 'swiper/css';
import 'swiper/css/pagination';

// ZMP UI css
import 'zmp-ui/zaui.css';

// Tailwind CSS
import './styles/tailwind.css';

// Custom scss
import './styles/app.scss';

// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import App Component
import App from './app';
import appConfig from '../app-config.json';

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById('app')!);
root.render(React.createElement(App));
