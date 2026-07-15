import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ApplicationsPage from './pages/ApplicationsPage'
import QualityPage from './pages/QualityPage'
import ManufacturingPage from './pages/ManufacturingPage'
import SustainabilityPage from './pages/SustainabilityPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="quality-certifications" element={<QualityPage />} />
          <Route path="manufacturing" element={<ManufacturingPage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
