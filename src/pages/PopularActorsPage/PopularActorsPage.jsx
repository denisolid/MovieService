import { useEffect, useState } from "react";
import { fetchPopularActors } from "../../services/api";
import ActorList from "../../components/ActorList/ActorList";
import Pagination from "../../components/Pagination/Pagination";
import s from "./PopularActorsPage.module.css";

const PopularActorsPage = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchPopularActors(page);
        setActors(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className={s.popularActorsPage}>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <ActorList actors={actors} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PopularActorsPage;
