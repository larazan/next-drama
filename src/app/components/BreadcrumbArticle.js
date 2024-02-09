import React from 'react'

const BreadcrumbArticle = () => {
  return (
    <>
        <section className="py-2 bg-transparent md:py-4 md:text-sm">
        <div className="grid-container px-0 lg:px-0">
          <nav aria-label="breadcrumbs">
            <div className="relative w-full">
              
              <ul className="scrollbar-fix flex flex-row flex-nowrap justify-start overflow-x-scroll no-scrollbar">
                <li className="">
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-black text-[11px] uppercase leading-3 tracking-[2px] opacity-70"
                    href="/"
                  >
                    News
                  </a>
                </li>
                
                
                <li className='before:inline before:px-1 before:text-sm before:content-[">"] text-black text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70'>
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-black text-[11px] uppercase leading-3 tracking-[2px] opacity-70"
                    href="/"
                  >
                    Movies
                  </a>
                </li>

                <li className='before:inline before:px-1 before:text-sm before:content-[">"] text-black text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70'>
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-black text-[11px] uppercase leading-3 tracking-[2px] opacity-70"
                    href="/"
                  >
                    Taxi driver 
                  </a>
                </li>
                
              </ul>
              
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default BreadcrumbArticle