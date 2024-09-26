import { axiosInstance } from '@/shared/lib/axiosInstance';
import { QuestionResponse } from '../model';

export class QuestionService {

    static async getQuestion(topicId: number, id: number): Promise<QuestionResponse> {
        try {
          const response = await axiosInstance.get(`/topics/${topicId}/questions/${id}`);
          return response.data;
        } catch (error) {
          console.error('Error fetching question:', error);
          throw new Error('Failed to fetch question.');
        }
      
    }
}

