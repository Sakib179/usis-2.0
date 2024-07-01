import React from 'react';

export default function WelcomePage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex flex-row items-center justify-center bg-white">

        <aside className="bg-gradient-to-r from-cyan-500 to-blue-500  hidden h-screen w-1/12 sm:block md:w-1/3 lg:w-1/2">
          <div className="flex items-center justify-center min-h-full">
            <div>
              <h1 className="text-3xl text-primary-foreground font-medium">BRAC University</h1>
              <h2 className="text-1xl text-primary-foreground font-medium">University Student Information System (USIS)</h2>
            </div>
          </div>
        </aside>
        
        <div className="h-screen w-11/12 overflow-y-scroll md:w-2/3 lg:w-1/2">
          <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="mx-auto w-full max-w-sm lg:w-[24rem]">
              {children}
            </div>
          </div>
        </div>

      </main>
    </>
  )
}