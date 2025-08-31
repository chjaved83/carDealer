const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('pages/FirstDirectory/Home.vue'),
        meta: { title: 'Find my Car' }
      },
      {
        path: 'car-listings',
        component: () => import('pages/FirstDirectory/CarListing.vue'),
        meta: { title: 'Car Listing' }
      },
      {
        path: 'car-detail',
        component: () => import('pages/FirstDirectory/CarDetail.vue'),
        meta: { title: 'Car Detail' }
      },
      {
        path: 'about-us',
        component: () => import('pages/FirstDirectory/AboutUs.vue'),
        meta: { title: 'About Us' }
      },
      {
        path: 'contact-us',
        component: () => import('pages/FirstDirectory/ContactUs.vue'),
        meta: { title: 'Contact Us' }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
