export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[82vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl mb-8">Our Mission</h1>
      <p className="text-base mb-8 w-full max-w-[600px] leading-[26px]">
        We are an open-source AI research company dedicated to advancing
        pre-trained generative AI models. Our mission is to become the Linux of
        AI, making everything from model architectures and weights to training
        data <br /> and development pipelines fully open, transparent, and
        accessible to all.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/mithrilai">
          <button className="bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
            GitHub
          </button>
        </a>
        <a href="https://discord.gg/jgy376Jyka">
          <button className="bg-black text-white border border-[#787878] px-6 py-2 rounded-full text-base font-medium hover:bg-[#111111] transition-colors">
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
}
