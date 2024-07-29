import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchTrends } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("query") ?? "";
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchTrends();
        setMovies(data);
        console.log(movies);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
    // fetchUsers().then((data) => setUsers(data));
  }, []);

  const handleChangeFilter = (newValue) => {
    if (!newValue) {
      return setSearchParams({});
    }
    searchParams.set("query", newValue);

    setSearchParams(searchParams);
  };

  // const filteredData = movies.filter(
  //   (movie) =>
  //     movie.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
  //     movie.lastName.toLowerCase().includes(filterValue.toLowerCase())
  // );

  return (
    <>
      <SearchBar
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
      />
      {/* <MoviesList movies={filteredData} /> */}
    </>
  );
};
export default MoviesPage;
