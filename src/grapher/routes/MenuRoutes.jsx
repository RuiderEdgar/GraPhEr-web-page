import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, Ejercicios } from "../pages"
import { Navbar } from "../../ui/components"

export const MenuRoutes = () => {
  return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route path="/homepage" element={<HomePage/>} />
					<Route path="/ejercicios" element={<Ejercicios/>} />
					{/* <Route path="/menu/home" element={<h1>Home</h1>} />
					<Route path="/menu/about" element={<h1>About</h1>} />
					<Route path="/menu/contact" element={<h1>Contact</h1>} /> */}
					<Route path="/" element={ <Navigate to="/homepage"/>} />
				</Routes>
			</div>
    </>

  )
}
