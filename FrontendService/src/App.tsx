import React from 'react';
import logo from './assets/logo.svg';
import {Text} from 'react-native-web';
import { useState } from 'react';
import './App.css';

const labels = [
  { text: 'HOME', degree: -70 },
  { text: 'ISSUES', degree: -90 },
  { text: 'PROJECTS', degree: -110 },

  { text: 'GALLERY', degree: 70 },
  { text: 'EVENTS', degree: 90 },
  { text: 'ABOUT', degree: 110 },
];

function App() {

    const [rotation, setRotation] = useState(0);

    return (
        <div className="App">
            <div className="circle-layout">
                <div className="element" style={{ transform: `rotate(${rotation}deg)` }}>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                {labels.map((label, index) => (
                    <div
                        key={label.text}
                        className={`label label-${index + 1}`}
                        onClick={() => setRotation(label.degree)}
                    >
                        <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontWeight: '600',
                            fontSize: 32,
                        }}
                        >
                        {label.text}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;