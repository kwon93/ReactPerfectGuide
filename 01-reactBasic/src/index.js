import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 유저 인터페이스가 어떻게 배치되어야 하는지 ReactDOM이 React에게 알려준다.
root.render(<App />);
