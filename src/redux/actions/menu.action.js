import MenuConst from '../consts/menu.const';
import * as firebase from 'firebase';
import GlobalConst from '../consts/global.const';


const config = {
    apiKey: "AIzaSyBO0oNHKSTdWQwe---waYn3rG__S5JsBKk",
    authDomain: "cvcv-fe126.firebaseapp.com",
    databaseURL: "https://cvcv-fe126.firebaseio.com",
    projectId: "cvcv-fe126",
    storageBucket: "cvcv-fe126.appspot.com",
    messagingSenderId: "576547964299"
};

firebase.initializeApp(config);

function getDataFromFirebase(data){
    return {
        type: MenuConst.FIREBASE,
        data
    }
}

function loadingAction(){
    return {
        type: GlobalConst.LOADING
    }
}

function fetchData() {
    return (dispatch, getState) => {
        const rootRef = firebase.database().ref().child('data');
        const data = rootRef.child("menu");
        data.on('value', snap => {
            dispatch(getDataFromFirebase(snap.val()));
            dispatch(loadingAction(), window.localStorage.setItem("loading", false));
        })
    };
}

const MenuAction = {
    fetchData
}

export default MenuAction;

