import Link from 'next/link';
import Image from 'next/image';
import { GithubUserType } from '@/types/user';


const Cards = ({user}: {user: GithubUserType}) => {

    return(
        <div
        className='p-3 bg-indigo-400 shadow-md shadow-gray-400 card'
        key={user.id}
        >
            <div className='flex flex-row'>
                <div className='pr-4'>
                    <div className='avatar'>
                        <div className='border-b rounded-full shadow-md shadow-gray-500'>
                            <Image width={55} height={55} src={user.avatar_url}  alt={'profile'} priority={true} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="pb-1 text-gray-100 card-title">{user.login}</h2>
                    <Link href={{
                        pathname: `/users/[slug]`,
                        query: {slug: user.id}
                        }} className='text-gray-900'>Visit profile</Link>
                </div>
            </div>
        </div>

    )
};

const UserResults = ({users}: {users: GithubUserType[]}) => {

    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-1 lg:grid-1 md:grid-cols-1'>
            {users.map((user: GithubUserType) => 
                <Cards key={user.id} user={user} />
            )}
        </div>
    );
};

export default UserResults;
