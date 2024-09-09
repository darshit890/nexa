import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MailIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-[#161616] text-white flex-1 flex-col">
      <div className="max-w-4xl mx-auto md:p-8 lg:p-12 p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Services</h1>
        <p className="text-gray-400 text-sm md:text-base mb-6">
          Blending creativity and functionality, our design services transform ideas into captivating realities.
        </p>
        <Button className="mb-8 bg-[#393939] hover:bg-[#393939]/90">Schedule free call</Button>
        
        <div className="space-y-6">
          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">Product Design</span>
                <span className="text-sm text-gray-400">Starts at $4,999</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                Blending aesthetics and innovation, my Product Design service crafts user-centric designs that elevate and resonate in today&apos;s market.
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-400 space-y-1">
                <li>UI for main screens</li>
                <li>Navigation concept</li>
                <li>Information architecture</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button variant="secondary" className="bg-zinc-800 text-white hover:bg-zinc-700 w-full sm:w-auto">Get started now</Button>
            <Button  className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">Strategy</span>
                <span className="text-sm text-gray-400">Starts at $1,999</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                I craft strategic roadmaps tailored to your brand&apos;s aspirations, diving deep into your unique challenges to ensure each move is purposeful and impactful.
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-400 space-y-1">
                <li>Workshop</li>
                <li>Insights</li>
                <li>Recommendations</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button variant="secondary" className="bg-zinc-800 text-white hover:bg-zinc-700 w-full sm:w-auto">Get started now</Button>
            <Button  className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}