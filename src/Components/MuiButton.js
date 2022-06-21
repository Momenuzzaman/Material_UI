import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton, Stack } from '@mui/material';
const MuiButton = () => {
    return (
        <div>
            <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                    <Button variant ='text' href ='https://google.com'>text</Button>
                    <Button variant ='contained'>Contained</Button>
                    <Button variant ='outlined'>Outlined</Button>
                </Stack>
                {/* Default Theme */}
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>Primary</Button>
                    <Button variant='contained' color='secondary'>secondary</Button>
                    <Button variant='contained' color='error'>Error</Button>
                    <Button variant='contained' color='warning'>warning</Button>
                    <Button variant='contained' color='info'>info</Button>
                    <Button variant='contained' color='success'>success</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' size='small'>Small</Button>
                    <Button variant='contained' size='medium'>medium</Button>
                    <Button variant='contained' size='small'>Small</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
                    <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>

                    <IconButton aria-label='send' color='success' size='small'>
                        <SendIcon/>
                    </IconButton>
                </Stack>
            </Stack>
            
            
        </div>
    );
};

export default MuiButton;