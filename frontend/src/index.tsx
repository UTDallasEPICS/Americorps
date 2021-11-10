import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const functionTest = async() => {
  const db = getFirestore();

  const docRef = collection(db,'users');
  const q = query(docRef, where("password", "==", "12345"));
  let a = await getDocs(q);
  a.forEach(q => {
    console.log(q.data())
  })
}

functionTest()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
