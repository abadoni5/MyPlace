'use client'
import React from 'react';
import { usePropertyFormat } from '@/features/common/hooks/usePropertyFormat';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import propertyData from 'features/data/Property.json';
import { TbMapPin } from 'react-icons/tb';
import { Box, Badge, Text, HStack, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import PropertyThumbnailSlider from 'features/Property/components/PropertyThumbnailSlider.jsx';
import PropertyStats from 'features/Property/components/PropertStats.jsx';
import TextContentBox from '@/features/common/modules/TextContentBox';
import PropertyYoutubeEmbeded from '@/features/Property/components/PropertyYoutubeEmbeded';
import PropertyMatterPortEmbed from '@/features/Property/components/PropertyMatterPortEmbed';


const Page = () => {
    const {
        address,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenities,
    } = usePropertyFormat(propertyData);


    return (
        <DefaultLayout>
            <Box backgroundColor="#f7f8f9" paddingY="3rem">
                <Grid templateColumns="repeat(6, 1fr)" gap="5" maxWidth="1280px"
                    margin="0 auto"
                >
                    <GridItem colSpan={6}>
                        <Text
                            fontSize="3xl"
                            fontWeight="medium"
                            color="blue.800"
                            textAlign={{ base: 'center', md: 'left' }}
                        >
                            {propertyType} {title}
                        </Text>
                        <Flex
                            fontSize="xl"
                            color="blue.600"
                            textAlign="center"
                            flexDirection={{ base: 'column', sm: 'row' }}
                            gap="0.5rem"
                            marginY={{ base: '1rem', sm: '0' }}
                        >
                            <TbMapPin />
                            <Text fontWeight="ligth">
                                {address} - ID:{externalID}
                            </Text>
                            <Badge
                                colorScheme="green"
                                padding="0.4rem"
                                width="fit-content"
                                height="fit-content"
                                marginX={{ base: 'auto', lg: '0' }}
                            >
                                {purpose}
                            </Badge>
                        </Flex>
                    </GridItem>

                    <GridItem colSpan={{ base: 6, md: 3 }}>
                        <PropertyThumbnailSlider photos={photos} />
                    </GridItem>

                    <GridItem colSpan={{ base: 6, md: 3 }}>
                        <PropertyStats
                            rooms={rooms}
                            baths={baths}
                            price={price}
                            sqSize={sqSize}
                        />
                        <TextContentBox title="description">
                            <Text
                                fontWeight="light"
                                color="gray.600"
                                fontSize="1rem"
                                noOfLines={4}
                            >
                                {description}
                            </Text>
                        </TextContentBox>
                        <TextContentBox title="Amenities">
                            <SimpleGrid
                                columns={{ base: 1, sm: 2 }}
                                fontWeight="light"
                                color="gray.600"
                                fontSize="1rem"
                            >
                                {amenities.length
                                    ? amenities.map((item) => (
                                        <Text key={item}>{item}</Text>
                                    ))
                                    : 'Please contact us for more info'}
                            </SimpleGrid>
                        </TextContentBox>
                    </GridItem>

                    <GridItem colSpan={{ base: 6, sm: 3 }}>
                        <TextContentBox title="Video Walkthrough">
                            <PropertyYoutubeEmbeded coverVideo={coverVideo} />
                        </TextContentBox>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, sm: 3 }}>
                        <TextContentBox title="3D Virtual Walkthrough">
                            <PropertyMatterPortEmbed panorama={panorama} />
                        </TextContentBox>
                    </GridItem>

                </Grid>
            </Box>
        </DefaultLayout>
    );
};

export default Page;
