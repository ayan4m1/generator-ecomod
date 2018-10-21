import { Base } from 'yeoman-generator';

export default class EcoGenerator extends Base {
  constructor(...args) {
    super(...args);
    this.argument('test');

    // Configure Lodash templating so it ignores interpolation markers in
    // ES6 template strings.
    this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;
  }

  test() {
    console.log(`Testing ${this.test}`);
  }
}
