import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Films from './pages/Films/Films';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/films' element={<Films/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
