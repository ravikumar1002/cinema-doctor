
'use client'

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import RatingPercentage from '../RatingPercentage';

const MovieCard = ({ movieList }: { movieList: any }) => {
    const { id, title, poster_path, release_date, vote_average, name, first_air_date } = movieList
    return (
        <Box className="flex flex-col w-40 shrink-0">
            <div className="">
                <div className="">
                    <Link href={`/movies/${id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt={title} className='rounded-md' />
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="px-2">
                    <div className="relative px-0.5">
                        <div className="absolute -top-5">
                            <RatingPercentage vote_average={vote_average} size='30px' fontSize='0.6rem' />
                        </div>
                    </div>
                    <div className='px-0.5 pt-4'>
                        <Typography variant="subtitle2" className='font-semibold'
                            component="p"><Link href={`/movies/${id}`} title={title ? title : name}>{title ? title : name}</Link></Typography>
                        <p className='text-sm'>{release_date ? release_date : first_air_date}</p>
                    </div>
                </div>
            </div>
        </Box >
    )
}

export default MovieCard