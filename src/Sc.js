import React from "react";

function Sc() {
  // Changed class to className since this is JSX
  return (
    <body className="bg-blue-50">
      <div className="bg-white py-4 px-6">
        <header className="container mx-auto flex justify-between items-center text-gray-600">
          <h2 className="text-2xl font-bold">Proactive</h2>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="nav-link hover:text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link hover:text-gray-500">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="nav-link hover:text-gray-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link hover:text-gray-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#gallery" className="nav-link hover:text-gray-500">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://psgtech.edu"
                  className="nav-link hover:text-gray-500"
                >
                  College
                </a>
              </li>
              {/* Moved buttons inside a list item */}
              <li>
                <button className="border border-gray-300 rounded-md px-4  btn hover:bg-gray-100">
                  SIGN-IN
                </button>
              </li>
              <li>
                <button className="border border-gray-300 rounded-md px-4  btn hover:bg-gray-100">
                  LOGIN
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Give your Student Community a voice
        </h1>

        {/* Home Section */}
        <section id="home" className="mb-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl mb-4 font-bold">Home</h2>
          <p>
            Welcome to our student community website! This is a place for
            students to connect, share ideas, and participate in various
            activities.
          </p>
          <div className="flex justify-center item-center">
            
            <img
              src="./student-community-multinational-people-cartoon-vector-illustration-isolated-group-multi-national-young-characters-flat-white-176696593.jpg.webp"
              alt="Community Image"
              className="w-64 h-auto mt-4  items-center"
            />
          </div>
        </section>

        
        <section
          id="latest-feed"
          className="mb-8 bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-3xl font-bold mb-4">Feeds</h1>

          
          <div className="bg-white border border-gray-300 rounded-md p-4 mb-4 card">
            <div className="flex items-center mb-2">
              <img
                src="navanee.jpeg"
                alt="User 1"
                width="50"
                height="50"
                className="rounded-full mr-2"
              />
              <span className="font-bold">Navanee</span>
            </div>
            <p className="mb-2">
              "BSc Economics and Management and UoL SIM alumna Charlotte Chan
              shares her experience of studying with the University of London
              and the Singapore Institute of Management. We take a look at her
              inspiring story and tips for achieving success."
            </p>
            <p className="text-sm text-gray-600">
              Posted by Navanee on December 2023 19:23:21 at Coimbatore
            </p>
            <button className="border border-gray-300 rounded-md px-4 py-2 mt-2 btn hover:bg-gray-100">
              <a href="rm-1.html">Read more</a>
            </button>
          </div>
          
        </section>

        
        <section
          id="timetable"
          className="mb-8 bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl mb-4">Timetable</h2>
          <p>Check the timetable for upcoming events:</p>
          <table className="w-full border-collapse border border-gray-300 rounded-md mb-4">
            <tr>
              <th className="bg-gray-200 p-2">Date</th>
              <th className="bg-gray-200 p-2">Event</th>
            </tr>
            <tr>
              <td className="p-2">January 15</td>
              <td className="p-2">Workshop on Coding</td>
            </tr>
            {/* Add more rows as needed */}
          </table>
          <video className="w-full mb-4" controls>
            <source src="./GLFFinalChanges.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mb-8 bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl mb-4">Contact</h2>
          <p>
            If you have any questions or want to get involved, feel free to
            contact us:
          </p>
          <dl className="mb-4">
            <div className="flex">
              <dt className="w-24 font-bold">Email:</dt>
              <dd>contact@studentcommunity.com</dd>
            </div>
            {/* Add more details as needed */}
          </dl>
        </section>

        {/* Subscription Section */}
        <section
          id="subscription"
          className="mb-8 bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl mb-4">Subscribe to Our Newsletter</h2>
          <p>
            Stay updated with our latest events and announcements. Subscribe by
            providing your details:
          </p>
          <form
            action="/subscribe"
            method="post"
            id="subscribeForm"
            className="mb-4"
            onSubmit={validateForm}
          >
            <label htmlFor="fullname" className="block mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full rounded-md border border-gray-300 p-2 mb-2"
              required
            />
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 p-2 mb-2"
              required
            />
            <label htmlFor="university" className="block mb-2">
              University:
            </label>
            <input
              type="text"
              id="university"
              name="university"
              className="w-full rounded-md border border-gray-300 p-2 mb-2"
            />
            {/* Add more input fields as needed */}
            <input
              type="submit"
              value="Subscribe"
              className="bg-black text-white rounded-md px-4 py-2 cursor-pointer btn hover:bg-gray-800 transition duration-300"
            />
          </form>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white text-center py-2 rounded-md">
          <p>&copy; 2023 Student Community. All rights reserved.</p>
        </footer>
      </main>
    </body>
  );
}

// Moved validateForm function outside of the component
function validateForm(event) {
  var fullName = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;

  // Basic validation - check if Full Name and Email are not empty
  if (fullName.trim() === "" || email.trim() === "") {
    alert("Full Name and Email are required fields.");
    event.preventDefault(); // Prevent form submission if validation fails
  }
}

export default Sc;
