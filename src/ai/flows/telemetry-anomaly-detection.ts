'use server';

/**
 * @fileOverview Telemetry Anomaly Detection AI agent.
 *
 * - detectTelemetryAnomalies - A function that handles the telemetry anomaly detection process.
 * - TelemetryDataInput - The input type for the detectTelemetryAnomalies function.
 * - TelemetryAnomalyOutput - The return type for the detectTelemetryAnomalies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TelemetryDataInputSchema = z.object({
  systemName: z.string().describe('The name of the system the telemetry data belongs to.'),
  telemetryData: z.string().describe('The telemetry data as a JSON string.'),
  historicalData: z.string().optional().describe('Historical telemetry data for comparison, as a JSON string.'),
});
export type TelemetryDataInput = z.infer<typeof TelemetryDataInputSchema>;

const TelemetryAnomalyOutputSchema = z.object({
  isAnomalyDetected: z.boolean().describe('Whether an anomaly has been detected in the telemetry data.'),
  anomalyExplanation: z.string().describe('An explanation of the detected anomaly, if any.'),
  suggestedActions: z.string().optional().describe('Suggested actions to address the anomaly.'),
});
export type TelemetryAnomalyOutput = z.infer<typeof TelemetryAnomalyOutputSchema>;

export async function detectTelemetryAnomalies(
  input: TelemetryDataInput
): Promise<TelemetryAnomalyOutput> {
  return telemetryAnomalyDetectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'telemetryAnomalyDetectionPrompt',
  input: {schema: TelemetryDataInputSchema},
  output: {schema: TelemetryAnomalyOutputSchema},
  prompt: `You are a mission control operator responsible for detecting anomalies in telemetry data.

  You will receive telemetry data from a specific system and must determine if there are any anomalies.

  Consider the historical data provided to help determine the baseline and expected range for the system.

  If an anomaly is detected, explain the anomaly and suggest actions to address it. Be concise, but thorough.

  System Name: {{{systemName}}}
  Telemetry Data: {{{telemetryData}}}
  Historical Data: {{{historicalData}}}
  \n
  Respond in JSON format:
  {
    "isAnomalyDetected": true/false,
    "anomalyExplanation": "Explanation of the anomaly",
    "suggestedActions": "Suggested actions to address the anomaly"
  }`,
});

const telemetryAnomalyDetectionFlow = ai.defineFlow(
  {
    name: 'telemetryAnomalyDetectionFlow',
    inputSchema: TelemetryDataInputSchema,
    outputSchema: TelemetryAnomalyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
