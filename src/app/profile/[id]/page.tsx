"use client"
import { useParams } from "next/navigation";
import { profiles } from "../profiles";

function ProfileId() {
    const { id } = useParams<{ id: string }>();
    const profile = profiles.find((prof) => prof.id === id);
    return <>{profile ? <div>
        <p>Name: {profile?.name}</p>
        <p>Email: {profile?.email}</p>
    </div> : <p>Not found...</p>}</>;
}

export default ProfileId;