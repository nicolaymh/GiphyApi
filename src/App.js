import { ApiGifs } from './components/ApiGifs';
import { Nav } from './components/Nav';
import { CallApiProvider } from './context/CallApiContext';

import './style/App.css';

function App() {
    return (
        <CallApiProvider>
            <Nav />
            <ApiGifs />
        </CallApiProvider>
    );
}

export default App;
