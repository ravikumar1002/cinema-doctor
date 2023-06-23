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
import SkeletonMovieCard from "./components/movie-card/SkeletonMovieCard";
import SkeletonCastCard from "./components/SkeletonCastCard";
import SkeletonBanner from "./components/banner/SkeletonBanner";

const getTrendingData = async () => {
  const trendingResponse = await GetTmdbDataAsJSON<TrendingDetails>("trending/all/day", {
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
      {
        trendingData ? <TodayTrending trendingData={trendingData.results} /> : <SkeletonMovieCard />
      }
      {/* <TodayTrending trendingData={trendingData.results} />
      <SkeletonCastCard /> */}
      <SkeletonBanner />

    </main>
  )
}

export default Home

