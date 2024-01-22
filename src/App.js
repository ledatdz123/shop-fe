import '@/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import React from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((router, index) => {
                        let LayOut = DefaultLayout;
                        if (router.layout) {
                            LayOut = router.layout;
                        } else if (router.layout === null) {
                            LayOut = React.Fragment;
                        }
                        const Page = router.component;
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <LayOut>
                                        <Page />
                                    </LayOut>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
