import React from 'react';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MyList  from '../app/mylist/MyList';
import Main from '../app/main/Main';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </Router>
  );
};
