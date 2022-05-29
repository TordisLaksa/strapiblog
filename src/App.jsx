import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from "./components/appRouter/AppRouter";
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <AppRouter></AppRouter>
      <Footer />
    </Router>
    </>
  );
}
