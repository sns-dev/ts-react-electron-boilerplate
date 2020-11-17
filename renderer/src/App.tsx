import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { IpcRenderer } from "electron";
import logo from "./logo.svg";
import "./App.css";
const electron = window.require("electron");

const ipcRenderer: IpcRenderer = electron.ipcRenderer;

function App() {
  const sendSampleEvent = () => {
    return ipcRenderer.send("sample-event");
  };

  return (
    <Router>
      <Route exact path="/">
        <div className="App" onClick={sendSampleEvent}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Route>
    </Router>
  );
}

export default App;
