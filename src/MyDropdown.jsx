import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon, LanguageIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export const MyDropdown = () => {
  const { i18n } = useTranslation();

  const langAbbr = {
    ja: "日",
    "zh-TW": "繁",
    en: "EN",
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 text-lg sm:text-xl font-bold text-white hover:text-gray-400">
          <LanguageIcon className="ml-2 -mr-1 w-5 xs:w-7 " />
          <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 " aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-black text-gray-100 shadow-lg focus:outline-none">
          <div className="px-1 py-1">
            {[
              ["en", "EN", "English"],
              ["zh-TW", "繁", "繁體中文"],
              ["ja", "日", "日本語"],
            ].map(([langCode, langAbbr, langName]) => {
              return (
                <Menu.Item key={langAbbr}>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-gray-700"
                          : i18n.language === langCode
                          ? "bg-slate-800"
                          : ""
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => i18n.changeLanguage(langCode)}
                    >
                      <span className="mr-2 h-5 w-5 text-[#919e80]">
                        {langAbbr}
                      </span>
                      {langName}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
