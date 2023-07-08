import React from 'react'
import { Box, Text, FormControl, Input, Flex, Checkbox, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const HeroForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <Box width="100%"
            padding="2rem"
            borderRadius="small"
            backgroundColor="white"
            color="gray.700"
        >
            <Text fontSize="xl"
                fontWeight="bold"
            >
                Free PDF Guide
            </Text>
            <Text
                fontSize="lg"
            >
                Complete the form below to download your free guide
            </Text>
            <form onSumbit={handleSubmit(onSubmit)}>
                <FormControl>
                    <Input marginTop='1.3rem' id="name" type="text" placeHolder="Name"
                        {...register("name", { required: true })}
                    />
                    {errors.name &&
                        (<Text fontSize="xs" color="red.400">
                            {errors.name.type}
                        </Text>)
                    }
                    <Flex gap={{ base: '0', sm: '1rem' }} flexDirection={{ base: 'column', sm: 'row' }} alignItemns="center">
                        <Input marginTop='1.3rem' id="email" type="email" placeHolder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email &&
                            (<Text fontSize="xs" color="red.400">
                                {errors.email.type}
                            </Text>)
                        }
                        <Input marginTop='1.3rem' id="phone" type="phone" placeHolder="Phone Number"
                            {...register("phone", { required: true })}
                        />
                        {errors.phone &&
                            (<Text fontSize="xs" color="red.400">
                                {errors.phone.type}
                            </Text>)
                        }
                    </Flex>
                    <Checkbox marginTop="1.3rem" id="gdpr" type="checkbox" placeholder="GDPR" {...register('gdpr', { required: true })}>
                        I agree to the terms and conditions and privacy policy
                        {errors.gdpr && (
                            <Text fontSize="xs" color="red.400">
                                {errors.gdpr.type}
                            </Text>
                        )}
                    </Checkbox>
                </FormControl>
                <Button color="white" backgroundColor="#896991" width="100%" fontSize="xl"
                    padding="2rem" marginTop="2rem"
                >
                    Download Now
                </Button>
            </form>
        </Box>
    )
}

export default HeroForm
