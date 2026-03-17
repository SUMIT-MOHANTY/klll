import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Example placeholder - actual routes are defined in routes.tsx */}
      {routes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;
