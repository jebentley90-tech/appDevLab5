import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from  'react-native';
import Footer from  './Footer';
import Header from './Header';

type PageLayoutProps = {
    title: string;
    children: ReactNode;
};

const PageLayout = ({ title, children }: PageLayoutProps) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header title={title} />
            <ScrollView contentContainerStyle={styles.content}>
                <View>{children}</View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

export default PageLayout;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#8ab1d8',
    },
    content: {
        padding: 16,
        flexGrow: 1,
    },
});