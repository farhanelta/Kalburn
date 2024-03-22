import Image from "next/image";

export default function Home() {
  return (
    <body className="min-w-screen min-h-screen flex-1 content-center p-6">

      <div className="flex-col ">

        <div>
          <Image
            src="/kalburn.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
          />
        </div>

        <div className="flex justify-center py-10">
          <div className="flex-col w-100">

            <div>
              <form method="post">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Image
                      src="/k.svg"
                      alt="Vercel Logo"
                      width={20}
                      height={24}
                    />
                  </div>
                  <p className="pt-3 text-2xl font-semibold">Create your account</p>
                  <p className="pt-1 text-lg text-gray-600">Enter the fields below to get started</p>
                </div>
              </form>
              <div className="flex justify-between pt-5">
                <div>
                  <label className="font-medium">First Name
                    <div className="pt-1">
                      <input type="text" className="block w-full rounded-md border-0 py-2 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Enter first name" />
                    </div>
                  </label>
                </div>
                <div className="px-1"></div>
                <div>
                  <label className="font-medium">
                    Last Name
                    <div className="pt-1">
                      <input type="text" className="block w-full rounded-md border-0 py-2 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Enter last name" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="pt-3">
                <label className="font-medium">
                  Email
                  <div className="pt-1">
                    <input type="email" className="block w-full rounded-md border-0 py-2 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Enter email" />
                  </div>
                </label>
              </div>
              <div className="pt-3">
                <label className="font-medium">
                  Password
                  <div className="pt-1">
                    <input type="password" className="block w-full rounded-md border-0 py-2 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Enter password" />
                  </div>
                </label>
              </div>
              <div className="pt-3 pb-7">
                <label className="font-medium">
                  Confirm Password
                  <div className="pt-1">
                    <input type="password" className="block w-full rounded-md border-0 py-2 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Enter confirm password" />
                  </div>
                </label>
              </div>
              <div className="grid">

                <button className="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-lg text-sm py-3 dark:bg-orange-500 dark:hover:bg-orange-700">Sign Up</button>

                <div className="py-2">
                  <table width="100%">
                    <tr>
                      <td><hr /></td>
                      <td style={{ width: "1px", padding: "0 10px" }}>OR</td>
                      <td><hr /></td>
                    </tr>
                  </table>
                </div>

                <button type="button" className="hover:text-white border border-gray-300 font-medium rounded-lg text-sm text-center py-3 dark:border-gray-300 dark:text-black dark:hover:text-white dark:hover:bg-black flex justify-center items-center">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                  </svg>
                  Sign in with Google
                </button>

                <div className="flex justify-center pt-2">
                  <p className="font-base">Already have an account? <a href="/login" className="text-orange-500 font-medium">Sign In</a> </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-base text-gray-300">2023 Kalburn</p>
          <a href="">
            <p className="text-base text-gray-300">Privacy Policy</p>
          </a>
        </div>

      </div>
    </body>
  );
}
