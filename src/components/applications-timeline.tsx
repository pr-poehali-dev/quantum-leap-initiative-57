import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Осознание и диагностика",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Первый шаг — честный взгляд внутрь. Вы определяете, что именно сдерживает вас в профессии:
            страхи, ограничивающие убеждения, выгорание или барьеры в отношениях с клиентами.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Диагностика точки роста и скрытых блоков
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Карта личных ограничений как специалиста
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Постановка вектора трансформации
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Глубокая трансформация",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Интенсивная работа с корневыми паттернами через авторские практики. Вы перестраиваете внутреннюю
            систему убеждений и создаёте новую профессиональную идентичность.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Работа с синдромом самозванца
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Трансформация отношения к деньгам и ценности
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Восстановление ресурсного состояния
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Рост и масштаб",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Инструменты для выхода на новый уровень практики. Вы выстраиваете устойчивый поток клиентов,
            повышаете чек и создаёте продукты, которые работают без вашего постоянного присутствия.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Стратегия привлечения и удержания клиентов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Упаковка экспертизы в продукт или программу
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Масштабирование практики без выгорания
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Путь через Портал</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Трёхэтапная система трансформации, которая переводит специалиста помогающей профессии
            из состояния «застрял» в устойчивый профессиональный рост.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
