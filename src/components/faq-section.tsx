import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Слайд 15: FAQ
export function FAQSection() {
  const P = () => <><span>ПОР</span><span className="text-red-500">ТАЛ</span></>
  const PW = () => <span className="text-white">ПОРТАЛ</span>

  const faqs = [
    {
      question: <>Для кого подходит практикум <PW />?</>,
      answer: "Практикум создан для специалистов помогающих профессий: психологов, коучей, терапевтов, консультантов, социальных работников, тренеров и всех, кто работает с людьми и хочет выйти на новый уровень в профессии и жизни.",
    },
    {
      question: "Это обучение или трансформация?",
      answer: <><P /> — это трансформационный практикум, не обучение. Работа идёт с внутренними механизмами, которые формируют реальность. Вы уйдёте с изменёнными установками и устойчивым новым уровнем личности.</>,
    },
    {
      question: "Сколько времени нужно уделять практикуму?",
      answer: "Практикум длится 30 дней. Формат онлайн позволяет совмещать его с текущей практикой и личной жизнью.",
    },
    {
      question: "В чём разница между тарифами Стандарт и VIP?",
      answer: "Стандарт — групповой формат с полным набором практик и сопровождением в чате. VIP включает всё из Стандарта плюс индивидуальное сопровождение и личные разборы для более глубокой работы с вашим запросом.",
    },
    {
      question: "Когда старт и сколько мест?",
      answer: "Старт практикума — 6 апреля. Количество мест ограничено форматом глубокой работы.",
    },
    {
      question: <>Гарантирует ли <PW /> результат?</>,
      answer: <><PW /> не гарантирует лёгкую жизнь. Но он делает почти невозможным возвращение к старой версии себя.</>,
    },
  ]

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о практикуме <P />.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}