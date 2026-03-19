const CATEGORY_DATA = [
  {
    id: "websites",
    title: "Websites",
    description: "Build cinematic, modern, responsive websites from scratch.",
    buildExamples: ["Business websites","Portfolio sites","E-commerce stores","Landing pages"],
    pricing: { single:150, bundles:{ two:250, three:350, four:450 } },
    contentUrl: "/lessons/websites.html",
    paywallUrl: "/pay/index.html?category=websites"
  },
  {
    id: "apps",
    title: "Apps",
    description: "Build real apps with auth, databases, messaging.",
    buildExamples: ["Social apps","Marketplace apps","Booking apps"],
    pricing: { single:150, bundles:{ two:250, three:350, four:450 } },
    contentUrl: "/lessons/apps.html",
    paywallUrl: "/pay/index.html?category=apps"
  },
  {
    id: "microcontrollers",
    title: "Microcontrollers",
    description: "Control sensors, cameras, lights, motors, and devices.",
    buildExamples: ["Smart home","Robotics","Environmental monitors"],
    pricing: { single:150, bundles:{ two:250, three:350, four:450 } },
    contentUrl: "/lessons/microcontrollers.html",
    paywallUrl: "/pay/index.html?category=microcontrollers"
  },
  {
    id: "pentesting",
    title: "Pen Testing & Ethical Hacking",
    description: "Learn how systems get breached and how to protect them.",
    buildExamples: ["Network scanners","Vulnerability scanners","Password auditing"],
    pricing: { single:150, bundles:{ two:250, three:350, four:450 } },
    contentUrl: "/lessons/pentesting.html",
    paywallUrl: "/pay/index.html?category=pentesting"
  }
];
export default CATEGORY_DATA;
