import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="w-full flex items-center justify-between px-6 pt-3 pb-1 text-slate-900 select-none text-xs font-semibold tracking-tight">
      {/* Time */}
      <div className="flex items-center space-x-1">
        <span className="font-bold text-[14px]">9:41</span>
      </div>

      {/* Dynamic island or sensor notch spacer */}
      <div className="w-20 h-4 bg-slate-900/10 rounded-full mx-auto hidden sm:block"></div>

      {/* Status Icons */}
      <div className="flex items-center space-x-2">
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <div className="flex items-center">
          <BatteryMedium className="w-4 h-4 fill-slate-900" />
        </div>
      </div>
    </div>
  );
}
