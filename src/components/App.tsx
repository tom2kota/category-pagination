import React from 'react';
import './App.css';
import {Pagination} from "./Pagination";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p style={{display: "none"}}>
                    Category Pagination &nbsp;
                    <a
                        className="App-link"
                        href="https://www.dropbox.com/s/j59prvcaf7ldv2a/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80.mov?dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Video Sample)
                    </a>
                </p>

                <Pagination/>
            </header>

        </div>
    );
}

export default App;
