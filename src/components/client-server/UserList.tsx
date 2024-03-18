import { useEffect, useState } from "react";
import { UserDto } from "./UserDto";
import User from "./User";

import { LoadingOutlined } from '@ant-design/icons'
import { Alert, Button, Spin } from 'antd';
import { fetchUsers } from "./APIs";

export default function UserList() {
    const [list, setList] = useState<UserDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function myApiCall() {
        console.log('Inizio chiamta');
        setIsLoading(true);
        setList([]);
        setError(null);
        try {
            const users: UserDto[] = await fetchUsers();
            console.log(users);
            setList(users);
        } catch (e: any) {
            console.log(e.message);
            setError(e.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {    
        myApiCall();
        console.log('ciao');
    }, []);

    return <div>
        <h4>User List</h4>
        <Button type="primary" onClick={() => {
            myApiCall()
        }}>Refresh</Button>
        {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>}
        {error != null && <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
        />}
        {list.map((user, i) => <User user={user} key={i}/>)}
    </div>;
}