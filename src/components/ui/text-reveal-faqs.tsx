'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { faqItemsData } from "@/data/pmb";

export default function FAQs() {
  const faqItems = faqItemsData;

  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard innerClassName="p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-[#1B3A5C] text-3xl md:text-4xl font-extrabold tracking-tight">
                Pertanyaan Umum PMB
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                Informasi penting seputar pendaftaran mahasiswa baru Fakultas Teknik Universitas Palembang.
              </p>
              <p className="text-stone-500 text-sm hidden md:block pt-2">
                Belum menemukan jawaban? Hubungi Tim{' '}
                <Link
                  href="/kontak"
                  className="text-amber-800 font-bold hover:underline"
                >
                  Helpdesk PMB FT UNPAL
                </Link>{' '}
                untuk bantuan langsung.
              </p>
            </div>

            <div className="md:col-span-3">
              <Accordion type="single" collapsible>
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-stone-200/80 last:border-b-0"
                  >
                    <AccordionTrigger className="cursor-pointer text-sm md:text-base font-bold text-[#1B3A5C] hover:text-amber-700 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <BlurredStagger text={item.answer} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <p className="text-stone-500 text-sm md:hidden pt-2">
              Belum menemukan jawaban? Hubungi{' '}
              <Link
                href="/kontak"
                className="text-amber-800 font-bold hover:underline"
              >
                Tim Helpdesk PMB FT UNPAL
              </Link>
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export const BlurredStagger = ({
  text = "built by ft unpal",
}: {
  text: string;
}) => {
  const headingText = text;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div className="w-full text-stone-700">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-sm md:text-base leading-relaxed break-words whitespace-normal font-normal"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
