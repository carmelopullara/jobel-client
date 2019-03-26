import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flex, Container } from 'styled/layout';
import { AuthBlock } from 'styled/common';
import Card from 'styled/card';
import ForgotForm from './ForgotForm';
import Logo from 'components/shared/Logo';

const Forgot = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" fullHeight>
        <AuthBlock>
          <Logo />
          <Card>
            <Card.Header>
              <h5>{t('password.forgot.title')}</h5>
            </Card.Header>
            <Card.Body>
              <ForgotForm />
            </Card.Body>
            <Card.Footer>
              <p>
                <Link to="/login">
                  <strong>{t('password.forgot.return')}</strong>
                </Link>
              </p>
            </Card.Footer>
          </Card>
        </AuthBlock>
      </Flex>
    </Container>
  );
};

export default Forgot;
