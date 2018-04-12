
export default [
  { //default layout:sample
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout'),
    children: [
      { path: '/dashboard', component: () => import('pages/DashboardPage') },
      { path: '/new-project', component: () => import('pages/new-project/NewProjectPage') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
