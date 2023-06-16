
"use client"

import { GetTmdbDataAsJSON } from "@/app/src/services/getApiData";
import MovieCard from "../movie-card/MovieCard"
import { useEffect, useState } from "react";
import { TrendingResult } from "@/src/dto/trendingDetails";

const TodayTrending = ({ trendingData }: { trendingData: TrendingResult[] }) => {

    console.log(trendingData)

    return (
        <div className="flex overflow-x-scroll shrink-0 gap-4 w-100">
            {
                trendingData && trendingData?.map((item) => {
                    return (
                        <MovieCard key={item.id} movieList={item} />
                    )
                })
            }
        </div>
    )
}

export default TodayTrending