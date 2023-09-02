import React from "react";

const Contact = () => {
  return (
    <div className="bg-fixed bg-cover bg-center p-6 border flex justify-center h-auto">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-6">Get in Touch</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-8/12 px-4">
            <div className="contact">
              <form
                className="form"
                name="enq"
                method="post"
                action="contact.php"
                onSubmit="return validation();"
              >
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      name="name"
                      className="py-2 px-4 border rounded w-full"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="py-2 px-4 border rounded w-full"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="w-full px-2 mb-4">
                    <input
                      type="text"
                      name="subject"
                      className="py-2 px-4 border rounded w-full"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="w-full px-2 mb-4">
                    <textarea
                      rows={6}
                      name="message"
                      className="py-2 px-4 border rounded resize-none w-full"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  <div className="w-full text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
