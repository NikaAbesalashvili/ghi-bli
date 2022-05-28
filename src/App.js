import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Films from './pages/Films/Films';
import Film from './pages/Films/Film/Film';

function App() {

    return (
            <div className="App">
                <Routes>
                    <Route path='/films' element={<Films/>} />
                    <Route path='/films/:filmId' element={<Film />} />
                </Routes>
            </div>
    );
};

export default App;
