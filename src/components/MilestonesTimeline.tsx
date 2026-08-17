import type { Milestone } from '../data/content'

const LINE = '#5ec8f0'

function BranchArrow({ direction }: { direction: 'up' | 'down' }) {
  const isUp = direction === 'up'
  return (
    <svg
      width="28"
      height="58"
      viewBox="0 0 28 58"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {isUp ? (
        <>
          <path d="M14 0L27 18H1L14 0Z" fill={LINE} />
          <rect x="10.5" y="16" width="7" height="42" fill={LINE} />
        </>
      ) : (
        <>
          <rect x="10.5" y="0" width="7" height="42" fill={LINE} />
          <path d="M14 58L27 40H1L14 58Z" fill={LINE} />
        </>
      )}
    </svg>
  )
}

function MilestoneCopy({
  milestone,
  align = 'center',
}: {
  milestone: Milestone
  align?: 'center' | 'left' | 'right'
}) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'ml-auto text-right' : 'mx-auto text-center'

  return (
    <div className={`max-w-[9rem] ${alignClass}`}>
      <p className="text-base font-extrabold leading-none tracking-wide text-white md:text-[17px]">
        {milestone.period}
      </p>
      <p className="mt-1.5 text-[10px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-white md:text-[11px]">
        {milestone.title}
      </p>
    </div>
  )
}

export default function MilestonesTimeline({ items }: { items: Milestone[] }) {
  return (
    <section
      className="overflow-hidden bg-[#0b2d6b] py-16 md:py-20"
      aria-labelledby="milestones-heading"
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <h2
          id="milestones-heading"
          className="text-center text-[1.75rem] font-extrabold uppercase tracking-[0.28em] text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]"
        >
          Milestones
        </h2>

        {/* Mobile / tablet: vertical alternating timeline */}
        <ol className="relative mx-auto mt-12 max-w-md lg:hidden">
          <div
            className="absolute bottom-2 left-1/2 top-2 w-[6px] -translate-x-1/2"
            style={{ backgroundColor: LINE }}
            aria-hidden="true"
          />
          {items.map((milestone, index) => {
            const isLeft = index % 2 === 0
            return (
              <li key={`${milestone.period}-${milestone.title}`} className="relative grid grid-cols-2 py-5">
                <div className={`pr-8 ${isLeft ? '' : 'invisible'}`}>
                  {isLeft && <MilestoneCopy milestone={milestone} align="right" />}
                </div>
                <div className={`pl-8 ${isLeft ? 'invisible' : ''}`}>
                  {!isLeft && <MilestoneCopy milestone={milestone} align="left" />}
                </div>
                <span
                  className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ backgroundColor: LINE }}
                  aria-hidden="true"
                />
              </li>
            )
          })}
        </ol>

        {/* Desktop: horizontal timeline matching the attached graphic */}
        <div className="mt-14 hidden lg:block">
          <div className="relative mx-auto max-w-6xl px-8">
            <div
              className="pointer-events-none absolute left-2 right-12 top-1/2 h-[7px] -translate-y-1/2"
              style={{ backgroundColor: LINE }}
              aria-hidden="true"
            />
            <svg
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              aria-hidden="true"
            >
              <path d="M0 2L34 16L0 30V2Z" fill={LINE} />
            </svg>

            <ol className="relative grid grid-cols-7">
              {items.map((milestone, index) => {
                const isTop = index % 2 === 0
                return (
                  <li
                    key={`${milestone.period}-${milestone.title}`}
                    className="flex flex-col items-center"
                  >
                    <div className="flex h-40 w-full flex-col items-center justify-end">
                      {isTop && (
                        <>
                          <MilestoneCopy milestone={milestone} />
                          <BranchArrow direction="up" />
                        </>
                      )}
                    </div>

                    <div className="relative h-[7px] w-full" aria-hidden="true" />

                    <div className="flex h-40 w-full flex-col items-center justify-start">
                      {!isTop && (
                        <>
                          <BranchArrow direction="down" />
                          <MilestoneCopy milestone={milestone} />
                        </>
                      )}
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
