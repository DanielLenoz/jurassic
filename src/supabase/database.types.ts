export interface DataType {
  id: number;
  Name?: string; // Opcional porque "MovieJurassic" usa "title" en lugar de "Name"
  title?: string; // Opcional porque otras interfaces usan "Name"
  content: string;
  img: Img;
  height?: string; // Opcional porque solo "Dinosaurios" lo usa
  periodo?: string; // Opcional porque solo "Dinosaurios" lo usa
  weight?: string; // Opcional porque solo "Dinosaurios" lo usa
  diet?: string; // Opcional porque solo "Dinosaurios" lo usa
  skills?: string; // Opcional porque solo "Dinosaurios" lo usa
  description?: string; // Opcional porque solo "Dinosaurios" lo usa
}

export interface Img {
  full: string;
}
