import React from 'react'

const Users = ({ user }) => {
    const { id, login, avatar_url, type } = user
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={avatar_url} alt={login} />
                </div>
                <div className="card-info">
                    <div className="card-id">{id}</div>
                    <div className="card-title">{login}</div>
                    <div className="card-text">{type}</div>
                </div>
            </div>
        </>
    )
}

export default Users
