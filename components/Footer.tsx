
import Link from 'next/link'
import { Bell } from 'lucide-react'
import TimeDisplay from './TimeDisplay'

export default function Footer() {


  return (
    <footer className="bg-[#1C1C1C] text-zinc-400 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Index</h3>
            <ul className="space-y-2">
              <li><Link href="/explore" className="hover:text-white transition-colors">Explore</Link></li>
              <li><Link href="/boutique" className="hover:text-white transition-colors">Boutique</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/billify" className="hover:text-white transition-colors">Billify</Link></li>
              <li><Link href="/supply" className="hover:text-white transition-colors">Supply</Link></li>
              <li><Link href="/linx" className="hover:text-white transition-colors">Linx</Link></li>
              <li><Link href="/courseos" className="hover:text-white transition-colors">CourseOS</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/feed" className="hover:text-white transition-colors">Feed</Link></li>
              <li><Link href="/thoughts" className="hover:text-white transition-colors">Thoughts</Link></li>
              <li><Link href="/stack" className="hover:text-white transition-colors">Stack</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-zinc-800 pt-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Bell className="w-5 h-5 mr-2" />
            <span className="mr-2">Currently working</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <Link href="/contact" className="ml-2 text-zinc-500 hover:text-white transition-colors">
              Reach out →
            </Link>
          </div>
         <TimeDisplay />
        </div>
      </div>
    </footer>
  )
}