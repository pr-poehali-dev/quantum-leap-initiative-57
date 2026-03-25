// Слайд 6: Структура практикума (3 этапа)
// Слайд 7: 1–7 день
// Слайд 8: 8–14 день
// Слайд 9: 15–21 день
export function TechnologySection() {
  return (
    <>
      {/* Слайд 6 */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-space-mono">30 дней · 3 этапа</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-orbitron">
            Практикум длится 30 дней и проходит в 3 этапа трансформации
          </h2>
          <div className="space-y-6">
            {[
              { num: "1", label: "этап", title: "Разоблачение старой линии" },
              { num: "2", label: "этап", title: "Разрушение ограничений" },
              { num: "3", label: "этап", title: "Пересборка личности" },
            ].map((stage) => (
              <div key={stage.num} className="flex items-center gap-6 p-5 border border-red-500/20 rounded-xl bg-red-500/5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-red-500 flex flex-col items-center justify-center">
                  <span className="text-red-500 text-xl font-bold font-orbitron leading-none">{stage.num}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-widest font-space-mono">{stage.label}</span>
                  <p className="text-white text-xl font-semibold mt-0.5">{stage.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-400 leading-relaxed">
            Каждый этап — это глубокая работа с внутренними механизмами, которые формируют реальность.
          </p>
        </div>
      </section>

      {/* Слайд 7 */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-500 text-sm uppercase tracking-widest mb-2 font-space-mono">1–7 день</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron">
            Разоблачение старой линии
          </h2>
          <p className="text-gray-400 mb-6">Мы работаем с:</p>
          <ul className="space-y-4 mb-10">
            {[
              "диагностикой повторяющихся сценариев",
              "выявлением внутреннего потолка",
              "страхом роста и проявления",
              "личными и родовыми программами",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-white text-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
          <div className="border border-red-500/30 rounded-xl p-5 bg-red-500/5">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-space-mono">Результат</p>
            <p className="text-white text-lg">
              Ясность и понимание — что именно удерживает старую траекторию жизни.
            </p>
          </div>
        </div>
      </section>

      {/* Слайд 8 */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-500 text-sm uppercase tracking-widest mb-2 font-space-mono">8–14 день</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron">
            Разрушение ограничивающей конструкции
          </h2>
          <p className="text-gray-400 mb-6">Работаем с:</p>
          <ul className="space-y-4 mb-10">
            {[
              "бессознательными блоками",
              "запретом на деньги и видимость",
              "страхом ответственности",
              "энергетическими фиксациями",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-white text-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
          <div className="border border-red-500/30 rounded-xl p-5 bg-red-500/5">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-space-mono">Результат</p>
            <p className="text-white text-lg">
              Внутренний перелом. Уходит напряжение и сжатие. Появляется ощущение силы.
            </p>
          </div>
        </div>
      </section>

      {/* Слайд 9 */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-500 text-sm uppercase tracking-widest mb-2 font-space-mono">15–21 день</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron">
            Пересборка и стабилизация
          </h2>
          <p className="text-gray-400 mb-6">Происходит:</p>
          <ul className="space-y-4 mb-10">
            {[
              "формирование новой идентичности",
              "выравнивание энергосистемы",
              "стабилизация перед ростом",
              "фиксация новой линии решений",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-white text-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
          <div className="border border-red-500/30 rounded-xl p-5 bg-red-500/5">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-space-mono">Результат</p>
            <p className="text-white text-lg">
              Устойчивость, внутренняя тишина, готовность действовать из новой позиции.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
