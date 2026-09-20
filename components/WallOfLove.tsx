"use client";

import { useLayoutEffect, useRef } from "react";

let stickToTestimonials = false;

function wantsTestimonials() {
  if (typeof window === "undefined") return stickToTestimonials;
  const flag = sessionStorage.getItem("open-testimonials");
  if (flag === "1") stickToTestimonials = true;
  if (flag === "0") stickToTestimonials = false;
  return stickToTestimonials || window.location.hash === "#wall-of-love";
}
import { motion, useTransform } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  useContainerScrollContext,
} from "@/components/ui/animated-cards-stack";

const TESTIMONIALS = [
  {
    id: "sofia-secchi",
    name: "Sofia Secchi",
    profession: "Product Designer @Miro",
    description:
      "You take initiative beyond the core PM role. You leaned into AI early, producing prototypes that communicate your vision quickly and reduce ambiguity. You've also become skilled at protecting design and content design capacity, stepping in with mockups, ideas, and pre-refinement with engineers; building direct relationships across eng, content, and other teams to source answers and keep work moving even when design can't provide high-fidelity assets immediately, including working in Figma yourself. I really appreciate that initiative.",
    avatarUrl: "/testimonials/sofia-secchi.png",
    linkedIn: "https://www.linkedin.com/in/sofiasecchi/",
  },
  {
    id: "rob-stevenson-leggett",
    name: "Rob Stevenson-Leggett",
    profession: "Engineering Manager @Miro",
    description:
      "The expectation for an APM on rotation was to execute well-scoped experiments with a fair amount of guidance. Livia has consistently worked above that level. She independently drives discovery and brings problems to us already half-solved rather than waiting to be pointed at them. That self-starting, cross-functional instinct is well beyond what I'd expect at her level and is the thing I'd call out as clearly exceeding expectations.",
    avatarUrl: "/testimonials/rob-stevenson-leggett.png",
    linkedIn: "https://www.linkedin.com/in/r123r4/",
  },
  {
    id: "lisa-steinhauser",
    name: "Lisa Steinhäuser",
    profession: "Product Manager @Spotify",
    note: "Mentor & stakeholder",
    description:
      "Livia's talent for bringing stakeholders together and aligning them around the identified problem was impressive.",
    linkedIn: "https://www.linkedin.com/in/lisa-steinhaeuser/",
    fullReview: "https://www.linkedin.com/in/livia-yeung/",
    avatarUrl: "/testimonials/lisa-steinhauser.png",
  },
  {
    id: "charles-dupont",
    name: "Charles Dupont",
    profession: "CPO @Captur",
    note: "Direct line manager",
    description:
      "I think [she is] a pretty efficient 'learning machine' — mechanising the opportunities in front of [her] not just as immediate tasks to do well, but as opportunities to get better at those kinds of things.",
    linkedIn: "https://www.linkedin.com/in/charles44dupont/",
    avatarUrl: "/testimonials/charles-dupont.png",
  },
  {
    id: "dick-wiggers",
    name: "Dick Wiggers",
    profession: "Senior Software Engineer @Miro",
    description:
      "Livia is always ready to help! She'll step out of the comfort of the PM role and jump into whatever is necessary to move the project forward.",
    linkedIn: "https://www.linkedin.com/in/dickwiggers/",
    avatarUrl: "/testimonials/dick-wiggers.png",
  },
];

function FitQuote({ id, children }: { id: string; children: string }) {
  const boxRef = useRef<HTMLQuoteElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;

    const fit = () => {
      const available = box.clientHeight;
      if (available <= 0) return;

      let low = 14;
      let high = 48;
      let best = low;

      for (let step = 0; step < 12; step++) {
        const size = (low + high) / 2;
        text.style.fontSize = `${size}px`;
        text.style.lineHeight = "1.35";
        if (text.offsetHeight <= available) {
          best = size;
          low = size;
        } else {
          high = size;
        }
      }

      text.style.fontSize = `${best}px`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    document.fonts?.ready.then(fit);

    return () => observer.disconnect();
  }, [children]);

  return (
    <blockquote
      id={id}
      ref={boxRef}
      className="relative z-10 min-h-0 w-full flex-1 overflow-hidden text-left"
    >
      <span ref={textRef} className="block">
        {children}
      </span>
    </blockquote>
  );
}

function KeepScrollingArrow() {
  const { scrollYProgress } = useContainerScrollContext();
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="mt-5 flex items-center gap-2 text-gray-500"
      aria-hidden
    >
      <p className="font-sans text-xs font-bold uppercase tracking-[0.2em]">
        Scroll to explore all testimonials
      </p>
      <svg
        className="scroll-cue-arrow h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v13" />
        <path d="M6 12l6 7 6-7" />
      </svg>
    </motion.div>
  );
}

export default function WallOfLove() {
  useLayoutEffect(() => {
    const showTestimonials = () => {
      if (!wantsTestimonials()) return;
      sessionStorage.removeItem("open-testimonials");
      const section = document.getElementById("wall-of-love");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      if (Math.abs(top) < 8) return;
      const html = document.documentElement;
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, window.scrollY + top);
      html.style.scrollBehavior = previous;
    };

    showTestimonials();
    const retries = [0, 50, 200, 600].map((delay) => setTimeout(showTestimonials, delay));
    window.addEventListener("hashchange", showTestimonials);
    return () => {
      retries.forEach(clearTimeout);
      window.removeEventListener("hashchange", showTestimonials);
    };
  }, []);

  return (
    <section id="wall-of-love" className="px-6">
      <ContainerScroll className="h-[400vh]">
        <div className="sticky left-0 top-0 flex h-svh w-full flex-col items-center justify-center py-12">
          <h2 className="mx-auto max-w-3xl text-center font-sans text-2xl font-semibold leading-snug tracking-tight text-gray-900 md:text-4xl">
            Hear from people who have worked with me
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center font-sans text-sm leading-relaxed text-gray-600 md:text-base">
            A true team player who consistently deliver above and beyond.
          </p>
          <KeepScrollingArrow />

          <CardsContainer className="relative mx-auto mt-10 aspect-square w-[min(28rem,78vw)]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant="memo"
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
              >
                <FitQuote id={`card-${testimonial.id}-content`}>
                  {testimonial.description}
                </FitQuote>
                <div className="relative z-10 flex items-center gap-3">
                  <Avatar className="size-11 bg-[#fff8e4]">
                    {testimonial.avatarUrl && (
                      <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={`Portrait of ${testimonial.name}`}
                        className="object-cover"
                      />
                    )}
                    <AvatarFallback className="bg-[#fff8e4] text-xs font-medium text-[#3d3424]">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div id={`card-${testimonial.id}-title`} className="text-sm leading-snug">
                    {testimonial.linkedIn ? (
                      <a
                        href={testimonial.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                      >
                        {testimonial.name},
                      </a>
                    ) : (
                      <span className="block">{testimonial.name},</span>
                    )}
                    <span className="block">{testimonial.profession}</span>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  );
}
