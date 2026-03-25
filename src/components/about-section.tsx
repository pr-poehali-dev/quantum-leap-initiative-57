// Слайд 4: Для кого подойдёт ПОРТАЛ
// Слайд 5: Вы можете ощущать
export function AboutSection() {
  return (
    <>
      {/* Слайд 4 */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-orbitron">
            ПОР<span className="text-red-500">ТАЛ</span> подойдёт вам, если вы:
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-5 font-space-mono">Кто вы:</p>
              <ul className="space-y-4">
                {[
                  "эксперт или специалист помогающей профессии",
                  "коуч, психолог или энергопрактик",
                  "человек, ищущий свой путь и готовый к изменениям",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-5 font-space-mono">И вы чувствуете:</p>
              <ul className="space-y-4">
                {[
                  "внутренний потолок",
                  "завершённость старого уровня",
                  "желание перейти на новый масштаб жизни",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-red-400 text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Слайд 5 */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-orbitron">
            Вы можете ощущать:
          </h2>
          <ul className="space-y-5">
            {[
              "повторяющиеся жизненные сценарии",
              "страх выйти на новый уровень дохода",
              "выгорание и усталость",
              "страх проявления и публичности",
              "ощущение, что старая версия себя больше не работает",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-white text-lg leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 border-l-4 border-red-500 pl-5">
            <p className="text-red-400 text-xl font-semibold">
              Если это откликается — вы находитесь в точке перехода.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}