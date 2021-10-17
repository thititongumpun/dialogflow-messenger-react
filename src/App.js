import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { 
Header,
AppTitle,
Footer,
Name,
Rotate } from './styled';

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
      <Header>
        <AppTitle>Chatbot ร้านข้าวต้ม</AppTitle>
      </Header>
        <header className="App-header">
          <Rotate>{logo}</Rotate>
          <df-messenger
            intent="WELCOME"
            chat-title="บอทร้านข้าวต้ม"
            agent-id="015cb695-64c9-4c09-ae05-61d2c50519a1"
            language-code="th"
          ></df-messenger>
        </header>
      <Footer>
        <Name>Thiti Tongumpun 6307011858209</Name>  
      </Footer>
    </div>
  );
}

export default App;
