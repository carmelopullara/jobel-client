import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo-hooks';
import { useTranslation } from 'react-i18next';
import { Flex, Container, Loading, AuthBlock, Alert, Card } from '@jobel/ui';
import { CHECK_TOKEN } from 'schema/user';
import { Logo } from '@jobel/ui';
import ResetForm from './ResetForm';

const Reset = ({ match }) => {
  const { token } = match.params;
  const { t } = useTranslation();
  const { error, loading } = useQuery(CHECK_TOKEN, {
    variables: {
      token,
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" fullHeight>
        <AuthBlock>
          <Logo />
          {error ? (
            <Alert danger center>
              {t(error.graphQLErrors[0].message)}
            </Alert>
          ) : (
            <Card>
              <Card.Header>
                <h5>{t('password.reset.title')}</h5>
              </Card.Header>
              <Card.Body>
                <ResetForm token={token} />
              </Card.Body>
            </Card>
          )}
        </AuthBlock>
      </Flex>
    </Container>
  );
};

Reset.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reset;
