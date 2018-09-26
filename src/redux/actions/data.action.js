import DataConst from '../consts/data.const';
import firebase from 'firebase/app';
import 'firebase/database';

function getDataFromFirebase(data){
    return {
        type: DataConst.DATA,
        data
    }
}

function fetchData() {
    return (dispatch) => {
        const rootRef = firebase.database().ref().child('data');
        const data = rootRef.child("pages");
        data.on('value', snap => {
            dispatch(getDataFromFirebase(snap.val()));
        })
    };
}

const DataAction = {
    fetchData
}

export default DataAction;

