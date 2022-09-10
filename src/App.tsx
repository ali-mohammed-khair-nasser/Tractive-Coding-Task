import React from 'react';
import TractiveVideo from 'components/TractiveVideo/TractiveVideo';
import 'assets/scss/main.scss';

// Change this URL if you want to play any other video
const VIDEO_URL = 'https://tractive.com/assets/static/videos/ActivityMonitoring_15s_EN.mp4';

const App = () => {
  return (
    <div className="App">
      <TractiveVideo src={ VIDEO_URL } />
    </div>
  );
};

export default App;
