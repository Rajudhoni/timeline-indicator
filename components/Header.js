import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <Text style={styles.headerTitle}>Back</Text>
                <Text style={styles.headerTitle}>Basic Timeline</Text>
                <Text>  </Text>
             </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        
        width: '100%',
        height: 90,
        paddingTop: 36, 
        backgroundColor: '#128C7E',

      

    },
    headerTitle: {
        color: '#fff',
        fontSize: 18
    }

})