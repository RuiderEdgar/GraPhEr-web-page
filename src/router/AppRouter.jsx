import { Route, Routes } from "react-router-dom";
import { MenuRoutes } from "../grapher/routes/MenuRoutes";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MenuRoutes />} />

      </Routes>
    </>
  )
}
