"use client";

import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const costData = [
  { component: "Structural Architecture", cost: "15,354 Cr", vulnerability: "HIGH" },
  { component: "Energy Systems", cost: "15,300 Cr", vulnerability: "MEDIUM" },
  { component: "Maintenance & Buffer", cost: "13,689 Cr", vulnerability: "HIGH" },
  { component: "Deployment Infrastructure", cost: "7,686 Cr", vulnerability: "LOW" },
  { component: "Robotics & Environment", cost: "3,762 Cr", vulnerability: "HIGH" },
  { component: "Life Support (LSS)", cost: "3,384 Cr", vulnerability: "HIGH" },
  { component: "Planetary Protection", cost: "2,160 Cr", vulnerability: "LOW" },
  { component: "Space Agriculture", cost: "2,007 Cr", vulnerability: "LOW" },
  { component: "In-Situ Manufacturing", cost: "1,827 Cr", vulnerability: "MEDIUM" },
];

const vulnerabilityStyles: { [key: string]: string } = {
  HIGH: "bg-red-500/20 text-red-400 border-red-500/50",
  MEDIUM: "bg-amber-500/20 text-amber-400 border-amber-500/50",
  LOW: "bg-green-500/20 text-green-400 border-green-500/50",
};

export function CostView() {
  return (
    <div className="h-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-primary tracking-widest">
        SYSTEM COST vs. CRISIS VULNERABILITY
      </h1>
      <DashboardPanel className="flex-grow">
        <div className="h-full w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg">System Component</TableHead>
                <TableHead className="text-right text-lg">Cost (₹ Crores)</TableHead>
                <TableHead className="text-center text-lg">Vulnerability to Crisis</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costData.map((row) => (
                <TableRow key={row.component}>
                  <TableCell className="font-medium text-base text-foreground/90">{row.component}</TableCell>
                  <TableCell className="text-right font-mono text-base text-foreground/80">{row.cost}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant="outline"
                      className={cn("text-sm font-bold", vulnerabilityStyles[row.vulnerability])}
                    >
                      {row.vulnerability}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DashboardPanel>
    </div>
  );
}
