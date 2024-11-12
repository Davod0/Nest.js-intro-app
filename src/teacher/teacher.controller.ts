import { Controller, Get, Put, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeaherService } from './teaher.service';
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeaherService) {}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeacherS();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}
