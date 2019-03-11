import React, { useContext } from 'react';
import { UserContext } from 'context';
import { Flex } from 'styled/layout';
import { AuthBlock, AuthHeader, Alert } from 'styled/common';
import Logo from 'components/shared/Logo';
import NewCompanyForm from './NewCompanyForm';

const NewCompany = () => {
  const { state: { currentUser } } = useContext(UserContext);

  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <AuthBlock>
        <AuthHeader>
          <Logo />
          <>
            <h5>
              {currentUser.firstName}
              {' '}
              {currentUser.lastName}
            </h5>
            <p>{currentUser.email}</p>
          </>
          <Alert warning>Awesome! Now tell us about your company.</Alert>
        </AuthHeader>
        <NewCompanyForm />
      </AuthBlock>
    </Flex>
  );
};

export default NewCompany;
