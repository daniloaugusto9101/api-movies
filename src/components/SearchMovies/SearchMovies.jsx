import React from "react";

const SearchMovies = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState();

  function handleOnSubmit(event) {
    event.preventDefault();
    onSearch(searchQuery);
  }
  function resetSearch() {
    setSearchQuery("");
    onSearch("");
  }

  return (
    <div className="bg-gray-500 p-4 flex justify-center">
      <form onSubmit={handleOnSubmit} className="flex gap-4">
        <input
          type="text"
          placeholder="Buscar filmes"
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
          className="p-2"
        />
        <button type="submit" className="bg-blue-950 text-white px-4 py-2">
          Buscar
        </button>
        <button
          onClick={resetSearch}
          className="bg-blue-950 text-white px-4 py-2"
        >
          Resetar
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
