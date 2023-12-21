import {Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Text,
    Heading,
    ModalOverlay,
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    ModalHeader,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import UserAPI from "../api/UserAPI";

const UserTable = ({userDetails}) => {
    return(
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>UserID</Th>
                        <Th>Name</Th>
                        <Th> Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        userDetails.map((item) =>
                            <Tr key={item.userID}>
                                <Td>{item.userID}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.email}</Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
        </TableContainer>)
}

export default function Header(){
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() =>{
            console.log("Hooray");
            console.log(userDetails);
        },
        [userDetails]
    )

    useEffect(() =>{
            async function fetchUserDetails(){
                const response = await UserAPI().getUsers();
                setUserDetails(response);
            }
            fetchUserDetails();
            }, []
    )
        const OverlayOne = () => (
            <ModalOverlay
                bg='blackAlpha.300'

                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
        )

        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)

        return (
            <>
                    <Card align='center' >
                        <CardHeader>
                            <Heading size='md'> User dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View all the users</Text>
                        </CardBody>
                        <CardFooter>
                            <Button
                                onClick={() => {
                                    setOverlay(<OverlayOne />)
                                    onOpen()
                                }}
                            >
                                Click here
                            </Button>
                        </CardFooter>
                    </Card>
                <Modal isCentered isOpen={isOpen} onClose={onClose} size={"lg"}>
                    {overlay}
                    <ModalContent>
                        <ModalHeader>User table</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <UserTable userDetails={userDetails}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
}