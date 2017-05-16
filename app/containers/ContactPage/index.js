/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import Section from './Section';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'contact information' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Section>
          <FormattedMessage {...messages.linkedIn} />
          <a class="LI-simple-link" href='https://www.linkedin.com/in/matt-houle'> Matt Houle</a>
        </Section>
        <Section>
          <FormattedMessage {...messages.github} />
          <a class="LI-simple-link" href='https://github.com/houlematt'> houlematt</a>
        </Section>
      </div>
    );
  }
}
