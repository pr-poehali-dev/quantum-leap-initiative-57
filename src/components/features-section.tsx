// Слайд 2: Когда человек перерастает свою жизнь
// Слайд 3: ПОРТАЛ — пространство перехода
export function FeaturesSection() {
  return (
    <>
      {/* Слайд 2 */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-orbitron leading-tight">
            Когда человек перерастает свою жизнь
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Иногда наступает момент, когда внутри появляется ощущение: «Я могу больше, но будто что-то удерживает».
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-space-mono">Вроде бы:</p>
              <ul className="space-y-3">
                {["есть знания", "есть опыт", "есть развитие"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-space-mono">Но:</p>
              <ul className="space-y-3">
                {["доход не растёт", "проявляться страшно", "повторяются одни и те же сценарии"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-red-400 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-white text-xl font-semibold border-l-4 border-red-500 pl-5">
            Это и есть точка перехода. Именно для неё создан ПОРТАЛ.
          </p>
        </div>
      </section>

      {/* Слайд 3 */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron">
            ПОРТАЛ — это пространство перехода
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            ПОРТАЛ — это пространство, где происходит смена внутренней архитектуры личности.
          </p>
          <p className="text-gray-400 text-base mb-6">Когда меняется внутренняя позиция человека:</p>
          <ul className="space-y-4 mb-10">
            {["меняются решения", "меняются действия", "меняется сама траектория жизни"].map((item) => (
              <li key={item} className="flex items-center gap-4 text-white text-xl font-semibold">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-red-400 text-lg font-space-mono border border-red-500/30 rounded-xl p-5 bg-red-500/5">
            ПОРТАЛ — это разрыв со старой версией себя и стабилизация нового уровня личности.
          </p>
        </div>
      </section>
    </>
  )
}
