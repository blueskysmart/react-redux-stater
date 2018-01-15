import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import GridListExampleSimple from './components/profile/Technical';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="profit" component={GridListExampleSimple} />
    </Route>
);