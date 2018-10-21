'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('name', { type: String, required: true, desc: 'Name of the mod' });
    this.argument('tests', { type: Boolean, required: true, desc: 'Whether to generate a test project or not'});
  }
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like the mod to be named?'
      },
      {
        type: 'input',
        name: 'version',
        message: 'What version would you like to start at?',
        validate: () => {
          return true;
        }
      },
      {
        type: 'checkbox',
        name: 'tests',
        message: 'Would you like to create a project for unit tests?',
        choices: ["Yes", "No"]
      }
    ];

    return this.prompt(prompts).then(result => {
      this.name = result.name;
      this.tests = result.tests;
    });
  }
  buildSolution() {
    this.log('building .sln');
  }
  buildProject() {
    this.log('building .csproj');
  }
};
