import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const tools = [
  {
    category: "Design",
    items: [
      { name: "Figma", description: "Design Tool", icon: "https://framerusercontent.com/images/u6LX1xbRWcF4uAfNGXgPuyJiM.webp" },
      { name: "Iconic", description: "Icon Library", icon: "https://framerusercontent.com/images/wCYUJecEDcxVjDNiA5dsJszhU0.jpg" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Cron", description: "Calendar", icon: "https://framerusercontent.com/images/X4iSnNDJiPdfGvKo6FvP8pdne8.webp" },
      { name: "Arc", description: "Browser", icon: "https://framerusercontent.com/images/O1J2IkfXpGphB4I7kR1VofZb18.webp" },
      { name: "Typefully", description: "Writer & Scheduler for Twitter/X", icon: "https://framerusercontent.com/images/wPpzmgsCNjJtl12gvb9asnOm0c.jpg" },
      { name: "Linear", description: "Project Management", icon: "https://framerusercontent.com/images/CQSyM2flIboH8syDCScLWEL7mgY.webp" },
      { name: "Slack", description: "Collaboration", icon: "https://framerusercontent.com/images/izmKkSExzzp1VNdqJs269SIbs.png" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Lemon Squeezy", description: "Payment Platform", icon: "https://framerusercontent.com/images/SOG6zVvs7YHeoByIT2vCBngfAcM.webp" },
      { name: "Framer", description: "Web Design Platform", icon: "https://framerusercontent.com/images/1tcK3V3k3zrApf8WU9BSXi5wo2I.png" },
      { name: "Webflow", description: "Visual Development Tool", icon: "https://framerusercontent.com/images/UPkjR5UQGzIvkr5SJ7WBpGso4o.webp" },
      { name: "Outseta", description: "Membership Software", icon: "https://framerusercontent.com/images/ngCjUa1loZrpGWgSTDXUDycS1k.webp" },
    ],
  },
]

export default function Component() {
  return (
    <div className="bg-[#161616] text-white min-h-screen flex-1 flex-col p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Stack</h1>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Tools, resources and software I use daily.
        </p>

        <div className="space-y-8">
          {tools.map((category) => (
            <Card key={category.category} className="bg-[#1C1C1C] border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-white">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center space-x-4">
                      <Image width={40} height={40} src={item.icon} alt={item.name} className="w-10 h-10 rounded" />
                      <div>
                        <h3 className="text-sm font-medium text-white">{item.name}</h3>
                        <p className="text-xs text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}