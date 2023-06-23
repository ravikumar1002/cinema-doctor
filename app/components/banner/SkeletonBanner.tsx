"use client"
import { Box } from "@mui/material"

const SkeletonBanner = () => {
    return (
        <Box sx={{
            padding: "2rem 4rem",
            height: "30rem "
        }} className="w-full">
            <div className="flex gap-8 w-full">
                <div className="rounded-md bg-gray-700 h-52 w-5/12"></div>
                <div className="w-7/12">
                    This is details
                </div>
            </div>
            <div className="flex justify-around" style={{
                gap: "20%",
            }}>
                {
                    [...Array(4)].map((_, i) => {
                        return (
                            <div key={i} className="w-full">
                                <div className="h-6 bg-gray-700 rounded mt-2"></div>
                                <div className="h-4 bg-gray-700 rounded mt-2"></div>
                            </div>
                        )
                    })
                }

            </div>
        </Box>
    )
}

export default SkeletonBanner