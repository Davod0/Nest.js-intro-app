import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    console.log(studentId);
    return `Get student by ID: ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `Create student with body: ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update student with ID of ${studentId} with data of: ${JSON.stringify(body)}`;
  }
}
