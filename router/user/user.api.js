import { Router } from "express";

const users = [
    {
        id: '1',
        username: 'hmduc'
    },
    {
        id: '2',
        username: 'hak'
    },
    {
        id: '3',
        username: 'vna'
    },
    {
        id: '4',
        username: 'ntg'
    }
]
export function UserAPI() {
    const router = Router();

    router.get('/', async (req, res) => {
        res.json(users)
    })
    return router;
}