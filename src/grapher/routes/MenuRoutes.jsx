import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage,Teoria, AcercaDe, Descargar, Documentacion, Novedades, Contribuir } from "../pages"
import { Navbar, Footer } from "../../ui/components"

export const MenuRoutes = () => {
  return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route path="/homepage" element={<HomePage/>} />
					<Route path="/teoria" element={<Teoria/>} />
					<Route path="/acercade" element={<AcercaDe/>} />
					<Route path="/descargar" element={<Descargar/>} />
					<Route path="/documentacion" element={<Documentacion/>} />
					<Route path="/novedades" element={<Novedades/>} />
					<Route path="/contribuir" element={<Contribuir/>} />
					<Route path="/" element={ <Navigate to="/homepage"/>} />
				</Routes>
			</div>

			<Footer />
    </>

  )
}
