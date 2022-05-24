import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from "./components/appRouter/AppRouter";
import { Navigation } from "./components/nav/Nav";
import { Footer } from './components/footer/Footer';

export const App = () => {
  return (
    <>
    <Router>
      <Navigation />
      <AppRouter></AppRouter>
      <Footer />
    </Router>
    </>
  );
}
