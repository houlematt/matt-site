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
import ListItemBody from './ListItemBody';

export default class SkillsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Skills"
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
            <ListItemBody>
              <FormattedMessage {...messages.topSkillsMessage} />
            </ListItemBody>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.ciHeader} />
            </ListItemTitle>
            <ListItemBody>
              <FormattedMessage {...messages.ciMessage} />
            </ListItemBody>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.monitoringHeader} />
            </ListItemTitle>
            <ListItemBody>
              <FormattedMessage {...messages.monitoringMessage} />
            </ListItemBody>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.learningHeader} />
            </ListItemTitle>
            <ListItemBody>
              <FormattedMessage {...messages.learningMessage} />
            </ListItemBody>
          </ListItem>
        </List>
      </div>
    );
  }
}
