import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentsResponseDto,
  StudentsResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentsResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentsResponseDto {
    console.log(studentId);
    return `Get student by ID: ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentsResponseDto {
    return `Create student with body: ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentsResponseDto {
    return `Update student with ID of ${studentId} with data of: ${JSON.stringify(body)}`;
  }
}
