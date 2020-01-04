import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

export default function About() {
    const content =
        <div>
            <Box>
                <Card flexGrow={1}>yo mama</Card>
            </Box>
            <br></br>
            <Box>
                <Card>git</Card>
            </Box>
        </div>
    return content;
}