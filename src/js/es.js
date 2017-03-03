import moment from 'moment/src/moment';
// import 'moment/locale/fr';
// moment.locale('fr');

class Javascript {
  constructor() {
    this.version = 6;
  }

  static about() {
    const version = 6;
    const today = moment().format('DD/MM/YYYY h:mm:ss a');
    console.info(`Es ${version} is awesome to say hello at ${today}`);
  }
}


export default class Message extends Javascript {
  constructor(text, language) {
    super();
    this.message = text;
    this.language = language;
    this.babel = true;
    this.display();
    Message.about();
  }
  display() {
    return `Le message est  ${this.message.trim()} `;
  }
  static about() {
    const version = 6;
    const today = moment().format('DD/MM/YYYY h:mm:ss a');
    console.info(`Es ${version} is awesome to say hello at ${today}`);
  }
}
