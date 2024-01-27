import { Download } from "lucide-react";

export function Content() {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col gap-4 pt-20 md:flex-row md:p-20">
        <section className="w-2/3 self-center border border-[#FE4F60] rounded-xl p-10 flex flex-col items-center gap-4 md:w-1/3">
          <h1 className="text-4xl font-light text-zinc-600 tracking-[1rem]">
            POMO
          </h1>
          <img src="/icons/logo-pomo.png" />
          <button className="bg-white text-black py-4 px-6 rounded-full flex gap-4 items-center text-center">
            <Download className="w-16 h-16 lg:w-5 lg:h-5" color="#FE4F60" />
            <a href="https://raw.githubusercontent.com/devcanovas/pomov2/master/pomov2_0.0.0_x64_en-US.msi">
              Download POMO - vBeta 0.1
            </a>
          </button>
        </section>

        <section className="w-2/3 self-center md:w-1/3 flex justify-center">
          <img src="/images/pomo-ss.png" className="rounded-xl shadow-lg" />
        </section>

        <section className="w-2/3 self-center md:w-1/3">
          <h2 className="font-bold">
            Hi! 👋🏻 My name is Matheus Canovas from devcanovas.
          </h2>
          <p className="text-justify">
            I developed this Pomodoro application using modern technologies to
            optimize time management and boost productivity. The application was
            built using the React library, ensuring a responsive and efficient
            user experience.
          </p>
        </section>
      </div>
    </main>
  );
}
