import "./index.css";

function App() {
  return (
    <>
      {/* Content Wrapper  */}
      <div className="grid md:grid-cols-3 gap-2 p-2">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav>
            <div>
              <h1 className="flex gap-2 font-bold uppercase justify-around p-5 border-b border-gray-300 hover:text-gray-500">
                <a href="/" className=" ">
                  MYABDI FOODS
                </a>
                <div className="md:hidden hover:cursor-pointer hover:bg-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
              </h1>
            </div>
            <ul className="p-5 gap-3 hidden md:flex md:flex-col">
              <li className="font-bold ">
                <a href="#" className="flex gap-2 border-r-4 border-red-800">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2 border-r-4 border-gray-200">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2 border-r-4 border-gray-200">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  </div>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-300 md:col-span-2 rounded shadow-2xl">
          <div className="flex gap-2 justify-center sm:justify-end text-sm md:text-md pb-5">
            <a
              href="#"
              className="button text-black border-lg border-gray-400 sm:border-2 hover:bg-gray-400 hover:text-white"
            >
              {" "}
              LOG IN
            </a>
            <a
              href="#"
              className="button text-black border-lg border-gray-400 sm:border-2 hover:bg-gray-400 hover:text-white"
            >
              SIGN UP
            </a>
          </div>

          <header className="pb-5 text-center md:text-left">
            <h2 className="font-semibold text-4xl uppercase">Food Recipes</h2>
            <h3 className="font-semibold text-md pt-3 justify-center">
              {" "}
              by ABDIRAHMAN NUR
            </h3>
          </header>

          <div>
            <h4 className="font-bold mt-4 pb-2 border-b border-gray-300">
              Latest Recipes
            </h4>

            <div className="mt-8 gap-5 grid sm:grid-cols-3 md:grid-cols-3 ">
              {/* CARD GOES HERE */}

              <div className="card">
                <img className="img" src="/src/img/stew.jpeg" alt="" />
                <div className="m-4">
                  <span className="font-bold uppercase">5 BEAN CHILI STEW</span>
                  <span className="block text-gray-500 text-sm lowercase">
                    RECIPE BY ABDIRAHMAN NUR
                  </span>
                </div>
                <div className="badge">
                  <span> 16 mins</span>
                </div>
              </div>

              {/*  */}

              <div className="card flex flex-col">
                <img className="img" src="/src/img/stewsoup.jpg" alt="" />
                <div className="m-4">
                  <span className="font-bold uppercase">5 BEAN CHILI STEW</span>
                  <span className="block text-gray-500 text-sm lowercase">
                    RECIPE BY ABDIRAHMAN NUR
                  </span>
                </div>
                <div className="badge">
                  <span> 30 mins</span>
                </div>
              </div>

              <div className="card">
                <img className="img" src="/src/img/burger.avif" alt="" />
                <div className="m-4">
                  <span className="font-bold uppercase">5 BEAN CHILI STEW</span>
                  <span className="block text-gray-500 text-sm lowercase">
                    RECIPE BY ABDIRAHMAN NUR
                  </span>
                </div>
                <div className="badge">
                  <span> 25 mins</span>
                </div>
              </div>

              <div className="card">
                <img className="img" src="/src/img/vegetables.avif" alt="" />
                <div className="m-4">
                  <span className="font-bold uppercase">Vegetable Salad</span>
                  <span className="block text-gray-500 text-sm lowercase">
                    RECIPE BY ABDIRAHMAN NUR
                  </span>
                </div>
                <div className="badge">
                  <span> 5 mins</span>
                </div>
              </div>

              <div className="card">
                <img className="img" src="/src/img/cake.avif" alt="" />
                <div className="m-4">
                  <span className="font-bold uppercase">
                    The Cake of Your Life!{" "}
                  </span>
                  <span className="block text-gray-500 text-sm lowercase">
                    RECIPE BY ABDIRAHMAN NUR
                  </span>
                </div>
                <div className="badge">
                  <span> 25 mins</span>
                </div>
              </div>

              <div className="card">
                <img className="img" src="/src/img/pizza.avif" alt="" />
                <div className="m-4">
                  <span className="font-bold uppercase">
                    PIZZA PIZZA, me so hungy!
                  </span>
                  <span className="block text-gray-500 text-sm lowercase">
                    RECIPE BY ABDIRAHMAN NUR
                  </span>
                </div>
                <div className="badge">
                  <span> 35 mins</span>
                </div>
              </div>

              <div className="card">
                <img className="img" src="src/img/eggs.avif" alt="" />
                <div className="m-4">
                  <span className="font-bold uppercase">The Perfect EGG!</span>
                  <span className="block text-gray-500 text-sm lowercase">
                    RECIPE BY ABDIRAHMAN NUR
                  </span>
                </div>
                <div className="badge">
                  <span> 5 mins</span>
                </div>
              </div>
            </div>

            {/* END OF CARDS */}

            <h4 className="font-bold mt-4 pb-2 border-b border-gray-300 text-xl pt-5 text-center ">
              Most Popular Recipes Coming Soon!
            </h4>

            <div className="mt-8">{/* CARDS GO HERE */}</div>

            <div className="flex justify-center text-black text-sm">
              <div className="button bg-gray-300 border-gray-700 border-2 hover:bg-gray-400 hover:shadow-inner">
                LOAD MORE RECIPES!
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
