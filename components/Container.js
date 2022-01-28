import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from '../components/DarkModeSwitch'

const Container = ({ children }) => {
    const { colorMode } = useColorMode();

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300',
    }
    
    const StickNav = styled(Flex)`
        postion: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(100%) blur(20px);
        transition: height .5s, line-height .5s;
    `
    
    return (
        <>
            <StickNav
                
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>                            Home
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>                            Home
                            Blog
                        </Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </StickNav>
        </>
    )
}

export default Container