import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4 m-4">
      <Card className="h-auto w-full">
        <Skeleton className="h-12 w-2/12 ml-8 mb-8 mt-4" />
        <div className="flex flex-col m-8 space-y-1">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </Card>
      <Card className="h-auto w-full">
        <Skeleton className="h-12 w-2/12 ml-8 mb-8 mt-4" />
        <div className="flex flex-col m-8 space-y-1">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </Card>
      <Card className="h-auto w-full">
        <Skeleton className="h-12 w-2/12 ml-8 mb-8 mt-4" />
        <div className="flex flex-col m-8 space-y-1">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </Card>
    </div>
  )
}
