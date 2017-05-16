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
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class ResumePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Resume"
          meta={[
            { name: 'description', content: 'Skills and experience' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.topSkillsHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.topSkillsMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.ciHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.ciMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.monitoringHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.monitoringMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.learningHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.learningMessage} />
            </p>
          </ListItem>
        </List>
      </div>
    );
  }
}
