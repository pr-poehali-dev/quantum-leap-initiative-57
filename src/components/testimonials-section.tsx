import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Соколова",
    role: "Психолог, частная практика",
    avatar: "/professional-woman-scientist.png",
    content:
      "После Портала я наконец-то подняла чек в 2,5 раза — и клиенты стали приходить сами. Исчез страх, что я «беру слишком много».",
  },
  {
    name: "Андрей Климов",
    role: "Коуч по карьере и лидерству",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Портал помог мне увидеть, где я саботировал собственный рост. За 3 месяца после практикума я запустил групповую программу и вышел на новый уровень.",
  },
  {
    name: "Марина Тихонова",
    role: "Арт-терапевт, ведущая групп",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Я наконец почувствовала себя экспертом, а не самозванцем. Портал дал инструменты и, главное, внутреннюю опору для роста.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Истории трансформации</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Специалисты, которые уже прошли через Портал и вышли на новый уровень
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
