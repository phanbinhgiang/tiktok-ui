import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }