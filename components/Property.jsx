import React from 'react'
import { Flex, Box, Text, Button, Avatar, Card } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link'
import millify from 'millify';
import DefaultImage from '../assets/house.png'

export const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerifed, externalID } }) => {
    return (
        <>
            <Link href={`property/${externalID}`} passHref>
                <Card mr={3}>
                    <Flex flexWrap={'wrap'} w="420px" p="5" paddingTop={0} justifyContent={'flex-start'} cursor={'pointer'}>
                        <Box>
                            <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} />

                        </Box>
                        <Box w='full'>
                            <Flex paddingTop='2' alignItems={"center"} justifyContent={'space-between'}>
                                <Flex alignItems={'center'}>
                                    <Box paddingRight="3" color={'green.400'}>{isVerifed && <GoVerified />}</Box>
                                    <Text fontWeight={'bold'} fontSize={'lg'}>NZD {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
                                </Flex>
                                <Box>
                                    <Avatar size={'sm'} src={agency?.logo?.url} />
                                </Box>

                            </Flex>
                            <Flex alignItems={'center'} padding={'1'} justifyContent={'space-between'} w="250px" color={'blue.400'}>
                                {rooms}<FaBed /> | {baths}<FaBath /> {millify(area)} sqft <BsGridFill />
                            </Flex>
                            <Text fontSize={'lg'}>
                                {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Link>
        </>
    )
}
