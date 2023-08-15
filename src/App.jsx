import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from './firebase/messaging_in_init_sw';
import { useEffect } from 'react';

function App() {
  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(messaging, { vapidKey: 'BLFq6Hgz10Q7iZI-VznYe3RhMIs3rMy44sAdtg2ycdphioZXrX-nIYDsvu1czQNAerEbAuzEmUF_lRbIdwr5RJI' }).then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
      }
      else {
        console.log('Do not have permission');
      }
    })
  }

  useEffect(() => {
    requestPermission()
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
    });
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
