

const stateDefault = {
    danhSachGheDangDat :[
        // {soGhe:'A1',gia:'1000'}
    ]
}


export const danhSachGheDangDat = (state = stateDefault,action) => {
    console.log({action});
    console.log(action.type);
    switch(action.type){
        case 'DAT_GHE': {
            let {gheSPclick} = action.payload
            console.log({gheSPclick});
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            console.log({danhSachGheDangDatUpdate});
            console.log(action.payload.gheSPclick);
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === gheSPclick.soGhe)
            console.log({index});
            if(index === -1) {
                danhSachGheDangDatUpdate.push(action.payload.gheSPclick)
            }else{
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }
        case 'HUY_GHE' : {
            let {huyGheClick} = action;
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === huyGheClick.soGhe)
            if(index === -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }

        default: return state
    
        }
}