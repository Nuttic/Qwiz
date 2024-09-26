export type Topic = {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
}

export type TopicList = Topic[]

export type TopicResponse = {
    topics: TopicList
}