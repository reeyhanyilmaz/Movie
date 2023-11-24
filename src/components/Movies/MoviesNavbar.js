import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function MoviesNavbar() {
  const router = useRouter();

  const handlePaymentClick = () => {
    router.push("/payment");
  };

  return (
    <nav>
      <div class="relative flex h-16 items-center justify-between px-2 mx-auto max-w-7xl">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <Image className="mr-11" src="/light_mode_CineMax.svg" width={87} height={28} />
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                href="#"
                class="blackTextColor hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Movies
              </a>
              <a
                href="#"
                class="blackTextColor hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Series
              </a>
              <a
                href="#"
                class="blackTextColor hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Animation
              </a>
              <a
                href="#"
                class="blackTextColor hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Genres
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="flex lg:ml-6">
            <a href="#" class="p-2 text-blackTextColor hover:text-gray-500">
              <span class="sr-only">Search</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </a>
          </div>

          <button className="rounded-3xl bg-pinkColor text-white w-32 h-10 ml-[66px]" onClick={handlePaymentClick}>
            Payment
          </button>

          <button type="button" class="ml-8 relative p-1 text-blackTextColor hover:text-gray-400  focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <div className="absolute top-0.5 right-0.5 bg-[#EC6083] rounded-full text-white w-4 flex items-center justify-center h-4 text-sm">
              3
            </div>
          </button>

          <div class="ml-8 flex justify-center">
            <Image
              class="h-8 w-8 rounded-full mr-1"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              width={100}
              height={100}
            />
            <Image src="/movies/down_arrow.svg" width={20} height={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MoviesNavbar;
