import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage}
                          values={{
                              reactUrl: <A target="_blank" href="https://github.com/react-boilerplate">React</A>,
                              herokuUrl: <A target="_blank" href="https://www.heroku.com/">Heroku</A>,
                            }} />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://www.linkedin.com/in/matt-houle/">Matt Houle</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
