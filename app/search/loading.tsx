import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <Loader2 className="h-16 w-16 animate-spin text-primary mb-6" />
      <h2 className="text-2xl font-bold mb-2">Loading destinations...</h2>
      <p className="text-muted-foreground">Discovering amazing places for your next adventure</p>
    </div>
  )
}

