import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { PageHero, SectionHeading } from '../components/ui/Section'
import Button from '../components/ui/Button'
import { contact, seo } from '../data/content'

interface FormState {
  name: string
  company: string
  country: string
  email: string
  phone: string
  product: string
  message: string
}

const initialState: FormState = {
  name: '',
  company: '',
  country: '',
  email: '',
  phone: '',
  product: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [fileName, setFileName] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Seo title={seo.contact.title} description={seo.contact.description} />
      <PageHero
        title="Contact Us"
        description={contact.intro.body}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
      />

      <section className="site-section bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
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
                  <a
                    href={`mailto:${contact.details.email}`}
                    className="mt-1 block text-sm font-semibold text-[#123028] hover:text-[#0f7a4f]"
                  >
                    {contact.details.email}
                  </a>
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

          {/* Enquiry form */}
          <div className="rounded-3xl border border-[#d8eee3] bg-[#f7fcf9] p-7 md:p-10">
            <SectionHeading eyebrow="Send an Enquiry" title="Request a Quote" />

            {submitted ? (
              <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl bg-[#e8f6ef] p-8">
                <CheckCircle2 size={32} className="text-[#0f7a4f]" />
                <h3 className="text-xl font-bold text-[#123028]">Thank You</h3>
                <p className="text-sm leading-relaxed text-[#4d655a]">
                  Your enquiry has been received. Our engineering-led team will respond shortly with a
                  detailed technical and commercial proposal.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={updateField('name')}
                    className="w-full rounded-xl border border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#123028] outline-none focus:border-[#0f7a4f]"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Company *
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={updateField('company')}
                    className="w-full rounded-xl border border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#123028] outline-none focus:border-[#0f7a4f]"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="country" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Country *
                  </label>
                  <input
                    id="country"
                    type="text"
                    required
                    value={form.country}
                    onChange={updateField('country')}
                    className="w-full rounded-xl border border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#123028] outline-none focus:border-[#0f7a4f]"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={updateField('email')}
                    className="w-full rounded-xl border border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#123028] outline-none focus:border-[#0f7a4f]"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateField('phone')}
                    className="w-full rounded-xl border border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#123028] outline-none focus:border-[#0f7a4f]"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="product" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    value={form.product}
                    onChange={updateField('product')}
                    className="w-full rounded-xl border border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#123028] outline-none focus:border-[#0f7a4f]"
                  >
                    <option value="">Select a product</option>
                    {contact.formFields.productOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={updateField('message')}
                    className="w-full rounded-xl border border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#123028] outline-none focus:border-[#0f7a4f]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="drawing" className="mb-2 block text-sm font-semibold text-[#123028]">
                    Attach Drawing
                  </label>
                  <input
                    id="drawing"
                    type="file"
                    onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
                    className="w-full rounded-xl border border-dashed border-[#d8eee3] bg-white px-4 py-3 text-sm text-[#4d655a] outline-none focus:border-[#0f7a4f]"
                  />
                  {fileName && (
                    <p className="mt-2 text-xs font-medium text-[#0f7a4f]">Selected: {fileName}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            )}
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
