export function CTASection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-red-500 text-sm uppercase tracking-widest mb-4 font-space-mono">Старт практикума</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">📅 6 апреля</h2>
        <p className="text-gray-300 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Количество мест ограничено форматом глубокой работы.
        </p>
        <div className="border border-red-500/30 rounded-2xl p-8 bg-red-500/5 max-w-xl mx-auto mb-10">
          <p className="text-white text-lg leading-relaxed">
            ПОРТАЛ не гарантирует лёгкую жизнь.<br />
            Но он делает почти невозможным возвращение к старой версии себя.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-300 text-xl leading-relaxed">
            Если вы чувствуете, что старый уровень завершён —
          </p>
          <p className="text-red-400 text-2xl font-semibold mt-4">
            возможно, это пространство для вас.
          </p>
        </div>
      </div>
    </section>
  )
}