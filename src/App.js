import { ApiTrending } from './components/ApiTrending';
import { TrendingProvider } from './context/TrendingContext';

import './style/App.css';

function App() {
    return (
        <TrendingProvider>
            <ApiTrending />
        </TrendingProvider>
    );
}

export default App;
