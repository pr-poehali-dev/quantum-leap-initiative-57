import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Для кого подходит практикум Портал?",
      answer:
        "Практикум создан для специалистов помогающих профессий: психологов, коучей, терапевтов, консультантов, социальных работников, тренеров и всех, кто работает с людьми и хочет выйти на новый уровень в профессии.",
    },
    {
      question: "Это обучение или терапия?",
      answer:
        "Портал — это практикум, который сочетает трансформационные практики и профессиональные инструменты роста. Это не терапия, но работа с собой происходит глубокая. Вы уйдёте с изменёнными установками и конкретными инструментами для практики.",
    },
    {
      question: "Сколько времени нужно уделять практикуму?",
      answer:
        "Рекомендуем закладывать 3–5 часов в неделю. Формат практикума позволяет совмещать его с текущей практикой и личной жизнью — без резких перемен в расписании.",
    },
    {
      question: "Что будет после окончания практикума?",
      answer:
        "Вы получаете доступ к закрытому сообществу выпускников, материалам практикума навсегда и возможность участвовать в поддерживающих сессиях. Мы сопровождаем ваш рост и после завершения основной программы.",
    },
    {
      question: "Есть ли гарантия результата?",
      answer:
        "Результат зависит от вашей вовлечённости, но методология практикума проверена на сотнях специалистов. Мы уверены в эффективности программы и готовы обсудить индивидуально, если у вас остались сомнения.",
    },
    {
      question: "Как записаться в практикум?",
      answer:
        "Нажмите кнопку «Записаться» и оставьте заявку. Мы свяжемся с вами, ответим на все вопросы и подберём оптимальный формат участия.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о практикуме Портал, формате и результатах.
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
