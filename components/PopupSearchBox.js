"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PopupSearchBox = ({ show, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log("📦 PopupSearchBox mounted | show:", show);
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      console.log("⚠️ Empty search input");
      return;
    }
    console.log("✅ Submitting search for:", searchQuery);
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
    onClose();
  };

  return (
    <>
      {/* Search Popup Box */}
      <div
        id="popup-search-box"
        className={show ? "show" : ""}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="box-inner-wrap d-flex align-items-center">
          <form onSubmit={handleSubmit} role="search">
            <input
              id="popup-search"
              type="text"
              name="s"
              placeholder="Type keywords here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button id="popup-search-button" type="submit" name="submit">
              <i className="las la-search"></i>
            </button>
          </form>
          <div className="search-close" onClick={onClose}>
            <i className="las la-times"></i>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div
        id="searchbox-overlay"
        className={`popup-search ${show ? "visible" : "hidden"}`}
        onClick={onClose}
      />
    </>
  );
};

export default PopupSearchBox;
