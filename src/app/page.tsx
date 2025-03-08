import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <div className="snap-center relative bg-pink-950 flex flex-col items-center justify-center py-16 gap-6 p-4 h-screen">
        <div className="text-white flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            Mauritania
          </h1>
          <p className="text-base">Com todo meu amor e carinho <span className="animate-pulse">❤️</span></p>
        </div>
        <Image 
          className="rounded-2xl shadow-2xl w-full"
          src={"/IMG_6429.jpg"}
          width={300}
          height={300}
          alt="imagem"
        />
        <p className="text-white w-full">
          Meu amor, você é a minha musa fitness! 
          Minha maior inspiração dentro e fora da academia. 
          Sua disciplina, e sua dedicação (no Gymrats) me enchem de orgulho todos os dias. 
          Te admiro demais e sou grato por compartilhar essa vida com você!
        </p>
        <Image className="w-full absolute bottom-[-5px] left-0" src={"/wave.png"} width={100} height={100} alt="wave"></Image>
      </div>
      <div className="snap-center relative bg-white flex flex-col items-center justify-center py-8 gap-6 p-4 h-screen">    
        <Image 
          className="rounded-2xl shadow-2xl w-full"
          src={"/trabalho.jpg"}
          width={300}
          height={300}
          alt="imagem"
        />
        <p className="text-pink-950">
          Você não é apenas incrível dentro de casa, mas também brilha em tudo que faz! 
          Sua dedicação, inteligência e talento fazem de você a melhor bibliotecária do mundo. 
          Tenho orgulho de ver o quanto você se esforça e conquista seus objetivos. 
        </p>
      </div>
      <div className="snap-center relative bg-pink-950 flex flex-col items-center justify-center py-16 gap-6 p-4 h-screen">
        <Image 
          className="rounded-2xl shadow-2xl w-full"
          src={"/IMG_7158.jpg"}
          width={300}
          height={300}
          alt="imagem"
        />
        <p className="text-white">
          Ser seu namorado é o maior presente da minha vida. 
          Você é mais do que minha companheira, é minha melhor amiga, 
          meu porto seguro e a pessoa que faz qualquer dia comum se tornar especial. 
          Seu amor, carinho e paciência* (nem sempre) tornam minha vida completa. 
          Sou um homem de sorte por ter você ao meu lado!
        </p>
        <Image className="w-full absolute top-[-5px] left-0" src={"/wave-reverse.png"} width={100} height={100} alt="wave"></Image>
        <Image className="w-full absolute bottom-[-5px] left-0" src={"/wave.png"} width={100} height={100} alt="wave"></Image>
      </div>
      <div className="snap-center h-screen relative bg-white flex flex-col items-center justify-center pt-10 pb-28 gap-10 p-4">
        <h2 className="text-5xl font-bold text-center text-pink-950 py-4">Feliz dia das mulheres!</h2>
        <Image 
          className="rounded-2xl shadow-2xl w-full"
          src={"/8374095_114d5.gif"}
          width={300}
          height={300}
          alt="imagem"
        />
      </div>
    </main>
  );
}
