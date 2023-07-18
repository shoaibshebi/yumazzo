import { useEffect, useRef } from "react";

export const useRenderOnce = (effect: () => void | (() => void)) => {
  const tempFun = useRef<void | (() => void)>();
  const effectCalled = useRef(false);
  const rndAfterCl = useRef(false);

  if (effectCalled.current) {
    rndAfterCl.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      tempFun.current = effect();
      effectCalled.current = true;
    }

    return () => {
      if (!rndAfterCl.current) {
        return;
      }
      if (tempFun.current) {
        tempFun.current();
      }
    };
  }, []);
};
