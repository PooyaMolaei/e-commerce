import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <h1>About our E-Commerce</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est vitae
            officia consequuntur qui saepe, impedit temporibus quis reiciendis
            a. Quisquam aperiam nisi similique tempora architecto voluptatum, a
            perferendis blanditiis illo
          </p>
        </div>
        <div>
          <Image height={500} width={500} src="" alt="nadarim" />
        </div>
      </section>
    </>
  );
};

export default About;
