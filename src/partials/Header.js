import React from 'react';
import profile from '../images/profile-picture.jpg'
import swal from 'sweetalert';


function SweetAlert() {
  swal("What is your favourite taco? Hint: type in fish, veggi, choriso, al pastor, arabes or barbacoa", {
    content: "input",
  })
  .then((value) => {
    if (value === "choriso") {
      swal(`Hell yeah! ${value} is my favourite taco!`);
    } else {
      swal(`Sorry ${value} is not my favourite taco!`);
    }
    
  });
} 

export default function Header() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="flex xl:flex-row lg:flex-row md: flex-col-reverse">


        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hi, I am Katharina</span>{' '}
            <span className="block text-indigo-600 xl:inline-block max-w-screen-sm">taco-lover and passionate coder</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          A career changer with a success story: quit advertising for IT. 
          Both strategic and creative thinker, self-motivated flexible multitasker and a passionate coder.
          Throughout my career I have been working in different fields and roles. I therefore truly believe,
          that a career is not a straight path and consider myself being a lively illustration of how different
          experiences are shaping individuals with a broad skillset, unconventional approches to a
          problem solving and flexible mindset.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a role="button" tabIndex={0}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                onClick={SweetAlert}
              >
                Am I your taco-match?
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Am I your code-match?
              </a>
            </div>
          </div>
        </div>
        <div >
          <img
            className=" mx-auto my-5  xl:h-1/2  lg:h-1/2  rounded-full object-cover md: h-96"
            src={profile}
            alt=""
          />
        </div>
      </div>

    </main>
    
    

    
  )
}



