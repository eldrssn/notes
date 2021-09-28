import { Card } from 'antd';
import React, { useState } from 'react';
import CardEditing from './CardEditing';

const CardContainer = ({text, id}) => {

  const [isCardEditing, setIsCardEditing] = useState(false);
  
  return ( 
    <>
      {isCardEditing 
        ? 
        <CardEditing text={text} id={id} setIsCardEditing={setIsCardEditing} />
        : 
        <Card style={{wordWrap: 'break-word'}} onClick={() => setIsCardEditing(true)}>{text}</Card> 
      }
    </>
  );
};

export default CardContainer;