"use client"

import { GetTmdbDataAsJSON } from "@/app/src/services/getApiData";
import MovieCard from "../movie-card/MovieCard"


// export const getTrendingData = () => {

//     const trendingResponse = GetTmdbDataAsJSON<any>("/trending/all/day", {
//         params: {
//             page: "3",
//         },
//     });

//     return trendingResponse
// }
const WeekTrending = () => {

    // const trendingData = getTrendingData();

    // console.log(trendingData)
    return (
        <div className="flex overflow-x-scroll shrink-0 gap-4 w-100">
            {/* {
                trendingData && trendingData.results.map((_, i) => {
                    // console.log(trendingData.results[i])
                    return (
                        <MovieCard key={trendingData.results[i].id} movieList={trendingData.results[i]} />
                    )
                })
            } */}
        </div>
    )
}

export default WeekTrending