import { ApiTrending } from './components/ApiTrending';
import { Nav } from './components/Nav';
import { CallApiProvider } from './context/CallApiContext';

import './style/App.css';

function App() {
    return (
        <CallApiProvider>
            <Nav />
            <ApiTrending />
        </CallApiProvider>
    );
}

export default App;
