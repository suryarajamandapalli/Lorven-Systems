// LorVen Systems — Services Registry Database
import engineers from "@/assets/engineers.jpg";
import depot from "@/assets/depot.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import serviceInstallation from "@/assets/service-installation.png";
import serviceDesign from "@/assets/service-design.png";
import electricalCabinet from "@/assets/electrical-cabinet.jpg";

export type ServiceDetail = {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  description: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewImage: string;
  features: { title: string; desc: string }[];
  specifications: { label: string; value: string }[];
  downloads?: { label: string; size: string; url: string; type: string }[];
};

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "product-dev": {
    slug: "product-dev",
    title: "Electronic Product Development",
    category: "ENGINEERING SERVICES",
    heroImage: pcbMacro,
    description: "Specialized embedded hardware design, firmware development, and rapid prototyping for safety-critical and high-reliability operating envelopes.",
    overviewTitle: "From functional specifications to ready-to-manufacture electronic integration.",
    overviewParagraphs: [
      "Our Electronic Product Development division turns custom railway telemetry requirements into robust mechanical and electrical designs. We configure layouts, wiring topologies, and cabinet enclosures to survive the extreme vibration, thermal cycles, and electromagnetic conditions of railway operations.",
      "Utilizing modern CAD tools and thermal simulators, we ensure that power distribution cabinets, interlocking cabins, and locomotive assemblies adhere strictly to EN50155, RDSO, and IPC-A-610 Class 3 standards for long service lives."
    ],
    overviewImage: serviceDesign,
    features: [
      {
        title: "Electrical CAD Schematics",
        desc: "Complete circuit diagram generation for power supplies, relays, and diagnostic sensor interfaces."
      },
      {
        title: "3D Cabinet Modeling",
        desc: "Precision mechanical design of IP-rated metal cabinets tailored to station rack footprints or onboard cabins."
      },
      {
        title: "Firmware Development",
        desc: "Reliable bare-metal and RTOS firmware written to MISRA C/C++ standards for safety-critical loops."
      },
      {
        title: "Thermal & Vibration Simulation",
        desc: "Finite element analysis under extreme loads to verify cabinet structural integrity and heat dissipation profile."
      }
    ],
    specifications: [
      { label: "Engineering Standards", value: "EN50155, IPC-A-610 Class 3, RDSO/SPN/212/2012 compliance" },
      { label: "Design Environment", value: "SolidWorks, AutoCAD Electrical, Altium Designer CAD suits" },
      { label: "Cabinet Configuration", value: "Standard 19-inch steel racks or custom space-constrained enclosures" },
      { label: "Cabinet Protection", value: "IP50 (indoor cabins) up to IP65 (wayside environments)" }
    ]
  },
  "signalling-design": {
    slug: "signalling-design",
    title: "Signalling Design Services",
    category: "ENGINEERING SERVICES",
    heroImage: engineers,
    description: "CAD schematics, circuit diagrams, interlocking plans, and layout designs compliant with RDSO and Indian Railways signalling standards.",
    overviewTitle: "Precision signalling layout design and interlocking configuration.",
    overviewParagraphs: [
      "We offer specialized design engineering for station interlocking layouts, relay racks, and signalling networks. Our team converts operational logic requirements into detailed wiring diagrams, interlocking sheets, and layout profiles.",
      "Every design undergoes strict peer reviews and verification checking to ensure fail-safe operation in accordance with RDSO regulations and zonal railway guidelines."
    ],
    overviewImage: serviceDesign,
    features: [
      {
        title: "Interlocking Plans",
        desc: "Design and drafting of station interlocking logic sheets and control tables."
      },
      {
        title: "Relay Room Racks",
        desc: "Detailed rack layout, wiring diagrams, and cross-terminal maps for Q-style or electronic relays."
      },
      {
        title: "Cable Route Plans",
        desc: "Trackside cable route maps, trenching plans, and junction box termination layouts."
      },
      {
        title: "Circuit Diagrams",
        desc: "Fail-safe circuit design for track circuits, signals, points, and level crossings."
      }
    ],
    specifications: [
      { label: "Standards", value: "RDSO SPN/E-128, IRS Series, Zonal Railway Manuals" },
      { label: "Formats", value: "AutoCAD DWG, PDF, MicroStation DGN" },
      { label: "System Types", value: "Electronic Interlocking (EI), Route Relay Interlocking (RRI), Panel Interlocking (PI)" }
    ]
  },
  "kavach-installation": {
    slug: "kavach-installation",
    title: "KAVACH Installation & Commissioning",
    category: "FIELD SERVICES",
    heroImage: depot,
    description: "Certified field installation, RFID tag placement, onboard locomotive equipment fitting, and wayside commissioning for the Kavach ATP system.",
    overviewTitle: "Accelerated deployment and safety commissioning of Kavach ATP.",
    overviewParagraphs: [
      "We support Indian Railways' safety mandate by deploying certified Kavach installation crews. Our services cover both onboard locomotive installation (Driver Machine Interface, RFID readers, Brake Interface Units) and wayside infrastructure setup.",
      "Our field engineers work within tight block hours to install, verify, and commission Kavach assemblies, ensuring immediate integration with station interlocking systems."
    ],
    overviewImage: serviceInstallation,
    features: [
      {
        title: "Onboard Loco Fitting",
        desc: "Installation of DMIs, main processing units, and RFID reader antennas underneath the locomotive."
      },
      {
        title: "Wayside RFID Placement",
        desc: "Trackside RFID tag mapping, layout, and secure mounting on sleepers."
      },
      {
        title: "Brake Interface Unit (BIU)",
        desc: "Integrating and calibrating pneumatic BIU blocks for automated safety stops."
      },
      {
        title: "Station Kavach Cabinets",
        desc: "Physical installation, wiring, and station interlocking integration of wayside Kavach panels."
      }
    ],
    specifications: [
      { label: "Certification", value: "Certified under Kavach ATP installation guidelines" },
      { label: "Testing Equipment", value: "BIU calibration units, RFID testers, GPS signal analyzers" },
      { label: "Locomotive Platforms", value: "WAG9, WAP7, MEMUs, Trainsets" }
    ]
  },
  "system-integration": {
    slug: "system-integration",
    title: "S&T System Integration",
    category: "FIELD SERVICES",
    heroImage: electricalCabinet,
    description: "End-to-end integration of signalling, telecommunication, power supplies, and remote diagnostic networks under one roof.",
    overviewTitle: "Consolidating complex S&T systems into unified networks.",
    overviewParagraphs: [
      "Modern railway stations rely on multiple interconnected systems: interlocking panels, IPS power systems, diagnostic telemetry, and telecom gear. Our S&T System Integration service manages the physical and logical interfaces between these sub-systems.",
      "We design and build consolidated equipment racks, interface wiring, and network gateways to ensure seamless data flow and power distribution across the station."
    ],
    overviewImage: serviceInstallation,
    features: [
      {
        title: "Interface Design",
        desc: "Wiring design and protocol configuration to bridge disparate subsystems safely."
      },
      {
        title: "Consolidated Racks",
        desc: "Integrating power supplies, network switches, and telemetry RTUs into single pre-wired racks."
      },
      {
        title: "Communication Networks",
        desc: "Laying optical fiber, configuring station switches, and integrating radio telecom systems."
      },
      {
        title: "Diagnostic Integration",
        desc: "Linking IPS, EI, and field devices to central diagnostic gateways (like RDPMS)."
      }
    ],
    specifications: [
      { label: "Interfaces Supported", value: "RS-485, Ethernet, CAN, Relays" },
      { label: "Network Standards", value: "IEC 60870, Modbus, TCP/IP, Proprietary Interlocking Protocols" },
      { label: "Cabinet Types", value: "Custom pre-wired 19-inch equipment racks, IP54 rated" }
    ]
  },
  "ems": {
    slug: "ems",
    title: "Electronics Manufacturing Services",
    category: "MANUFACTURING SERVICES",
    heroImage: pcbMacro,
    description: "High-mix, high-reliability electronics contract manufacturing featuring IPC Class 3 qualified SMT lines, cleanroom assembly, and rigorous testing.",
    overviewTitle: "Certified high-mix electronics assembly for safety-critical systems.",
    overviewParagraphs: [
      "Our Bengaluru manufacturing facility features fully automated SMT assembly lines configured for high-reliability electronics. We manufacture PCBs, wire harnesses, and complete electronic sub-assemblies for aerospace, defence, and railway transportation.",
      "Every assembly undergoes rigorous quality control, including automated optical inspection (AOI), conformal coating, and full-functional diagnostic testing at the end of the line."
    ],
    overviewImage: serviceDesign,
    features: [
      {
        title: "Automated SMT Assembly",
        desc: "High-precision pick-and-place lines supporting fine-pitch BGAs and micro-passives."
      },
      {
        title: "Conformal Coating",
        desc: "Automated selective coating to protect PCBs from humidity, dust, and metallic particles."
      },
      {
        title: "Functional Testing (FCT)",
        desc: "Custom-developed test rigs to verify full logic and electrical parameters under active loads."
      },
      {
        title: "Wire Harness Assembly",
        desc: "Fabricating custom rolling stock wire harnesses with automated crimp force monitoring."
      }
    ],
    specifications: [
      { label: "Factory Rating", value: "IPC-A-610 Class 3 Qualified, ISO 9001:2015, AS9100 pending" },
      { label: "PCB Support", value: "Multi-layer FR4, metal-core, polyimide, flex-rigid" },
      { label: "Testing Capabilities", value: "AOI, X-Ray, In-Circuit Test (ICT), Functional Test (FCT)" }
    ]
  },
  "testing-commissioning": {
    slug: "testing-commissioning",
    title: "Installation, Testing & Commissioning",
    category: "FIELD SERVICES",
    heroImage: depot,
    description: "Turnkey field installation, rigorous testing, safety checks, and formal commissioning of S&T systems under traffic block schedules.",
    overviewTitle: "Flawless field execution and safety certification.",
    overviewParagraphs: [
      "Our commissioning teams manage the critical final stages of station and line deployments. We carry out physical installation of S&T cabinets, lay and terminate cables, conduct loop insulation tests, and execute pre-commissioning functional safety checks.",
      "We operate directly on the trackside and in relay rooms under strict safety regulations, ensuring quick handover and minimal service interruption."
    ],
    overviewImage: serviceInstallation,
    features: [
      {
        title: "Cable Laying & Termination",
        desc: "Trenching, laying, jointing, and termination of signaling and power cables."
      },
      {
        title: "Pre-commissioning Tests",
        desc: "Verifying insulation resistance, conductor loop parameters, and relay logic."
      },
      {
        title: "Safety Sign-off Support",
        desc: "Preparing test logs, safety dossiers, and assisting in Commissioner of Railway Safety (CRS) inspections."
      },
      {
        title: "Traffic Block Operations",
        desc: "Rapid deployment and commissioning crews executing cut-overs during night block windows."
      }
    ],
    specifications: [
      { label: "Operational Window", value: "Night blocks (typically 2-4 hour possession windows)" },
      { label: "Testing Equipment", value: "Meggars, Loop Analyzers, Signal Generators" },
      { label: "Safety Protocols", value: "Strict compliance with Zonal Railway safety rules and safety gear mandates" }
    ]
  }
};
