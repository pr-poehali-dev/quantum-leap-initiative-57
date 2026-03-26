import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-black">
              ПОР<span className="text-red-500">ТАЛ</span>
            </h1>
          </div>

          <div />

          {/* Start date */}
          <div className="hidden md:block">
            <span className="text-red-500 font-space-mono text-sm border border-red-500/30 rounded-lg px-4 py-2">
              📅 Старт: 6 апреля
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/98 border-t border-red-500/20">
              <div className="px-3 py-2">
                <span className="text-red-500 font-space-mono text-sm">📅 Старт: 6 апреля</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
