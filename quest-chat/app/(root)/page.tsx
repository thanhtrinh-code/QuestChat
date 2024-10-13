

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-screen h-screen"
        style={{
          backgroundImage: `url('/15253.jpg')`, // Update this path to your actual image file
          backgroundSize: 'cover', // This ensures the image covers the entire div
          backgroundPosition: 'center', // Centers the image
        }}
        >
          <div className="w-full flex justify-end">
            <a href="/sign-in">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out">
                Sign In
              </button>
            </a>
            <a href="/sign-up">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out">
                Sign Up
              </button>
            </a>
          </div>
          <div className="text-center w-full h-full flex flex-col justify-center items-center">
            <p className="text-[3rem] font-serif">Welcome to</p>
            <h1 className="font-serif text-[9rem] text-[#8F67B7]">QuestChat</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
