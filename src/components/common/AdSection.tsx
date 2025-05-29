import { BadgePercent, DollarSign, Headphones, Truck } from "lucide-react";
import React from "react";

const AdSectionData = [
  {
    id: 1,
    title: "Free Delivery",
    desc: "Orders from all items",
    icon: <Truck className="h-12 w-12 text-pink-vibe" />,
  },
  {
    id: 2,
    title: "Return & Refund",
    desc: "Money back guarantee",
    icon: <DollarSign className="h-12 w-12 text-pink-vibe" />,
  },
  {
    id: 3,
    title: "Member Discount",
    desc: "On every order order $140.00",
    icon: <BadgePercent className="h-12 w-12 text-pink-vibe" />,
  },
  {
    id: 4,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
    icon: <Headphones className="h-12 w-12 text-pink-vibe" />,
  },
];

export default function AdSection() {
  return (
    <div className="max-w-7xl mx-auto px-3 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {AdSectionData.map((ads) => (
          <div key={ads.id}>
            <div className="bg-cloud min-h-24 flex flex-col items-center justify-center">
              <div className="flex items-center gap-x-3">
                {ads.icon}
                <div>
                  <div className="text-mid-night font-bold">{ads.title}</div>
                  <div className="text-dark-gray text-sm">{ads.desc}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
