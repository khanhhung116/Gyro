import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['AC', 'DOW', 'MZFW', 'MTOW', 'MLDW'],
      tableData: [
        ['', '2', '3', '4', '5'], // vao day : 0
       
      ],
      text: '',
    }
  }

  render() {
    console.log('Started', this.state.tableData);
    return (
      <View>
        <View style={styles.titlecontainer}>
          <Text style={styles.titletext}> Test</Text>
        </View>

        <View style={styles.tablecontainer}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={this.state.tableHead} style={styles.tablehead} textStyle={styles.tabletext} />
            <Rows data={this.state.tableData} textStyle={styles.tabletext} />
          </Table>
        </View>

        <View style={styles.inputcontainer}>
          <Text style={styles.inputtext}> AC :</Text>
          <TextInput style={styles.inputinside}
            placeholder="nhập đi cờ hó"
           // value={this.state.text = this.state.tableData.AC}
            onChangeText={(text) => {
              let tempTextAC = text;
              this.setState({ text: tempTextAC });
            }
            }
          />

          <Text style={styles.inputtext}> DOW :</Text>
          <TextInput style={styles.inputinside}
            placeholder="nhập đi cờ hó"
           // value={this.state.text = this.state.tableData.AC}
            onChangeText={(text) => {
              let tempTextDOW = text;
              this.setState({ text: tempTextDOW });
            }
            }
          />

          <Text style={styles.inputtext}> MZFW :</Text>
          <TextInput style={styles.inputinside}
            placeholder="nhập đi cờ hó Hu7ng"
           // value={this.state.text = this.state.tableData.AC}
            onChangeText={(text) => {
              let tempTextMZFW = text;
              this.setState({ text: tempTextMZFW });
            }
            }
          />

          <Text style={styles.inputtext}> MTOW :</Text>
          <TextInput style={styles.inputinside}
            placeholder="nhập đi cờ hó"
           // value={this.state.text = this.state.tableData.AC}
            onChangeText={(text) => {
              let tempTextMTOW = text;
              this.setState({ text: tempTextMTOW });
            }
            }
          />

          <Text style={styles.inputtext}> MLDW :</Text>
          <TextInput style={styles.inputinside}
            placeholder="nhập đi cờ hó"
           // value={this.state.text = this.state.tableData.AC}
            onChangeText={(text) => {
              let tempTextMLDW = text;
              this.setState({ text: tempTextMLDW });
            }
            }
          />

        </View>

        <View style={styles.buttonDirection}>
          <TouchableOpacity style={styles.buttonContainer}
          onPress = {() => {
            console.log("Text Need Change", this.state.text);
            let ACText = this.state.text.tempTextAC;
            let DOWText = this.state.text.tempTextDOW;
            let MZFWText = this.state.text.tempTextMZFW;
            let MTOWText = this.state.text.tempTextMTOW;
            let MLDWText = this.state.text.tempTextMLDW;
            let tempData;
            tempData = this.state.tableData[0];
            tempData[0] = ACText;
            tempData[1] = DOWText;
            tempData[2] = MZFWText;
            tempData[3] = MTOWText;
            tempData[4] = MLDWText;

            // for (let i=0; i<this.state.tableData.length; i++) {
            //   tempData = this.state.tableData[i];
            //   tempData[0] = acText;
            // }
            let outsideTableData = this.state.tableData;
            // outsideTableData.push(tempData);
            outsideTableData.concat(tempData);
            this.setState({ tableData: outsideTableData });
          
          }}
          >
            <Text style={styles.buttontext}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  titlecontainer: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },

  titletext: {
    margin: 10,
    fontSize: 30,
    color: 'white',
  },
  buttonDirection: {
    flexDirection: 'row',
  },

  buttonContainer: {
    padding: 20,
    width: 120,
    backgroundColor: 'red',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttontext: {
    fontSize: 20,
  },


  tablecontainer: { padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },

  inputcontainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  inputtext: {
    width: 80,
    height: 30,
    fontSize: 20
  },

  inputinside: {
    width: 220,
    height: 30,
    backgroundColor: '#EEEEEE',
  },
};