import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';


export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Real estate application</title>
            </Head>
            <Box w="100rem" m='auto' justifyContent={'space-between'}>
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}
