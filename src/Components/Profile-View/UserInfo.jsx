import React, { Component } from "react";

import "tailwindcss/tailwind.css";

class UserInfo extends Component {
  render() {
    const { username, password, email, birthday } = this.props;
    return (
      <div className="bg-white w-screen  shadow overflow-hidden sm:rounded-lg items-center">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-extrabold text-center leading-6  text-gray-900">
            Your Profile
          </h1>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {username}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {email}
              </dd>
            </div>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Birthday</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {birthday}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }
}

export default UserInfo;
