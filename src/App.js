import Main from './modules/main';
import Header from './components/header/header';

const ME = 'TinhTuTe'

function App() {
  return (
    <>
      <Header name={ME} />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
