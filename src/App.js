import { Col, Divider } from 'antd';
import Header from './components/Header';
import 'antd/dist/antd.css';
import { useMemo, useState } from 'react';
import AddCard from './components/AddCard';
import { useSelector } from 'react-redux';
import SearchCard from './components/SearchCard';
import Notes from './components/Notes';


function App() {

  const notes = useSelector(state => state)
  const [searchValue, setSearchValue] = useState('');

  const filteredNotes = useMemo(() => notes
    .slice()
    .filter(card => card.text.toLowerCase().includes(searchValue.toLowerCase())), 
    [searchValue, notes]
  )

  return (
    <Col span={12} offset={6}>
      <Header />
      <SearchCard setSearchValue={setSearchValue} />
      <Divider />
      <Notes filteredNotes={filteredNotes} />
      <AddCard />
    </Col>
  );
}

export default App;
