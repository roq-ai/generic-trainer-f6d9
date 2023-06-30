import { TopicInterface } from 'interfaces/topic';
import { GetQueryInterface } from 'interfaces';

export interface ExerciseInterface {
  id?: string;
  content: string;
  topic_id?: string;
  created_at?: any;
  updated_at?: any;

  topic?: TopicInterface;
  _count?: {};
}

export interface ExerciseGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  topic_id?: string;
}
