import 'css/App.css';
import { Route, Routes } from 'react-router-dom';
import Visits from 'components/Visits';

export default function App() {
  return (
    <Routes>
      <Route exact path="/visits" element={<Visits />} />
    </Routes>

  );
}
