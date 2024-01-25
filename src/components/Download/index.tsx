export function Download() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <img src="/icons/logo-pomo.png" />
      <h1 className="text-2xl text-zinc-500">POMO - vBeta 0.1</h1>
      <button className="bg-[#FE4F60] p-4 rounded-full">
        <a href="https://raw.githubusercontent.com/devcanovas/pomov2/master/pomov2_0.0.0_x64_en-US.msi">
          Download POMO - vBeta 0.1
        </a>
      </button>
    </div>
  );
}
