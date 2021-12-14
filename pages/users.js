import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
    return (
        <MainContainer keywords={"Users, jsx, next"}>
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </MainContainer>
    )
}

export async function getStaticProps(context) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: { users }, // will be passed to the page component as props
    }
}

export default Users;