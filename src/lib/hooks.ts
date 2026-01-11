"use client";

import { useState, useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function useSimulatedNumber(baseValue: number, jitter: number, interval: number) {
  const [value, setValue] = useState(baseValue);

  useInterval(() => {
    setValue(baseValue + (Math.random() - 0.5) * jitter);
  }, interval);

  return value;
}

export function useSimulatedPowerData() {
    const [coreA, setCoreA] = useState(600);
    const [coreB, setCoreB] = useState(600);
    const [powerOutput, setPowerOutput] = useState(18.4);
    const [isCogenerationActive, setIsCogenerationActive] = useState(true);

    useInterval(() => {
        let newCoreA = coreA + (Math.random() - 0.5) * 5;
        let newCoreB = coreB + (Math.random() - 0.5) * 5;

        // Introduce a chance for a larger anomaly
        if (Math.random() < 0.05) {
            newCoreA += (Math.random() - 0.5) * 150;
        }
        if (Math.random() < 0.05) {
            newCoreB += (Math.random() - 0.5) * 150;
        }

        newCoreA = Math.max(500, Math.min(800, newCoreA));
        newCoreB = Math.max(500, Math.min(800, newCoreB));

        const avgTemp = (newCoreA + newCoreB) / 2;
        const tempFactor = 1 - (Math.abs(600 - avgTemp) / 400); // Penalty for being off-target
        
        let newPowerOutput = 18.4 * tempFactor + (Math.random() - 0.5) * 0.2;
        newPowerOutput = Math.max(15, Math.min(18.8, newPowerOutput));

        setCoreA(newCoreA);
        setCoreB(newCoreB);
        setPowerOutput(newPowerOutput);
        setIsCogenerationActive(newPowerOutput > 16.5 && tempFactor > 0.8);

    }, 2000);

    return { coreA, coreB, powerOutput, isCogenerationActive };
}
