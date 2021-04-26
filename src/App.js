import './App.css';
import Rating from './components/Rating';
import SENTIMENT_ANALYSIS from './components/Sentiment_Analysis';
import Sidebar from './components/Sidebar';
import WEBSITE_VISITORS from './components/Website_Visitors';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="wrapper">
      
      <div className="sidebar">
        <Sidebar/>
      </div>

      <div className="reviews">
        <Reviews/>
      </div>

      <div className="rating">
        <Rating/>
      </div>

      <div className="analysis">
        <SENTIMENT_ANALYSIS/> 
      </div>

      <div className="visitors">
        <WEBSITE_VISITORS/> 
      </div>
    </div>
  );
}

export default App;
