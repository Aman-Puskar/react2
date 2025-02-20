import React from "react"
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams();
        return (
            <div className="bg-amber-500 text-5xl">User: {userid} </div>
        )
}

export default User;