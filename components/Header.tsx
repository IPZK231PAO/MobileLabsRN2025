import {View,Image,Text, StyleSheet} from 'react-native'

export default function Header(){
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/images/university-colored.png')} />
            <Text style={styles.headerText}>First mobile App</Text>
      </View>
    )
}




const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        height:60,
        padding:10,
      },
      logo: {
        maxWidth:'35%',
        height:'100%'
      },
      headerText: {
        fontSize: 18,
        fontWeight: "bold",
      },
});