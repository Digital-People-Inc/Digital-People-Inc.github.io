import React from "react";
export default function Mailchimp() {
  return (
    <>
      <form
        action="https://dev.us22.list-manage.com/subscribe/post?u=c081697989c0595447ca2fa12&amp;id=3e70235904&amp;f_id=006ac4e1f0"
        method="post"
        className="mt-8"
      >
        <div className="flex flex-col items-center gap-5">
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            className="px-4 py-2 mb-2 text-center bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-52 px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-200 hover:text-black focus:bg-gray-400 focus:text-white focus:outline-none focus:ring-2 focus:ring-black"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}
