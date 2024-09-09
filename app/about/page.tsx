import Footer from "@/components/Footer";
import ThoughtSection from "@/components/ThoughtSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  return (
    <>
      <div className="bg-[#161616] text-white   flex-1 flex-col">
        <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Jackson
          </h1>

          <p className="text-gray-400 text-sm md:text-base mb-8">
            From Seattle&apos;s heart, Jackson Carter is a seasoned web designer
            blending storytelling and digital artistry. With over a decade in
            the field, he masterfully combines compelling visuals with design.
          </p>

          <div className="mb-8">
            <Image
              width={600}
              height={400}
              src="https://framerusercontent.com/images/hhvE2XrUlty0Xb2G09JWFIEOOH4.jpg?scale-down-to=2048"
              alt="Jackson Carter smiling"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 text-sm md:text-base">
            <p className="text-gray-300">
              Jackson began his journey in the digital space as a self-taught
              enthusiast, diving deep into the intricacies of design and the
              limitless potential of the web. After attaining his degree in Web
              Development from the University of Washington, he decided to
              embark on a mission to transform the web, one site at a time.
            </p>

            <p className="text-gray-300">
              His work is a fusion of modern aesthetics and time-honored design
              principles, resulting in websites that are not just platforms but
              experiences. With a firm belief that a website is the digital face
              of a brand, Jackson takes great pride in ensuring every site
              reflects the unique story and essence of its owner.
            </p>

            <p className="text-gray-300">
              Clients praise Jackson for his unwavering commitment to quality,
              his attention to detail, and his ability to translate complex
              ideas into intuitive, visually stunning interfaces. Whether
              working on a personal blog or a corporate website, Jackson brings
              the same level of passion and expertise to every project.
            </p>
          </div>
        </div>
        <ThoughtSection />
        <Card className="bg-[#1C1C1C] border-zinc-700 max-w-4xl mx-auto mb-10">
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
          <CardFooter className="bg-[#1C1C1C] border-t border-zinc-700 p-4 rounded-2xl ">
            <Button className="w-full text-zinc-400 hover:text-white bg-[#393939] hover:bg-[#393939]/90">
              View all
            </Button>
          </CardFooter>
        </Card>
        <Footer />
      </div>
    </>
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
      <Image
        width={10}
        height={10}
        src={icon}
        alt={name}
        className="w-10 h-10 rounded-md"
      />
      <div>
        <h4 className="font-medium text-white">{name}</h4>
        <p className="text-xs text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
