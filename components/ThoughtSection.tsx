import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart2,
  Share2,
  Smartphone,
  Clock,
  Lightbulb,
  Layout,
} from "lucide-react";

export default function ThoughtSection() {
  return (
    <div className="bg-[#161616] text-white p-4 sm:p-6 md:p-8  flex-1">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 border border-[#202020] p-5 rounded-xl">
          <div className="space-y-2 ">
            <h2 className="text-2xl font-bold">Thoughts</h2>
            <p className="text-zinc-400">
              Sharing experiences, knowledge and videos on design & tech.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ThoughtCard
              icon={<BarChart2 className="w-5 h-5" />}
              title="Productize Your Design Skills"
              category="Business"
            />
            <ThoughtCard
              icon={<Clock className="w-5 h-5" />}
              title="Freelancing in Digital Design"
              category="Business"
            />
            <ThoughtCard
              icon={<Share2 className="w-5 h-5" />}
              title="Designing for Shareability"
              category="Design"
            />
            <ThoughtCard
              icon={<Lightbulb className="w-5 h-5" />}
              title="A New Era of Entrepreneurship"
              category="Business"
            />
            <ThoughtCard
              icon={<Smartphone className="w-5 h-5" />}
              title="The Age of Mobile and VR"
              category="Business"
            />
            <ThoughtCard
              icon={<Layout className="w-5 h-5" />}
              title="The Evolution of Digital Design"
              category="Design"
            />
          </div>
          <Card className="bg-[#1C1C1C] border-zinc-700">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Join 1K+ Readers</h3>
                  <p className="text-sm text-zinc-400">
                    Sent out every two weeks. No spam.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ThoughtCard({ icon, title, category }: any) {
  return (
    <Card className="bg-[#191919] border-[#1C1C1C]">
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="bg-[#393939] text-white p-2 rounded-md">{icon}</div>
        <div className="space-y-1">
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{category}</p>
        </div>
      </CardContent>
    </Card>
  );
}
