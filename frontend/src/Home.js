import {
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                React Reuse Analyzer
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Navigating through the intricate layers of React development can
                be a complex task. Ensuring your code is clean, efficient, and
                error-free is crucial for delivering high-quality web
                applications. That's where our React Code Analyzer steps in,
                leveraging the power of ESLint to elevate your coding
                experience!.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <RocketLaunchIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Empower Your React Development with Smart, Efficient, and
                      Clean Code!.
                    </strong>{" "}
                    Your go-to tool designed to scrutinize and enhance your
                    React codebase, ensuring it's not just functional but also
                    clean, efficient, and adheres to best practices..
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MagnifyingGlassIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Analyze, Identify, and Rectify.
                    </strong>{" "}
                    Our React Code Analyzer meticulously scans your React
                    codebase, identifying patterns that may lead to potential
                    issues - be it related to performance, best practices, or
                    syntax. It doesn’t just stop at identifying issues; it also
                    provides actionable insights and automated fixes to ensure
                    your React applications are robust and maintainable.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchScrewdriverIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      ESLint - Your Personal Code Quality Assurance.
                    </strong>{" "}
                    Integrating ESLint, a widely-adopted linter in the
                    JavaScript/React community, our analyzer ensures your code
                    adheres to the defined coding standards and avoids common
                    pitfalls in development. From warning you about problematic
                    patterns to enforcing code style, ESLint acts as your
                    personal guide towards writing better, and cleaner code.
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Ready to get started?
              </h2>
              <button
                type="button"
                class="inline-flex items-center mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Scan your codebase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
