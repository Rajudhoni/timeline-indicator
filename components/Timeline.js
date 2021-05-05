

import React from 'react'
import { StyleSheet, Text, View  } from 'react-native'

const TimelineIndicator = () => {
    return (
        <View style={{flex:1, padding: 30 }}>
            <View style={styles.indicatorContainer}>
                <Text style={styles.time}>09: 00</Text>
                <View style={styles.indicator}>
                <View style={styles.point}/>
                <View style={styles.line}/>
                </View>
                <View style={{paddingLeft: 15, paddingTop:15, height: 100, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', }}>Event1</Text>
                <Text style={{fontSize: 15, fontWeight: 'normal'}}>Event1 Desription</Text>
                <View
                    style={{
                        
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        width: 220
                    }}
                    />
                
                </View>

            </View>

            {/* timeline indicator  */}

            <View style={[styles.indicatorContainer, {marginTop: -2}]}>
                <Text style={styles.time}>10: 45</Text>
                <View style={styles.indicator}>
                <View style={styles.point}/>
                <View style={styles.line}/>
                </View>
                <View style={{paddingLeft: 15, paddingTop:15, height: 100, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', }}>Event 2</Text>
                <Text style={{fontSize: 15, fontWeight: 'normal'}}>Event 2 Desription</Text>
                <View
                    style={{
                        
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        width: 220
                    }}
                    />
                
                </View>

            </View>

            {/* timeline indicator */}



               {/* timeline indicator  */}

               <View style={[styles.indicatorContainer, {marginTop: -2}]}>
                <Text style={styles.time}>12: 00</Text>
                <View style={styles.indicator}>
                <View style={styles.point}/>
                <View style={styles.line}/>
                </View>
                <View style={{paddingLeft: 15, paddingTop:15, height: 100, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', }}>Event 3</Text>
                <Text style={{fontSize: 15, fontWeight: 'normal'}}>Event 3 Desription</Text>
                <View
                    style={{
                        
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        width: 220
                    }}
                    />
                
                </View>

            </View>

            {/* timeline indicator */}
               {/* timeline indicator  */}

               <View style={[styles.indicatorContainer, {marginTop: -2}]}>
                <Text style={styles.time}>14: 00</Text>
                <View style={styles.indicator}>
                <View style={styles.point}/>
                <View style={styles.line}/>
                </View>
                <View style={{paddingLeft: 15, paddingTop:15, height: 100, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', }}>Event 4</Text>
                <Text style={{fontSize: 15, fontWeight: 'normal'}}>Event 4 Desription</Text>
                <View
                    style={{
                        
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        width: 220
                    }}
                    />
                
                </View>

            </View>

            {/* timeline indicator */}
               {/* timeline indicator  */}

               <View style={[styles.indicatorContainer, {marginTop: -2}]}>
                <Text style={styles.time}>16: 30</Text>
                <View style={styles.indicator}>
                <View style={styles.point}/>
                <View style={[styles.line, {height: 0}]}/>
                </View>
                <View style={{paddingLeft: 15, paddingTop:15, height: 100, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', }}>Event 5</Text>
                <Text style={{fontSize: 15, fontWeight: 'normal'}}>Event 5 Desription</Text>
                <View
                    style={{
                        
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        width: 220
                    }}
                    />
                
                </View>

            </View>

            {/* timeline indicator */}




            
        </View>
    )
}

export default TimelineIndicator;

const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: 'row', 
        
        
    }, 
    time: {
        fontSize: 15,
        fontWeight: "700",
        marginRight: 5,
    }, 
    indicator: {
        alignItems: 'center'
    }, 
    point:{
        marginTop: 3,
        borderColor:'#2175fc',
        borderWidth: 6,
        borderRadius: 25,
        backgroundColor: '#2175fc',
        elevation:1,


    }, 
    line: {
        borderWidth: 1,
        borderStyle: 'solid',
        height: 100,
        borderColor:'#2175fc',
        backgroundColor:'#2175fc',
        width: 3,
        marginTop: -2,
    },

})

