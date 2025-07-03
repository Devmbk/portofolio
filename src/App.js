
import './App.css';
import Banner from './components/banner/banner';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import ProjectSection from './components/project/project';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <ProjectSection/>
     <Contact />
    </div>
  );
}

export default App;
