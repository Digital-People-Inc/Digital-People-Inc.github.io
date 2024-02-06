export default function Home() {
  return (
    <div className="min-h-screen p-20">
      <section className="mb-10">
        <h2 className="flex justify-center text-3xl font-semibold mb-3">
          About Us
        </h2>
        <p className="text-2xl flex justify-center">
          Digital People Inc is a Bay Area-based company specializing in the
          development of retinal projection augmented reality headsets. Our
          cutting-edge technology harnesses computer vision and machine learning
          to provide immersive AR experiences.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="flex justify-center text-3xl font-semibold mb-3">
          Our Products
        </h2>
        <p className="text-2xl">
          We offer a range of AR headsets that provide seamless integration with
          various industries, including gaming, healthcare, education, and more.
          Our headsets are designed to enhance user experiences and unlock new
          possibilities.
        </p>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold mb-3">Contact Us</h2>
        <p className="text-2xl ">
          If you have any inquiries or would like to learn more about our
          products, please feel free to contact us:
        </p>
        <ul className="text-2xl mt-10">
          <li>Email: info@digitalpeople.dev</li>
          <li>Phone: +1 123-456-7890</li>
          <li>Address: 21250 Stevens Creek Blvd, Cupertino, CA 95014</li>
        </ul>
      </section>
    </div>
  );
}
