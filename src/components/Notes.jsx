import React from 'react';
import { List } from 'antd';
import CardContainer from './CardContainer';

const Notes = ({filteredNotes}) => {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={filteredNotes}
      renderItem={item => (
        <List.Item>
          <CardContainer text={item.text} id={item.id}/>
        </List.Item>
      )}
    />
  );
};

export default Notes;