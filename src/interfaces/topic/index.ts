import { ExerciseInterface } from 'interfaces/exercise';
import { QuizInterface } from 'interfaces/quiz';
import { UseCaseInterface } from 'interfaces/use-case';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface TopicInterface {
  id?: string;
  name: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;
  exercise?: ExerciseInterface[];
  quiz?: QuizInterface[];
  use_case?: UseCaseInterface[];
  course?: CourseInterface;
  _count?: {
    exercise?: number;
    quiz?: number;
    use_case?: number;
  };
}

export interface TopicGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  course_id?: string;
}
