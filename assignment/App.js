
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cont2}>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 12 }}>Progress</Text>

        <View style={styles.row}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sleep Time</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#7B7EB6' }}>Sleep Quality</Text>
        </View>
        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>6 pm</Text>
        </View>

        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>9 pm</Text>
        </View>

        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>12 pm</Text>
        </View>


        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>3 am</Text>
        </View>

        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>6 am</Text>
        </View>

        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>9 am</Text>
        </View>

        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>12 pm</Text>
        </View>

        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>3 pm</Text>
        </View>

        <View style={styles.cont3}>
          <View style={styles.line} />
          <Text style={styles.text}>6 pm</Text>
        </View>

        <View style={styles.row2}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sun</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold',  }}>Mon</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold',  }}>Tue</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold',  }}>Wed</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold',  }}>Thu</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold',  }}>Fri</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold',  }}>Sat</Text>
       </View>

       <View style={styles.row3}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7B7EB6'}}>11 h</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7B7EB6' }}>8 h</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7B7EB6' }}>9 h</Text>
          
       </View>

  <View  style={styles.cont6}>  
  <View  style={styles.cont4}>
  <View style={styles.circle1} />
  <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Night Sleep</Text>
  </View>
  <View  style={styles.cont5}>
  <View style={styles.circle2} />
  <Text style={{ fontSize: 15, fontWeight: 'bold', }} > Naps</Text>
  </View>
  </View>
  <View style={[styles.bar]} >
    <Text style={[styles.bartext1]} >
      9 hr
    </Text>
  </View>

  <View style={[styles.bar1]} >
    <Text style={[styles.bartext1]} >
      9 hr
    </Text>
  </View>

  <View style={[styles.bar2]} >
    <Text style={[styles.bartext]} >
      3 hr
    </Text>
  </View>



  <View style={[styles.bar3]} />
    
  

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  cont2: {
    flex: 1,
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
    marginEnd: 30,
    marginStart: 30,
  },
  row2:{
    flexDirection:'row',
    marginEnd: 90,
    marginStart: 30,
    justifyContent: 'space-between',

  },

  row3:{
    flexDirection:'row',
    marginEnd: 260,
    marginStart: 30,
    justifyContent: 'space-between',
    color:'lightgray'

  },
  line: {
    height: 2,
    backgroundColor: 'lightgray',
    width: '85%',
  },
  cont3: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
    fontWeight:'bold'
  },
  circle1:{
    width:25,
    height:25,
    backgroundColor:'slateblue',
    borderRadius:100,

  },
  circle2:{
    width:25,
    height:25,
    backgroundColor:'#b6a9e5',
    borderRadius:100,

  },
  cont4: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginStart:20,
  },
  cont5: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginEnd:60,
  },

  cont6: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    
  },
 
 bar: {
  backgroundColor: 'slateblue',
  width: '13%',
  height: 160,
  marginLeft:20,
  position: 'absolute',
  top: 210,
  borderRadius:10,
  flexDirection: 'column', 
  justifyContent: 'center', 
},
bar1: {
  backgroundColor: 'slateblue',
  width: '13%',
  height: 160,
  marginLeft:110,
  position: 'absolute',
  top: 310,
  borderRadius:10,
  flexDirection: 'column', 
  justifyContent: 'center', 
},
bar2: {
  backgroundColor: '#b6a9e5',
  width: '12%',
  height: 60,
  marginLeft:20,
  position: 'absolute',
  top: 430,
  borderRadius:10,
  flexDirection: 'column', 
  justifyContent: 'center',
},

bar3: {
  backgroundColor: 'slateblue',
  width: '13%',
  height: 160,
  marginLeft:260,
  position: 'absolute',
  top: 310,
  borderRadius:10,
  flexDirection: 'column', 
  justifyContent: 'center', 
},


bartext: {
  color: 'white',
  textAlign: 'center', 
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 20,
},


bartext1: {
  color: 'white',
  textAlign: 'center', 
  flex: 1,
  paddingVertical: 70,
},


});

export default App;
