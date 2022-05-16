import React from "react";
import { connect } from "react-redux";
import AuthData from "./authData";

function Authentication({ name, data, authState }) {
  return (
    <>
      <div>Hallo User : {authState} </div>
      <AuthData data={data} />
    </>
  );
}

const mapStateToProps = (state) => ({
  authState: state.auth.authState,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
