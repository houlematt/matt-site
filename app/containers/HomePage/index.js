/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import A from 'components/A';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Personal Site of Matt Houle' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.homePageHeader} />
            </H2>
          </CenteredSection>
          <Section>
            <p>
              <FormattedMessage {...messages.introMessage} />
            </p>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
            <p>
              <FormattedMessage {...messages.manifestoMessage} 
                          values={{
                              principles:<A target="_blank" href="https://www.amazon.jobs/principles" target="new">Leadership</A>
                          }} />
            </p>
          </Section>
        </div>
      </article>
    );
  }
}

export default (HomePage);
