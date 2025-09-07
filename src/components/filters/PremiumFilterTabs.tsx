import { useState } from 'react'

interface FilterTab {
  id: string
  label: string
  count?: number
  isActive?: boolean
}

interface PremiumFilterTabsProps {
  tabs: FilterTab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

export default function PremiumFilterTabs({
  tabs,
  activeTab,
  onTabChange,
  className = ''
}: PremiumFilterTabsProps) {
  return (
    <div className={`flex space-x-2 overflow-x-auto pb-2 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-white/20 text-white backdrop-blur-sm'
              : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
          }`}
        >
          {tab.label}
          {tab.count && (
            <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
