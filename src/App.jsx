import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HospitalCRUD from './resourses/hospitals/pages/hospitalCrud'
import ServiceCRUD from './resourses/services/pages/serviceCRUD'

function App() {

  return <Router>
    <Routes>

      <Route
        path="/hospitales"
        element={<HospitalCRUD />}
      />

      <Route
        path="/servicios"
        element={<ServiceCRUD />}
      />
      
    </Routes>
  </Router>
}

export default App
