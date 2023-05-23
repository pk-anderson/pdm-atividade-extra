import { ScrollView } from "native-base";
import React from "react";
import { AvatarHeader } from "../../components/AvatarHeader";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Scroll } from "../../components/Scroll";

import { NavigationProps } from "../../types/navigation";

export const Home = ({ navigation }: NavigationProps) => {
    return (
        <>
            <ScrollView>
                <Header>
                    <AvatarHeader navigation={navigation} />
                </Header>
                <Scroll />
                <List />
            </ScrollView>
            <Footer page="home" navigation={navigation} />
        </>
    );
};
