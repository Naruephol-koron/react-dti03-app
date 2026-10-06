import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' แนะนำให้ลยทิ้งหรือ Comment ตั้งแต่แรกเพราะจะแต่งสวยเอง
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
