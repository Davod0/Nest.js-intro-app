import { Controller, Get, Put,Param } from '@nestjs/common';
import { FindStudentsResponseDto, StudentsResponseDto } from '../student/dto/student.dto';
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

  @Get()
  getStudent(
    @Param('teacherId') teacherId: string
  ): FindStudentsResponseDto[] {
    return `Get all students that belong to a teacher with ID ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string
    @Param('studentId') studentId: string
  ):StudentsResponseDto {
    return `Update student with ID ${studentId} that belongs to a teacher with ID ${teacherId}`;
  }
}
