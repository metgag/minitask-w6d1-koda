import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import Header from './components/Header'
import App from './App'
import Login from './pages/Login'
import ShoppingApp from './pages/shopping/ShoppingApp'
// import Todo from './pages/to-do/App'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<RouteLayout />}>
          <Route index element={<App />} />
          <Route path="/shopping" element={<ShoppingApp />} />
          {/* <Route path="/to-do" element={<Todo />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function RouteLayout() {
  return (
    <>
      <Header uname="" />
      <Outlet />
    </>
  )
}

export default Router
