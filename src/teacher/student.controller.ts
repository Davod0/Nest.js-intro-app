import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

  @Get()
  getStudent() {
    return 'Get all students that belong to a teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'update student teacher';
  }
}
