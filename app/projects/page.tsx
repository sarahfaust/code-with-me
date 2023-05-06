'use client';
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SearchSidebar } from '@/components/ui/SearchSidebar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row gap-3 p-8">
      <div className='w-40'>
       <SearchSidebar />
      </div>
      <div className='flex-grow'>
        <ProjectCard />
      </div>
    </main>
  )
}
