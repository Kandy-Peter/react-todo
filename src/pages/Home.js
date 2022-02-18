import React from 'react';
import TodoList from '../components/TodoList';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <TodoList />
        </div>
    );
};

export default Home;