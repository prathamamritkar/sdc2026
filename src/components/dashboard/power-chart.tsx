"use client";

import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useInterval } from '@/lib/hooks';

const generateDataPoint = (lastValue: number) => {
  const time = new Date();
  const jitter = (Math.random() - 0.5) * 0.2;
  const value = Math.max(18.0, Math.min(18.8, lastValue + jitter));
  return { time: time.toLocaleTimeString(), mw: value };
};

export function PowerChart() {
  const [data, setData] = useState(() => {
    const initialData = [];
    let lastMw = 18.4;
    for (let i = 0; i < 30; i++) {
      const newDataPoint = generateDataPoint(lastMw);
      initialData.push(newDataPoint);
      lastMw = newDataPoint.mw;
    }
    return initialData;
  });

  useInterval(() => {
    setData(currentData => {
      const lastValue = currentData.length > 0 ? currentData[currentData.length - 1].mw : 18.4;
      const newDataPoint = generateDataPoint(lastValue);
      const newDataSet = [...currentData.slice(1), newDataPoint];
      return newDataSet;
    });
  }, 2000);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: -10,
          }}
        >
          <defs>
            <linearGradient id="colorMw" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.7}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="time" tick={{ fill: 'hsl(var(--foreground)/0.6)', fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis domain={[17.8, 19]} tick={{ fill: 'hsl(var(--foreground)/0.6)', fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: 'hsl(var(--background)/0.8)',
              borderColor: 'hsl(var(--border)/0.5)',
              backdropFilter: 'blur(4px)',
              fontSize: '12px',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            itemStyle={{ color: 'hsl(var(--primary))' }}
            formatter={(value: number) => [`${value.toFixed(2)} MW`, 'Power Output']}
          />
          <CartesianGrid stroke="hsl(var(--border)/0.1)" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="mw" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#colorMw)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
