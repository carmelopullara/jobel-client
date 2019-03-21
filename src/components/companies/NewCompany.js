import React, { useContext } from 'react';
import { UserContext } from 'context';
import { Flex } from 'styled/layout';
import { AuthBlock, Alert } from 'styled/common';
import Card from 'styled/card';
import Logo from 'components/shared/Logo';
import NewCompanyForm from './NewCompanyForm';

const NewCompany = () => {
  const {
    state: { currentUser },
  } = useContext(UserContext);

  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <AuthBlock>
        <Logo />
        <Card>
          <Card.Header>
            <>
              <h5>
                {currentUser.firstName}
                {' '}
                {currentUser.lastName}
              </h5>
              <p>{currentUser.email}</p>
            </>
          </Card.Header>
          <Card.Body>
            <Alert warning>Awesome! Now tell us about your company.</Alert>
            <NewCompanyForm />
          </Card.Body>
        </Card>
      </AuthBlock>
    </Flex>
  );
};

export default NewCompany;
