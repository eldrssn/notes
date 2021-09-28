import React, { useState } from 'react';
import { Button, Col, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creactors/index';

const AddCard = () => {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const {addCard} = bindActionCreators(actionCreators, dispatch); 
  const [textCard, setTextCard] = useState('');

  const handleTextChange = (evt) => {
    setTextCard(evt.target.value);
  }

  const onClickAdd = () => {
    addCard({
      id: Date.now(),
      text: textCard
    });
    setTextCard('');
  }

  return (
    <Col span={12}>
      <TextArea 
        placeholder="write here" 
        name='text' 
        value={textCard} 
        allowClear 
        onChange={handleTextChange} 
      />
        <br />
        <br />
      <Button 
        type="primary" 
        disabled={textCard ? false : true} 
        onClick={onClickAdd} 
        block
      >
        Add Card
      </Button>
    </Col>
  );
};

export default AddCard;