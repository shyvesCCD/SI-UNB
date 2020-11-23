import Notifications from './pages/Notifications'
import Symptoms from './pages/Symptoms'
import Tips from './pages/Tips'
import Login from './pages/Login'
import Register from './pages/Register'

const routes = [
  {
    path: "/notes",
    name: "Notifications",
    component: Notifications,
    layout: '/main'
  },
  {
    path: "/symptoms",
    name: "Symptoms",
    component: Symptoms,
    layout: '/main'
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips,
    layout: '/main'
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: '/main'
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: '/main'
  }
]

export default routes
