"use client"
import { log } from 'console';
import React from 'react';

const AdminDashboard = () => {
    const refreshTokenString = window.localStorage.getItem("refreshToken");
    console.log("Refresh token: ", refreshTokenString);


    let refreshToken;
                if (refreshTokenString !== null) {
                    refreshToken = refreshTokenString
                }
    
    return (
        <main>
            <h2 className='text-lg font-semibold p-5'>Dashboard</h2>
            <section>
                <h2>Refresh TokenString: {refreshTokenString}</h2>
                </section>
        </main>
    );
};

export default AdminDashboard;