import {
    Box, Button, FormControl,
    FormLabel, Heading, Input, Text, useToast, VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function RegistrationForm() {
    const toast = useToast()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        const regexName = /^[a-zA-Z]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#_$%^&*]).{8,}$/;


        if (!formData.firstName || !regexName.test(formData.firstName)) {
            errors.firstName = "Please enter a valid first name that contains only letters.";
        }
        if (!formData.lastName || !regexName.test(formData.lastName)) {
            errors.lastName = "Please enter a valid last name that contains only letters.";
        }
        if (!formData.email || !regexEmail.test(formData.email)) {
            errors.email = "Please enter a valid email address.";
        }
        if (
            !formData.password ||
            formData.password.length < 8 ||
            !regexPassword.test(
                formData.password
            )
        ) {
            errors.password =
                "Password should be at least 8 characters long and contain a combination of uppercase letters, lowercase letters, numbers, and special characters.";
        }
        if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = "Passwords do not match.";
        }

        if (Object.keys(errors).length === 0) {
            console.log("Successful validation.");
            toast({
                title: "Registration successful",
                description: "Your account has been created.",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: 'top'
            });
            console.log
            navigate("/profile", { state: { firstName: formData.firstName, lastName: formData.lastName } });

        } else {
            setFormErrors(errors);
        }
    };
    return (
        <Box
            w={['full', 'lg']}
            p={[8, 10]}
            mt={[20, '10vh']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
            boxShadow='2xl'>
            <Heading as="h3" size="2xl" color="orange" mb={6}>Profile Registration</Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    <FormControl isRequired isInvalid={formErrors.firstName}>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <Text color="red.400">{formErrors.firstName}</Text>
                    </FormControl>

                    <FormControl isRequired isInvalid={formErrors.lastName}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <Text color="red.400">{formErrors.lastName}</Text>
                    </FormControl>

                    <FormControl isRequired isInvalid={formErrors.email}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Text color="red.400">{formErrors.email}</Text>
                    </FormControl>
                    <FormControl isRequired isInvalid={formErrors.password}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Text color="red.400">{formErrors.password}</Text>
                    </FormControl>

                    <FormControl isRequired isInvalid={formErrors.confirmPassword}>
                        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                        <Input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <Text color="red.400">{formErrors.confirmPassword}</Text>
                    </FormControl>

                    <Button type="submit" colorScheme="yellow" > Submit
                    </Button>
                </VStack>
            </form>
        </Box>
    )
}
