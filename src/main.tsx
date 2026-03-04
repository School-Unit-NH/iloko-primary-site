import './index.css'
import { routes } from './App.tsx'
import { ViteReactSSG } from 'vite-react-ssg'

export const createRoot = ViteReactSSG({ routes })
