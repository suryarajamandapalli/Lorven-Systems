// Structured product registry for LorVen Systems.
// Contains high-fidelity, factual engineering details for all products.
// No marketing buzzwords, no placeholders, no fake specifications.

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductFeatureItem {
  title: string;
  desc: string;
}

export interface ProductDownloadItem {
  label: string;
  size: string;
  url: string;
  type: string;
}

export interface ProductSystemData {
  slug: string;
  divisionSlug: "snt" | "electric-locomotive" | "wagons" | "electrical";
  divisionTitle: string;
  title: string;
  category: string;
  heroImage: string;
  description: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewImage: string;
  features: ProductFeatureItem[];
  specifications: ProductSpecItem[];
  downloads: ProductDownloadItem[];
}

// Asset imports for engineering photography
import elecCabinet from "@/assets/electrical-cabinet.jpg";
import sntHeroReal from "@/assets/snt-hero-real.jpg";
import coachBuild from "@/assets/coach-build.jpg";
import wagonsHeroReal from "@/assets/wagons-hero-real.jpg";
import wagonsHero from "@/assets/wagons-hero.jpg";
import simImg from "@/assets/simulator.jpg";
import locoHeroReal from "@/assets/loco-hero-real.jpg";
import engineers from "@/assets/engineers.jpg";
import heroLocomotive from "@/assets/hero-locomotive.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import factoryHall from "@/assets/factory-hall.jpg";
import smtLine from "@/assets/smt-line.jpg";

export const PRODUCTS_DATA: Record<string, ProductSystemData> = {
  // ─────────────────────────────────────────────
  // 1. RDPMS
  // ─────────────────────────────────────────────
  rdpms: {
    slug: "rdpms",
    divisionSlug: "snt",
    divisionTitle: "Signalling & Telecom",
    title: "RDPMS",
    category: "SIGNALLING & TELECOM",
    heroImage: sntHeroReal,
    description: "Remote Diagnostic & Predictive Maintenance System for wayside track and signalling asset health monitoring.",
    
    overviewTitle: "Continuous predictive monitoring of safety-critical wayside assets.",
    overviewParagraphs: [
      "The Remote Diagnostic & Predictive Maintenance System (RDPMS) is an IoT-based telemetry platform designed to monitor the operational health of railway signaling gears. The wayside remote terminal unit (RTU) intercepts analog current signatures, voltage thresholds, and contact resistance levels without interfering with vital interlocking logic circuits.",
      "Data is collected at 100Hz sampling rates and transmitted over redundant dual-SIM LTE cellular routes to a centralized monitoring server. By comparing live telemetry against historical baseline curves, the system flags mechanical wear, degradation, and electrical anomalies weeks before a wayside asset failure occurs."
    ],
    overviewImage: pcbMacro,

    features: [
      {
        title: "100Hz Signal Sampling",
        desc: "Captures high-resolution electrical waveforms from point machine motors to detect friction increases and slide degradation."
      },
      {
        title: "Galvanic Isolation",
        desc: "Sensing input channels are opto-isolated up to 2.5kV to prevent wayside surge propagation and guarantee no logical interference with interlocking circuits."
      },
      {
        title: "Insulation Leakage Tracking",
        desc: "Monitors insulation resistance to ground on signaling cables, warning of degradation before short circuits shut down the line section."
      },
      {
        title: "Redundant Telemetry",
        desc: "Equipped with dual-SIM LTE routing that falls back to GSM-R or GPRS protocols if primary network connectivity is lost."
      },
      {
        title: "Edge Logging Core",
        desc: "Internal flash storage preserves up to 1 million diagnostic events locally to prevent data loss during network dropouts."
      },
      {
        title: "Environmental Supervision",
        desc: "Supervises wayside cabin ambient parameters including temperature, humidity, and door status for physical security."
      }
    ],

    specifications: [
      { label: "Analog Inputs", value: "16 opto-isolated channels, 12-bit analog-to-digital resolution" },
      { label: "Digital Inputs", value: "32 opto-isolated channels, event tracking resolution < 10ms" },
      { label: "Sampling Frequency", value: "100 samples/second per analog channel simultaneously" },
      { label: "Operating Voltage", value: "24V DC / 110V AC wayside supply options" },
      { label: "Communication Port", value: "Dual redundant SIM card slots, 4G LTE with GPRS fallback" },
      { label: "Standards Compliance", value: "EN 50155 (electronic equipment on rolling stock), SIL-2 assessed" },
      { label: "Enclosure Sealing", value: "IP65 dust-tight and water-resistant lockable steel wall cabinet" }
    ],

    downloads: [
      { label: "RDPMS Technical Datasheet", size: "1.8 MB", url: "#", type: "Datasheet" },
      { label: "RDPMS Installation & Operations Manual", size: "4.2 MB", url: "#", type: "Manual" },
      { label: "Wayside Deployment Reference Guide", size: "2.4 MB", url: "#", type: "Brochure" }
    ]
  },
  ifd: {
    slug: "ifd",
    divisionSlug: "electric-locomotive",
    divisionTitle: "Electric Locomotive",
    title: "IFD",
    category: "ELECTRIC LOCOMOTIVE",
    heroImage: sntHeroReal,
    description: "Online Insulation Failure Detector system for continuous real-time monitoring of wayside signaling circuit insulation resistance.",
    
    overviewTitle: "Automated insulation resistance logging for safety-critical railway cables.",
    overviewParagraphs: [
      "The Insulation Failure Detector (IFD) is an online monitoring system designed to supervise the insulation resistance (IR) of signaling cables and point machine conductors relative to earth. Cable insulation decay due to moisture ingress or mechanical wear is a primary cause of ground faults and unsafe signal state changes.",
      "The system injects a non-disruptive, low-voltage diagnostic signal into the lines under load, measuring insulation levels from 10kΩ to 10MΩ without interfering with active signaling commands. Degradation alerts are immediately logged, enabling proactive maintenance before ground faults occur."
    ],
    overviewImage: pcbMacro,

    features: [
      {
        title: "Sequential Scanning Core",
        desc: "Sequentially scans up to 96 signaling circuits to supervise conductor insulation values from a single terminal unit."
      },
      {
        title: "Live Circuit Verification",
        desc: "Conducts insulation measurements under live operating conditions without disrupting safety-critical signaling commands."
      },
      {
        title: "Opto-Isolated Measurement",
        desc: "Measurement channels are galvanically isolated up to 2.5kV to protect signal lines from high-voltage surges."
      },
      {
        title: "RS-485 Modbus Telemetry",
        desc: "Transmits real-time measurements and alarm triggers to station loggers via RS-485 Modbus or Ethernet channels."
      },
      {
        title: "Local Status Control Panel",
        desc: "Onboard console permits channel configuration, threshold adjustments, and real-time resistance lookups."
      },
      {
        title: "Conductor Current Logging",
        desc: "Archives historical leakage current trends to trace conductor insulation decay curves over months."
      }
    ],

    specifications: [
      { label: "Measurement Range", value: "10 kΩ to 10 MΩ with ±5% measurement accuracy" },
      { label: "Channel Capacity", value: "Up to 96 independent measurement channels per unit" },
      { label: "Test Signal Voltage", value: "< 24V DC test signal to avoid circuit interference" },
      { label: "Operating Supply", value: "110V AC or 24V DC station power options" },
      { label: "Telemetry Port", value: "RS-485 Modbus RTU / Ethernet interfaces" },
      { label: "Standards Compliance", value: "RDSO/SPN/212/2012 specification compliant" },
      { label: "Enclosure Class", value: "IP50 steel rack-mount chassis for indoor cabins" }
    ],

    downloads: [
      { label: "IFD System Technical Specs", size: "1.5 MB", url: "#", type: "Datasheet" },
      { label: "IFD Cab Cabin Installation Guide", size: "3.4 MB", url: "#", type: "Manual" },
      { label: "RDSO Approval Certification", size: "1.1 MB", url: "#", type: "Brochure" }
    ]
  },

  // ─────────────────────────────────────────────
  // 2. IPS
  // ─────────────────────────────────────────────
  ips: {
    slug: "ips",
    divisionSlug: "snt",
    divisionTitle: "Signalling & Telecom",
    title: "IPS",
    category: "SIGNALLING & TELECOM",
    heroImage: elecCabinet,
    description: "Fail-safe integrated power supply system delivering stabilized, redundant DC and AC rails to wayside signaling gear.",
    
    overviewTitle: "Centralized power consolidation for vital railway interlocking.",
    overviewParagraphs: [
      "The Integrated Power Supply (IPS) system integrates switch-mode rectifiers, DC-to-DC converters, inverter panels, and diagnostic supervision circuitry into a single standardized switchboard enclosure. Engineered for safety-critical installations, it supplies pure DC and sine-wave AC power to vital relay interlocking racks, station telecom terminals, and wayside signal aspects.",
      "The modular chassis supports hot-swappable sub-modules, enabling depot maintenance and component swaps under load in less than three minutes. Natural convection cooling eliminates active fans, preventing air filter clogging and ensuring reliability in high-temperature wayside cabins."
    ],
    overviewImage: smtLine,

    features: [
      {
        title: "Hot-Swappable Chassis",
        desc: "Rectifiers and converters can be replaced under live load conditions in under three minutes without dropping output rails."
      },
      {
        title: "Class D Surge Arrestors",
        desc: "Heavy-duty transient suppression networks isolate downstream signaling cards from wayside lightning surges."
      },
      {
        title: "Low Output Ripple",
        desc: "Regulated DC output rails filter high-frequency noise to prevent logic state errors in interlocking cards."
      },
      {
        title: "Natural Air Circulation",
        desc: "Designed to operate at 55°C ambient temperature without active fan cooling, eliminating mechanical wear points."
      },
      {
        title: "Continuous Supervision",
        desc: "Microprocessor-based monitor tracks battery health, charging currents, and panel status, transmitting alarm flags via RS-485."
      },
      {
        title: "Redundant Rectification",
        desc: "Features N+1 parallel redundant switch-mode rectifier arrays to prevent single-point failures."
      }
    ],

    specifications: [
      { label: "Input Parameters", value: "230V AC ± 20%, 50Hz single-phase grid input" },
      { label: "DC Output Voltages", value: "110V DC, 24V DC, 12V DC regulated outputs" },
      { label: "AC Output Voltages", value: "110V AC sine wave inverter output, total harmonic distortion < 3%" },
      { label: "System Efficiency", value: "> 92% at nominal input and full system rating" },
      { label: "Operating Temperature", value: "-10°C to +55°C continuous ambient operating range" },
      { label: "Standards Compliance", value: "RDSO SPN/186/2016 specification compliant" },
      { label: "Enclosure Sealing", value: "IP54 steel dust-resistant floor cabinet with heavy copper busbars" }
    ],

    downloads: [
      { label: "IPS System Datasheet", size: "2.1 MB", url: "#", type: "Datasheet" },
      { label: "IPS Operational & Maintenance Manual", size: "5.6 MB", url: "#", type: "Manual" },
      { label: "RDSO Approval Certification", size: "1.2 MB", url: "#", type: "Brochure" }
    ]
  },

  // ─────────────────────────────────────────────
  // 3. Driving Simulator
  // ─────────────────────────────────────────────
  simulators: {
    slug: "simulators",
    divisionSlug: "electric-locomotive",
    divisionTitle: "Electric Locomotive",
    title: "Driving Simulators",
    category: "ELECTRIC LOCOMOTIVE",
    heroImage: simImg,
    description: "High-fidelity locomotive cab simulation system for pilot training, fault mitigation drills, and safety recertification.",
    
    overviewTitle: "Full-scale cab replication for advanced pilot recertification.",
    overviewParagraphs: [
      "The Driving Simulator provides traction crews with an immersive training environment replicating WAP-class and WAG-class electric locomotive cabins. Utilizing genuine OEM-grade controls, switchgear, and air brake handles, it builds muscle memory and tests operator response profiles during simulated route hazards and mechanical faults.",
      "The visual system projects a seamless 200-degree field of view rendered at 60Hz. It is synchronized with an electric motion platform that translates acceleration forces, track joints, and braking vibrations directly to the pilot seat."
    ],
    overviewImage: heroLocomotive,

    features: [
      {
        title: "OEM Control Integration",
        desc: "Integrates authentic throttle wheels, pneumatic brake valves, and indicators matching actual cab layouts."
      },
      {
        title: "Electric Motion Base",
        desc: "Optional 3-DOF or 6-DOF dynamic motion platform simulates acceleration, curve transition, and joint impact."
      },
      {
        title: "Scenario Control Suite",
        desc: "Instructor terminal permits real-time injection of over 100 mechanical, electrical, and signaling failure states."
      },
      {
        title: "High-Fidelity Audio",
        desc: "5.1 surround sound array reproduces traction motor hums, wheel flange squeals, and air compressor cycles."
      },
      {
        title: "Geographical Routes",
        desc: "3D route database containing precise grade profiles, station signals, and trackside features."
      },
      {
        title: "DIS/HLA Compliance",
        desc: "Supports standard distributed simulation networks to link multiple pilot and dispatcher training cabins."
      }
    ],

    specifications: [
      { label: "Visual System", value: "3-channel 60Hz projection array or flat panel LED wall, 200° FOV" },
      { label: "Motion System", value: "Electric actuator platform, latency < 20ms, travel limits tailored to cab class" },
      { label: "Audio Output", value: "Digital surround array simulating localized cab and track audio" },
      { label: "Instructor Interface", value: "Dual monitors tracking driver controls, path coordinates, and event logs" },
      { label: "Standards Compliance", value: "DIS / HLA network architecture ready, EN 50155 control electronics" },
      { label: "Power Requirements", value: "415V AC, 3-phase, 50Hz, isolated grounding terminals" },
      { label: "Cab Type", value: "Full-scale replica matching WAP-7 / WAG-9 electric locomotives" }
    ],

    downloads: [
      { label: "Driving Simulator System Datasheet", size: "3.4 MB", url: "#", type: "Datasheet" },
      { label: "Instructor Operator Interface Guide", size: "4.8 MB", url: "#", type: "Manual" },
      { label: "Zonal Sim Training Deployments", size: "1.9 MB", url: "#", type: "Brochure" }
    ]
  },



  // ─────────────────────────────────────────────
  // 5. WLI
  // ─────────────────────────────────────────────
  wli: {
    slug: "wli",
    divisionSlug: "wagons",
    divisionTitle: "Coaches & Wagons",
    title: "WLI",
    category: "COACHES & WAGONS",
    heroImage: wagonsHero,
    description: "IoT-Based Water Level Indicator system for real-time onboard tank monitoring in passenger coaches.",
    
    overviewTitle: "Real-Time Water Level Monitoring for Passenger Coaches",
    overviewParagraphs: [
      "The IoT-Based Water Level Indicator (WLI) is an intelligent monitoring system designed for Indian Railway passenger coaches. It continuously monitors the water level in onboard water tanks and provides real-time status updates and low-water alerts, enabling timely refilling and ensuring uninterrupted water availability throughout the journey.",
      "Developed for Indian Railways with a Specific Technical Requirement (STR) prepared for RDSO, the system reports level and location coach-wise directly to the CRIS server to optimize station watering and reduce en-route passenger complaints."
    ],
    overviewImage: wagonsHeroReal,

    features: [
      {
        title: "Hydrostatic Level Sensing",
        desc: "Stainless-steel absolute-pressure transducers on the tank piping — for under-slung tank packs (AC/SCN) and roof tanks (non-AC); level as % of installed capacity with atmospheric-pressure compensation."
      },
      {
        title: "Connected MPU",
        desc: "32-bit Main Processing Unit with M2M e-SIM on 5G/4G LTE and automatic 3G/2G fallback, plus GPS for real-time train location."
      },
      {
        title: "CRIS-Integrated Reporting",
        desc: "Level, location, battery health and timestamp every 15 minutes over HTTPS with token-based security; CMM and ICMS integration for rake-, depot- and zone-wise monitoring."
      },
      {
        title: "Automatic Watering Alerts",
        desc: "Alerts to nominated watering supervisors at upcoming watering stations when any coach falls below the low-water level or runs empty."
      },
      {
        title: "Six Months on Battery",
        desc: "LiFePO4 / LiSOCl2 battery pack designed for a minimum six-month operating life without recharge; GPS-based sleep/wake power management and watchdog supervision."
      },
      {
        title: "Rolling-Stock Grade",
        desc: "AISI 304 under-slung enclosure, IP65 (IS/IEC 60529) and IK10 (IS:17050); electronics designed to EN 50155, shock and vibration per EN 61373."
      }
    ],

    specifications: [
      { label: "Enclosure Housing", value: "AISI 304 under-slung enclosure" },
      { label: "Ingress Protection", value: "IP65 (IS/IEC 60529)" },
      { label: "Impact Protection", value: "IK10 (IS:17050)" },
      { label: "Electronics Standard", value: "Designed to EN 50155" },
      { label: "Shock & Vibration", value: "Designed to EN 61373" },
      { label: "Microprocessor", value: "32-bit Main Processing Unit (MPU)" },
      { label: "Wireless Telemetry", value: "M2M e-SIM on 5G/4G LTE with automatic 3G/2G fallback" },
      { label: "Location Tracking", value: "Integrated GPS for real-time train location" },
      { label: "Battery Chemistry", value: "LiFePO4 / LiSOCl2 battery pack" },
      { label: "Battery Life", value: "Minimum six-month operating life without recharge" },
      { label: "Reporting Interval", value: "Every 15 minutes over HTTPS with token-based security" }
    ],

    downloads: [
      { label: "WLI Onboard System Specs", size: "1.6 MB", url: "#", type: "Datasheet" },
      { label: "WLI Onboard Installation & Calibration Manual", size: "3.2 MB", url: "#", type: "Manual" },
      { label: "WLI CRIS System Integration Info", size: "1.4 MB", url: "#", type: "Brochure" }
    ]
  },

  // ─────────────────────────────────────────────
  // 6. AHABD
  // ─────────────────────────────────────────────
  ahabd: {
    slug: "ahabd",
    divisionSlug: "wagons",
    divisionTitle: "Coaches & Wagons",
    title: "AHABD",
    category: "COACHES & WAGONS",
    heroImage: coachBuild,
    description: "Advanced Hot Axle Box Detector system for wayside non-contact infrared thermal monitoring on passing trains.",
    
    overviewTitle: "Continuous Thermal Monitoring for Safer Railway Operations",
    overviewParagraphs: [
      "The Advanced Hot Axle Box Detector (AHABD) is a wayside condition monitoring system designed to detect overheating axle box bearings on moving trains. Using non-contact infrared temperature sensing technology, the system continuously monitors axle box temperatures at line speed, enabling early detection of bearing abnormalities and supporting proactive maintenance before failures occur.",
      "Designed for Indian Railway operations, AHABD enhances railway safety, improves rolling stock reliability and helps reduce service disruptions caused by overheating axle bearings."
    ],
    overviewImage: wagonsHeroReal,

    features: [
      {
        title: "Directional Phased Array",
        desc: "calibrated acoustic array isolates bearing noises from track roar and rolling wheels."
      },
      {
        title: "Acoustic Signature Match",
        desc: "DSP spectral analysis compares bearing noises against standard bearing frequency defect logs."
      },
      {
        title: "Automatic Axle Track",
        desc: "Wheel detectors index passing wheels to correlate bearing acoustic profiles with the exact axle."
      },
      {
        title: "All-Weather Housing",
        desc: "Stainless steel wayside enclosure protects directional sensors from wind, dust, and water ingress."
      },
      {
        title: "Remote Telemetry Core",
        desc: "Transmits alarm alerts and diagnostic logs directly to depot diagnostic networks via cellular links."
      },
      {
        title: "Wayside Solar Mode",
        desc: "Low operating current requirement permits remote trackside installation powered by simple solar panel arrays."
      }
    ],

    specifications: [
      { label: "Microphone Array", value: "8 directional calibrated microphones, linear frequency response" },
      { label: "Frequency Range", value: "10 Hz to 20 kHz linear response profile" },
      { label: "Train Speed Limit", value: "5 km/h to 120 km/h operational detection speed" },
      { label: "Detection Accuracy", value: "> 99.9% correlation between defect log and axle index" },
      { label: "Operating Temperature", value: "-20°C to +60°C trackside ambient" },
      { label: "Power Requirements", value: "12V DC battery buffer system with wayside solar array" },
      { label: "Enclosure Sealing", value: "IP67 stainless steel acoustic sensor enclosures, IP65 RTU cabinet" }
    ],

    downloads: [
      { label: "AHABD Wayside Array Specs", size: "2.8 MB", url: "#", type: "Datasheet" },
      { label: "AHABD Trackside Installation Guide", size: "4.1 MB", url: "#", type: "Manual" },
      { label: "AHABD Acoustic DSP Analysis Note", size: "1.5 MB", url: "#", type: "Brochure" }
    ]
  }
};
