import { Module } from '@nestjs/common';
// import { StudentController } from '../student/student.controller';
// import { StudentTeacherController } from '../teacher/student.controller';
// import { TeacherController } from '../teacher/teacher.controller';
// import { StudentService } from 'src/student/student.service';
// import { TeacherService } from 'src/teacher/teaher.service';
import { TeacherModule } from 'src/teacher/teacher.module';
import { StudentModule } from 'src/student/student.module';
@Module({
  imports: [TeacherModule, StudentModule]
})
export class AppModule {}

