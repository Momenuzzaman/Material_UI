import { Typography } from '@mui/material';

const MuiTypography = () => {
    return (
        // The Typography component makes it easy to apply a default
        //  set of font weights and sizes in your application.
        <div>
            <Typography variant="h1" component="h2">
                h1. Heading
            </Typography>
            <Typography variant="h2" component="h2">
                h2. Heading
            </Typography>
            <Typography variant="h3" component="h2">
                h3. Heading
            </Typography>
            <Typography variant="h4" component="h2">
                h4. Heading
            </Typography>
            <Typography variant="h5" component="h2">
                h5. Heading
            </Typography>
            <Typography variant="h6" component="h2">
                h6. Heading
            </Typography>

            <Typography variant="subtitle1" component="h2">
                sub title 1
            </Typography>
            <Typography variant="subtitle2" component="h2">
                sub title 2
            </Typography>


            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero error animi laborum voluptatum repudiandae excepturi
                accusantium laboriosam delectus adipisci, iste minus facere
                odit laudantium enim fuga dolorum consequuntur. Aliquam, nam.
            </Typography>
            
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero error animi laborum voluptatum repudiandae excepturi
                accusantium laboriosam delectus adipisci, iste minus facere
                odit laudantium enim fuga dolorum consequuntur. Aliquam, nam.
            </Typography>
        </div>
    );
};

export default MuiTypography;