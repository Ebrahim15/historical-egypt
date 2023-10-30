"use client";

import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [searchBarToggle, setSearchBarToggle] = useState(false);
  const searchInputRef = useRef(null);
  const searchResultRef = useRef(null);
  const [cursor, setCusrsor] = useState(0);

  const places = [
    {
      title: "Amr Ibn Al-Aas Mosque",
      link: "amrMosque",
    },
    {
      title: "Salah El Din Citadel",
      link: "salahElDinCitadel",
    },
    {
      title: "The Grand Egyptian Museum",
      link: "grandEgyptianMuseum",
    },
    {
      title: "Prince Naguib Palace",
      link: "princeNaguibPalace",
    },
  ];

  // const fetchData = (value) => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((user) => {
  //         return (
  //           value &&
  //           user &&
  //           user.name &&
  //           user.name.toLowerCase().includes(value)
  //         );
  //       });
  //       console.log(results);
  //       setResults(results);
  //     });
  // };

  const hanldeChange = (value) => {
    const placesResults = places.filter((place) => {
      return (
        value &&
        place &&
        place.title &&
        place.title.toLowerCase().includes(value)
      );
    });
    setInput(value);
    // fetchData(value);
    setResults(placesResults);
  };

  const handleSearchIconClick = () => {
    setSearchBarToggle(!searchBarToggle);
    !searchBarToggle && searchInputRef.current.focus();
    setResults([]);
    setInput("");
  };

  const handleResultClick = (result) => {
    router.push(`/explore#${result.link}`);
    setResults([]);
    setInput("");
    setSearchBarToggle(false);
  };

  const handleKeyDown = (e) => {
    searchInputRef.current.addEventListener("keydown", (e) => {
      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
      }
    });
    if (e.keyCode === 38 && cursor > 0) {
      setCusrsor((prevState) => prevState - 1);
    } else if (e.keyCode === 40 && cursor < results.length - 1) {
      setCusrsor((prevState) => prevState + 1);
    }

    searchInputRef?.current?.addEventListener('keypress', (e) => {
      if(e.key === 'Enter'){
        document.querySelector('.active')?.click()
      }
    })
  };

  return (
    <div className="search_bar">
      <div className="input_wrapper">
        <FaSearch id="search_icon" onClick={() => handleSearchIconClick()} />
        <input
          onKeyDown={handleKeyDown}
          type="text"
          ref={searchInputRef}
          placeholder="Enter place name..."
          value={input}
          onChange={(e) => hanldeChange(e.target.value)}
          className={`rounded-lg ${searchBarToggle ? "w-60 px-2 " : "w-0 p-0"}`}
        />
      </div>
      <div className="search_results_container">
        {results.length === 0 && input.length !== 0 ? (
          <div className="search_result">No results found</div>
        ) : (
          results.map((result, id) => {
            return (
              <div
                key={id}
                ref={searchResultRef}
                className={`search_result ${cursor === id ? "active" : null}`}
                onClick={() => handleResultClick(result)}
              >
                {result.title}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchBar;
