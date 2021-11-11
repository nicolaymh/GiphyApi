import { Api } from './Api';
import './App.css';
import { TrendingProvider } from './context/TrendingContext';

function App() {
    return (
        <TrendingProvider>
            <Api />
        </TrendingProvider>
    );
}

export default App;
