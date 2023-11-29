import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../../components/Property';
import { parseUrl, fetchApiList } from '../../utils/fetchApi';

const Search = ({ properties }) => {
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
            >
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
                    <Image src={noresult} />
                    <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
                </Flex>
            )}
        </Box>
    );
};

export default Search;
