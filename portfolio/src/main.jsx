
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer/> {/* for alerts or notifications */}
  </>

)
