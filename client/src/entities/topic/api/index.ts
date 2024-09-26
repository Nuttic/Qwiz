import { axiosInstance } from '@/shared/lib/axiosInstance';
import { Topic, TopicList, TopicResponse } from '../model';

export class TopicService {
  //* Получить все задачи
  static async getAllTopics(): Promise<TopicList> {
        try {
        const response = await axiosInstance.get('/topics');
        return response.data.topics
        } catch (error) {
        console.error('Error fetching all topics:', error);
        throw new Error('Failed to fetch topics.');
        }
    }   

    static async getTopic(id: number): Promise<TopicResponse> {
        try {
          const response = await axiosInstance.get(`/topics/${id}`);
          return response.data;
        } catch (error) {
          console.error('Error fetching topic:', error);
          throw new Error('Failed to fetch topic.');
        }
      
    }
}

