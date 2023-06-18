import { Box } from "@mui/material"
import BannerDetails from "./BannerDetails"
import BannerImage from "./BannerImage"
import { IMovieDeatils } from "@/src/dto/movieDetails"

const Banner = ({ data }: { data: IMovieDeatils }) => {

    const { poster_path, title, backdrop_path } = data
    const backdropImageUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`

    return (
        <Box sx={{
            padding: "2rem 4rem",
            // backgroundImage: `url(${backdropImageUrl})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            position: "relative",
            color: "white",
        }} className="flex gap-8 items-center">
            <BannerImage poster_path={poster_path} title={title} />
            <BannerDetails data={data} />
            <Box sx={{
                backgroundImage: `url(${backdropImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                color: "white",
                minHeight: "75vh",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: "-2",
                filter: "brightness(0.5)",
            }}>

            </Box>
        </Box>
    )
}

export default Banner