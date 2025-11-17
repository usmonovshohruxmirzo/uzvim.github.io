interface SidebarProps {
  selectedConcept: string;
  setSelectedConcept: (id: string) => void;
  completedLessons: Set<string>;
  favorites: Set<string>;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export type { SidebarProps };
