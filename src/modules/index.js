import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Authentication } from "./auth";
import { authAction as authActionProps } from "./auth/authActions";

function AppComponents({ auth, authAction }) {
  const address = useSelector((state) => state.auth.address);
  const dispatch = useDispatch();

  // const address = dispatch((state)=> state.auth.address);
  // dispatch(authAction(name));
  const [state, setState] = useState("Hallo User Bootcamp");
  const [name, setName] = useState({ value: "" });
  const [data, setData] = useState("Data Children");

  

  console.log("DATA", address);
  return (
    <div>
      {auth?.authState}
      {address}
      <input onChange={(e) => setName({ ...name, value: e.target.value })} />
      <button onClick={() => authAction(name)}>Simpan</button>
      {/* {state}
      <Authentication  /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  authAction: (payload) => authActionProps(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponents);
