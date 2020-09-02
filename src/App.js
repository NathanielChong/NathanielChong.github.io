import React from 'react';
import InfoSnippet from './components/infosnippet'
import HomepagePortrait from './components/homepageportrait'
import RedirectionBar from './components/redirectionbar'
import './App.css';

function App() {
  return (
    <div className="App">
    <RedirectionBar/>
      
    <div>
    <HomepagePortrait/>
    <InfoSnippet/>
    </div>

  
    </div>
  );
}

export default App;
