import { ProjectCard } from '@/components/ui/ProjectCard'
import { ProjectType } from '@/lib/types'
import Image from 'next/image'

export default function ProjectDetails(props: ProjectType) {
  return (
    <main className="flex min-h-screen flex-col content-start justify-start gap-2 p-8">
        <h1>{props.title}</h1>
        <div className='flex flex-row'>
            <h3 className='font-semibold'>Owner</h3>
            <div>{props.nameProjectOwner}</div>
        </div>
        <div className='flex flex-row'>
            <h3 className='font-semibold'>Detail</h3>
            <div>{props.detail}</div>
        </div>
    </main>
  )
}
