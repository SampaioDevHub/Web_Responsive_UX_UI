import Image from "next/image";
import Arrow from "@/src/presentation/assets/arrow/Arrow.png";

export default function Hero() {
  return (
    <section className="py-4 lg:pt-10">
      <div className="px-5 lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px lg:leading-[72px]">
          Comece a monitorar seu site como um profissional
        </h1>
        <p className="text-center pt-6 text-[#36485c] lg:text-[18px] lg:leading-7">
          Tenha uma visão panorâmica com nosso painel personalizável. Fique por
          dentro das coisas! Renove seu processo de trabalho com nosso recurso
          inovador. Aumente a produtividade e a eficiência!
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] shadow-2xl lg:w-fit cursor-pointer">
            Experimente grátis
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit cursor-pointer">
            Ver preços
            <span>
              <Image src={Arrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
