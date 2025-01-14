import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/next-server/server/router'
import React, { useEffect, useState } from 'react'

// needs to be replaced with real api call for data for final
enum Role {
    USER = 'User',
    EMPLOYER = "Employer",
    MENTOR = "Mentor",
    ADMIN = "Admin"
}
interface Profile {
    calendlyLink: string
}
interface iUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role,
    tasks: string[],
    profile: Profile
}


// fake user data
const users: iUser[] = [
    {
        id: 0,
        firstName: 'Rachael',
        lastName: 'Concessio',
        email: 'RachaelConcessio@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: Role.MENTOR,
        tasks: ['Finish coding assessment', 'Learn typescript', 'Learn next.js'],
        profile: {
            calendlyLink: "rachaellink"
        }
    },
    {
        id: 1,
        firstName: 'David',
        lastName: 'Concessio',
        email: 'DavidConcessio@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: Role.USER,
        tasks: ['Apply for jobs'],
        profile: {
            calendlyLink: "davidlink"
        }
    }
];

export default function ResumeProfile() {
    const router = useRouter();
    const [currentUser, setUser] = useState<iUser | null>(null);
    const { id } = router.query;
    useEffect(() => {
        let findCurrentUser = users.filter(user => user.id === Number(id));
        if (findCurrentUser.length > 0) {
            setUser(findCurrentUser[0])
        }
    }, [id, setUser])
    const { firstName, lastName, email, createdAt, updatedAt, role, tasks, profile } = currentUser || {};
    return (
        <div className="container page-margin-top">
                <h4>{firstName} {lastName}</h4>
          
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <p>Email <span>{email}</span></p>
                    </li>
                    <li className="list-group-item">
                        <p>Calendly Link: <span>{profile && profile.calendlyLink}</span></p>
                    </li>
                    <li className="list-group-item">
                        <p>role <span>{role}</span></p>
                    </li>
                </ul>
                <ul className="list-group mt-4">
                    <h4>Tasks</h4>
                    {tasks && tasks.map((task, index) => {
                        return (
                            <li className="list-group-item" key={index}>{task}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}