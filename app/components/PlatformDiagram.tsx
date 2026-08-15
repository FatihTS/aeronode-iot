import { Gauge, Cpu, Broadcast, WifiHigh, Monitor } from "@phosphor-icons/react/dist/ssr";
import FlowChain from "./FlowChain";

const STAGES = [
  { Icon: Gauge, label: "Sensör", sub: "RS-485 / SDI-12 / Analog" },
  { Icon: Cpu, label: "Kargu Node", sub: "Gömülü işlem + güç yönetimi" },
  { Icon: Broadcast, label: "LoRaWAN", sub: "868 MHz RF" },
  { Icon: WifiHigh, label: "Gateway", sub: "Saha alıcısı" },
  { Icon: Monitor, label: "Uygulama", sub: "Sunucu / arayüz" },
];

/** Sensor → Kargu Node → LoRaWAN → Gateway → Application. */
export default function PlatformDiagram() {
  return <FlowChain stages={STAGES} />;
}
