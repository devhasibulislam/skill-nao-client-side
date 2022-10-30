import axios from "axios";
import useSWR from "swr";

function useGetSpecificCourse(id) {
  const fetcher = (url, token) =>
    axios
      .get(url, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => res.data);

  const { data, error } = useSWR(
    [
      `http://localhost:8080/course/${id}`,
      localStorage?.getItem("skillNaoToken"),
    ],
    fetcher,
    { refreshInterval: 1000 }
  );

  return {
    course: data?.data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export default useGetSpecificCourse;
