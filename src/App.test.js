import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AboutUs from './components/core/AboutUs';


describe('unit test', () => {
  // test('renders AboutUs.jsx', () => {
  //   render(
  //     <AboutUs />
  //   );
  // });

  test('renders App.jsx', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
