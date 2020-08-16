import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';

import StackScreens from './StackScreens';
import TabsScreens from './TabsScreens';

export default function IndexScreens() {

    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return signed ? <TabsScreens /> : <StackScreens />;

}