import { GetTmdbDataAsJSON } from "@/app/src/services/getApiData";
import { GetServerSideProps } from "next";
import MovieCard from "./components/movie-card/MovieCard";
import axios from "axios";

export const getTrendingData = async () => {

  const trendingResponse = await GetTmdbDataAsJSON<any>("/trending/all/day", {
    params: {
      page: "3",
    },
  });

  return trendingResponse;
}

const Home = async () => {

  const trendingData = await getTrendingData();

  return (
    <main className="">
      {
        trendingData && trendingData.results.map((_, i) => {
          return (
            <MovieCard key={trendingData.results[i].id} movieList={trendingData.results[i]} />
          )
        })
      }

    </main>
  )
}

export default Home

