import { Img } from '@/components/Img'
import { Reveal } from '@/components/Reveal'
import { useParallax } from '@/lib/useParallax'

export function BrandStory() {
  const img = useParallax<HTMLDivElement>(0.12)
  return (
    <section id="story" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift">
            <div ref={img} className="absolute inset-[-8%_0]">
              <Img file="community.png" alt="A local farmer walking along the rice terraces of Garut at sunrise" sizes="(min-width: 1024px) 45vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-3 w-44 overflow-hidden rounded-3xl border-[6px] border-cream shadow-lift sm:-right-8 sm:w-56">
            <Img file="craft.png" alt="A Garut artisan crafting leather by hand" sizes="224px" width={600} className="aspect-square w-full object-cover" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">09 — Our Story</span>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Garut has its own way of making every journey <em className="text-forest">feel personal.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                It starts with the air — cool and green, drifting down from the volcanoes at dawn. Then the rice terraces catch the light,
                the lakes go still, and the whole valley seems to slow down with you.
              </p>
              <p>
                But what people remember most is the warmth. The vendor who insists you try one more piece of dodol. The artisan who shows you
                how leather becomes a bag. The village families who still keep the old ways. The stories handed down at every
                table, over rice, sambal and something sweet.
              </p>
              <p>
                We built Garut Journey to share this place the way locals know it — honestly, slowly and with heart. Not a
                checklist of sights, but a journey you’ll still feel long after you’ve gone home.
              </p>
            </div>
            <p className="font-display mt-8 text-2xl italic text-ember">— Wilujeng sumping. Welcome to Garut.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
