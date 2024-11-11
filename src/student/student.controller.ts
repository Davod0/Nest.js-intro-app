import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Student by ID';
  }

  @Post()
  createStudent() {
    return 'Create student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'update student by ID';
  }
}
