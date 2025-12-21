"use client";

const logos = [
  "/puruthvienterprise/logos/client-img-1.jpg",
  "/puruthvienterprise/logos/client-img-2.jpg",
  "/puruthvienterprise/logos/client-img-3.jpg",
  "/puruthvienterprise/logos/client-img-4.jpg",
  "/puruthvienterprise/logos/client-img-5.jpg",
  "/puruthvienterprise/logos/client-img-6.jpg",
  "/puruthvienterprise/logos/client-img-7.jpg",
  "/puruthvienterprise/logos/client-img-8.jpg",
  "/puruthvienterprise/logos/client-img-9.jpg",
  "/puruthvienterprise/logos/client-img-10.jpg",
  "/puruthvienterprise/logos/client-img-11.jpg",
  "/puruthvienterprise/logos/client-img-12.jpg",
  "/puruthvienterprise/logos/client-img-13.jpg",
  "/puruthvienterprise/logos/client-img-14.jpg",
  "/puruthvienterprise/logos/client-img-15.jpg",
  "/puruthvienterprise/logos/client-img-16.jpg",
  "/puruthvienterprise/logos/client-img-17.jpg",
  "/puruthvienterprise/logos/client-img-18.jpg",
  "/puruthvienterprise/logos/client-img-19.jpg",
  "/puruthvienterprise/logos/client-img-20.jpg",
  "/puruthvienterprise/logos/client-img-21.jpg",
  "/puruthvienterprise/logos/client-img-22.jpg",
  "/puruthvienterprise/logos/client-img-23.jpg",
  "/puruthvienterprise/logos/client-img-24.jpg",
  "/puruthvienterprise/logos/client-img-25.jpg",
];

const LogoSection = () => {
  return (
    <section className="py-12 bg-black dark:bg-gray-900 overflow-hidden">
      <div className="relative w-full">
        <div className="animate-marquee flex items-center space-x-16 min-w-full">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="opacity-100 hover:opacity-70 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Brand Logo ${index + 1}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
