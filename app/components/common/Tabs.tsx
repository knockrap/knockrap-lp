'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div>
      <div className="flex gap-2 flex-wrap mt-8 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-[22px] py-[10px] rounded-[8px] text-base font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-[var(--blue)] border-[var(--blue)] text-white font-bold'
                : 'bg-white border-[1.5px] border-[var(--border)] text-[var(--muted)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'block' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
