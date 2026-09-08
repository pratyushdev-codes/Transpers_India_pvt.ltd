import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { PageHero, SectionHeading } from '../components/ui/Section'
import { contact, seo } from '../data/content'

export default function ContactPage() {
  return (
    <>
      <Seo {...seo.contact} />
      <PageHero
        title="Contact Us"
        description={contact.intro.body}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
      />

      <section className="site-section bg-white">
        <div className="container-site">
          {/* Contact details */}
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Contact Details" />
            <div className="mt-8 space-y-6 rounded-2xl border border-[#d8eee3] bg-[#f7fcf9] p-7">
              <div className="flex gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-[#0f7a4f]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f7a4f]">
                    Registered Office
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4d655a]">
                    {contact.details.registeredOffice}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-[#0f7a4f]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f7a4f]">Phone</p>
                  {contact.details.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="mt-1 block text-sm font-semibold text-[#123028] hover:text-[#0f7a4f]"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-[#0f7a4f]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f7a4f]">Email</p>
                  {contact.details.emails.map((item) => (
                    <a
                      key={item.value}
                      href={`mailto:${item.value}`}
                      className="mt-1 block text-sm font-semibold text-[#123028] hover:text-[#0f7a4f]"
                    >
                      {item.value}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-[#0f7a4f]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f7a4f]">
                    Business Hours
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4d655a]">
                    {contact.details.businessHours}
                  </p>
                </div>
              </div>
              <p className="border-t border-[#d8eee3] pt-5 text-sm text-[#4d655a]">
                {contact.details.connectivity}
              </p>
            </div>

            {/* RFQ Checklist */}
            <div className="mt-10 rounded-2xl border border-[#d8eee3] bg-white p-7">
              <h3 className="text-lg font-bold text-[#123028]">{contact.rfqChecklist.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4d655a]">{contact.rfqChecklist.intro}</p>
              <ul className="mt-5 space-y-3">
                {contact.rfqChecklist.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#4d655a]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#0f7a4f]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-[#f7fcf9]">
        <div className="container-site">
          <SectionHeading eyebrow="Visit Us" title="Our Location" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#d8eee3]">
            <iframe
              title="TRANSPARES LIMITED location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5820559919393!2d72.45201887539203!3d22.928781519821612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b20bf1af271%3A0xb4edf841203d2e88!2sTRANSPARES%20LIMITED!5e0!3m2!1sen!2sin!4v1784389150168!5m2!1sen!2sin"
              className="h-[320px] w-full border-0 md:h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  )
}
