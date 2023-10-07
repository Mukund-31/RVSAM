import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import PostPage from './PostPage';
import homeIcon from './homeicon.png';
import postIcon from './posticon.png';

const App = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const switchToPostPage = () => {
        setCurrentPage('postPage');
    };

    const switchToDashboard = () => {
        setCurrentPage('dashboard');
    };

    return (
        <div>
            {currentPage === 'dashboard' && <Dashboard  />}
            {currentPage === 'postPage' && <PostPage switchToDashboard={switchToDashboard} />}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
