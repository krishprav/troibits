import {
  feature1Img,
  feature2Img,
  feature3Img,
  feature4Img,
  feature5Img,
} from "../utils";

export const models = [
  {
    id: 1,
    title: "Smart Booking & Dashboard",
    img: feature1Img,
    descriptions: [
      "Centralized dashboard for streamlined management.",
      "View schedules, appointments, and customer details.",
      "Quick insights for resource allocation.",
      "Alerts & notifications.",
    ],
  },
  {
    id: 2,
    title: "AI-Powered App Suite",
    img: feature2Img,
    descriptions: [
      "Automates workflows using AI tools.",
      "Predictive analytics for customer behavior.",
      "Smart recommendations and automated reports.",
    ],
  },
  {
    id: 3,
    title: "Insights & Reports",
    img: feature3Img,
    descriptions: [
      "Visual analytics for sales and performance.",
      "Custom filters for daily, weekly, monthly trends.",
      "Exportable charts and reports.",
    ],
  },
  {
    id: 4,
    title: "Payment Records & History",
    img: feature4Img,
    descriptions: [
      "Complete log of all payments.",
      "Refund and adjustment tracking.",
      "Secure storage and search filters.",
    ],
  },
  {
    id: 5,
    title: "Billing & GST-Compliant Invoicing",
    img: feature5Img,
    descriptions: [
      "Instant digital invoice generation.",
      "GST-ready with automatic tax calculation.",
      "Multiple payment modes (cash, UPI, card).",
      "Integrated revenue reporting.",
    ],
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];
