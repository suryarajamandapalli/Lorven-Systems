// Static content for LorVen Systems site.
export const COMPANY = {
  name: "LorVen Systems",
  legal: "LorVen Systems Pvt. Ltd.",
  tagline: "Engineering Confidence",
  founded: "Established 2008",
  hq: {
    city: "Hyderabad",
    country: "India",
    address: "Zona Crescent, 8-682/B1 & B2, Road No. 12, Banjara Hills, Hyderabad, Telangana – 500034",
    landmark: "Zona Towers Building, 2nd Floor, Beside Ratnadeep",
    phone: "+91 9963666759",
    email: "ea@lorvensystems.in",
  },
  plant: {
    city: "Bengaluru",
    address: "Industrial Estate Phase II, Peenya, Bengaluru 560058",
  },
};

export const PRODUCT_INDEX = [
  {
    slug: "iot-energy",
    number: "01",
    title: "IoT & Energy Management",
    to: "/products",
    blurb: "Wayside diagnostics, telemetry, and intelligent remote monitoring platforms.",
    children: [
      { slug: "wli", number: "01.1", title: "WLI", to: "/products/wagons/wli", blurb: "IoT-Based Water Level Indicator for passenger coaches" },
      { slug: "ifd", number: "01.2", title: "IFD", to: "/products/electric-locomotive/ifd", blurb: "Intelligent Field Device for cable insulation monitoring" },
    ],
  },
  {
    slug: "snt",
    number: "02",
    title: "S & T (Signalling & Telecom)",
    to: "/products/snt",
    blurb: "Fail-safe signalling telemetry and uninterrupted power supply systems.",
    children: [
      { slug: "rdpms", number: "02.1", title: "RDPMS", to: "/products/snt/rdpms", blurb: "Remote Diagnostic & Predictive Maintenance System" },
      { slug: "ips",   number: "02.2", title: "IPS",   to: "/products/snt/ips",   blurb: "Integrated Power Supply system" },
    ],
  },
  {
    slug: "rolling-stock",
    number: "03",
    title: "Rolling Stock",
    to: "/products/wagons",
    blurb: "Condition-monitoring, vision systems, and non-destructive testing for coaches and wagons.",
    children: [
      { slug: "ahabd", number: "03.1", title: "AHABD", to: "/products/wagons/ahabd", blurb: "Acoustic Hot Axle Box Detector" },
    ],
  },
  {
    slug: "simulators",
    number: "04",
    title: "Training Simulators",
    to: "/products/electric-locomotive/simulators",
    blurb: "High-fidelity driving simulation systems and Kavach ATP pilot trainers.",
    children: [
      { slug: "simulators", number: "04.1", title: "Driving Simulators", to: "/products/electric-locomotive/simulators", blurb: "Full-cab train driver training simulator" },
      { slug: "kavach",     number: "04.2", title: "KAVACH Training Simulators", to: "/products/electric-locomotive/kavach", blurb: "Automatic Train Protection pilot training simulator" },
    ],
  },
] as const;

export const SERVICE_INDEX = [
  { slug: "product-dev",          number: "S/01", title: "Electronic Product Development",      blurb: "Embedded hardware design, firmware development, and rapid prototyping for safety-critical environments." },
  { slug: "signalling-design",    number: "S/02", title: "Signalling Design Services",          blurb: "CAD schematics, interlocking plans, and layout designs compliant with RDSO standards." },
  { slug: "kavach-installation",  number: "S/03", title: "KAVACH Installation & Commissioning", blurb: "Certified installation, RFID placement, and onboard/wayside testing for Kavach ATP." },
  { slug: "system-integration",    number: "S/04", title: "S&T System Integration",              blurb: "End-to-end integration of signalling, telecom, power, and diagnostic networks." },
  { slug: "ems",                 number: "S/05", title: "Electronics Manufacturing Services",   blurb: "High-mix manufacturing featuring IPC Class 3 qualified SMT lines." },
  { slug: "testing-commissioning",number: "S/06", title: "Installation, Testing & Commissioning", blurb: "Turnkey field installation, testing, and safety certification under traffic block schedules." },
] as const;

export const PRIMARY_NAV = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;
