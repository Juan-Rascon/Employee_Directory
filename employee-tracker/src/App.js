import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Employees} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
