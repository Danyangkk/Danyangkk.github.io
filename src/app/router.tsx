import { createHashRouter } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout'
import { BlogPage } from '../pages/BlogPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { SkillsPage } from '../pages/SkillsPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'writing', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
