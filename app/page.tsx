export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[82vh] text-center px-4">
      <h1 className="text-5xl mb-8">Open Science AI Research Lab</h1>
      <p className="text-base mb-8 w-[600px] leading-[26px]">
        We are an open-source AI research company focused on enhancing
        pre-trained generative AI models. Our goal is to become the Linux of AI,
        with everything <br />
        from model weights to data pipelines fully open and accessible to all.
      </p>
      <div className="flex gap-4">
        <a href="/">
          <button className="bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
            GitHub
          </button>
        </a>
        <a href="/">
          <button className="bg-black text-white border border-[#787878] px-6 py-2 rounded-full text-base font-medium hover:bg-[#111111] transition-colors">
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
}
