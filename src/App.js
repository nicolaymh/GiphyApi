import { ApiTrending } from './components/ApiTrending';
import { Nav } from './components/Nav';
import { TrendingProvider } from './context/TrendingContext';

import './style/App.css';

function App() {
    return (
        <TrendingProvider>
            <Nav />
            <ApiTrending />
        </TrendingProvider>
    );
}

export default App;
