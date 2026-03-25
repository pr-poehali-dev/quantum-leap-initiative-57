// Слайд 12: Формат работы
// Слайд 13: Тарифы
export function SafetySection() {
  return (
    <>
      {/* Слайд 12 */}
      <section id="safety" className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-orbitron">Формат работы</h2>
          <ul className="space-y-5 mb-10">
            {[
              "30 дней глубокой работы",
              "онлайн-пространство",
              "авторские практики-медитации",
              "энерго-вибрационные сеансы по авторскому методу",
              "сопровождение",
              "индивидуальные сессии",
            ].map(item => (
              <li key={item} className="flex items-center gap-4 text-white text-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="border-l-4 border-red-500 pl-5">
            <p className="text-gray-300 text-lg leading-relaxed">
              Это не самостоятельное обучение.<br />
              Это трансформационный процесс под руководством.
            </p>
          </div>
        </div>
      </section>

      {/* Слайд 13 */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-orbitron text-center">Тарифы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Стандарт */}
            <div className="border border-white/10 rounded-2xl p-8 bg-black flex flex-col gap-6">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-1 font-space-mono">Стандарт</p>
                <p className="text-white text-4xl font-bold font-orbitron">50 000 ₽</p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "30 дней практикума",
                  "групповой формат",
                  "практики-медитации",
                  "энерго-вибрационные сеансы",
                  "сопровождение в чате",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* VIP */}
            <div className="border border-red-500/50 rounded-2xl p-8 bg-red-500/5 flex flex-col gap-6 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full font-space-mono uppercase tracking-widest">VIP</span>
              </div>
              <div>
                <p className="text-red-400 text-sm uppercase tracking-widest mb-1 font-space-mono">VIP</p>
                <p className="text-white text-4xl font-bold font-orbitron">100 000 ₽</p>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "всё из тарифа Стандарт",
                  "индивидуальное сопровождение",
                  "личные разборы",
                  "более глубокая работа с запросом",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-white text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
