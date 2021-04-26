import React from 'react';


function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
        {/* Bottom area */}
        <div className="md:flex items-center justify-between py-4 md:py-8 border-t border-gray-200 content-center">
          {/* Social links */}
          <div className="mx-auto">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                  <a href='https://api.whatsapp.com/send?phone=4917631482430&text=Hallo!' target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <svg x="10" y="9" width="14" height="14" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5759 25.1686C30.0561 24.9078 27.4994 23.6513 27.0234 23.4763C26.5456 23.3031 26.1991 23.2173 25.8509 23.7388C25.5061 24.2586 24.5086 25.4293 24.2059 25.7758C23.9031 26.1241 23.5986 26.1661 23.0789 25.9071C22.5591 25.6446 20.8826 25.0968 18.8964 23.3258C17.3511 21.9468 16.3064 20.2441 16.0036 19.7226C15.7009 19.2028 15.9721 18.9211 16.2311 18.6621C16.4656 18.4293 16.7526 18.0548 17.0116 17.7521C17.2724 17.4476 17.3581 17.2306 17.5331 16.8823C17.7064 16.5358 17.6206 16.2331 17.4894 15.9723C17.3581 15.7116 16.3186 13.1513 15.8864 12.1101C15.4629 11.0968 15.0341 11.2351 14.7156 11.2176C14.4129 11.2036 14.0664 11.2001 13.7181 11.2001C13.3716 11.2001 12.8081 11.3296 12.3321 11.8511C11.8561 12.3708 10.5121 13.6291 10.5121 16.1893C10.5121 18.7478 12.3759 21.2206 12.6349 21.5688C12.8956 21.9153 16.3029 27.1688 21.5196 29.4211C22.7604 29.9566 23.7281 30.2768 24.4841 30.5148C25.7301 30.9121 26.8641 30.8561 27.7584 30.7213C28.7576 30.5726 30.8349 29.4631 31.2689 28.2486C31.7029 27.0341 31.7029 25.9928 31.5716 25.7758C31.4421 25.5588 31.0956 25.4293 30.5741 25.1686H30.5759ZM21.0874 38.1238H21.0804C17.9825 38.1241 14.9415 37.2911 12.2761 35.7123L11.6444 35.3378L5.09761 37.0563L6.84411 30.6723L6.43286 30.0178C4.70113 27.2603 3.78501 24.069 3.79036 20.8128C3.79211 11.2753 11.5534 3.51582 21.0944 3.51582C25.7144 3.51582 30.0579 5.31832 33.3234 8.58732C34.9345 10.1914 36.2116 12.0991 37.0806 14.2C37.9496 16.3009 38.3934 18.5533 38.3861 20.8268C38.3809 30.3643 30.6214 38.1238 21.0874 38.1238V38.1238ZM35.8101 6.10407C33.8819 4.16319 31.5878 2.62426 29.0605 1.57647C26.5333 0.528683 23.8232 -0.00713343 21.0874 7.17107e-05C9.61611 7.17107e-05 0.279859 9.33632 0.274609 20.8111C0.274609 24.4791 1.23186 28.0596 3.05361 31.2148L0.0996094 42.0001L11.1334 39.1056C14.1846 40.7679 17.6039 41.6391 21.0786 41.6396H21.0874C32.5569 41.6396 41.8949 32.3033 41.9001 20.8268C41.9086 18.0921 41.3747 15.3827 40.3294 12.8556C39.284 10.3285 37.748 8.03374 35.8101 6.10407V6.10407Z" fill="currentColor"/>
                      </svg>
                    </svg>
                  </a>
              </li>
              <li className="ml-4">
                <a href="https://www.linkedin.com/in/katharina-schreiber-49838a27" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <svg x="9" y="8" width="14" height="14" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.3375 140H2.3125V46.5292H31.3375V140ZM16.8094 33.7789C7.52813 33.7789 0 26.0912 0 16.8097C6.64312e-08 12.3515 1.77098 8.0759 4.92335 4.92346C8.07572 1.77102 12.3513 0 16.8094 0C21.2675 0 25.543 1.77102 28.6954 4.92346C31.8478 8.0759 33.6188 12.3515 33.6188 16.8097C33.6188 26.0912 26.0875 33.7789 16.8094 33.7789ZM139.969 140H111.006V94.499C111.006 83.655 110.787 69.7484 95.9156 69.7484C80.825 69.7484 78.5125 81.5299 78.5125 93.7177V140H49.5188V46.5292H77.3562V59.2794H77.7625C81.6375 51.9355 91.1031 44.1854 105.225 44.1854C134.6 44.1854 140 63.5295 140 88.6551V140H139.969Z" fill="currentColor"/>
                    </svg>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;