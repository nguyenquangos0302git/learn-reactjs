import { GenericAbortSignal } from 'axios'
import { Student, Students } from 'types/students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string, signal: AbortSignal | undefined) => {
  return http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    },
    signal
  })
}

export const addStudent = (student: Omit<Student, 'id'>) => {
  return http.post<Student>('/students', student)
}

export const getStudent = (id: number) => {
  return http.get<Student>(`/students/${id}`)
}

export const updateStudent = (id: number, student: Student) => {
  return http.put<Student>(`/students/${id}`, student)
}

export const deleteStudent = (id: number) => {
  return http.delete<{}>(`/students/${id}`)
}
