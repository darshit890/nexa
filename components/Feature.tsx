import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Grid, Bell, Calendar, Compass, Pen } from "lucide-react";
import Image from "next/image";

export default function Feature() {
  return (
    <div className="bg-[#161616] text-white p-4 sm:p-6 md:p-8 ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-[#1C1C1C] border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#393939] text-white p-2 rounded-md">
                    <Grid className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Feed</h3>
                    <p className="text-sm text-zinc-400">
                      Dive into my quick thoughts
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#393939] hover:bg-[#393939]/90"
                >
                  View Feed
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-[#1C1C1C] border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#393939] text-white p-2 rounded-md">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Design Services</h3>
                    <p className="text-sm text-zinc-400">
                      Explore my range of design services.
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#393939] hover:bg-[#393939]/90"
                >
                  View Services
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-[#1C1C1C] border-zinc-700">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Stack</h3>
                <p className="text-sm text-zinc-400">
                  Software and resources I use on a regular basis.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <StackItem
                  icon="https://framerusercontent.com/images/SOG6zVvs7YHeoByIT2vCBngfAcM.webp"
                  name="Lemon Squeezy"
                  description="Payment Platform"
                />
                <StackItem
                  icon="https://framerusercontent.com/images/1tcK3V3k3zrApf8WU9BSXi5wo2I.png"
                  name="Framer"
                  description="Web Design Platform"
                />
                <StackItem
                  icon="https://framerusercontent.com/images/X4iSnNDJiPdfGvKo6FvP8pdne8.webp"
                  name="Cron"
                  description="Calendar"
                />
                <StackItem
                  icon="https://framerusercontent.com/images/u6LX1xbRWcF4uAfNGXgPuyJiM.webp"
                  name="Figma"
                  description="Design Tool"
                />
                <StackItem
                  icon="https://framerusercontent.com/images/O1J2IkfXpGphB4I7kR1VofZb18.webp"
                  name="Arc"
                  description="Browser"
                />
                <StackItem
                  icon="https://framerusercontent.com/images/wPpzmgsCNjJtl12gvb9asnOm0c.jpg"
                  name="Typefully"
                  description="Writer & Scheduler for Twitter/X"
                />
              </div>
            </CardContent>
            <CardFooter className="bg-[#1C1C1C] border-t border-zinc-700 p-4 rounded-2xl">
              <Button
                className="w-full text-zinc-400 hover:text-white bg-[#393939] hover:bg-[#393939]/90"
              >
                View all
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StackItem({
  icon,
  name,
  description,
}: {
  icon: string;
  name: string;
  description: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      <Image width={40} height={40} src={icon} alt={name} className="w-10 h-10 rounded-md" />
      <div>
        <h4 className="font-medium text-white">{name}</h4>
        <p className="text-xs text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
