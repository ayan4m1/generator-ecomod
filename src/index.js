const Generator = require('yeoman-generator');

export default class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
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

    this.answers = await this.prompt(prompts);
    console.dir(this.answers);
  }

  buildSolution() {
    this.log('building .sln');
  }

  buildProject() {
    this.log('building .csproj');
  }
}
