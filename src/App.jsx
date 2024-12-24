import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Page from './pages/Page.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// Пример: замените nav на компонент Navbar из react-bootstrap


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/page1">Posts</Link></li>
                        <li><Link to="/page2">Comments</Link></li>
                        <li><Link to="/page3">Albums</Link></li>
                        <li><Link to="/page4">Photos</Link></li>
                        <li><Link to="/page5">Users</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Page apiUrl="https://jsonplaceholder.typicode.com/posts"/>}/>
                    <Route path="/page1" element={<Page apiUrl="https://jsonplaceholder.typicode.com/posts"/>}/>
                    <Route path="/page2" element={<Page apiUrl="https://jsonplaceholder.typicode.com/comments"/>}/>
                    <Route path="/page3" element={<Page apiUrl="https://jsonplaceholder.typicode.com/albums"/>}/>
                    <Route path="/page4" element={<Page apiUrl="https://jsonplaceholder.typicode.com/photos"/>}/>
                    <Route path="/page5" element={<Page apiUrl="https://jsonplaceholder.typicode.com/users"/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
};

export default App;
