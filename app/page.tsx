'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/ui/circular-progress';
import { TestimonialsSlider } from '@/components/testimonials-slider';
import { BlogSlider } from '@/components/blog-slider';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="space-y-20">
      <motion.section
        className="relative overflow-hidden min-h-screen flex items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          className="relative z-20 mx-auto max-w-6xl w-full px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted Identity & Permit Services
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Fast, secure, and professional guidance for official passports,
            driver&apos;s licenses, ID cards, and residence permits. Learn how
            to obtain documents, schedule appointments, and understand
            requirements.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/services/passport">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
            Services
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Passports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Clear requirements, compliant forms, and timeline guidance
                    for official issuance. Learn how to obtain passports,
                    schedule appointments (cómo sacar cita para pasaporte), and
                    understand all requirements (requisitos para sacar
                    pasaporte).
                  </p>
                  <Link href="/services/passport" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Driver&apos;s Licenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Learn about <strong>UK driving licence</strong>,{' '}
                    <strong>apply for driving licence UK</strong>,{' '}
                    <strong>provisional driving licence UK</strong>,{' '}
                    <strong>replacement driving licence</strong>,{' '}
                    <strong>where to buy a legal UK Driving License</strong>,{' '}
                    <strong>European Driving License</strong>,{' '}
                    <strong>EU Driving License</strong>,{' '}
                    <strong>International Driving Permit</strong>,{' '}
                    <strong>license test</strong>,{' '}
                    <strong>drivers license renewal</strong>, and{' '}
                    <strong>renew drivers license UK</strong>. Eligibility,
                    testing schedules, and renewal support with local
                    authorities.
                  </p>
                  <Link
                    href="/services/drivers-license"
                    className="mt-4 inline-block"
                  >
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>ID Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Learn about <strong>ID card</strong>,{' '}
                    <strong>identity card</strong>, <strong>id card UK</strong>,{' '}
                    <strong>identity card UK</strong>,{' '}
                    <strong>identity document</strong>, and{' '}
                    <strong>card application</strong>. Identity verification
                    steps, documentation checklists, and replacement pathways.
                  </p>
                  <Link href="/services/id-card" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Residence Permits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Learn about <strong>residence permit</strong>,{' '}
                    <strong>UK residence permit</strong>,{' '}
                    <strong>EU residence permit</strong>,{' '}
                    <strong>Greece residence permit</strong>,{' '}
                    <strong>Portugal residence permit</strong>,{' '}
                    <strong>Spain residence permit</strong>,{' '}
                    <strong>Germany residence permit</strong>,{' '}
                    <strong>France residence permit</strong>,{' '}
                    <strong>Italy residence permit</strong>,{' '}
                    <strong>Cyprus residence permit</strong>,{' '}
                    <strong>Estonia residence permit</strong>,{' '}
                    <strong>Canada residence permit</strong>,{' '}
                    <strong>USA residence permit</strong>, and{' '}
                    <strong>biometric residence permit</strong>. Residency
                    categories, supporting evidence, and processing milestones.
                  </p>
                  <Link
                    href="/services/residence-permit"
                    className="mt-4 inline-block"
                  >
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Production & Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Preparation timelines typically range from 1–3 days, with
                    delivery windows varying by document type and jurisdiction.
                    We provide realistic scheduling, status updates, and
                    guidance to keep your application on track.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Document checklists tailored to your location</li>
                    <li>Submission calendars aligned to official processing</li>
                    <li>Milestone tracking and reminders</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Security & Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Your information is handled with care. We emphasize secure
                    data practices and privacy-first support, ensuring your
                    details are used only to provide guidance and assistance.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Minimal data collection</li>
                    <li>Confidential communication channels</li>
                    <li>Privacy-conscious packaging and delivery updates</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Our Service Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900">
              OUR SERVICE
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">
              DO YOU NEED ANY DOCUMENT?
            </h3>
            <p className="text-lg text-zinc-800">
              We&apos;re in this business since 1995 and provide the best
              services
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <p className="text-zinc-800 font-medium">Traveler Documents</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <p className="text-zinc-800 font-medium">
                  Travel Authorization
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <p className="text-zinc-800 font-medium">SSD solutions</p>
              </div>
            </div>
            <p className="text-base text-zinc-700 leading-relaxed">
              We have experience in making American, European, Australian, UK,
              Asian passport. Echter deutscher Führerschein, Reisepass zum
              Verkauf are also available.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-xl aspect-4/3"
          >
            <Image
              src="https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg"
              alt="Person holding a passport"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
              unoptimized
            />
          </motion.div>
        </motion.section>
      </div>

      {/* Mission Section with Teal Background */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="w-full bg-teal-600 text-white py-12 md:py-16 lg:py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center max-w-4xl mx-auto leading-tight mb-8"
          >
            Our Mission is to Serve you and bring out the right solution at
            every time
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-zinc-900 hover:bg-zinc-100 font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        {/* Statistics Section with Counter Animation */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <CircularProgress
                value={315}
                max={1000}
                suffix="+"
                label="Completed Cases"
                size={120}
              />
              <CircularProgress
                value={966}
                max={1000}
                suffix="+"
                label="Satisfied Customers"
                size={120}
              />
              <CircularProgress
                value={868}
                max={1000}
                suffix="+"
                label="Expert Consultants"
                size={120}
              />
            </div>
            <div className="pt-4">
              <p className="text-xl md:text-2xl font-semibold text-zinc-900 mb-4">
                We&apos;re trusted by more than 10,000 clients
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                Building experience and giving high success rates is our
                commitment. Our track record speaks for itself—we deliver
                results that exceed expectations and build long-term trust with
                our clients.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-xl aspect-4/3"
          >
            <Image
              src="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg"
              alt="Professional document services"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
              unoptimized
            />
          </motion.div>
        </motion.section>
      </div>

      {/* Book Consultation Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="w-full bg-teal-600 text-white py-12 md:py-16 px-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                We&apos;re Delivering the Best Document & Business Services
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center md:justify-end"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-white text-zinc-900 hover:bg-zinc-100 font-semibold"
                >
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
            Why Choose Us
          </motion.h2>
          <ul className="mt-4 space-y-2 text-zinc-900">
            <li>Proven reliability with clear, accurate guidance.</li>
            <li>Professional standards focused on lawful compliance.</li>
            <li>Secure and confidential handling of your information.</li>
            <li>Responsive 24/7 support to keep you on track.</li>
          </ul>
          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We focus on clarity and completeness. From forms to
                    supporting evidence, our guidance helps you avoid delays and
                    maintain quality throughout the process.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Global Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Requirements vary widely. We provide general guidance and
                    highlight jurisdiction-specific considerations so you can
                    prepare confidently.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Share Your Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tell us what you need and where you’re applying. We outline
                  requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Prepare & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Gather documents with our checklist. We review for
                  completeness and compliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Submit & Track</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Submit to the official authority and track timelines with
                  support from our team.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our 24/7 team responds quickly to keep your progress moving.
                  Expect timely updates, answers to common questions, and
                  pointers to official resources.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Checklist assistance and document review</li>
                  <li>Timeline guidance and expectations</li>
                  <li>Issue escalation and next steps</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Delivery & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  When applicable, we provide status updates and practical tips
                  on receiving official correspondence securely and reliably.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Status notifications</li>
                  <li>Secure receipt best practices</li>
                  <li>Follow-up actions and renewals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="rounded-xl border border-zinc-200 p-8 text-center">
            <h2 className="text-2xl font-semibold">Ready to begin?</h2>
            <p className="mt-2 text-zinc-800">
              Start with your document type or contact our 24/7 team for help.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/services/passport">
                <Button>Start Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Talk to us</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Platform Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-xl"
        >
          {/* Left Section - Blue/Teal Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-teal-600 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We&apos;re trusted by more than 10,000 clients
            </h2>
            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg"
                alt="Person putting a passport on bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right Section - White Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <p className="text-sm text-zinc-600 uppercase tracking-wide mb-2">
              Businesses You Can Back
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
              Leading place to providing the highest quality documents and
              Services worldwide 24/7.
            </p>

            <div className="space-y-6">
              {/* Global Partnership */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Global Partnership
                  </h3>
                  <p className="text-zinc-700">
                    We have 100% partnership with every government
                    organizations.
                  </p>
                </div>
              </div>

              {/* Committed to Quality */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Committed to Quality
                  </h3>
                  <p className="text-zinc-700">
                    We have the best top notch documents and services.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg"
                alt="Brown leather duffel bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">Detailed Overview</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Passports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We outline eligibility, required supporting documents, and
                  common timelines for passport applications. Expect guidance on
                  proof of identity, citizenship documentation, photos, fees,
                  and renewal procedures. Learn how to obtain passports (obtener
                  un pasaporte), schedule appointments (cómo sacar cita para
                  pasaporte), and understand requirements (requisitos para sacar
                  pasaporte).
                </p>
                <p className="mt-3">
                  We also highlight regional differences, appointment
                  scheduling, and tracking methods used by issuing authorities,
                  so you can prepare thoroughly and submit with confidence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Driver’s Licenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Learn about <strong>driving licence</strong>,{' '}
                  <strong>UK driving licence</strong>,{' '}
                  <strong>DVLA driving licence</strong>,{' '}
                  <strong>driving licence apply online</strong>,{' '}
                  <strong>UK driving theory test</strong>,{' '}
                  <strong>practical driving test</strong>,{' '}
                  <strong>driving test online</strong>,{' '}
                  <strong>license test</strong>,{' '}
                  <strong>drivers license renewal</strong>,{' '}
                  <strong>renew drivers license UK</strong>,{' '}
                  <strong>professional driver license</strong>,{' '}
                  <strong>CPC licence</strong>,{' '}
                  <strong>motorcycle license</strong>, and{' '}
                  <strong>lost driving licence</strong> replacement. We provide
                  guidance on identity verification, residency requirements, and
                  compliant documentation to avoid delays.
                </p>
                <p className="mt-3">
                  We summarize typical processing times for{' '}
                  <strong>driving licence online</strong> applications,{' '}
                  <strong>DVLA online</strong> services,{' '}
                  <strong>driving licence process</strong>, and how to track
                  your status through <strong>DVLA website</strong> and local
                  authority portals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ID Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We help you assemble a complete application for national or
                  state ID cards. Guidance includes acceptable identity proofs,
                  photos, fees, and how to replace lost or expired cards
                  efficiently.
                </p>
                <p className="mt-3">
                  Expect practical tips for documentation quality and submission
                  channels, from online portals to in-person centers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Residence Permits</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Understand categories such as temporary, permanent, study, and
                  work-related permits. We provide checklists for supporting
                  documents, sponsor letters where applicable, and steps to
                  maintain good standing.
                </p>
                <p className="mt-3">
                  We also cover renewals, status changes, and typical review
                  periods, so you can plan your timelines effectively.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Security Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your privacy matters. We follow privacy-conscious practices,
                  minimize data collection, and use secure channels for
                  communication. Information is used only to provide guidance.
                </p>
                <p className="mt-3">
                  We encourage secure storage of your documents, careful
                  handling of personal details, and keeping official
                  correspondence organized for easy reference.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support & Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Questions arise at every step. Our team is available around
                  the clock to help you interpret requirements, prepare
                  submissions, and stay informed about next steps.
                </p>
                <p className="mt-3">
                  From quick clarifications to thorough reviews, we keep
                  communication straightforward and responsive.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 rounded-xl border border-zinc-200 p-6">
            <h3 className="text-lg font-semibold">Compliance Notice</h3>
            <p className="mt-2 text-zinc-800">
              All information provided is intended to assist with lawful
              applications submitted to official authorities. Always verify
              current requirements with the issuing office in your jurisdiction.
            </p>
            <p className="mt-2 text-zinc-800">
              We do not conduct applications on your behalf; we provide
              guidance, clarity, and support to help you prepare and track your
              own submissions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <p className="mt-2 text-zinc-600 mb-8">
            What customers say about clarity, timeliness, and support.
          </p>
          <TestimonialsSlider />
        </section>

        {/* News & Articles Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-8"
          >
            News & Articles
          </motion.h2>
          <BlogSlider />
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">Contact & Support</h2>
          <p className="mt-2 text-zinc-600">
            We’re available around the clock to help you prepare, verify, and
            track your application.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>24/7 assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Email support for detailed questions</li>
                  <li>Prompt replies and practical next steps</li>
                  <li>Links to official resources and forms</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact">
                    <Button variant="outline">Contact us</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Getting started</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Share your document type and location. We’ll respond with a
                  tailored checklist and timeline overview so you can prepare
                  confidently.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Eligibility basics and requirements</li>
                  <li>Supporting evidence guidance</li>
                  <li>Submission tips and tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Savings & Packages</h2>
          <p className="mt-2 text-zinc-600">
            Transparent pricing and multi-applicant support. Ask about group
            assistance for families or teams.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Focused guidance and document review tailored to a single
                  application.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Checklist and review</li>
                  <li>Timeline planning</li>
                  <li>Support by email</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multi-applicant</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Coordinated support for households or teams working through
                  similar processes.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Grouped checklists</li>
                  <li>Consolidated updates</li>
                  <li>Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
