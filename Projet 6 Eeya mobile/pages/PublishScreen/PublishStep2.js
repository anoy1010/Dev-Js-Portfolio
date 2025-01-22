import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import publishStyles from "./style";
import { COLOR, PADDING } from "../../outils/const";
import ModalDateTimePicker from "react-native-modal-datetime-picker";
import { Counter } from "../SearchScreen/BookRide/counter";
import ButtonNext from "../../comps/buttonNext";

const PublishStep2 = () => {
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = () => {
    setPickerVisibility(true);
  };

  const hidePicker = () => {
    setPickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedTime(date);
    hidePicker();
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const navigation = useNavigation();

  const onNextPage = () => {
    navigation.navigate("PublishStep3");
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={publishStyles.titre}>Quand partez-vous ?</Text>
        <View style={styles.inputContain}>
          <TouchableOpacity onPress={showDatepicker} style={styles.dateButton}>
            <Text style={styles.dateText}>JJ/MM/AAAA</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View>
        <Text style={publishStyles.titre}>
          A quelle heure souhaitez-vous retrouver vos passagers ?
        </Text>
        <View style={styles.timer}>
          <TouchableOpacity onPress={showPicker} style={styles.touchable}>
            <Text style={publishStyles.titre}>{formatTime(selectedTime)}</Text>
          </TouchableOpacity>
          <ModalDateTimePicker
            isVisible={isPickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
          />
        </View>
      </View>
      <View>
      <Text style={publishStyles.titre}>Combien de passager pouvez-vous accepter ?</Text>
      <Counter />
      </View>
      <ButtonNext onPress={onNextPage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
    rowGap:24,
  },
  inputContain: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: COLOR.lessGrayColor,
  },
  dateButton: {
    width: "100%",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: COLOR.lessGrayColor,
  },
  dateText: {
    color: COLOR.lessGreenColor,
    fontFamily: "Poppins_600SemiBold",
  },
  timer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width:"100%",
    justifyContent:"center",
   
  },
  touchable: {
    backgroundColor: "white",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 25,
    alignItems:"center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:"100%",

  },
});

export default PublishStep2;
