"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rhonda Smith",
    role: "Customer",
    rating: 5,
    text: "Excellent service. It is always a pleasure to work with you guys. I am pleased with the services. They are punctual. And the quality of the product is as good as preached.",
  },
  {
    id: 2,
    name: "Jessica Brown",
    role: "Customer",
    rating: 5,
    text: "Excellent Services, I obtained a passport, id card and driver's license and to be honest, I was skeptical of the quality and authenticity of these products. The best agency",
  },
  {
    id: 3,
    name: "David Anderson",
    role: "Customer",
    rating: 5,
    text: "Thank you for taking the time and effort to clean my defaced Euro notes. Also, thank you for using Grade A Chemicals. Please pass my thanks to every team members for their efforts.",
  },
  {
    id: 4,
    name: "John Ruda",
    role: "Customer",
    rating: 5,
    text: "I would definitely order form Onlinelegitdocuments again they were pretty good and didn't have a single problem. They are the best in their works. Thanks for the great Service.",
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Customer",
    rating: 5,
    text: "Outstanding quality and professional service. The team was responsive throughout the entire process. My documents arrived exactly as promised. Highly recommended!",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Customer",
    rating: 5,
    text: "Fast delivery and excellent customer support. The quality exceeded my expectations. I've used their services multiple times and they never disappoint. Top-notch service!",
  },
  {
    id: 7,
    name: "Emily Johnson",
    role: "Customer",
    rating: 5,
    text: "Professional, reliable, and trustworthy. The attention to detail is remarkable. I received my documents on time and the quality was perfect. Will definitely use again!",
  },
  {
    id: 8,
    name: "Robert Martinez",
    role: "Customer",
    rating: 5,
    text: "The entire process was seamless from start to finish. Their team guided me through every step and answered all my questions promptly. The documents I received were of exceptional quality and arrived exactly when promised.",
  },
  {
    id: 9,
    name: "Lisa Thompson",
    role: "Customer",
    rating: 5,
    text: "I've used their services for multiple documents and they consistently deliver excellence. The customer service is outstanding and they truly care about their clients. Highly recommend to anyone in need of document services.",
  },
  {
    id: 10,
    name: "James Wilson",
    role: "Customer",
    rating: 5,
    text: "Exceptional service from start to finish. The team was knowledgeable, patient, and helped me understand every step of the process. My documents arrived on time and were exactly what I needed.",
  },
  {
    id: 11,
    name: "Maria Garcia",
    role: "Customer",
    rating: 5,
    text: "I was impressed by the professionalism and attention to detail. The quality of the documents is outstanding and the customer support team is always available when you need them. Five stars!",
  },
  {
    id: 12,
    name: "Thomas Lee",
    role: "Customer",
    rating: 5,
    text: "Quick turnaround time and excellent communication throughout. The documents I received were perfect and met all my requirements. I'll definitely use their services again in the future.",
  },
  {
    id: 13,
    name: "Jennifer Davis",
    role: "Customer",
    rating: 5,
    text: "Outstanding experience! The process was straightforward, the team was helpful, and the final product exceeded my expectations. Highly professional service that I would recommend to anyone.",
  },
  {
    id: 14,
    name: "Christopher Moore",
    role: "Customer",
    rating: 5,
    text: "Reliable, fast, and professional. I needed my documents urgently and they delivered exactly when promised. The quality is top-notch and the customer service is exceptional.",
  },
  {
    id: 15,
    name: "Amanda Taylor",
    role: "Customer",
    rating: 5,
    text: "Best document service I've ever used. The team is knowledgeable, responsive, and truly cares about their customers. My documents arrived perfectly and on schedule.",
  },
  {
    id: 16,
    name: "Daniel White",
    role: "Customer",
    rating: 5,
    text: "Excellent quality and service. The entire process was smooth and stress-free. I received my documents quickly and they were exactly as described. Very satisfied!",
  },
  {
    id: 17,
    name: "Patricia Harris",
    role: "Customer",
    rating: 5,
    text: "Professional service with attention to every detail. The team guided me through the entire process and ensured everything was correct. Highly recommend their services!",
  },
  {
    id: 18,
    name: "Mark Jackson",
    role: "Customer",
    rating: 5,
    text: "Fast, reliable, and professional. I've used their services multiple times and they consistently deliver high-quality documents. The customer support is always helpful and responsive.",
  },
  {
    id: 19,
    name: "Linda Martin",
    role: "Customer",
    rating: 5,
    text: "Outstanding service from a trusted company. The documents I received were of excellent quality and arrived exactly when promised. I'm very happy with the results.",
  },
  {
    id: 20,
    name: "Steven Thompson",
    role: "Customer",
    rating: 5,
    text: "Top-quality service and excellent customer care. The team was patient with all my questions and provided clear guidance throughout. My documents are perfect!",
  },
  {
    id: 21,
    name: "Karen Anderson",
    role: "Customer",
    rating: 5,
    text: "Reliable and professional service. The process was easy to follow and the team was always available to help. My documents arrived on time and were exactly what I needed.",
  },
  {
    id: 22,
    name: "Paul Martinez",
    role: "Customer",
    rating: 5,
    text: "Excellent experience from start to finish. The quality of service and documents is outstanding. I would definitely use their services again and recommend them to others.",
  },
  {
    id: 23,
    name: "Nancy Clark",
    role: "Customer",
    rating: 5,
    text: "Professional, efficient, and reliable. The team made the entire process simple and stress-free. My documents are perfect and arrived exactly when promised.",
  },
  {
    id: 24,
    name: "Kevin Rodriguez",
    role: "Customer",
    rating: 5,
    text: "Outstanding quality and service. The attention to detail is remarkable and the customer support is excellent. I'm very satisfied with my experience.",
  },
  {
    id: 25,
    name: "Betty Lewis",
    role: "Customer",
    rating: 5,
    text: "Fast delivery and excellent communication. The team was helpful throughout the process and ensured everything was correct. Highly professional service!",
  },
  {
    id: 26,
    name: "Brian Walker",
    role: "Customer",
    rating: 5,
    text: "Best document service available. The quality is exceptional and the customer support team is always ready to help. I've used them multiple times and they never disappoint.",
  },
  {
    id: 27,
    name: "Helen Hall",
    role: "Customer",
    rating: 5,
    text: "Professional service with excellent results. The documents I received were perfect and arrived on schedule. The team was knowledgeable and helpful throughout.",
  },
  {
    id: 28,
    name: "Gary Allen",
    role: "Customer",
    rating: 5,
    text: "Reliable, fast, and professional. I needed my documents urgently and they delivered exactly when promised. The quality exceeded my expectations.",
  },
  {
    id: 29,
    name: "Sandra Young",
    role: "Customer",
    rating: 5,
    text: "Outstanding experience! The process was straightforward and the team provided excellent guidance. My documents are perfect and arrived on time.",
  },
  {
    id: 30,
    name: "Jason Hernandez",
    role: "Customer",
    rating: 5,
    text: "Excellent service and quality. The team was responsive and helped me through every step. I'm very satisfied with the results and would use them again.",
  },
  {
    id: 31,
    name: "Donna King",
    role: "Customer",
    rating: 5,
    text: "Top-notch service from a professional team. The documents I received were of excellent quality and the customer support was outstanding throughout the process.",
  },
  {
    id: 32,
    name: "Ryan Wright",
    role: "Customer",
    rating: 5,
    text: "Fast, reliable, and professional service. The quality of the documents is outstanding and the team is always available to answer questions. Highly recommend!",
  },
  {
    id: 33,
    name: "Carol Lopez",
    role: "Customer",
    rating: 5,
    text: "Exceptional quality and service. The entire process was smooth and the team ensured everything was perfect. My documents arrived exactly when promised.",
  },
  {
    id: 34,
    name: "Eric Hill",
    role: "Customer",
    rating: 5,
    text: "Professional, efficient, and reliable. I've used their services multiple times and they consistently deliver high-quality documents. Excellent customer support!",
  },
  {
    id: 35,
    name: "Ruth Scott",
    role: "Customer",
    rating: 5,
    text: "Outstanding service from start to finish. The team was helpful and provided clear guidance throughout. My documents are perfect and arrived on schedule.",
  },
  {
    id: 36,
    name: "Frank Green",
    role: "Customer",
    rating: 5,
    text: "Best document service I've ever used. The quality is exceptional and the customer care is outstanding. I would definitely recommend them to others.",
  },
  {
    id: 37,
    name: "Sharon Adams",
    role: "Customer",
    rating: 5,
    text: "Reliable and professional service. The process was easy to follow and the documents I received were exactly what I needed. Very satisfied!",
  },
  {
    id: 38,
    name: "Raymond Baker",
    role: "Customer",
    rating: 5,
    text: "Excellent experience with outstanding results. The team made the entire process simple and stress-free. My documents are perfect and arrived on time.",
  },
  {
    id: 39,
    name: "Michelle Gonzalez",
    role: "Customer",
    rating: 5,
    text: "Professional service with attention to every detail. The quality of the documents is outstanding and the customer support is excellent. Highly recommend!",
  },
  {
    id: 40,
    name: "Ralph Nelson",
    role: "Customer",
    rating: 5,
    text: "Fast delivery and excellent communication. The team was knowledgeable and helped me through every step. I'm very happy with the results.",
  },
  {
    id: 41,
    name: "Laura Carter",
    role: "Customer",
    rating: 5,
    text: "Outstanding quality and service. I've used their services multiple times and they never disappoint. The customer support team is always helpful and responsive.",
  },
  {
    id: 42,
    name: "Albert Mitchell",
    role: "Customer",
    rating: 5,
    text: "Top-quality service from a trusted company. The documents I received were perfect and the team was professional throughout. I would use them again.",
  },
  {
    id: 43,
    name: "Deborah Perez",
    role: "Customer",
    rating: 5,
    text: "Excellent service with exceptional results. The process was straightforward and the team provided excellent guidance. My documents arrived exactly when promised.",
  },
  {
    id: 44,
    name: "Harold Roberts",
    role: "Customer",
    rating: 5,
    text: "Reliable, fast, and professional. The quality exceeded my expectations and the customer support was outstanding. Highly satisfied with my experience.",
  },
  {
    id: 45,
    name: "Dorothy Turner",
    role: "Customer",
    rating: 5,
    text: "Professional service that delivers on promises. The team was helpful and ensured everything was correct. My documents are perfect and arrived on schedule.",
  },
  {
    id: 46,
    name: "Jack Phillips",
    role: "Customer",
    rating: 5,
    text: "Outstanding experience from a professional team. The quality of service and documents is exceptional. I would definitely recommend them to others.",
  },
  {
    id: 47,
    name: "Joyce Campbell",
    role: "Customer",
    rating: 5,
    text: "Fast, reliable, and professional service. The documents I received were of excellent quality and the customer support was excellent throughout the process.",
  },
  {
    id: 48,
    name: "Wayne Parker",
    role: "Customer",
    rating: 5,
    text: "Excellent quality and service. The entire process was smooth and stress-free. I received my documents quickly and they were exactly as described.",
  },
  {
    id: 49,
    name: "Janet Evans",
    role: "Customer",
    rating: 5,
    text: "Top-notch service with outstanding results. The team was knowledgeable and provided clear guidance throughout. My documents are perfect!",
  },
  {
    id: 50,
    name: "Ralph Edwards",
    role: "Customer",
    rating: 5,
    text: "Professional, efficient, and reliable service. I've used their services multiple times and they consistently deliver high-quality documents. Excellent customer care!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-zinc-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-lg shrink-0">
      {initials}
    </div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Customer Testimonials
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto">
          Read what our satisfied customers have to say about their experience 
          with Top Docs. Over 10,000 clients trust us for their document needs.
        </p>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={fadeInUp}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar name={testimonial.name} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-zinc-600">{testimonial.role}</p>
                    <div className="mt-2">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
          Ready to Join Our Satisfied Customers?
        </h2>
        <p className="text-zinc-700 mb-6">
          Experience the quality and service that thousands of clients trust. 
          Contact us today to get started.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/how-to-order"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors"
          >
            How to Order
          </a>
        </div>
      </div>
    </main>
  );
}

