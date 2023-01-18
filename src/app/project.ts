export interface Project {
    id?: number,
    title: string,
    description: string,
    image: string;
    created_at?: string;
    uptade_at?: string;
    comments?: [{ text: string; username: string }];
}