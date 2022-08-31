const stateDefault = {
  arrSinhVien: [
    {
      id: 1,
      name: "vu thanh dat",
      email: "vuthanhdat@gmail.com",
      phoneNumber: "0922973414",
    },
    {
      id: 2,
      name: "vu tien dien",
      email: "vutiendien@gmail.com",
      phoneNumber: "0922973424",
    },
  ],
  sinhVien: {
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
  },
  sinhVienEdit : {
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
  },
};

export const qlsvReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      let { id, value } = action;
      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }
    case "HANDLE_SUBMIT": {
      let { sinhVien } = action;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sinhVien);
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
   
    default:
      return state;
  }
};
