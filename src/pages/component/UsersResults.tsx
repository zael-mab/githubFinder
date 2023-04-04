import useGithubFetch from '../hooks/useGithubFetch';
import Link from 'next/link';
import Image from 'next/image';

interface GithubUser { 
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
};



const UserCard = ({users}: {users: GithubUser[]}) => {

    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-3 md:grid-cols-2'>
            {users.map((user: GithubUser) => 
                <div
                className='card shadow-md shadow-sec bg-indigo-500 p-4'
                key={user.id}
                >
                    <div className='flex flex-row'>
                        <div className='pr-4'>
                            <div className='avatar'>
                                <div className='rounded-full shadow shadow-gray-500 shadow-md w-14 h-14'>
                                    <Image width={55} height={55} src={user.avatar_url}  alt={'profile'} priority={true} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title text-gray-200 pb-1">{user.login}</h2>
                            <Link href={`/user/${user.id}`} className='text-gray-800'>Visit profile</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const UserResults = () => {

    const {data, error, isLoading}: {
        data: GithubUser[],
        error: Error,
        isLoading: boolean
    } = useGithubFetch(`${process.env.NEXT_PUBLIC_GITHUB_URL}/users`);
    
    console.log (data);

    if (error) {
        console.log('error', error);
        return <div className='btn btn-square loading'>Error fetching data</div>;
    }
    
    if (isLoading) {
        return <div className="btn btn-square loading"></div>;
    }

    return (
        <div>
            <UserCard users={data} />
        </div>
    );
}


export default UserResults;
