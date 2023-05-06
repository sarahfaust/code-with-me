import { BellRing, Bold, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "./separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { ProjectType } from "@/lib/types"

type CardProps = React.ComponentProps<typeof Card> & ProjectType

export function ProjectCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
       <AspectRatio ratio={16 / 7} className="bg-muted">
      <Image
        src="/aaa.jpg"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Separator/>
        <div className="font-semibold">Description</div>
        <div>{props.detail}</div>
        <Separator/>
        <div className="font-semibold">Technology</div>
        <div className="flex flex-row gap-2">{props.technology.map((item => <span className="px-4 py-2 bg-gray-200 hover:bg-gray-300 hover:text-white text-gray-800 text-sm font-medium rounded-full">{item.title}</span>))}</div>
        <Separator/>
        <span className="font-semibold">Project Owner</span>
        <div className="flex items-center gap-2"><Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>{props.nameProjectOwner}</span></div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Mehr Infos zu dem Projekt
        </Button>
      </CardFooter>
    </Card>
  )
}
