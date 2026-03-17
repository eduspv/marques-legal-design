import lawyer1 from "@/assets/team/lawyer-1.jpg";
import lawyer2 from "@/assets/team/lawyer-2.jpg";
import lawyer3 from "@/assets/team/lawyer-3.jpg";
import lawyer4 from "@/assets/team/lawyer-4.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ricardo-marques",
    name: "Dr. Ricardo Marques",
    role: "Sócio Fundador",
    image: lawyer1,
    bio: "Mais de 30 anos de experiência em Direito Empresarial e Tributário.",
  },
  {
    id: "fernanda-costa",
    name: "Dra. Fernanda Costa",
    role: "Sócia — Direito Empresarial",
    image: lawyer2,
    bio: "Especialista em governança corporativa e compliance.",
  },
  {
    id: "lucas-andrade",
    name: "Dr. Lucas Andrade",
    role: "Sócio — Direito Digital",
    image: lawyer3,
    bio: "Referência em proteção de dados e direito digital.",
  },
  {
    id: "marina-silva",
    name: "Dra. Marina Silva",
    role: "Sócia — Direito Imobiliário",
    image: lawyer4,
    bio: "Especialista em transações imobiliárias complexas.",
  },
];
