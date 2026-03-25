// Слайд 14: Ведущие практикума
export function TestimonialsSection() {
  const experts = [
    {
      photo: "https://cdn.poehali.dev/projects/2cdac4af-e281-41d8-81f9-cde229e2653a/bucket/2ec9940b-5058-435f-9a1e-79f7c6ee19be.jpg",
      name: "Елена",
      title: "Мастер Рей Ки До Сатори, целитель, регрессолог",
      works: ["родовыми программами", "глубинным очищением", "состояниями кризиса и истощения"],
    },
    {
      photo: "https://cdn.poehali.dev/projects/2cdac4af-e281-41d8-81f9-cde229e2653a/bucket/b2b3494d-c64e-421a-9b43-12b5a1e1f345.png",
      name: "Элла",
      title: "Целитель, энерготерапевт, ченнелер",
      works: ["кармическими узлами", "повторяющимися сценариями", "деструктивными программами", "восстановлением целостности человека"],
    },
    {
      photo: "https://cdn.poehali.dev/projects/2cdac4af-e281-41d8-81f9-cde229e2653a/bucket/058dcbc8-4810-43bc-95cf-36ea0ce294b8.png",
      name: "Максим",
      title: "Финансовый стратег",
      works: ["выходом из потолка дохода", "пересборкой роли собственника", "выстраиванием системы управления деньгами"],
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-orbitron text-center">
          Ведущие практикума
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <div key={expert.name} className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950 flex flex-col gap-4">
              <div className="w-full h-64 overflow-hidden">
                <img src={expert.photo} alt={expert.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="px-6 pb-6 flex flex-col gap-4">
                <div>
                  <p className="text-white text-xl font-bold font-orbitron">{expert.name}</p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{expert.title}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-space-mono">Работает с:</p>
                  <ul className="space-y-2">
                    {expert.works.map(w => (
                      <li key={w} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}