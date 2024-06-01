export default function Content() {
  return (
    <div className="bg-[url('/assets/bg.png')] flex justify-center items-center px-24 gap-4 mt-0">
      <div className="w-1/2">
        <h1 className="text-crisisGreen text-9xl">50%</h1>
        <p className="text-crisisGreen text-2xl">
          Of agricultural soils are already degraded
        </p>
        <hr className="border-2 my-4"></hr>
        <p>
          <span className="text-2xl font-bold">Why Save Forest?</span> <br></br>{" "}
          Save Forest is a global movement launched by UN, to address the
          climate crisis by bringing together people from around the world to
          stand up for climate change, and supporting leaders of all nations to
          institute national policies and actions toward increasing the organic
          content in cultivable nature.
        </p>
      </div>
      <div className="w-1/2">
        {/* <h2 className="font-bold text-1xl uppercase">
          Forest Protection Message
        </h2> */}
        <div className="my-4 flex place-items-center">
          <video autoPlay loop muted controls={false} className="w-full h-full">
            <source
              src="https://moonbase.nyc3.cdn.digitaloceanspaces.com/ADMILK/milkball/milkball.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <div>
          <p>
            ABOUT SADHGURU The Save Soil movement has been initiated by
            Sadhguru, a yogi, mystic and visionary.
          </p>
        </div> */}
      </div>
    </div>
  );
}
