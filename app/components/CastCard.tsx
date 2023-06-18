
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const CastCard = ({ castDetails }: { castDetails: any }) => {
    console.log(castDetails, "caST")
    const { profile_path, original_name, character } = castDetails
    return (
        <Card sx={{ width: 138, flexShrink: 0, }}>
            <CardActionArea>
                {
                    profile_path ?
                        <CardMedia
                            component="img"
                            height="80"
                            image={`https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`}
                            alt={original_name}
                        /> :
                        <CardMedia
                            component="img"
                            sx={{
                                height: "11rem"
                            }}
                            image="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                            alt={original_name}
                        />
                }
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div" className='font-black '>
                        {original_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {character}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CastCard