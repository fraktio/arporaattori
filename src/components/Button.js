import styled from "@emotion/styled";

export default styled.button({
  fontSize: "inherit",
  padding: "0.5em",
  borderRadius: "5px",

  ":disabled": {
    opacity: 0.5
  }
});
