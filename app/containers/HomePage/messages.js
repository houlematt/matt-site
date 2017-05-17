/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  homePageHeader: {
    id: 'boilerplate.containers.HomePage.greeting.header',
    defaultMessage: 'Welcome to the personal website of Matt Houle',
  },
  introMessage: {
    id: 'boilerplate.containers.HomePage.intro.message',
    defaultMessage: 'I\'m a software engineer with a passion for seeing people use what I build. I currently work at Meltwater. I plan to share some of the things I work on here. Feel free to look around and send me a message.',
  },
  startProjectMessage: {
    id: 'boilerplate.containers.HomePage.intro.message',
    defaultMessage: 'I started this web site as a way to experiment with some tech that I haven\'t been able to use in my 9-5 job, namely React and Heroku. Apologies if things seem unpolished, they wont be like that for very long.',
  },
  manifestoMessage:{
    id: 'boilerplate.containers.HomePage.intro.manifesto',
    defaultMessage: 'I\'m a big fan of Amazon\'s {principles} principles, especially their "Bias For Action". Putting working software in front of actual users is what I love most about what I do.'
  }
});
