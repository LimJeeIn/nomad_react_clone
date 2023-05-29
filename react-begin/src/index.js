import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './7.ToDoList/App_todo2';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
