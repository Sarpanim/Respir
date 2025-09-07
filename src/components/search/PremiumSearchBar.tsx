import { Search, X } from 'lucide-react'
import { useState } from 'react'

interface PremiumSearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onClear?: () => void
  className?: string
}

export default function PremiumSearchBar({
  placeholder = "Rechercher des cours...",
  value = "",
  onChange,
  onClear,
  className = ''
}: PremiumSearchBarProps) {
  const [searchValue, setSearchValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSearchValue(newValue)
    onChange?.(newValue)
  }

  const handleClear = () => {
    setSearchValue("")
    onChange?.("")
    onClear?.()
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-10 pr-10 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        {searchValue && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-all duration-200"
          >
            <X className="w-4 h-4 text-white/60" />
          </button>
        )}
      </div>
    </div>
  )
}
