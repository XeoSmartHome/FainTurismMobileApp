import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthenticated} from "../Store/Auth/selectors";
import {loadSession} from "../Store/Auth/actions";
import AuthNavigator from "./AuthNavigator";
import MainStackNavigator from "./MainStackNavigator";


const RootNavigator = () => {
  const authenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSession());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {
        authenticated === true ? <MainStackNavigator/> : <AuthNavigator/>
      }
    </NavigationContainer>
  );
};


export default RootNavigator;
