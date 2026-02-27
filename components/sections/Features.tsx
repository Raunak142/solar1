"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  Settings,
  Handshake,
  ArrowRight,
  ShieldCheck,
  IndianRupee,
  Battery,
  Eye,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Feature Data
const features = [
  {
    id: 0,
    icon: <Zap className="w-6 h-6" />,
    title: "Designed for the Indian Climate",
    description:
      "Engineered to perform efficiently in extreme heat, dust, monsoon rains, and voltage fluctuations. Our systems are built to handle real Indian conditions while maintaining stable performance and longer life.",
    image: "/images/House.png",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 1,
    icon: <Settings className="w-6 h-6" />,
    title: "Smart Energy Optimization",
    description:
      "We study your electricity usage, peak consumption hours, and seasonal patterns to design the right system size — so you get maximum savings without overspending on unnecessary capacity.",
    image: "/images/Field Panel.png",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    icon: <Handshake className="w-6 h-6" />,
    title: "Reliable Long-Term Support",
    description:
      "Our relationship doesn\u2019t end after installation. From regular system checks to quick service support and smooth warranty assistance, we ensure your solar system keeps running worry-free.",
    image: "/images/GroundPanel.png",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Built for Long-Term Value",
    description:
      "Premium components combined with expert installation deliver dependable performance for 25+ years — helping you save money every month while contributing to a cleaner environment.",
    image: "/images/Panel.png",
    color: "from-slate-600 to-slate-800",
  },
];

const Features = () => {
  return (
    <section className="page-bg relative">
      {/* Header Section */}
      <div className="pt-24 pb-12 lg:pt-32 lg:pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tighter mb-6"
          >
            Why Kartik Solar Panels Are a Smarter Choice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-lg sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Many companies only install solar panels. Kartik Solar Enterprises
            delivers complete energy solutions carefully designed for Indian
            homes, Indian weather conditions, and practical household budgets —
            ensuring real savings and reliable performance for years to come.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Scrolling Content */}
          <div className="order-2 lg:order-1 flex flex-col gap-0 py-8 lg:py-0">
            {/* Spacer to align first item with sticky image */}
            <div className="hidden lg:block h-[10vh]" />

            {features.map((feature, index) => (
              <FeatureBlock key={feature.id} feature={feature} index={index} />
            ))}

            {/* Spacer for bottom */}
            <div className="hidden lg:block h-[50vh]" />
          </div>

          {/* Right Column: Sticky Image Stack (Desktop) */}
          <div className="hidden lg:block lg:order-2 h-[calc(100vh-100px)] sticky top-24 self-start">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 aspect-square lg:aspect-auto ring-1 ring-slate-900/5 bg-white">
              {features.map((feature, index) => (
                <ScrollLinkedImage
                  key={feature.id}
                  feature={feature}
                  index={index}
                  total={features.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for the Image that reacts to its specific text block's scroll position
const ScrollLinkedImage = ({
  feature,
  index,
  total,
}: {
  feature: (typeof features)[0];
  index: number;
  total: number;
}) => {
  const targetId = `feature-block-${index}`;
  return (
    <ScrollImageLogic targetId={targetId} feature={feature} index={index} />
  );
};

// Separated to use hooks cleanly
const ScrollImageLogic = ({
  targetId,
  feature,
  index,
}: {
  targetId: string;
  feature: (typeof features)[0];
  index: number;
}) => {
  // State to store the element once it's available
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) setElement(el);
  }, [targetId]);

  // FIX: Pass `undefined` as target to useScroll if element is not ready.
  // This defaults to window scroll temporarily, avoiding the "unhydrated ref" error.

  const { scrollYProgress } = useScroll({
    target: element ? { current: element } : undefined,
    offset: ["start end", "start center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const isFirst = index === 0;

  // If element is null (initial render), we need a safe default.

  return (
    <motion.div
      className="absolute inset-0 h-full w-full"
      style={{
        zIndex: index,
        clipPath: isFirst ? "inset(0% 0 0 0)" : clipPath,
      }}
    >
      <motion.div style={{ scale }} className="relative w-full h-full">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Overlays */}
        <div
          className={`absolute inset-0 bg-linear-to-t ${feature.color.replace("from-", "from-black/70 ").replace("to-", "to-transparent/0 ")} opacity-80 mix-blend-multiply`}
        />

        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
          {/* Text fade in linked to scroll as well */}
          <motion.div style={{ opacity: isFirst ? 1 : scrollYProgress }}>
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20 shadow-lg`}
            >
              <div className="text-white">{feature.icon}</div>
            </div>
            <h3 className="text-3xl font-bold mb-2 tracking-tight">
              {feature.title}
            </h3>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Sub-component for individual text blocks
const FeatureBlock = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);

  // Track scroll for THIS specific block to actuate the line width
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      id={`feature-block-${index}`}
      ref={ref}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Mobile Image */}
        <div className="lg:hidden mb-8 rounded-3xl overflow-hidden aspect-video relative shadow-xl ring-1 ring-slate-900/5">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
          />
          <div
            className={`absolute inset-0 bg-linear-to-t ${feature.color.replace("from-", "from-black/60 ").replace("to-", "to-transparent/0 ")} opacity-70 mix-blend-multiply`}
          />
          <div className="absolute bottom-4 left-4 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
            {feature.icon}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-900 font-bold text-lg shadow-sm border border-slate-200">
            0{index + 1}
          </span>
          <div className="h-[2px] flex-1 bg-slate-100 origin-left overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-slate-900"
              style={{ width: lineWidth }}
            />
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
          {feature.title}
        </h3>

        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
          {feature.description}
        </p>

        <Link
          href="/services"
          className="group flex items-center gap-2 text-slate-900 font-semibold hover:text-amber-600 transition-colors"
        >
          Learn more{" "}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Features;
