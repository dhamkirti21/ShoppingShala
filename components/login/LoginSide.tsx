import React from 'react'

const LoginSide = () => {
  return (
    <div className="flex flex-col gap-2 mt-8 p-12 rounded-2xl bg-slate-500">
        <form action="#" method="post">
            <label htmlFor="username">Mobile/Email</label>
            <input type="text" name="username" id="username" />
        </form>
    </div>
  )
}

export default LoginSide