import React from 'react';
import NDISHeader from '../components/ndis/ndisHeader';
import NdisCardsSection from '../components/ndis/ndisCardsSection';
import NdisTheoryContent from '../components/ndis/ndisTheoryContent';


const NDIS = () => {
  return (
    <div>
     <NDISHeader/>
     <NdisTheoryContent/>

     <NdisCardsSection/>

    </div>
  );
};

export default NDIS;
