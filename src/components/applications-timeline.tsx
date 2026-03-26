// Слайд 10: 27–30 бонусные дни (деньги, отношения, проявленность)
// Слайд 11: Главное изменение
export function ApplicationsTimeline() {
  return (
    <>
      {/* Слайд 10 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500 text-sm uppercase tracking-widest mb-2 font-space-mono">27–30 бонусные дни</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 font-orbitron">
            Изменения после пересборки
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-black/10 rounded-xl p-6 bg-gray-50">
              <h3 className="text-black text-xl font-bold mb-6 font-orbitron">Деньги</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-space-mono">До</p>
                  <ul className="space-y-2">
                    {["нестабильный доход", "страх поднять чек", "откладывание запусков", "зависимость от одобрения"].map(i => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2"><span className="text-gray-400 mt-0.5">—</span>{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-black/10 pt-4">
                  <p className="text-red-500 text-xs uppercase tracking-widest mb-2 font-space-mono">После</p>
                  <ul className="space-y-2">
                    {["внутренняя разрешённость на больший доход", "спокойная уверенность в своей цене", "быстрые решения", "более предсказуемый доход"].map(i => (
                      <li key={i} className="text-black text-sm flex items-start gap-2"><span className="text-red-500 mt-0.5">→</span>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-black/10 rounded-xl p-6 bg-gray-50">
              <h3 className="text-black text-xl font-bold mb-6 font-orbitron">Отношения</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-space-mono">До</p>
                  <ul className="space-y-2">
                    {["эмоциональная зависимость", "повторяющиеся конфликты", "роль «спасателя»", "обиды и напряжение"].map(i => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2"><span className="text-gray-400 mt-0.5">—</span>{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-black/10 pt-4">
                  <p className="text-red-500 text-xs uppercase tracking-widest mb-2 font-space-mono">После</p>
                  <ul className="space-y-2">
                    {["чёткие границы", "спокойные отношения", "внутренняя зрелость", "исчезает необходимость доказывать свою ценность"].map(i => (
                      <li key={i} className="text-black text-sm flex items-start gap-2"><span className="text-red-500 mt-0.5">→</span>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-black/10 rounded-xl p-6 bg-gray-50">
              <h3 className="text-black text-xl font-bold mb-6 font-orbitron">Проявленность</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-space-mono">До</p>
                  <ul className="space-y-2">
                    {["страх публичности", "синдром самозванца", "постоянные сомнения", "избегание проявления"].map(i => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2"><span className="text-gray-400 mt-0.5">—</span>{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-black/10 pt-4">
                  <p className="text-red-500 text-xs uppercase tracking-widest mb-2 font-space-mono">После</p>
                  <ul className="space-y-2">
                    {["устойчивое проявление", "уверенность", "смелые решения", "масштаб перестаёт пугать"].map(i => (
                      <li key={i} className="text-black text-sm flex items-start gap-2"><span className="text-red-500 mt-0.5">→</span>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Слайд 11 */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 font-orbitron text-center">Главное изменение</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed text-center">
            После пересборки личности рост происходит:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {["не через усилие", "не через контроль", "не через мотивацию"].map(item => (
              <div key={item} className="border border-red-500/30 rounded-xl px-6 py-4 bg-red-500/5 text-red-500 font-semibold text-lg text-center">
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-base mb-6 text-center">Когда меняется внутренняя архитектура личности:</p>
          <ul className="space-y-4 max-w-md mx-auto mb-12">
            {["старые реакции исчезают", "страхи теряют власть", "прежний масштаб становится тесным"].map(item => (
              <li key={item} className="flex items-center gap-4 text-black text-xl font-semibold">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-red-500 text-xl font-bold border-l-4 border-red-500 pl-5 max-w-md mx-auto">
            Это и есть смена траектории жизни.
          </p>
        </div>
      </section>
    </>
  )
}
