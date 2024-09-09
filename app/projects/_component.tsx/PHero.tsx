import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PHero = () => {
  return (
    <div className="flex-1 bg-[#161616] text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-10">
            Projects
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Designing memorable digital experiences
          </p>
        </header>

        <section>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-0">
                <Image
                  alt="Billify product"
                  className="w-full h-48 object-cover"
                  src="https://framerusercontent.com/images/2hOxU0GnHy6mNXV8Ei4WAFqTFps.png?scale-down-to=512"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="text-md font-semibold text-white">Billify</h3>
                  <p className="text-zinc-400 text-sm">A digital invoice template for designers.</p>
                </div>
                <span className="text-zinc-400 text-sm border border-zinc-800 p-1.5 rounded-xl">$25</span>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-0">
              <Image
                  alt="Billify product"
                  className="w-full h-48 object-cover"
                  src="https://framerusercontent.com/images/2hOxU0GnHy6mNXV8Ei4WAFqTFps.png?scale-down-to=512"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="text-md font-semibold text-white">Supply</h3>
                  <p className="text-zinc-400 text-sm">Lemonsqueezy-powered digital store template.</p>
                </div>
                <span className="text-zinc-400 text-sm border border-zinc-800 p-1.5 rounded-xl">$99</span>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-0">
                <Image
                  alt="Billify product"
                  className="w-full h-48 object-cover"
                  src="https://framerusercontent.com/images/2hOxU0GnHy6mNXV8Ei4WAFqTFps.png?scale-down-to=512"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="text-md font-semibold text-white">Billify</h3>
                  <p className="text-zinc-400 text-sm">A digital invoice template for designers.</p>
                </div>
                <span className="text-zinc-400 text-sm border border-zinc-800 p-1.5 rounded-xl">$25</span>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-0">
              <Image
                  alt="Billify product"
                  className="w-full h-48 object-cover"
                  src="https://framerusercontent.com/images/2hOxU0GnHy6mNXV8Ei4WAFqTFps.png?scale-down-to=512"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="text-md font-semibold text-white">Supply</h3>
                  <p className="text-zinc-400 text-sm">Lemonsqueezy-powered digital store template.</p>
                </div>
                <span className="text-zinc-400 text-sm border border-zinc-800 p-1.5 rounded-xl">$99</span>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PHero