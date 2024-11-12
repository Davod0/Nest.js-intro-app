import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { StudentTeacherController } from '../teacher/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { StudentService } from 'src/student/student.service';
import { TeaherService } from 'src/teacher/teaher.service';
@Module({
  imports: [],
  controllers: [StudentController, StudentTeacherController, TeacherController],
  providers: [StudentService, TeaherService],
})
export class AppModule {}

