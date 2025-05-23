import NavBar from "../Components/NavBar";

function Home() {
  return (
    <div className="bg-primary-dark w-full min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 font-mono flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-12">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-text-primary-dark font-bold">
              Achintya Narula
            </h1>
            <p className="mt-4 max-w-md text-text-secondary-dark text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="p-2 px-6 bg-button hover:bg-button-hover text-white text-lg sm:text-xl mt-6 rounded">
              <a href="https://www.linkedin.com/in/achintyanarula/" target="_blank">LinkedIn</a>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/logo.png"
            alt="PIC"
            className="rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
