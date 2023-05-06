'use client';
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SearchSidebar } from '@/components/ui/SearchSidebar'
import { projectList } from '@/data'
import Image from 'next/image'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-row gap-3 p-8">
      <div className='w-40'>
       <SearchSidebar />
      </div>
      <div className='flex-grow'>
            <div className="grid grid-cols-3 gap-4">{projectList.map((item) => <ProjectCard title={item.title} projectId={item.projectId} detail={item.detail} nameProjectOwner={item.nameProjectOwner} technology={item.technology} />
)}</div>
      </div>
    </main>
  )
}
