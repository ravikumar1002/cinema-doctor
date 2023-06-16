
"use client"

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';

import { useState, MouseEvent } from "react"
import TodayTrending from './Today';
import WeekTrending from './Week';


const Trending = () => {

    const [alignment, setAlignment] = useState('today');

    const handleChange = (
        event: MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        console.log(alignment)
        setAlignment(newAlignment);
    };

    return (
        <Box className="flex gap-4 p-3 px-6  gap-12 mb-4 ">
            <h1 className=' text-2xl text-fuchsia-500'>Trending </h1>
            <ToggleButtonGroup
                color="primary"
                size="small"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="trending"
                sx={{
                    border: "1px solid black",
                    borderRadius: "10px",

                }}
            >
                <ToggleButton
                    sx={{
                        padding: "4px 22px",
                        lineHeight: "1.5",
                        border: "none",
                        borderRadius: "10px",
                        "&:MuiTouchRipple-root": {
                            border: "1px solid black",
                            borderRadius: "10px",
                        }
                    }}
                    value="today"

                >Today</ToggleButton>
                <ToggleButton
                    sx={{
                        padding: "4px 22px",
                        lineHeight: "1.5",
                        border: "none",
                        borderRadius: "10px",
                        "&:MuiTouchRipple-root": {
                            border: "1px solid black",
                            borderRadius: "10px",
                        }
                    }}
                    value="this week"
                >This Week</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )

}


export default Trending