import Link from 'next/link';
import {profiles} from './profiles'

function Profile() {
    return ( <div className="profile">
        <h1>Profile List</h1>
        <ul>
        {profiles.map((profile) => (
            <li key={profile.id}>
                <Link href={`/profile/${profile.id}`}>
                    {profile.name}
                </Link>
            </li>
        ))}
        </ul>
    </div> );
}

export default Profile;