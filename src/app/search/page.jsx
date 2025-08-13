"use client";

import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Search Results for: {query}</h1>
      {/* Implement your actual search result rendering here */}
    </div>
  );
};

export default SearchPage;
