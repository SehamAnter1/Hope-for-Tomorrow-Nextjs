'use client';

import Image from 'next/image';

export default function Hero() {
  return (
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 ">
          <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold leading-snug">
                  Make changes and <br /> help the world
              </h1>
              <p className="text-gray-600">
                  Hope for Tomorrow non-profit organization that collaborates with volunteers to deliver humanitarian
                  aid and disaster relief to vulnerable communities.
              </p>
              <div className="flex gap-4">
                  <button className="bg-primary text-white py-2 px-6 rounded-md font-semibold">Donate now!</button>
                  <button className="border border-primary text-primary py-2 px-6 rounded-md font-semibold">
                      Learn more
                  </button>
              </div>
          </div>

          <Image src="woman.svg" alt="Hero" width={231} height={400} />
      </section>
  );
}
