import { useState, useEffect } from "react";
import {
  Main,
  About,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    // Light mode by default; remember the visitor's choice.
    const [mode, setMode] = useState<string>(() => {
        try {
            return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
        } catch {
            return 'light';
        }
    });

    const handleModeChange = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    useEffect(() => {
        try {
            localStorage.setItem('theme', mode);
        } catch {
            // storage unavailable (e.g. private mode): ignore
        }
        document.querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', mode === 'dark' ? '#0d1116' : '#f8f9fa');
    }, [mode]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <About/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;