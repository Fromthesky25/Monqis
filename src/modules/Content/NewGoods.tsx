import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export default function SpacingGrid() {
    const [page, setPage] = useState<number>(1);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h5"
                    component="a">
                    Новые товары
                </Typography>
                <Pagination
                    variant='outlined'
                    page={page}
                    count={3}
                    onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                        setPage(page);
                    }}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {test.slice((page - 1) * 5, (page - 1) * 5 + 5).map((value) => (
                    <Paper
                        sx={{
                            height: 340,
                            width: 170,
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        {value}
                    </Paper>
                ))}
            </Box>
        </>
    );
}