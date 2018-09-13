import { renderReact } from 'hypernova-react';
import MyComponent from './MyComponent';

export default renderReact(
  'MyComponent.hypernova.js', // this file's name (or really any unique name)
  MyComponent,
);
