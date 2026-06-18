import "../App.css";
export const Contact = () => {
  return (
    <div
      id="contact"
      className="h-full w-screen bg-(--color-heading) p-5 flex flex-col md:flex-row gap-6 text-white"
    >
      <div className="h-full flex flex-col text-center md:max-w-1/2 gap-10">
        <h1 className="font-heading text-[40px] md:text-[50px] lg:text-[60px]">
          Get in touch!
        </h1>
        <div className="flex flex-col gap-5 font-text">
          <p>Contact : +1 (234) 567-890</p>
          <p>Mail : reservations@aurelia.com</p>
          <p>123 Oceanfront Drive Azure Coast California, USA</p>
          <p>24/7 Guest Assistance</p>
          <p>
            Whether you're planning a romantic getaway, a family retreat, or a
            special celebration, our team is here to assist you every step of
            the way.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <form
          className="max-w-lg bg-blue-300 p-6 rounded-lg shadow-md"
          aria-label="Inquiry Form"
        >
          <h2 className="font-heading text-[40px] md:text-[50px] lg:text-[60px] mb-4">
            Inquiry Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Check-In Date
              </label>
              <input
                type="date"
                name="checkIn"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Check-Out Date
              </label>
              <input
                type="date"
                name="checkOut"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              min="1"
              placeholder="Number of Guests"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your stay preferences..."
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
