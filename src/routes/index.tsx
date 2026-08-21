import { createFileRoute, Link } from "@tanstack/react-router";
import heroLocomotive from "@/assets/hero-locomotive.jpg";
import newBulletTrain from "@/assets/new-bullet-train.png";
import heroVideo from "@/assets/hero-bg.mp4";
import slide1Video from "@/assets/bg1-slide1-video.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import aboutVideo from "@/assets/about-video.mp4";
import factoryHall from "@/assets/factory-hall.jpg";
import smtLine from "@/assets/smt-line.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import engineers from "@/assets/engineers.jpg";
import simulator from "@/assets/simulator.jpg";
import coachBuild from "@/assets/coach-build.jpg";
import electrical from "@/assets/electrical-cabinet.jpg";
import wagons from "@/assets/wagons.jpg";
import depot from "@/assets/depot.jpg";
import logo1 from "@/assets/logo-1.svg";
import { useState, useEffect, useRef } from "react";
import { PRODUCT_INDEX } from "@/lib/site-data";
import serviceDesign from "@/assets/service-design.png";
import serviceInstallation from "@/assets/service-installation.png";
import sntHero from "@/assets/snt.jpg";
import locoHero from "@/assets/loco-hero-premium.jpg";
import wagonsHero from "@/assets/wagons-hero-premium.jpg";
import installationHero from "@/assets/installation-hero-premium.jpg";
import heroSlide01Video from "@/assets/Hero Images/Slide_01_Engineering_Confidence_for_Critical_Systems.mp4";
import heroSlide02Img from "@/assets/Hero Images/Slide_02_Our_Mission.jpg";
import heroSlide03Img from "@/assets/Hero Images/Slide_03_Our_Vision.jpg";
import heroSlide04Img from "@/assets/Hero Images/Slide_04_IoT_Energy_Management.png";
import heroSlide05Img from "@/assets/Hero Images/Slide_05_Signalling_Telecom.jpg";
import heroSlide06Img from "@/assets/Hero Images/Slide_06_Rolling_Stock.jpg";
import heroSlide07Img from "@/assets/Hero Images/Slide_07_Training_Simulators.jpg";
import heroSlide08Img from "@/assets/Hero Images/Slide_08_Water_Level_Indicator.png";
import heroSlide09Img from "@/assets/Hero Images/Slide_09_Intelligent_Field_Device_for_IR_NIYANTRAC.jpg";
import heroSlide10Img from "@/assets/Hero Images/Slide_10_RDPMS.jpg";
import heroSlide11Img from "@/assets/Hero Images/Slide_11_IPS.jpg";
import heroSlide12Img from "@/assets/Hero Images/Slide_12_Advanced_Hot_Axle_Box_Detection.png";
import heroSlide13Img from "@/assets/Hero Images/Slide_13_Driving_Simulators.jpg";
import heroSlide14Img from "@/assets/Hero Images/Slide_14_KAVACH_Training_Simulators.jpg";
import heroSlide15Img from "@/assets/Hero Images/Slide_15_Electronic_Product_Development.jpg";
import heroSlide16Img from "@/assets/Hero Images/Slide_16_Signalling_Design_Services.jpg";
import heroSlide17Img from "@/assets/Hero Images/Slide_17_KAVACH_Installation_Commissioning.jpg";
import heroSlide18Img from "@/assets/Hero Images/Slide_18_ST_System_Integration.jpg";
import heroSlide19Img from "@/assets/Hero Images/Slide_19_Electronics_Manufacturing_Services.jpg";
import heroSlide20Img from "@/assets/Hero Images/Slide_20_Installation_Testing_Commissioning.png";

import { createSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => createSeoMeta({
    title: "LorVen Systems Pvt. Ltd.",
    description: "Engineering Confidence for Critical Systems.",
    path: "/",
  }),
  component: Home,
});

function Home() {
  useGSAP(() => {
    // 1. Hero text parallax scrolling
    gsap.to(".hero-parallax-content", {
      scrollTrigger: {
        trigger: "section.relative.h-\\[100svh\\]",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 30,
      opacity: 0.1,
      ease: "none",
    });

    // 2. About Preview layout parallax
    gsap.fromTo(
      ".about-video-card",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 40,
        ease: "none",
      }
    );

    gsap.fromTo(
      ".about-float-card",
      { y: 30 },
      {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -60,
        ease: "none",
      }
    );

    // 3. Products section background parallax
    gsap.fromTo(
      ".products-parallax-bg",
      { y: -30 },
      {
        scrollTrigger: {
          trigger: ".products-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 30,
        ease: "none",
      }
    );

    // 4. Services section visual column parallax
    gsap.fromTo(
      ".services-parallax-col",
      { y: 40 },
      {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -40,
        ease: "none",
      }
    );

    // 5. HomeCTA background image parallax
    gsap.fromTo(
      ".cta-parallax-img",
      { yPercent: -5 },
      {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 5,
        ease: "none",
      }
    );

    // 6. Global GSAP scroll reveals for eyebrows, headings and body matter
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        }
      );
    });

    // 7. VMP Section parallax (Elegant Float & Breathe)
    gsap.utils.toArray(".vmp-img-container").forEach((container: any) => {
      const img = container.querySelector("img");
      
      // Floating container effect
      gsap.fromTo(
        container,
        { y: 40 },
        {
          scrollTrigger: {
            trigger: container.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -40,
          ease: "none",
        }
      );

      // Breathing image effect (Scale up)
      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scrollTrigger: {
            trigger: container.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          scale: 1.15,
          ease: "none",
        }
      );
    });

    // 8. Backup refresh timer to guarantee offsets are correct after layout hydrates and unblocks
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ProductsSection />
      <ServicesSection />
      <HomeCTA />
    </>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastActiveSlideRef = useRef(activeSlide);

  const isCurrentlyPlaying = isPlaying;

  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchEndXRef = useRef(0);
  const touchEndYRef = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const onTouchEnd = () => {
    const xDistance = touchStartXRef.current - touchEndXRef.current;
    const yDistance = touchStartYRef.current - touchEndYRef.current;
    const minSwipeDistance = 50;

    if (Math.abs(xDistance) > Math.abs(yDistance) && Math.abs(xDistance) > minSwipeDistance) {
      if (xDistance > 0) {
        setActiveSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
      } else {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setProgress(0);
      }
    }
  };

  const slides = [
    // 1. Engineering Confidence for Critical Systems
    {
      type: "video",
      src: heroSlide01Video,
      label: "LORVEN SYSTEMS",
      title: "Engineering Confidence\nfor Critical Systems.",
      description: "Design, development, manufacturing, installation, and commissioning of highly reliable electronic systems for railway transportation and industrial infrastructure.",
      cta: "About LorVen",
      link: "/about",
    },
    // 2. Our Mission
    {
      type: "image",
      src: heroSlide02Img,
      alt: "Indian railway control centre engineers monitoring live train network",
      label: "COMPANY",
      title: "Our Mission",
      description: "To create reliable, innovative, and high-performance products that advance transportation, infrastructure through engineering excellence and disciplined execution.",
      cta: "About LorVen",
      link: "/about",
    },
    // 3. Our Vision
    {
      type: "image",
      src: heroSlide03Img,
      alt: "Futuristic connected Indian railway network at golden hour",
      label: "COMPANY",
      title: "Our Vision",
      description: "To build a globally respected technology company delivering world-class systems for safety-critical and mission-critical industries.",
      cta: "About LorVen",
      link: "/about",
    },

    // 4. IoT & Energy Management
    {
      type: "image",
      src: heroSlide04Img,
      alt: "IoT & Energy Management system for railway electrical assets",
      label: "PRODUCTS",
      title: "IoT & Energy\nManagement",
      description: "Intelligent railway monitoring solutions featuring Water Level Indicators (WLI) and Integrated Field Devices (IFD) for enhanced operational safety and performance.",
      cta: "Explore Products",
      link: "/products",
    },
    // 5. S & T (Signalling & Telecom)
    {
      type: "image",
      src: heroSlide05Img,
      alt: "Railway signalling equipment and telecommunications system",
      label: "PRODUCTS",
      title: "Signalling\n& Telecom",
      description: "Integrated signalling, railway power supply, and predictive monitoring solutions including IPS and RDPMS for reliable railway operations.",
      cta: "Explore Signalling & Telecom",
      link: "/products/snt",
    },
    // 6. Rolling Stock
    {
      type: "image",
      src: heroSlide06Img,
      alt: "Rolling stock wayside inspection and monitoring systems",
      label: "PRODUCTS",
      title: "Rolling Stock",
      description: "Intelligent monitoring and inspection solutions for coaches and wagons, enhancing safety, reliability, and lifecycle performance through AHABD (Automatic Hot Axle Box Detection), currently under staged development.",
      cta: "Explore Rolling Stock",
      link: "/products/wagons",
    },
    // 7. Training Simulators
    {
      type: "image",
      src: heroSlide07Img,
      alt: "Modern locomotive driving simulator cockpit with widescreen displays",
      label: "PRODUCTS",
      title: "Training\nSimulators",
      description: "Advanced simulation platforms for Driving Simulators and KAVACH Training Simulators, delivering realistic operator training, enhanced safety, and operational readiness.",
      cta: "Explore Simulators",
      link: "/products/electric-locomotive",
    },
    // 8. WLI
    {
      type: "image",
      src: heroSlide08Img,
      alt: "WLI — IoT-Based Water Level Indicator for passenger coaches",
      label: "PRODUCTS — COACHES & WAGONS",
      title: "Water Level\nIndicator",
      description: "Real-time water-tank level measurement for passenger coaches, reported coach-wise to the CRIS server — enabling planned watering at nominated stations and reducing en-route watering failures.",
      cta: "Explore WLI",
      link: "/products/wagons/wli",
    },
    // 9. IFD
    {
      type: "image",
      src: heroSlide09Img,
      alt: "IFD — Intelligent Field Device for IR-NIYANTRAC",
      label: "PRODUCTS — IoT & ENERGY MANAGEMENT",
      title: "Intelligent Field Device\nfor IR-NIYANTRAC",
      description: "Real-time monitoring, energy metering and remote control of railway electrical assets — reporting to IR-NIYANTRAC over the oneM2M Common Service Platform as per IS/RDSO-PSE/1004:2026 (Rev-0).",
      cta: "Explore IFD",
      link: "/products/electric-locomotive/ifd",
    },
    // 10. RDPMS
    {
      type: "image",
      src: heroSlide10Img,
      alt: "RDPMS — Remote Diagnostic & Predictive Maintenance System",
      label: "PRODUCTS — SIGNALLING & TELECOM",
      title: "RDPMS",
      description: "IoT-based condition monitoring and predictive maintenance for Indian Railways signalling assets — diagnostic logic and AI/ML analytics generate maintenance alerts before failures occur (RDSO/SPN/257/2025).",
      cta: "Explore RDPMS",
      link: "/products/snt/rdpms",
    },
    // 11. IPS
    {
      type: "image",
      src: heroSlide11Img,
      alt: "IPS — SMPS-Based Integrated Power Supply",
      label: "PRODUCTS — SIGNALLING & TELECOM",
      title: "IPS",
      description: "Continuous, regulated AC and DC power for railway signalling circuits in RE and Non-RE areas — Stations, LC Gates, IBH and Auto Huts as per RDSO Specification RDSO/SPN/165/2023, Version 4.0.",
      cta: "Explore IPS",
      link: "/products/snt/ips",
    },
    // 12. AHABD
    {
      type: "image",
      src: heroSlide12Img,
      alt: "AHABD — Automatic Hot Axle Box Detection",
      label: "PRODUCTS — COACHES & WAGONS",
      title: "Advanced Hot Axle\nBox Detection",
      description: "For every train passing a monitoring point, AHABD establishes which coach each temperature reading belongs to — delivering a complete, identified record of the pass and flagging overheating for attention.",
      cta: "Explore AHABD",
      link: "/products/wagons/ahabd",
    },
    // 13. Driving Simulators
    {
      type: "image",
      src: heroSlide13Img,
      alt: "Driving Simulators for Loco Pilots",
      label: "PRODUCTS — TRAINING SIMULATORS",
      title: "Driving Simulators",
      description: "For Loco Pilots and Assistant Loco Pilots — three-phase electric locomotives (WAP/WAG) and train sets: EMU, MEMU and Vande Bharat. Developed in line with RDSO functional requirements.",
      cta: "Explore Driving Simulators",
      link: "/products/electric-locomotive/simulators",
    },
    // 14. KAVACH Training Simulators
    {
      type: "image",
      src: heroSlide14Img,
      alt: "KAVACH Training Simulators for Station Masters and Loco Pilots",
      label: "PRODUCTS — TRAINING SIMULATORS",
      title: "KAVACH Training\nSimulators",
      description: "For Station Masters and Loco Pilots — KAVACH per RDSO/SPN/196/2020. Classroom-safe training at zonal railway training institutes, without occupying revenue infrastructure or live KAVACH equipment.",
      cta: "Explore KAVACH Simulators",
      link: "/products/electric-locomotive/kavach",
    },

    // 15. Electronic Product Development
    {
      type: "image",
      src: heroSlide15Img,
      alt: "Professional electronics engineering laboratory with PCB design workstations",
      label: "SERVICES",
      title: "Electronic Product\nDevelopment",
      description: "End-to-end — from concept through validated design to production: requirements engineering, hardware, embedded firmware, mechanical & enclosure design, V&V, and RDSO approvals.",
      cta: "Explore Product Development",
      link: "/services/product-dev",
    },
    // 16. Signalling Design Services
    {
      type: "image",
      src: heroSlide16Img,
      alt: "Railway signalling CAD design office with engineering workstations",
      label: "SERVICES",
      title: "Signalling Design\nServices",
      description: "Indian Railways design standards and RDSO specifications — Outdoor designs (SIP/bonding), EI application logic, MSDAC section planning, and KAVACH trackside designs with formal documentation.",
      cta: "Explore Signalling Design",
      link: "/services/signalling-design",
    },
    // 17. KAVACH Installation & Commissioning
    {
      type: "image",
      src: heroSlide17Img,
      alt: "Engineers installing KAVACH ATP equipment on locomotive and trackside",
      label: "SERVICES",
      title: "KAVACH Installation\n& Commissioning",
      description: "Installation, integration, testing and verification services to KAVACH OEMs and railway units — onboard locomotive works and station/trackside works per OEM documentation and RDSO/SPN/196/2020.",
      cta: "Explore KAVACH Installation",
      link: "/services/kavach-installation",
    },
    // 18. S&T System Integration
    {
      type: "image",
      src: heroSlide18Img,
      alt: "High-tech railway operations control room with live network monitoring",
      label: "SERVICES",
      title: "S&T System\nIntegration",
      description: "Requirements capture, interface definition and architecture across multi-vendor S&T equipment — interlocking, KAVACH, IPS, data loggers, MSDAC and telecom subsystems with FAT/SAT planning and correlation checking.",
      cta: "Explore System Integration",
      link: "/services/system-integration",
    },
    // 19. Electronics Manufacturing Services
    {
      type: "image",
      src: heroSlide19Img,
      alt: "Modern SMT electronics manufacturing production line with automated assembly",
      label: "SERVICES",
      title: "Electronics Manufacturing\nServices (EMS)",
      description: "SMT and through-hole assembly, box-build and cable/harness assembly and testing to IPC-A-610 at our Hyderabad facility under ISO 9001:2015-aligned QMS with full material traceability.",
      cta: "Explore EMS",
      link: "/services/ems",
    },
    // 20. Installation, Testing & Commissioning
    {
      type: "image",
      src: heroSlide20Img,
      alt: "Railway field engineers commissioning signalling equipment on-site",
      label: "SERVICES",
      title: "Installation, Testing\n& Commissioning",
      description: "Turnkey installation and commissioning for railway electronic and electrical systems beyond KAVACH, equipment room installation, cabling, integration testing, commissioning documentation, and depot-level maintenance support.",
      cta: "Explore Testing & Commissioning",
      link: "/services/testing-commissioning",
    },
  ];

  // 1. Play/Pause and reset the background video
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (activeSlide === 0) {
        if (lastActiveSlideRef.current !== 0) {
          video.currentTime = 0;
        }
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
    lastActiveSlideRef.current = activeSlide;
  }, [activeSlide]);

  // 2. Autoplay progress tracking
  useEffect(() => {
    if (!isCurrentlyPlaying) return;

    setProgress(0);
    let animFrame: number;

    if (activeSlide === 0) {
      // Video progress tracking - let video finish
      const updateVideoProgress = () => {
        const video = videoRef.current;
        if (video && video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
        }
        animFrame = requestAnimationFrame(updateVideoProgress);
      };
      animFrame = requestAnimationFrame(updateVideoProgress);
    } else {
      // Image progress tracking (7.5 seconds)
      const duration = 7500;
      const startTime = Date.now();

      const updateImageProgress = () => {
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(currentProgress);

        if (elapsed < duration) {
          animFrame = requestAnimationFrame(updateImageProgress);
        } else {
          setActiveSlide((prev) => (prev + 1) % slides.length);
        }
      };
      animFrame = requestAnimationFrame(updateImageProgress);
    }

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [activeSlide, slides.length, isCurrentlyPlaying]);

  return (
    <section
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-on-dark"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* Morph-blend Transition */
        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          filter: brightness(0.4) blur(6px);
          transition:
            opacity 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            filter 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
          pointer-events: none;
        }
        
        .hero-slide.active {
          opacity: 1;
          filter: brightness(1) blur(0px);
          z-index: 2;
          pointer-events: auto;
        }

        .hero-slide-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Ken Burns subtle zoom only triggers on the active slide image */
        .hero-slide.active img.hero-slide-media {
          animation: kenburns 9s ease-out forwards;
        }

        @keyframes kenburns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        /* Text Focus Reveal (Fade + Blur, No sliding) */
        .hero-text-item {
          opacity: 0;
          filter: blur(10px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .active-text-container .hero-text-item {
          opacity: 1;
          filter: blur(0);
        }
        
        /* Staggered delay offsets for text components */
        .active-text-container .delay-0 { transition-delay: 50ms; }
        .active-text-container .delay-1 { transition-delay: 200ms; }
        .active-text-container .delay-2 { transition-delay: 350ms; }
        .active-text-container .delay-3 { transition-delay: 500ms; }
        .active-text-container .delay-4 { transition-delay: 580ms; }

        /* Navigation buttons curved edge radial hover gradients */
        .hero-prev-btn, .hero-next-btn {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 9rem; /* 144px width for wider, sleeker hover zone */
          z-index: 20;
          outline: none;
          cursor: pointer;
        }
        
        .hero-prev-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at left center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.05) 40%, transparent 70%);
          opacity: 0;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .hero-prev-btn:hover::before {
          opacity: 1;
        }

        .hero-next-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at right center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.05) 40%, transparent 70%);
          opacity: 0;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .hero-next-btn:hover::before {
          opacity: 1;
        }
      `}} />

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <div
              key={idx}
              className={`hero-slide ${isActive ? "active" : ""}`}
            >
              {slide.type === "video" ? (
                <video
                  ref={videoRef}
                  src={slide.src}
                  muted
                  playsInline
                  loop={!isPlaying}
                  onEnded={() => {
                    if (isPlaying) {
                      setActiveSlide(1);
                    }
                  }}
                  preload="auto"
                  className="hero-slide-media"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="hero-slide-media"
                />
              )}
            </div>
          );
        })}
      </div>
      {/* Professional Corporate Left-Bottom Asymmetrical Gradient Overlay (Siemens/ABB/Hitachi Rail style) */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 18%),
            radial-gradient(ellipse 180% 140% at 0% 100%, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.58) 18%, rgba(0,0,0,0.42) 35%, rgba(0,0,0,0.22) 52%, rgba(0,0,0,0.08) 68%, rgba(0,0,0,0) 82%),
            linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.22) 22%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0) 65%)
          `
        }}
      />

      {/* Progress bar — subtle, not distracting */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/8">
        <div
          className="relative h-full bg-white/45 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation and Controls Bar */}
      <div className="absolute bottom-10 right-[clamp(1.25rem,4vw,3rem)] z-40 flex items-center gap-6 pointer-events-auto select-none">
        {/* Mobile Slide Counter (Replaces cluttered dashes on small screens) */}
        <span className="sm:hidden text-xs font-mono text-white/80 tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          {String(activeSlide + 1).padStart(2, "0")} / {slides.length}
        </span>

        {/* Pagination dots (Hidden on mobile for clean UI) */}
        <div className="hidden sm:flex items-center gap-3">
          {slides.map((_, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveSlide(idx);
                  setProgress(0);
                }}
                className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer ${
                  isActive ? "w-6 bg-white" : "w-[6px] bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Play/Pause Control */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            /* Pause — two vertical bars */
            <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
              <rect x="2" y="1" width="4" height="14" rx="0.5" />
              <rect x="10" y="1" width="4" height="14" rx="0.5" />
            </svg>
          ) : (
            /* Play — solid right-pointing triangle */
            <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
              <polygon points="3,1 15,8 3,15" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Arrows on Left/Right */}
      <button
        onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="hero-prev-btn left-0 flex items-start justify-start pt-[36vh] px-4 md:px-8 group"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-16 md:h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="hero-next-btn right-0 flex items-start justify-end pt-[36vh] px-4 md:px-8 group"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-16 md:h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Text Content perfectly synced with slides */}
      <div className="container-editorial hero-parallax-content relative z-10 flex h-full flex-col justify-end pt-[96px] pb-16 pointer-events-none">
        {/* auto height — never clip typography */}
        <div className="relative w-full">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={idx}
                className={`absolute bottom-0 left-0 right-0 transition-opacity duration-[400ms] ease-in-out ${
                  isActive ? "active-text-container pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <h1 className="mt-4 max-w-5xl text-[clamp(2rem,4.8vw,4.25rem)] font-light leading-[1.06] tracking-[-0.03em] overflow-visible whitespace-pre-line hero-text-item delay-1">
                  <span>{slide.title}</span>
                </h1>

                <div className="mt-8 md:mt-12 max-w-xl flex flex-col items-start gap-6">
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-on-dark/85 hero-text-item delay-2">
                    {slide.description}
                  </p>
                  <div className="flex items-center justify-start text-xs md:text-sm font-medium tracking-[0.12em]">
                    <Link
                      to={slide.link}
                      className="link-underline opacity-90 hover:opacity-100 transition-all hero-text-item delay-3 font-medium cursor-pointer"
                    >
                      {slide.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-bg py-20 md:py-28 overflow-hidden about-section">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="eyebrow block gsap-reveal">ABOUT LORVEN</span>
              <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-light tracking-tight text-ink uppercase leading-[1.1] gsap-reveal">
                Engineering Confidence <br />
                for Critical Systems.
              </h2>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed text-ink font-light gsap-reveal">
              LorVen Systems is an engineering and technology company focused on developing high-reliability electronic systems for railway transportation, aerospace, defence and industrial infrastructure. Guided by engineering excellence and disciplined execution, we create dependable solutions where safety, reliability and performance are essential.
            </p>

            <div className="gsap-reveal pt-4">
              <Link
                to="/about"
                className="link-underline inline-block text-xs md:text-sm font-semibold tracking-[0.12em] text-ink uppercase py-1"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Right Column: Immersive Video with Apple macOS clean card styling */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className="relative aspect-[16/10] w-full max-w-[580px] overflow-hidden gsap-reveal about-video-card"
              style={{
                borderRadius: "28px",
                background: "rgba(255, 255, 255, 0.96)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.10), 0 6px 18px rgba(0,0,0,0.05)",
                backgroundClip: "padding-box",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              }}
            >
              <video
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                style={{ borderRadius: "28px" }}
              />
            </div>
          </div>
        </div>

        {/* Vision, Mission, Purpose — Editorial Experience */}
        <div className="mt-12 relative py-14 md:py-20 overflow-hidden vmp-section">
          
          {/* Subtle Industrial Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Fine architectural grid overlay */}
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            
            {/* Soft gradient fades */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0">
            
            {/* Timeline Spine */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-rule/50 -translate-x-1/2 hidden md:block" />

            <div className="grid grid-cols-1 gap-y-16 md:gap-y-20">
              
              {/* 01. VISION (Left Text, Right Image) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 relative items-center group">
                <div className="flex flex-col justify-center gsap-reveal order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-[15px] font-semibold uppercase tracking-[0.2em] text-black">The Vision</span>
                    <span className="h-px w-12 bg-black/40"></span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.15] tracking-tight text-black">
                    To build a globally respected technology company delivering world-class systems for <span className="font-medium relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black">safety-critical</span> and <span className="font-medium relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black">mission-critical</span> industries.
                  </h3>
                </div>
                <div className="vmp-img-container relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-xl shadow-2xl order-1 md:order-2 bg-rule/10">
                  <img src={engineers} alt="Engineering Vision" className="w-full h-full object-cover transition-all duration-700 hover:grayscale" />
                </div>
                {/* Node for timeline */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-black bg-bg z-10 transition-colors duration-500 group-hover:bg-black" />
              </div>

              {/* 02. MISSION (Left Image, Right Text) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 relative items-center group">
                <div className="vmp-img-container relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-xl shadow-2xl bg-rule/10">
                  <img src={electrical} alt="Engineering Mission" className="w-full h-full object-cover transition-all duration-700 hover:grayscale" />
                </div>
                <div className="flex flex-col justify-center gsap-reveal">
                  <div className="flex items-center gap-4 mb-10 md:justify-end">
                    <span className="h-px w-12 bg-black/40"></span>
                    <span className="text-[15px] font-semibold uppercase tracking-[0.2em] text-black">The Mission</span>
                  </div>
                  <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-black md:text-right">
                    To create reliable, innovative and high-performance products that advance transportation, infrastructure, aerospace and defence through <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black/30">engineering excellence</span> and <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black/30">disciplined execution</span>.
                  </p>
                </div>
                {/* Node for timeline */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-black bg-bg z-10 transition-colors duration-500 group-hover:bg-black" />
              </div>

              {/* 03. PURPOSE (Centered Powerful Close) */}
              <div className="flex flex-col items-center text-center gsap-reveal relative pt-16 md:pt-24 border-t border-rule/50">
                <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black z-10 shadow-[0_0_15px_rgba(0,0,0,0.15)]" />
                
                <div className="flex items-center gap-4 mb-12">
                  <span className="h-px w-8 bg-rule"></span>
                  <span className="text-[15px] font-semibold uppercase tracking-[0.2em] text-black">The Purpose</span>
                  <span className="h-px w-8 bg-rule"></span>
                </div>
                
                <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] text-black max-w-4xl">
                  Engineering technology that improves safety, reliability and performance <br className="hidden md:block"/>
                  <span className="font-medium inline-block mt-4 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black">where failure is not an option.</span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCTS_LIST = [
  {
    n: "01",
    label: "IoT & Energy Management",
    img: heroSlide04Img,
    slug: "iot-energy",
    systems: [
      {
        code: "WLI",
        name: "Water Level Indicator",
        desc: "Real-time water-tank level measurement for passenger coaches, reported coach-wise to the CRIS server for planned station watering.",
        img: heroSlide08Img,
        href: "/products/wagons/wli",
      },
      {
        code: "IFD",
        name: "Intelligent Field Device",
        desc: "Real-time monitoring, energy metering, and remote control of railway electrical assets reporting to IR-NIYANTRAC.",
        img: heroSlide09Img,
        href: "/products/electric-locomotive/ifd",
      },
    ],
  },
  {
    n: "02",
    label: "Signalling & Telecom",
    img: heroSlide05Img,
    slug: "snt",
    systems: [
      {
        code: "RDPMS",
        name: "Remote Diagnostics",
        desc: "Intelligent IoT platform continuously monitoring railway signalling equipment health, analyzing anomalies and generating predictive alerts.",
        img: heroSlide10Img,
        href: "/products/snt/rdpms",
      },
      {
        code: "IPS",
        name: "Integrated Power Supply",
        desc: "Microprocessor-controlled power system delivering uninterrupted, stable, and redundant electricity to critical railway signalling networks.",
        img: heroSlide11Img,
        href: "/products/snt/ips",
      },
    ],
  },
  {
    n: "03",
    label: "Rolling Stock",
    img: heroSlide06Img,
    slug: "wagons",
    systems: [
      {
        code: "AHABD",
        name: "Hot Axle Box Detector",
        desc: "Automatic Hot Axle Box Detection establishing axle temperature records per coach to prevent derailments.",
        img: heroSlide12Img,
        href: "/products/wagons/ahabd",
      },
    ],
  },
  {
    n: "04",
    label: "Training Simulators",
    img: heroSlide07Img,
    slug: "simulators",
    systems: [
      {
        code: "Driving Simulator",
        name: "Loco Pilot Driving Simulator",
        desc: "High-fidelity driving simulation platform providing realistic training, route familiarization, and emergency scenarios for locomotive drivers.",
        img: heroSlide13Img,
        href: "/products/electric-locomotive/simulators",
      },
      {
        code: "KAVACH Simulator",
        name: "KAVACH ATP Pilot Trainer",
        desc: "Classroom-safe KAVACH automatic train protection training platform for Station Masters and Loco Pilots.",
        img: heroSlide14Img,
        href: "/products/electric-locomotive/kavach",
      },
    ],
  },
];

function ProductsSection() {
  const [active, setActive] = useState(0);
  const [subActive, setSubActive] = useState(0);

  return (
    <section className="relative bg-ink text-on-dark overflow-hidden min-h-[100vh] py-16 lg:py-24 flex items-center products-section">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          to {
            transform: scale(1.03);
          }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate;
        }
      `}} />

      {/* Full-screen cinematic background images — crossfade on active and subActive changes */}
      {PRODUCTS_LIST.map((it, i) =>
        it.systems.map((sys, idx) => (
          <div
            key={`${it.label}-${sys.code}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out products-parallax-bg ${
              active === i && subActive === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={sys.img}
              alt={sys.code}
              className="absolute inset-0 h-[108%] w-full -top-[4%] object-cover filter brightness-[0.8] animate-slow-zoom"
            />
            {/* Clean gradients for maximum image clarity and text legibility — deeper on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/50 lg:to-transparent pointer-events-none" />
          </div>
        ))
      )}

      {/* Content layer */}
      <div className="relative z-10 container-editorial w-full flex flex-col lg:flex-row lg:items-center justify-between gap-12">

        {/* Left column — label list */}
        <div className="flex flex-col justify-center w-full lg:w-[48%] lg:pr-6">
          <span className="eyebrow !text-on-dark/50 gsap-reveal">Products</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-on-dark gsap-reveal">
            Products We Build
          </h2>

          <ul className="mt-6 border-t border-white/15 gsap-reveal">
            {PRODUCTS_LIST.map((it, i) => (
              <li key={it.label} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setSubActive(0);
                  }}
                  onMouseEnter={() => {
                    setActive(i);
                    setSubActive(0);
                  }}
                  className="group w-full text-left py-3.5 flex items-center justify-between gap-4"
                >
                  {/* Label — scaled down for balanced page hierarchy */}
                  <span
                    className={`flex-1 font-light leading-snug transition-all duration-400 ${
                      active === i
                        ? "text-[clamp(1.2rem,2.2vw,1.85rem)] text-white"
                        : "text-[clamp(0.98rem,1.5vw,1.3rem)] text-white/30 group-hover:text-white/65"
                    }`}
                  >
                    {it.label}
                  </span>

                  {/* Arrow — only visible when active */}
                  <span
                    className={`num-mono text-[13px] shrink-0 transition-all duration-300 ${
                      active === i ? "opacity-100 translate-x-0 text-white" : "opacity-0 -translate-x-3"
                    }`}
                  >
                    →
                  </span>
                </button>

                {/* Mobile blurb — expands under the active item */}
                <div
                  className={`overflow-hidden transition-all duration-500 lg:hidden ${
                    active === i ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-9 space-y-5 pt-3 border-t border-white/5">
                    {/* Display both core solutions with description on mobile */}
                    {it.systems.map((sys) => (
                      <div key={sys.code} className="space-y-2.5 border-l-2 border-white/20 pl-4">
                        <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">{sys.code}</div>
                        <p className="text-sm sm:text-base leading-relaxed text-white/85 font-light max-w-md">{sys.desc}</p>
                        <div className="pt-2">
                          <Link
                            to={sys.href as any}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white hover:text-steel transition-colors min-h-[44px]"
                          >
                            Explore Product →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link
              to="/products"
              className="link-underline inline-flex items-center text-xs md:text-sm font-semibold tracking-[0.12em] text-white/50 hover:text-white transition-colors py-3 px-4 -my-3 -mx-4 min-h-[44px]"
            >
              All products →
            </Link>
          </div>
        </div>

        {/* Right column — Single clean translucent information card (desktop only) */}
        <div
          className="hidden lg:flex relative w-full lg:w-[48%] min-h-[400px] h-auto border border-white/10 rounded-xl flex-col justify-between p-8 md:p-10 backdrop-blur-md"
          style={{
            background: "linear-gradient(135deg, rgba(20, 20, 20, 0.3) 0%, rgba(5, 5, 5, 0.15) 100%)"
          }}
        >
          {/* Specification Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <span className="eyebrow !text-white/40 block mb-1">Product Details</span>
              <h3
                key={`title-${active}-${subActive}`}
                className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4 animate-fade-in-up"
              >
                {PRODUCTS_LIST[active].systems[subActive].code}
              </h3>
              
              <p
                key={`desc-${active}-${subActive}`}
                className="text-sm md:text-base leading-relaxed text-white font-light tracking-wide max-w-md animate-fade-in-up min-h-[80px]"
              >
                {PRODUCTS_LIST[active].systems[subActive].desc}
              </p>
            </div>

            <div className="space-y-6">
              {/* Core Products interactive selectors */}
              <div className="border-t border-white/10 pt-4 z-20">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40 block mb-3">
                  Core Products
                </span>
                <div className="flex flex-wrap gap-6">
                  {PRODUCTS_LIST[active].systems.map((sys, idx) => (
                    <Link
                      key={sys.code}
                      to={sys.href as any}
                      onMouseEnter={() => setSubActive(idx)}
                      className="cursor-pointer group/item block"
                    >
                      <div
                        className={`text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
                          subActive === idx ? "text-white" : "text-white/40 group-hover/item:text-white/70"
                        }`}
                      >
                        {sys.code}
                      </div>
                      {/* Minimal underline active indicator */}
                      <div
                        className={`h-[2px] bg-white transition-all duration-300 ${
                          subActive === idx ? "w-full opacity-100" : "w-0 opacity-0 group-hover/item:opacity-50 group-hover/item:w-1/2"
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Explore Link */}
              <div className="pt-1 z-20">
                <Link
                  key={`link-${active}-${subActive}`}
                  to={PRODUCTS_LIST[active].systems[subActive].href as any}
                  className="link-underline inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-white hover:text-white transition-colors pb-0.5 animate-fade-in-up"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ServicesSection() {
  const [active, setActive] = useState(0);

  const SERVICES_LIST = [
    {
      title: "Electronic Product Development",
      img: heroSlide15Img,
      desc: "Complete embedded hardware design, firmware engineering, rapid prototyping, and validation testing for safety-critical environments.",
      to: "/services/product-dev",
    },
    {
      title: "Signalling Design Services",
      img: heroSlide16Img,
      desc: "CAD schematics, interlocking plans, Electronic Interlocking (EI) application logic, and KAVACH circuit designs compliant with RDSO standards.",
      to: "/services/signalling-design",
    },
    {
      title: "KAVACH Installation & Commissioning",
      img: heroSlide17Img,
      desc: "Certified installation, RFID placement, loco equipment integration, and field testing for KAVACH Automatic Train Protection.",
      to: "/services/kavach-installation",
    },
    {
      title: "S&T System Integration",
      img: heroSlide18Img,
      desc: "Multi-vendor signalling and telecom integration, interface engineering, FAT/SAT testing, and central diagnostic network telemetry.",
      to: "/services/system-integration",
    },
    {
      title: "Electronics Manufacturing Services (EMS)",
      img: heroSlide19Img,
      desc: "High-mix SMT assembly, box-build manufacturing, automated optical inspection, and rigorous quality testing under ISO 9001:2015.",
      to: "/services/ems",
    },
    {
      title: "Installation, Testing & Commissioning",
      img: heroSlide20Img,
      desc: "Turnkey field installation, safety verification, traffic block execution, and lifecycle technical support across Indian Railways.",
      to: "/services/testing-commissioning",
    },
  ];

  return (
    <section className="relative bg-ink text-on-dark overflow-hidden min-h-[100vh] py-16 lg:py-24 flex items-center border-t border-white/5 services-section">
      
      {/* Content layer */}
      <div className="container-editorial w-full flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-16">

        {/* Left column — vertical services menu list */}
        <div className="flex flex-col justify-center w-full lg:w-[48%]">
          <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-tight text-on-dark mb-6 gsap-reveal">
            Our Services
          </h2>

          <ul className="space-y-2.5 border-t border-white/10 pt-4 gsap-reveal">
            {SERVICES_LIST.map((it, i) => (
              <li key={it.title} className="border-b border-white/5 pb-2.5 last:border-0">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group w-full text-left flex items-center justify-between py-1.5"
                >
                  <div className="flex items-center gap-4">
                    {/* Label */}
                    <span
                      className={`font-light leading-snug transition-all duration-400 ${
                        active === i
                          ? "text-[clamp(1.05rem,1.4vw,1.35rem)] text-white"
                          : "text-[clamp(0.88rem,1.1vw,1.02rem)] text-white/30 group-hover:text-white/65"
                      }`}
                    >
                      {it.title}
                    </span>
                  </div>

                  {/* Arrow */}
                  <span
                    className={`num-mono text-[13px] shrink-0 transition-all duration-300 ${
                      active === i ? "opacity-100 translate-x-0 text-white" : "opacity-0 -translate-x-3"
                    }`}
                  >
                    →
                  </span>
                </button>

                {/* Mobile blurb — accordion style details */}
                <div
                  className={`overflow-hidden transition-all duration-500 lg:hidden ${
                    active === i ? "max-h-[500px] opacity-100 pb-2 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-9 space-y-3 pt-3 border-t border-white/5">
                    <p className="text-xs leading-relaxed text-white/60 font-light max-w-md">{it.desc}</p>
                    <div className="pt-1">
                      <Link
                        to={it.to as any}
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — Single photo + details card below (desktop only) */}
        <div className="hidden lg:flex w-full lg:w-[42.5%] flex-col justify-center services-parallax-col">
          <div className="space-y-4 max-w-[490px]">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9.2] rounded-xl overflow-hidden border border-white/10 shadow-xl bg-black/25">
              {SERVICES_LIST.map((it, i) => (
                <div
                  key={it.title}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover filter brightness-[0.85] animate-slow-zoom"
                  />
                  {/* Subtle grading vignette gradient over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Placard details below the image */}
            <div className="pt-1">
              <h3
                key={`service-title-${active}`}
                className="text-xl md:text-2xl font-light text-white tracking-tight mb-2 animate-fade-in-up"
              >
                {SERVICES_LIST[active].title}
              </h3>
              
              <p
                key={`service-desc-${active}`}
                className="text-sm leading-relaxed text-white/75 font-light tracking-wide max-w-md animate-fade-in-up min-h-[64px] mb-4"
              >
                {SERVICES_LIST[active].desc}
              </p>

              <div className="z-20">
                <Link
                  key={`service-link-${active}`}
                  to={SERVICES_LIST[active].to as any}
                  className="link-underline inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-white hover:text-white transition-colors pb-0.5 animate-fade-in-up"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white border-t border-white/5 w-full py-20 md:py-28 flex items-center cta-section">
      {/* Background bullet train image (100% visible landscape cover) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
        <img
          src={newBulletTrain}
          alt="High-speed bullet train"
          className="w-full h-full object-cover object-[center_80%] md:object-[center_75%] brightness-[0.85] contrast-100 scale-110 cta-parallax-img"
        />
        {/* Soft elegant gradient shading on the left & bottom to hold white text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 container-editorial w-full">
        <div className="max-w-2xl">
          <span className="eyebrow !text-white/60 gsap-reveal">Contact Us</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] text-white tracking-tight gsap-reveal">
            Tell us about the system you need to build.
          </h2>
          <div className="mt-8 gsap-reveal">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white px-6 py-3.5 md:px-8 md:py-4.5 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none min-h-[44px]"
            >
              Begin an enquiry →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
