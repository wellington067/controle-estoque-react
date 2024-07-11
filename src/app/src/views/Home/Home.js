import React from 'react';
import FormComponent from '../../components/forms/Form';
import Header from '../../components/header/Header';
function Home() {
  return (
    <>
     <Header />
      <div style={{ marginTop: '100px' }}>
        <FormComponent />
      </div>
    </>
  );
}

export default Home;
