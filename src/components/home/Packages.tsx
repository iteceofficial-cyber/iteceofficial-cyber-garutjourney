import { Check, Clock, MapPin, Users } from 'lucide-react'
import { useState } from 'react'
import { BookLink, btn } from '@/components/BookLink'
import { Reveal, SectionHeading } from '@/components/Reveal'
import { packages } from '@/data/tours'
import { Chip } from './Destinations'

const durationFilters = [
  { label: 'Any length', value: 0 },
  { label: '1 Day', value: 1 },
  { label: '2 Days', value: 2 },
  { label: '3 Days', value: 3 },
] as const
const styleFilters = ['All styles', 'Nature', 'Culinary', 'Culture', 'Family', 'Adventure', 'Romantic'] as const

export function Packages() {
  const [days, setDays] = useState<number>(0)
  const [style, setStyle] = useState<string>('All styles')
  const list = packages.filter((p) => (days === 0 || p.durationDays === days) && (style === 'All styles' || p.styles.includes(style)))

  return (
    <section id="packages" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="07 — Tour Packages"
          title="Pick your pace"
          intro="Three ways to experience Garut — from a focused day trip to a private, unhurried escape. Groups, families and company outings welcome."
        />

        <Reveal delay={100} className="mt-10 flex flex-col items-center gap-3">
          <div role="group" aria-label="Filter by duration" className="no-scrollbar flex max-w-full gap-2 overflow-x-auto px-1 pb-1">
            {durationFilters.map((f) => (
              <Chip key={f.value} active={days === f.value} onClick={() => setDays(f.value)}>
                {f.label}
              </Chip>
            ))}
          </div>
          <div role="group" aria-label="Filter by travel style" className="no-scrollbar flex max-w-full gap-2 overflow-x-auto px-1 pb-1">
            {styleFilters.map((s) => (
              <Chip key={s} active={style === s} onClick={() => setStyle(s)}>
                {s}
              </Chip>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3" aria-live="polite">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <article
                className={`relative flex h-full flex-col rounded-[2rem] p-8 transition duration-500 hover:-translate-y-1.5 ${
                  p.featured ? 'bg-forest text-cream shadow-lift lg:-my-4 lg:py-12' : 'bg-white text-ink shadow-soft hover:shadow-lift'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-ember px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-white">Most loved</span>
                )}
                <h3 className="font-display text-3xl">{p.name}</h3>
                <p className={`mt-1 ${p.featured ? 'text-cream/70' : 'text-ink/60'}`}>{p.tagline}</p>
                <p className="mt-6">
                  <span className="font-display text-2xl">{p.price}</span>
                </p>

                <dl className={`mt-6 space-y-3 border-y py-6 text-sm ${p.featured ? 'border-white/15' : 'border-ink/10'}`}>
                  <div className="flex gap-3">
                    <dt><Clock className="h-4 w-4 text-ember" aria-label="Duration" /></dt>
                    <dd>{p.duration}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt><MapPin className="h-4 w-4 text-ember" aria-label="Destinations" /></dt>
                    <dd>{p.destinations.join(', ')}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt><Users className="h-4 w-4 text-ember" aria-label="Group size" /></dt>
                    <dd>{p.groupSize}</dd>
                  </div>
                </dl>

                <div className="mt-6 grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-[0.2em] ${p.featured ? 'text-cream/50' : 'text-ink/45'}`}>Activities</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.activities.map((a) => (
                        <li key={a} className={`rounded-full px-3 py-1 text-xs ${p.featured ? 'bg-white/10' : 'bg-cream'}`}>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-[0.2em] ${p.featured ? 'text-cream/50' : 'text-ink/45'}`}>Included</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {p.included.map((x) => (
                        <li key={x} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <BookLink tour={p.name} className={`${p.featured ? btn.primary : btn.dark} mt-8 w-full`}>
                  Book {p.name}
                </BookLink>
              </article>
            </Reveal>
          ))}
          {list.length === 0 && (
            <div className="col-span-full rounded-[2rem] bg-white p-10 text-center shadow-soft">
              <p className="font-display text-2xl">No package matches that combination — yet.</p>
              <p className="mt-2 text-ink/60">Tell us what you have in mind and we’ll tailor one for you.</p>
              <BookLink tour="Custom itinerary" className={`${btn.dark} mt-6`}>
                Request a custom tour
              </BookLink>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
