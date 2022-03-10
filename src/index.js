import * as components from './components/index.js';

const install = (Vue) => {
	Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

/**
 * It export all initialized Vue.component()
*/
export default install;
/**
 * For once import usage you can save this line, it will access to import as:
 * import { MyComponent } from 'your-package';
*/
export * from './components/index.js';