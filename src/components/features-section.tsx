import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Глубокая трансформация",
    description: "Практические инструменты для работы с внутренними блоками, убеждениями и паттернами, которые мешают профессиональному росту.",
    icon: "brain",
    badge: "Основа",
  },
  {
    title: "Экспертное сообщество",
    description: "Живое пространство для обмена опытом с коллегами — психологами, коучами, терапевтами и другими специалистами помогающих профессий.",
    icon: "link",
    badge: "Сообщество",
  },
  {
    title: "Рост практики",
    description: "Конкретные методики для привлечения клиентов, масштабирования услуг и выхода на новый уровень дохода.",
    icon: "target",
    badge: "Результат",
  },
  {
    title: "Авторские методы",
    description: "Уникальная система практик, разработанная специально для помогающих профессионалов с учётом специфики их работы.",
    icon: "zap",
    badge: "Авторский",
  },
  {
    title: "Личная проработка",
    description: "Индивидуальный путь трансформации с поддержкой на каждом этапе — от осознания до устойчивых изменений.",
    icon: "globe",
    badge: "Личное",
  },
  {
    title: "Проверенный результат",
    description: "Методология, основанная на реальных кейсах сотен специалистов, уже прошедших трансформацию в Портале.",
    icon: "lock",
    badge: "Гарантия",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что вы получите в Портале</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Практикум создан для тех, кто помогает другим расти — и сам готов выйти на новый уровень
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#10004;"}
                    {feature.icon === "globe" && "&#127775;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#129309;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
