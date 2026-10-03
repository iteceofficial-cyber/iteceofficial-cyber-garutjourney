import { Mountain, UtensilsCrossed, Landmark, HeartHandshake } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/Reveal'

const features = [
  { icon: Mountain, title: 'Nature', text: 'Explore mountains, lakes, beaches, hot springs, and beautiful landscapes.' },
  { icon: UtensilsCrossed, title: 'Culinary', text: 'Taste authentic Sundanese cuisine and famous Garut specialties.' },
  { icon: Landmark, title: 'Culture & Heritage', text: 'Discover local traditions, historical sites, crafts, and cultural experiences.' },
  { icon: HeartHandshake, title: 'Local Experiences', text: 'Meet local communities and experience Garut beyond the typical tourist route.' },
]

export function WhyGarut() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="01 — Why Garut"
            title={
              <>
                Garut is more than <em className="text-forest">a destination.</em>
              </>
            }
          />
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-ink/70 lg:pb-2">
              It is a place where nature, culture, food, and local stories come together to create unforgettable journeys.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="font-display absolute right-6 top-5 text-5xl text-cream-200 transition group-hover:text-ember/25">0{i + 1}</span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-cream transition duration-500 group-hover:rotate-[-6deg] group-hover:bg-ember">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-8 text-2xl text-ink">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/65">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
