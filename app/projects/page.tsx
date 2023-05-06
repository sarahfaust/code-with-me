import { ProjectCard } from '@/components/ui/ProjectCard'
import { projectList } from '@/data'
import Image from 'next/image'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="grid grid-cols-3 gap-4">{projectList.map((item) => <ProjectCard title={item.title} projectId={item.projectId} detail={item.detail} nameProjectOwner={item.nameProjectOwner} technology={item.technology} />
)}</div>
    </main>
  )
}
