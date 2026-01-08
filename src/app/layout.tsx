import './_private/styles/index.css';

import type { RootLayoutFn } from './types';

const RootLayout: RootLayoutFn = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
