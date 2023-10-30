"use client";

import React, { useRef, useState } from "react";
import "./LanguageMenu.css";
import { FaCaretDown } from "react-icons/fa";

const LanguageMenu = () => {
  const languages = ["Ar", "En", "Fr"];
  const [lang, setLang] = useState("En");
  const [showMenu, setShowMenu] = useState(false);
  const langMenuRef = useRef(null)
  const langRef = useRef(null)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  const handleClick = (value) => {
    setLang(value)
    setShowMenu(false)
  }
  
  const closeLangMenu = (e) => {
    if(langMenuRef.current && showMenu && !langRef.current.contains(e.target) && !langMenuRef.current.contains(e.target)) {
      setShowMenu(false)
    }
  }
  document.addEventListener('mousedown', closeLangMenu)
  return (
    <div>

      <div
        onClick={() => toggleMenu()}
        ref={langRef}
        className="flex items-center gap-1 cursor-pointer relative"
      >
        <div className="text-white font-bold w-4">{lang}</div>
        <FaCaretDown id="caret_down" />
      </div>
      
      <div
        ref={langMenuRef}
        className={`flex flex-col bg-white absolute rounded-lg ${
          showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {languages.map((language, id) => {
          return (
            <input
              key={id}
              type="button"
              value={language}
              onClick={(e) => handleClick(e.target.value)}
              className="hover:bg-[#efefef] cursor-pointer px-2 rounded-lg"
            />
          );
        })}
      </div>

    </div>
  );
};

export default LanguageMenu;
