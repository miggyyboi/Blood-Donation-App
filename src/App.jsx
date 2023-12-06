import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './components/Data';
import Form from './components/Form';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Form />} />
          <Route index path="data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
