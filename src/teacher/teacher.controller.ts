import { Controller, Get, Put, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string   
  ) {
    return `Get teacher with this ID: ${teacherId}`;
  }
}
