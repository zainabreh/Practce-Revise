import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/moving-border"
import { Textarea } from "@/components/ui/textarea"
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen rounded-md bg-black relative   antialiased py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold  my-8 text-white">Contact Us</h1>
      <p className="text-sm text-center m-auto max-w-96 opacity-40 font-sans my-8 text-slate-300">We're here to help with any questions about our courses,programs, or events.Reach out and let us know how we can assist you in your musical journey.</p>

      <div className="max-w-[1080px] m-auto">
      <Input type="email" placeholder="Email" className="my-8"/>
      <Textarea placeholder="Type your message here." />
      <div className="my-10">
      <Button>Send Message</Button>
      </div>
      </div>
      <BackgroundBeams/>
    </div>
  )
}

export default page
