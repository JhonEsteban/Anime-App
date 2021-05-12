import '../assets/styles/App.scss';
import logo from '../assets/images/logo.png';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <img src={logo} alt='React Logo' />
      <div className='hero'></div>
    </div>
  );
};

export default App;
