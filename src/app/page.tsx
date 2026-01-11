import { GlobalHeader } from '@/components/dashboard/global-header';
import { DigitalTwin } from '@/components/dashboard/digital-twin';
import { ThermodynamicsPanel } from '@/components/dashboard/thermodynamics-panel';
import { BiometricsPanel } from '@/components/dashboard/biometrics-panel';
import { SystemLog } from '@/components/dashboard/system-log';

export default function Home() {
  return (
    <div className="min-h-screen p-2 sm:p-4 flex flex-col gap-4 overflow-hidden">
      <GlobalHeader />
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-grow">
        <div className="lg:col-span-3 min-h-[50vh] lg:min-h-0">
          <ThermodynamicsPanel />
        </div>
        <div className="lg:col-span-6 min-h-[50vh] lg:min-h-0">
          <DigitalTwin />
        </div>
        <div className="lg:col-span-3 min-h-[50vh] lg:min-h-0">
          <BiometricsPanel />
        </div>
      </main>
      <div className="h-48 xl:h-56">
        <SystemLog />
      </div>
    </div>
  );
}
