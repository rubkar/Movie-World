import './App.css';
import { SearchMovies } from './features/searchMovies/SearchMovies';

const App = () => {
  return (
    <div className="app">
      <h1>Movie World</h1>
      <SearchMovies />
    </div>
  );
};

export default App;
