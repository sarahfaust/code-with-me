import { BellRing, Check } from "lucide-react"

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

type CardProps = React.ComponentProps<typeof Card>

export function ProjectCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Project</CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>Card Test</div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Mehr Infos zum Projekt
        </Button>
      </CardFooter>
    </Card>
  )
}
