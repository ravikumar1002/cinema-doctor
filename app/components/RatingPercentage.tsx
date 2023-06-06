'use client'

import { Box, CircularProgress, Typography } from "@mui/material"

const RatingPercentage = ({ vote_average, size, fontSize }: { vote_average: number, size: string, fontSize: string }) => {
    return (
        <Box sx={{
            position: 'relative', display: 'inline-flex', padding: " 1px",
            background: "black",
            borderRadius: "50%",
        }}>
            <CircularProgress size={size} variant="determinate" value={vote_average * 10} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="white"
                    className="flex"
                    sx={{
                        fontSize: fontSize
                    }}
                >{`${Math.round(vote_average * 10)}`} <Typography
                    variant="caption"
                    component="span"
                    color="white"
                    sx={{
                        marginRight: 0,
                        fontSize: `${Number(fontSize) / 1.3}`
                    }}
                >%</Typography></Typography>
            </Box>
        </Box>
    )
}

export default RatingPercentage