import React, { useEffect, useState } from 'react'
import ChatCard from '../../Components/chatCard'
import { getListUsers } from '../../Services/Users';

const ShowUsers = ({ onSelectUser }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(()=> {
    const syncUsers = async () => {
      const result = await getListUsers();
      if (result?.status === 'Success') {
        setAllUsers(result.body);
      }
    }

    syncUsers();
  }, []);

  return (
    <>
      {allUsers.map((user, index)=> (
        <ChatCard
          name={user.name}
          onClick={()=> onSelectUser(user)}
          key={index + user?.email}
        />
      ))}
    </>
  )
}

export default ShowUsers
