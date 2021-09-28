import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creactors/index';

const CardEditing = ({text, id, setIsCardEditing}) => {

  const dispatch = useDispatch();
  const {editCard, deleteCard} = bindActionCreators(actionCreators, dispatch); 
  const [newData, setNewData] = useState(text);

  const { TextArea } = Input;

  const handleTextChange = (evt) => {
    setNewData(evt.target.value);
  }

  const onClickSave = () => {
    editCard({id, newData});
    setIsCardEditing(false);
  }
  
  const onClickRemove = () => {
    deleteCard(id);
    setIsCardEditing(false);
  }

  return (
    <>
      <TextArea value={newData} onChange={handleTextChange}/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button type="primary" ghost onClick={onClickSave}>Save</Button>
        <Button danger onClick={onClickRemove}>Remove</Button>
      </div>
    </>
  );
};

export default CardEditing;