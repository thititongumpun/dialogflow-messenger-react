import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <df-messenger
          intent="WELCOME"
          chat-title="บอทร้านข้าวต้ม"
          agent-id="015cb695-64c9-4c09-ae05-61d2c50519a1"
          language-code="th"
        ></df-messenger>
      </header>
    </div>
  );
}

export default App;
