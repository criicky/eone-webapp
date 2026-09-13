import React from 'react';
import logo from './assets/logo.svg';
import {Text} from 'react-native-web';
import { useState } from 'react';
import './App.css';

const labels = [
  { text: 'ISSUES', degree: -70 },
  { text: 'PROJECTS', degree: -90 },
  { text: 'EVENTS', degree: -110 },

  { text: 'SELECTED', degree: 70 },
  { text: 'NEURAL', degree: 90 },
  { text: 'ABOUT', degree: 110 },
];

function App() {

    const [rotation, setRotation] = useState(0);

    const rotateTo = (target: number) => {
        setRotation((current) => {
            const difference = ((target - current + 540) % 360) - 180;

            return current + difference;
        });
    };

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
                        onClick={() => rotateTo(label.degree)}
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