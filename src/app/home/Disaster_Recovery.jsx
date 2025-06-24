import Image from 'next/image';

export default function Disaster_Recovery() {
  return (
    <section className="flex container flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-[48px] mb-4">Disaster Recovery</h2>
        <p className="text-gray-600 mb-6">
          Hope for Tomorrow makes it easy to donate to reliable, locally-led disaster relief and recovery efforts around the world.
        </p>
        <div className="flex gap-4">
                    <button className="bg-primary text-white py-2 px-6 rounded-md font-semibold">Donate now!</button>
                    <button className="border border-primary text-primary py-2 px-6 rounded-md font-semibold">
                        Learn more
                    </button>
                </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
        <Image
          src="/world-map-outline.png"
          alt="World map"
          width={600}
          height={400}
          className="w-full h-auto"
        />

        {/* Positioned Photos */}
        <Image
          src="/person1.png"
          alt="Disaster 1"
          width={60}
          height={60}
          className="absolute top-[10%] left-[20%] rounded-lg border-4 border-indigo-700"
        />
        <Image
          src="/person2.png"
          alt="Disaster 2"
          width={60}
          height={60}
          className="absolute top-[10%] right-[10%] rounded-lg border-4 border-indigo-700"
        />
        <Image
          src="/person3.png"
          alt="Disaster 3"
          width={60}
          height={60}
          className="absolute bottom-[20%] left-[25%] rounded-lg border-4 border-indigo-700"
        />
        <Image
          src="/person1.png"
          alt="Disaster 4"
          width={60}
          height={60}
          className="absolute bottom-[40%] right-[25%] rounded-lg border-4 border-indigo-700"
        />
      </div>
    </section>
  );
}
