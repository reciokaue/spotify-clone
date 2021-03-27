import React from 'react';

import { Container } from './styles';
import { usePage } from '../../context/PageContext';
import Home from '../Home';
import Navigate from '../Navigate';
import Radio from '../Radio';

const PageWrapper: React.FC = () => {
  const { page } = usePage()
  
  function ActualPage(){
    if( page === 'home'){
      return <Home/>
    }else if( page === 'navi'){
      return <Navigate/>
    }else{
      return <Radio/>
    }
  }

  return (
    <Container>
      {ActualPage()}
    </Container>
  );
};

export default PageWrapper;
