import { useRef, useEffect } from "react";

export default function useLogger([state, dispatch]) {
  const actionRef = useRef();

  const newDispatchRef = useRef(action => {
    actionRef.current = action;
    dispatch(action);
  });

  useEffect(() => {
    const action = actionRef.current;

    if (action) {
      console.group("Dispatch");
      console.log("Action", action);
      console.log("State", state);
      console.groupEnd();
    }
  }, [state]);

  return [state, newDispatchRef.current];
}
