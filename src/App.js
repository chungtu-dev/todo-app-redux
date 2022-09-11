import { Typography, Divider, Button } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>What i'm doing</Title>
      <Filters />
      <Divider />
      <TodoList />
      <Button
        href='https://nctcv.netlify.app/'
        style={{backgroundColor: '#4376a0', color: 'white', fontWeight: 'bold', cursor: 'pointer'}}
        >
        Review My Curriculum Vitae
      </Button>
    </div>
  );
}

export default App;
