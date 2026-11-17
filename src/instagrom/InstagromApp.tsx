import { useOptimistic, useState, useTransition } from 'react';
import { toast } from 'sonner';

interface Comment {
    id: number;
    text: string;
    isPosting?: boolean;
}


export const InstagromApp = () => {
    // actual source of data
    const [comments, setComments] = useState<Comment[]>([
        { id: 1, text: '¡Great pic!' },
        { id: 2, text: 'Love it 🧡' },
    ]);

    // not the actual source of data, just simulates
    const [optimisticComments, addOptimisticComment] = useOptimistic(comments,
        (currentComments, newCommentText: string) => {
            return [
                ...currentComments,
                {
                    id: new Date().getTime(),
                    text: newCommentText,
                    isPosting: true,
                },
            ];
        }
    );

    const [isCommentPending, startCommentTransition] = useTransition();

    const handleAddComment = (formData: FormData) => {
        const msgText = formData.get('post-message') as string;

        addOptimisticComment(msgText);

        startCommentTransition(async () => {
            // faking an API call
            await new Promise(resolve => setTimeout(resolve, 3000));

            setComments(prev => [
                ...prev,
                {
                    id: new Date().getTime(),
                    text: msgText,
                    isPosting: false,
                },
            ]);

            toast('Comment posted successsfully');
        });
    };

    return (
        <div className="bg-slate-700 h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-gray-300 rounded-t-3xl p-4 w-[500px]">
                <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop"
                    alt="Instagrom"
                    className="object-cover rounded-xl mb-4"
                />
                <p className="text-black font-bold mb-4">
                    Learning React
                </p>
            </div>

            <ul className="flex flex-col items-start justify-center bg-gray-300 w-[500px] p-4">
                {optimisticComments.map((comment) => (
                    <li key={comment.id} className="flex items-center gap-2 mb-2">
                        <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-center">A</span>
                        </div>
                        <p className="text-black">{comment.text}</p>
                        {comment.isPosting && (
                            <span className="text-gray-500 text-sm">Sending... </span>
                        )}
                    </li>
                ))}
            </ul>

            <form
                action={handleAddComment}
                className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4"
            >
                <input
                    type="text"
                    name="post-message"
                    placeholder="Write a comment"
                    required
                    className="w-full p-2 rounded-md mb-2 text-black bg-white"
                />
                <button
                    type="submit"
                    disabled={isCommentPending}
                    className="bg-blue-500 text-white p-2 rounded-md w-full"
                >
                    Send
                </button>
            </form>
        </div>
    );
};