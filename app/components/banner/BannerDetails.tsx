import Typography from '@mui/material/Typography';
import RatingPercentage from '../RatingPercentage';
import { Box } from '@mui/material';
import { IMovieDeatils } from '@/src/dto/movieDetails';

const BannerDetails = ({ data }: { data: IMovieDeatils }) => {
    const { title, release_date, genres, runtime, vote_average, tagline, overview } = data
    console.log(data)

    const getYear = (date: string) => { 
        const d = new Date(date)
        return d.getFullYear()
    }

    const runTimeFormat = (time: number) => {
        const devideTime = time / 60
        const hours = devideTime.toString().split(".")[0]
        const mintues = time % 60

        return `${hours}h ${mintues}m`

    }

    return (
        <div className='text-white'>
            <div className='flex gap-1'>
                <Typography variant="h4" className="font-bold" >{title}</Typography>
                <Typography variant="h4" className="font-medium opacity-75" >({getYear(release_date)})</Typography>
            </div>
            <Box className='flex'>
                {genres.map((genre, i) => {
                    return (
                        <Typography key={i} variant="body1" component="span" className="font-bold" gutterBottom>{genre.name}{(i + 1) < genres.length && ", "}</Typography>
                    )
                })}
                <span>.</span>
                {
                    <Typography variant="body1" component="span" className="font-bold" gutterBottom sx={{ marginLeft: "1rem" }}> {runTimeFormat(runtime)}</Typography>
                }
            </Box>
            <div className='flex w-full items-center gap-4 my-3'>
                <RatingPercentage vote_average={vote_average} size='60px' fontSize='1.1rem' />
                <Typography variant="body1" component="span" className="font-bold" gutterBottom> User Score</Typography>
            </div>
            <Typography variant="body1" component="div" className="font-medium" gutterBottom sx={{
                opacity: 0.7
            }}>{tagline}</Typography>
            <Typography variant="body1" component="div" className="font-bold" gutterBottom sx={{
                margin: "0.5rem 0"
            }}>Overview: </Typography>
            <Typography variant="body1" component="div" gutterBottom>{overview}</Typography>

        </div>
    )
}

export default BannerDetails