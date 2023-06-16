import { GetTmdbDataAsJSON } from "@/app/src/services/getApiData";
import { GetServerSideProps } from "next";
import MovieCard from "./components/movie-card/MovieCard";
import axios from "axios";
import RootLayout from "./layout";
import { useUserData } from "@/lib/AppContext";
import { useState } from "react";
import Trending from "./components/trending/Trending";
import TodayTrending from "./components/trending/Today";
import { TrendingDetails } from "@/src/dto/trendingDetails";

const getTrendingData = async () => {
  const trendingResponse = await GetTmdbDataAsJSON<TrendingDetails>("/trending/all/day", {
    params: {
      page: "1",
    },
  });
  return trendingResponse
}

const Home = async () => {

  const trendingData = await getTrendingData();
  console.log(trendingData)

  return (
    <main className="">
      <Trending />
      <TodayTrending trendingData={trendingData.results} />
    </main>
  )
}

export default Home

