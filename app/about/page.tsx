import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="flex flex-col justify-around gap-10 md:flex-row p-5">
        <div className="flex basis-1/3 flex-col content-center h-full my-auto">
          <h1 className="bold text-2xl text-center my-10">
            About our E-Commerce
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est vitae
            officia consequuntur qui saepe, impedit temporibus quis reiciendis
            a. Quisquam aperiam nisi similique tempora architecto voluptatum, a
            perferendis blanditiis illo Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae excepturi sapiente dicta
            necessitatibus cumque officiis maxime, est illo minima illum enim
            consequatur, placeat esse debitis natus! Natus explicabo voluptas
            id!
          </p>
        </div>
        <div className="basis-1/3">
          <Image
            height={400}
            width={400}
            src="/assets/images/shoppingKart.png"
            alt="nadarim"
          />
        </div>
      </section>
    </>
  );
};

export default About;
