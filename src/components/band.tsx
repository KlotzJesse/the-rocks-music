import React from "react";

export const Band = (): JSX.Element => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.78 122.88"
              className="text-teal-900 w-7 h-7" 
              xmlSpace="preserve"
            >
              <g>
                <path d="M40.8,89.83c0.91,0.67,1.1,1.96,0.43,2.87s-1.96,1.1-2.87,0.43c-1.46-1.09-2.89-2.33-4.22-3.68l0,0l0,0 c-1.33-1.34-2.59-2.81-3.73-4.36c-0.67-0.91-0.48-2.2,0.43-2.87c0.91-0.67,2.2-0.48,2.87,0.43c1,1.35,2.13,2.67,3.36,3.91l0,0 C38.25,87.77,39.51,88.88,40.8,89.83L40.8,89.83z M34.23,62c-4.6-1.25-9.21-1.44-13.41-0.52c-3.98,0.87-7.6,2.73-10.5,5.63 C5.43,72,3.48,78.94,4.29,86.22c0.82,7.43,4.5,15.2,10.84,21.54l0,0c6.34,6.34,14.11,10.02,21.54,10.84 c7.27,0.8,14.22-1.14,19.1-6.03l0,0c2.87-2.87,4.72-6.43,5.6-10.34c0.93-4.13,0.79-8.67-0.39-13.2c-0.28-1.1,0.37-2.22,1.47-2.5 c0.17-0.04,0.34-0.07,0.51-0.07c2.17-0.07,4.26-0.5,6.19-1.3c1.83-0.76,3.52-1.86,4.98-3.32c3.05-3.05,4.57-7.17,4.63-11.57 c0.06-4.62-1.47-9.55-4.5-13.94c-0.57-0.83-0.45-1.93,0.24-2.62l0,0l21.13-21.14c0.8-0.8,2.11-0.8,2.91,0l1.09,1.09l5.83-5.83 c0.05-0.07,0.11-0.14,0.18-0.2c0.06-0.06,0.13-0.12,0.2-0.18l7.71-7.71c0.05-0.07,0.11-0.14,0.18-0.2c0.06-0.06,0.13-0.12,0.2-0.18 l2.83-2.83L106.34,6.13L89.21,23.25l1.09,1.09c0.8,0.8,0.8,2.11,0,2.91L69.1,48.47c-0.73,0.73-1.89,0.8-2.69,0.19 c-4.34-2.84-9.15-4.25-13.64-4.14c-4.31,0.11-8.34,1.62-11.34,4.62c-1.43,1.43-2.52,3.08-3.28,4.87c-0.8,1.89-1.24,3.95-1.33,6.09 c-0.05,1.13-1.01,2.01-2.14,1.96C34.52,62.06,34.37,62.04,34.23,62L34.23,62L34.23,62z M19.95,57.46c4.12-0.9,8.55-0.88,13,0.02 c0.27-1.75,0.74-3.45,1.41-5.05c0.97-2.3,2.35-4.39,4.15-6.19c3.77-3.77,8.8-5.68,14.16-5.81c4.85-0.12,9.98,1.23,14.67,3.98 l18.6-18.6l-1.09-1.09c-0.8-0.8-0.8-2.11,0-2.91l6.01-6.01l-4.18-4.18c-0.8-0.8-0.8-2.11,0-2.91c0.8-0.8,2.11-0.8,2.91,0l4.18,4.18 l5.18-5.18l-4.18-4.18c-0.8-0.8-0.8-2.11,0-2.91c0.8-0.8,2.11-0.8,2.91,0l4.18,4.18l3.02-3.02c0.8-0.8,2.11-0.8,2.91,0l13.33,13.33 c0.8,0.8,0.8,2.11,0,2.91l-3.02,3.02l4.08,4.08c0.8,0.8,0.8,2.11,0,2.91c-0.8,0.8-2.11,0.8-2.91,0l-4.08-4.08l-5.18,5.18l4.08,4.08 c0.8,0.8,0.8,2.11,0,2.91c-0.8,0.8-2.11,0.8-2.91,0l-4.08-4.08l-6.01,6.01c-0.8,0.8-2.11,0.8-2.91,0l-1.09-1.09L78.57,55.45 c2.89,4.74,4.34,9.94,4.28,14.88c-0.07,5.46-1.98,10.59-5.82,14.43c-1.84,1.84-3.98,3.23-6.33,4.2c-1.66,0.68-3.41,1.15-5.22,1.4 c0.83,4.38,0.8,8.72-0.11,12.77c-1.05,4.67-3.27,8.92-6.69,12.35l0,0c-5.81,5.81-13.97,8.14-22.46,7.21 c-8.33-0.92-16.99-4.99-24-12.01l0,0c-7.02-7.02-11.09-15.67-12.01-24c-0.94-8.49,1.39-16.65,7.21-22.46 C10.89,60.72,15.21,58.49,19.95,57.46L19.95,57.46z M59.78,63.1c-1.08-1.08-2.5-1.62-3.92-1.62c-1.42,0-2.84,0.54-3.92,1.62h0 c-1.08,1.08-1.62,2.5-1.62,3.92c0,1.42,0.54,2.84,1.62,3.92h0c1.08,1.08,2.5,1.62,3.92,1.62c1.42,0,2.84-0.54,3.92-1.62 c1.08-1.08,1.62-2.5,1.62-3.92C61.4,65.6,60.86,64.18,59.78,63.1L59.78,63.1z M55.86,57.36c2.47,0,4.94,0.94,6.83,2.83 c1.89,1.89,2.83,4.36,2.83,6.83c0,2.47-0.94,4.94-2.83,6.83c-1.89,1.89-4.36,2.83-6.83,2.83c-2.47,0-4.94-0.94-6.83-2.83l0,0 c-1.89-1.89-2.83-4.36-2.83-6.83c0-2.47,0.94-4.94,2.83-6.83l0,0C50.92,58.3,53.39,57.36,55.86,57.36L55.86,57.36z M47.47,83.16 c0.91,0.67,1.1,1.96,0.43,2.87c-0.67,0.91-1.96,1.1-2.87,0.43c-1.46-1.09-2.89-2.33-4.22-3.68l0,0l0,0 c-1.33-1.34-2.59-2.81-3.73-4.36c-0.68-0.91-0.48-2.2,0.43-2.87c0.91-0.68,2.2-0.48,2.87,0.43c1,1.35,2.13,2.67,3.36,3.91l0,0 C44.92,81.1,46.18,82.2,47.47,83.16L47.47,83.16z" />
              </g>
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Bayerns heißeste
              <br className="hidden md:block" />
              Tribute-Band für{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Privatevents, Firmenfeiern, Stadtfeste, Musiknächte und
                Bierzelte.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Wir entführen Euch in die 60er, 70er und 80er Jahre und machen
              Euer Event zu einem vollen Erfolg und einem einmaligen Erlebnis!
              Ruft uns einfach an oder schreibt uns!
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Termin buchen
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://static.wixstatic.com/media/bf6886_be0b30175a064c11bed47716261dc807~mv2.jpg/v1/fill/w_1328,h_747,al_c,q_85/bf6886_be0b30175a064c11bed47716261dc807~mv2.webp"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://static.wixstatic.com/media/bf6886_13c432e5f1b04f3582fe2a6fc0a79502~mv2.jpg/v1/fill/w_693,h_1232,al_c,q_85,usm_0.66_1.00_0.01/bf6886_13c432e5f1b04f3582fe2a6fc0a79502~mv2.webp"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://static.wixstatic.com/media/bf6886_734c7824f5024b37944be6bc1526aaac~mv2.jpg/v1/fill/w_1280,h_720,al_c,q_85/bf6886_734c7824f5024b37944be6bc1526aaac~mv2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Band;
