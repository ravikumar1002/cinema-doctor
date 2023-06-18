"use client"

import CastCard from '@/app/components/CastCard';
import Banner from '@/app/components/banner/Banner';
import { GetTmdbDataAsJSON } from '@/app/src/services/getApiData';
import { ICastsDetails } from '@/src/dto/castsDetails';
import { IMovieDeatils } from '@/src/dto/movieDetails';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'


const DetailsContent = () => {
    const paths = useParams();
    const [movieDetailsData, setMovieDetailsData] = useState<IMovieDeatils>()
    const [castsDetails, setCastsDetails] = useState<ICastsDetails>()
    const [mounted, setMounted] = useState(false)

    console.log(typeof paths.id)

    const getContentData = async () => {
        const cotentDetailData = await GetTmdbDataAsJSON<IMovieDeatils>(`movie/${paths.id}`, {
            params: {
                language: "en-US",
            },
        });
        const castResponsePromise = await GetTmdbDataAsJSON<ICastsDetails>(`/movie/${paths.id}/credits`, {
            params: {
                language: "en-US",
            },
        })
        setMovieDetailsData(cotentDetailData)
        setCastsDetails(castResponsePromise)
    }

    useEffect(() => {
        setMounted(true)
    }, [])


    useEffect(() => {
        if (mounted) {
            getContentData()
        }
    }, [mounted])


    return (
        <div>
            {movieDetailsData && <> <Banner data={movieDetailsData} />
                <Box className="flex gap-3 px-10 py-5 justify-evenly">
                    <div >
                        <Typography variant='h6' component={'h4'} gutterBottom className=' font-semibold'>Status </Typography>
                        <Typography variant='h6' component={'h4'} gutterBottom className=' font-medium'>{movieDetailsData.status}</Typography>
                    </div>
                    <div>
                        <Typography variant='h6' component={'h4'} gutterBottom className=' font-semibold'>Available Language </Typography>
                        <div className='flex gap-2'>
                            {
                                movieDetailsData.spoken_languages.map((language, i) => {
                                    return (
                                        <Typography key={i} variant='h6' component={'h4'} gutterBottom className=' font-medium'>{language.name
                                        }{(movieDetailsData.spoken_languages.length > i + 1) && ","}</Typography>

                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <Typography variant='h6' component={'h4'} gutterBottom className=' font-semibold'>Budget </Typography>
                        <Typography variant='h6' component={'h4'} gutterBottom className=' font-medium'>$ {movieDetailsData.budget}</Typography>
                    </div>
                    <div>
                        <Typography variant='h6' component={'h4'} gutterBottom className=' font-semibold'>Revenue </Typography>
                        <Typography variant='h6' component={'h4'} gutterBottom className=' font-medium'>$ {movieDetailsData.revenue}</Typography>
                    </div>
                </Box>
                <Typography variant='h5' component={'h3'} gutterBottom className='px-8 pt-3 font-semibold'> Full cast: </Typography>
                <Box sx={{
                    scrollBehavior: "smooth",
                    display: "flex",
                    gap: "1rem",
                    overflowX: "scroll",
                    padding: "1rem 2rem 2rem",
                }}>
                    {castsDetails && castsDetails.cast.map((cast, i) => {
                        return (
                            <CastCard key={i} castDetails={cast} />
                        )
                    })}
                </Box>
            </>
            }
        </div>
    );
}

export default DetailsContent

