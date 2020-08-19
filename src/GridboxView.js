import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

class GridboxView extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   pickerData: ['Select', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   gridData: [],
    //   selectedValueFromPicker: 0,
    //   isButtonVisible: false,
    // };
  }

  // Function for Dropdown list
  dropDownCompnent() {
    return (
      <Picker
        selectedValue={this.state.selectedValueFromPicker}
        style={{height: 100, width: '100%'}}
        onValueChange={(itemValue, itemIndex) => {
          let gridData = [];
          for (let index = 1; index <= itemValue * itemValue; index++) {
            const gridValue = {
              key: index,
              value: `${index}`,
              isSelected: false,
              isMemorized: false,
            };
            gridData.push(gridValue);
          }

          this.setState({
            gridData,
            selectedValueFromPicker: itemValue,
            isButtonVisible: true,
          });
        }}>
        {this.pickerList(this.state.pickerData)}
      </Picker>
    );
  }

  // Function number list generator for picker
  pickerList = (pickerData) => {
    return pickerData.map((x, i) => {
      return <Picker.Item label={`${x}`} key={i} value={`${x}`} />;
    });
  };

  // Function to generate random Grid list
  gridComponent() {
    return (
      <FlatList
        data={this.state.gridData}
        renderItem={({item}) => this.gridItem(item)}
        keyExtractor={(index) => `${index}`}
        numColumns={this.state.selectedValueFromPicker}
        extraData={this.state.selectedValueFromPicker}
        key={this.state.selectedValueFromPicker}
      />
    );
  }

  // Function to render items in list
  gridItem = (objectItem) => {
    return (
      <TouchableOpacity
        key={objectItem.key}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1%',
          borderColor: 'red',
          borderWidth: 0.5,
          backgroundColor: objectItem.isMemorized
            ? 'grey'
            : objectItem.isSelected
            ? 'orange'
            : 'white',
        }}
        disabled={!objectItem.isSelected}
        onPress={() => {
          let {gridData} = this.state;
          gridData.map((item) => {
            if (item.value == objectItem.value) {
              item.isMemorized = true;
            }
          });
          this.setState({gridData, isButtonVisible: true});
        }}>
        <View>
          <Text style={{fontSize: 20}}>{objectItem.value}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Function to generate random number
  randomNumber = (max) => {
    let min = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalComputation = Math.floor(Math.random() * (max - min + 1)) + min;
    try {
      let {gridData} = this.state;
      gridData.map((item) => {
        if (item.value == finalComputation) {
          if (!item.isMemorized) {
            item.isSelected = true;
          } else {
            this.randomNumber(this.state.selectedValueFromPicker);
            return;
          }
        }
      });
      this.setState({gridData, isButtonVisible: false});
    } catch (error) {
      console.log(`${error}`);
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {/* {this.dropDownCompnent()}
        {this.gridComponent()}
        {this.state.isButtonVisible && (
          <Button
            title="Generate Random #"
            onPress={() =>
              this.randomNumber(
                this.state.selectedValueFromPicker *
                  this.state.selectedValueFromPicker,
              )
            }
          />
        )} */}
        <TextInput style={{height: 50, backgroundColor: 'red'}} />
      </View>
    );
  }
}

export default GridboxView;
