import type { RootLayoutFn } from './types';
import './_private/styles/index.css';

const RootLayout: RootLayoutFn = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
