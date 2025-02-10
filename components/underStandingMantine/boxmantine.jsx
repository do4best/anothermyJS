import React from 'react';
import {Box, Button, Text, Title} from "@mantine/core";
import { Badge, NavLink } from '@mantine/core';

import {FaHome} from "react-icons/fa";
import {FaGauge} from "react-icons/fa6";
import {CiCircleChevRight} from "react-icons/ci";
import {LuCircleOff} from "react-icons/lu";
import {BsActivity} from "react-icons/bs";

function Boxmantine(props) {
    return (
        <>
        <Box>
            <Title>This is Title</Title>
   <Text size={"lg"} fw={700} ta={"center"}>Hello Thete</Text>
            <Button variant={"filled"} color="lime">Push uit</Button>
        </Box>
            <NavLink
                href="#required-for-focus"
                label="With icon"
                leftSection={<FaHome size={16} stroke={1.5} />}
            />
            <NavLink
                href="#required-for-focus"
                label="With right section"
                leftSection={<FaGauge size={16} stroke={1.5} />}
                rightSection={
                    <CiCircleChevRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
                }
            />
            <NavLink
                href="#required-for-focus"
                label="Disabled"
                leftSection={<LuCircleOff size={16} stroke={1.5} />}
                disabled
            />
            <NavLink
                href="#required-for-focus"
                label="With description"
                description="Additional information"
                leftSection={
                    <Badge size="xs" color="red" circle>
                        3
                    </Badge>
                }
            />
            <NavLink
                href="#required-for-focus"
                label="Active subtle"
                leftSection={<BsActivity size={16} stroke={1.5} />}
                rightSection={
                    <CiCircleChevRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
                }
                variant="subtle"
                active
            />
            <NavLink
                href="#required-for-focus"
                label="Active light"
                leftSection={<BsActivity size={16} stroke={1.5} />}
                rightSection={
                    <CiCircleChevRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
                }
                active
            />
            <NavLink
                href="#required-for-focus"
                label="Active filled"
                leftSection={<CiCircleChevRight size={16} stroke={1.5} />}
                rightSection={
                    <CiCircleChevRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
                }
                variant="filled"
                active
            />

        </>
    );
}

export default Boxmantine;