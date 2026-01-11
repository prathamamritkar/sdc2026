# **App Name**: Oceanus Proxima Mission Control

## Core Features:

- Global Status Overview: Display mission time, depth, external pressure, and radiation shielding in a global header.
- Habitat Digital Twin: Visualize the Oceanus Proxima habitat with a central SVG diagram, showing key components like the sphere, ice crust, gravity centrifuge, and SMR reactor core.
- Twin-Core Thermodynamics: Monitor temperatures of Core A and Core B with vertical progress bars and display power output over time using a Recharts Area Chart.
- Aqua-Lung Biometrics: Track O2 saturation with a radial gauge, display biomass yield for aquaponics with status indicators, and monitor water loop flow rate.
- System Log: Show a scrolling terminal-style log window at the bottom for system status updates.
- Telemetry Anomaly Detection: An AI tool to monitor and predict anomalies across various telemetry streams using generative AI to interpret sensor data and suggest potential failures before they cascade, presenting human operators with interpretable scenarios in the system logs.
- Live Data Simulation: Simulate real-time data fluctuations using a useEffect hook to randomly adjust numerical data, creating a dynamic and responsive dashboard.

## Style Guidelines:

- Background: Near-black (#02040a) to evoke the deep ocean environment.
- Panels: Semi-transparent glass panels (bg-slate-900/50, backdrop-blur-md) to provide a layered HUD effect. The primary color scheme reflects a deep ocean aerospace theme.
- Primary Accent: Cyan/Electric Blue (#00f0ff) for nominal systems to give a crisp, futuristic feel, reminiscent of deep-sea exploration tech. The hue, saturation and brightness creates visual pop and immediacy over the near-black background, in line with the technical details presented.
- Secondary Accent: Amber (#f59e0b) for warnings to immediately draw attention to critical issues.
- Font: 'Space Mono' (monospace) for displaying raw engineering data, ensuring readability and technical accuracy.
- Grid-based layout for a dense, professional, and responsive interface, optimized for data presentation and usability. Utilizing CSS Grid allows for structured arrangement of the multiple dashboard components, as in next-gen control interfaces.
- Use 'Lucide React' icons with cyan accents for system indicators and controls, maintaining visual consistency with the primary color scheme. Streamlined, technical iconography should match aerospace display aesthetics.
- Use 'Framer Motion' for smooth transitions and data updates, enhancing the dynamic feel of the dashboard. Implement subtle animations, particularly for the habitat's glow and the rotating centrifuge.
- Borders: Thin (1px) technical borders (border-cyan-500/30) with corner accents (small brackets) to simulate a HUD. Add to the immersive effect and technical aesthetic by mirroring the interfaces found in advanced aerospace systems.