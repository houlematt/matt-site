/*
 * ResumePage Messages
 *
 * This contains all the text for the ResumePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'boilerplate.containers.Resume.header',
    defaultMessage: 'Skills and Experience',
  },
  topSkillsHeader: {
    id: 'boilerplate.containers.ResumePage.topSkills.header',
    defaultMessage: 'I have the most experience building applications with',
  },
  topSkillsMessage: {
    id: 'boilerplate.containers.ResumePage.topSkills.message',
    defaultMessage: `Node, MongoDB, RabbitMQ, MySQL, Angular, Memcached, LESS, Jasmine, Jade`,
  },
  ciHeader: {
    id: 'boilerplate.containers.ResumePage.ci.header',
    defaultMessage: 'For CI/CD and development efficiency, I\'ve used',
  },
  ciMessage: {
    id: 'boilerplate.containers.ResumePage.ci.message',
    defaultMessage: `
      Git, Jenkins, Puppet, Grunt, SVN, TravisCI, puppet
    `,
  },
  monitoringHeader: {
    id: 'boilerplate.containers.ResumePage.monitoring.header',
    defaultMessage: 'I like to know what my software is doing in production, for that I use',
  },
  monitoringMessage: {
    id: 'boilerplate.containers.ResumePage.monitoring.message',
    defaultMessage: `
      StatsD, Grafana, Kibana, OpsGenie, Sensu, Segment
    `,
  },
  learningHeader: {
    id: 'boilerplate.containers.ResumePage.learning.header',
    defaultMessage: 'I love learning new things, for me right now that\'s ...',
  },
  learningMessage: {
    id: 'boilerplate.containers.ResumePage.learning.message',
    defaultMessage: `
      AWS, EC2, Dynamo, devops, React, terraform / infrastructure as code 
    `,
  },
  javascriptHeader: {
    id: 'boilerplate.containers.ResumePage.javascript.header',
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    id: 'boilerplate.containers.ResumePage.javascript.message',
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    id: 'boilerplate.containers.ResumePage.css.header',
    defaultMessage: 'Features',
  },
  cssMessage: {
    id: 'boilerplate.containers.ResumePage.css.message',
    defaultMessage: 'Next generation CSS',
  },
  routingHeader: {
    id: 'boilerplate.containers.ResumePage.routing.header',
    defaultMessage: 'Industry-standard routing',
  },
  routingMessage: {
    id: 'boilerplate.containers.ResumePage.routing.message',
    defaultMessage: `
      Write composable CSS that's co-located with your components for
    complete modularity. Unique generated class names keep the
    specificity low while eliminating style clashes. Ship only the
    styles that are on the page for the best performance.
    `,
  },
  networkHeader: {
    id: 'boilerplate.containers.ResumePage.network.header',
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    id: 'boilerplate.containers.ResumePage.network.message',
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
  intlHeader: {
    id: 'boilerplate.containers.ResumePage.internationalization.header',
    defaultMessage: 'Complete i18n Standard Internationalization & Pluralization',
  },
  intlMessage: {
    id: 'boilerplate.containers.ResumePage.internationalization.message',
    defaultMessage: 'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.',
  },
});
