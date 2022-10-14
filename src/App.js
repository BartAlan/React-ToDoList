import './App.css';
import Todo from './components/Todo';
import Header from './components/layout/Header';

function App({theme,setTheme}) {
  return (
    <div className="App" data-theme="light">
      <Header 
      theme={theme}
      setTheme={setTheme}
      />
      <main className='main'>
        <Todo />
      </main>
    </div>
  );
}

export default App;