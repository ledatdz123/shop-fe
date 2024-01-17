import '@/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((router, index) => {
                        const Page = router.component;
                        return <Route key={index} path={router.path} element={<Page />}></Route>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
