import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">
      <main className="flex flex-col gap-6 sm:gap-8 items-center text-center w-full max-w-3xl mx-auto px-4">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Ahm & Co. Advocates"
          width={500}
          height={200}
          priority
          className="w-[200px] sm:w-[300px] md:w-[400px] h-auto"
        />

        {/* Coming Soon Text */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#ff6b6b]">
          Coming Soon
        </h1>
        
        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Email Notification Form */}
        <div className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-[#1a1a1a] border border-gray-800 focus:outline-none focus:border-[#ff6b6b]"
            />
            <button className="px-6 py-2 bg-[#ff6b6b] text-white rounded hover:bg-[#ff5252] transition-colors">
              Notify Me
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-serif font-medium text-[#ff6b6b]">Intelligent Legal Solutions</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl font-sans leading-relaxed">
            At Ahm & Co. Advocates, we combine legal expertise with innovative thinking to deliver 
            intelligent solutions for our clients. Our team of dedicated attorneys is committed to 
            providing exceptional legal services across corporate law, litigation, and intellectual property.
          </p>
        </div>
      </main>
    </div>
  );
}
