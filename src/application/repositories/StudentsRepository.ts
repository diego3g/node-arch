import { Student } from "../../domain/entities/student";

export interface StudentsRepository {
  findById(id: string): Promise<Student | null>;
}