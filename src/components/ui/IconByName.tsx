import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Container,
  Cpu,
  Factory,
  FileText,
  GitCommitVertical,
  Globe2,
  GraduationCap,
  Layers,
  Leaf,
  PanelsTopLeft,
  Recycle,
  ShieldCheck,
  Trash2,
  Truck,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Factory,
  Cpu,
  ShieldCheck,
  Layers,
  Container,
  BadgeCheck,
  Zap,
  GraduationCap,
  PanelsTopLeft,
  Wind,
  GitCommitVertical,
  Globe2,
  Users,
  Leaf,
  Building2,
  FileText,
  Recycle,
  Trash2,
  CheckCircle2,
  ClipboardCheck,
  Truck,
  Cog: Factory,
  Settings2: Cpu,
}

interface IconByNameProps {
  name: string
  className?: string
  size?: number
}

export default function IconByName({ name, className, size = 24 }: IconByNameProps) {
  const Icon = iconMap[name] ?? Factory
  return <Icon className={className} size={size} aria-hidden="true" />
}

export { ArrowRight }
