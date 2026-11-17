export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async (id: number): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
        id: id,
        name: 'Roboute Guilliman',
        location: 'Terra',
        role: 'Primarch of the Ultramarines',
    };
};
