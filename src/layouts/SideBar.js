import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, Input } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, InboxIcon, UserCircleIcon, Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <span className="text-lg font-bold text-blue-gray">Sidebar</span>
      </div>
      <div className="p-2">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
      </div>
      <Accordion open={open === 1} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
          <PresentationChartBarIcon className="h-5 w-5" />
          <span className="ml-3">Dashboard</span>
        </AccordionHeader>
        <AccordionBody className="py-1">
          <ul className="p-0">
            <li className="flex items-center">
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              <span className="ml-1">Analytics</span>
            </li>
            <li className="flex items-center">
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              <span className="ml-1">Reporting</span>
            </li>
            <li className="flex items-center">
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              <span className="ml-1">Projects</span>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
          <ShoppingBagIcon className="h-5 w-5" />
          <span className="ml-3">E-Commerce</span>
        </AccordionHeader>
        <AccordionBody className="py-1">
          <ul className="p-0">
            <li className="flex items-center">
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              <span className="ml-1">Orders</span>
            </li>
            <li className="flex items-center">
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              <span className="ml-1">Products</span>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <hr className="my-2 border-blue-gray-50" />
      <ul className="p-0">
        <li className="flex items-center">
          <InboxIcon className="h-5 w-5" />
          <span className="ml-3">Inbox</span>
        </li>
        <li className="flex items-center">
          <UserCircleIcon className="h-5 w-5" />
          <span className="ml-3">Profile</span>
        </li>
        <li className="flex items-center">
          <Cog6ToothIcon className="h-5 w-5" />
          <span className="ml-3">Settings</span>
        </li>
        <li className="flex items-center">
          <PowerIcon className="h-5 w-5" />
          <span className="ml-3">Log Out</span>
        </li>
      </ul>
    </div>
  );
}
